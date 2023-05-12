import cors from 'cors'
import type { ViteDevServer } from 'vite'
import { createServer as createViteServer } from 'vite'
import express from 'express'
import * as fs from 'fs'
import * as path from 'path'
import { UserAPIRepository } from './src/repository/UserAPI'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import { proxy } from './src/middlewares/proxy'

dotenv.config()

const PORT = Number(process.env.SERVER_PORT) || 3001
const isDev = process.env.NODE_ENV === 'development'

async function startServer() {
  const app = express()
  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  )

  app.use('/api/v2', proxy)

  let vite: ViteDevServer | undefined
  const distPath = path.dirname(require.resolve('client/dist/index.html'))
  const ssrPath = path.dirname(require.resolve('client/index.html'))
  const ssrDistPath = require.resolve('client/dist-ssr/client.cjs')

  if (isDev) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      root: ssrPath,
      appType: 'custom',
    })
    app.use(vite.middlewares)
  } else {
    app.use('/assets', express.static(path.resolve(distPath, 'assets')))
  }

  app.use('*', cookieParser(), async (req, res, next) => {
    const url = req.originalUrl
    try {
      let template: string
      if (isDev) {
        template = fs.readFileSync(path.resolve(ssrPath, 'index.html'), 'utf-8')
        template = await vite!.transformIndexHtml(url, template)
      } else {
        template = fs.readFileSync(path.resolve(distPath, 'index.html'), 'utf-8')
      }

      let render: (url: string, repository: any) => Promise<string>
      if (isDev) {
        render = (await vite!.ssrLoadModule(path.resolve(ssrPath, 'ssr.tsx'))).render
      } else {
        render = (await import(ssrDistPath)).render
      }
      const [initialState, appHtml, css] = await render(url, new UserAPIRepository(req.headers['cookie']))

      const initStateSerialized = JSON.stringify(initialState)

      const html = template
        .replace('<!--store-data-->', initStateSerialized)
        .replace('<!--css-outlet-->', css)
        .replace('<!--ssr-outlet-->', appHtml)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (err) {
      if (isDev) vite!.ssrFixStacktrace(err as Error)
      next(err)
    }
  })

  app.listen(PORT, () => {
    console.log(`\x1b[33m  ➜ ✨ Server is listening on port: \x1b[96m${PORT}\x1b[0m`)
  })
}

startServer()
