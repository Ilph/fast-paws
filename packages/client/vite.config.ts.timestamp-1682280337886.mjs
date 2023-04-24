// vite.config.ts
import { defineConfig } from "file:///C:/Users/v.yakovleva/yandex/fastPaws/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/v.yakovleva/yandex/fastPaws/node_modules/@vitejs/plugin-react/dist/index.mjs";
import dotenv from "file:///C:/Users/v.yakovleva/yandex/fastPaws/node_modules/dotenv/lib/main.js";
import macrosPlugin from "file:///C:/Users/v.yakovleva/yandex/fastPaws/node_modules/vite-plugin-babel-macros/dist/plugin.js";
dotenv.config();
var vite_config_default = defineConfig({
  server: {
    port: Number(process.env.CLIENT_PORT) || 3e3
  },
  define: {
    __SERVER_PORT__: process.env.SERVER_PORT
  },
  plugins: [react(), macrosPlugin()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx2Lnlha292bGV2YVxcXFx5YW5kZXhcXFxcZmFzdFBhd3NcXFxccGFja2FnZXNcXFxcY2xpZW50XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx2Lnlha292bGV2YVxcXFx5YW5kZXhcXFxcZmFzdFBhd3NcXFxccGFja2FnZXNcXFxcY2xpZW50XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy92Lnlha292bGV2YS95YW5kZXgvZmFzdFBhd3MvcGFja2FnZXMvY2xpZW50L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52J1xuaW1wb3J0IG1hY3Jvc1BsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1iYWJlbC1tYWNyb3MnXG5cbmRvdGVudi5jb25maWcoKVxuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogTnVtYmVyKHByb2Nlc3MuZW52LkNMSUVOVF9QT1JUKSB8fCAzMDAwLFxuICB9LFxuICBkZWZpbmU6IHtcbiAgICBfX1NFUlZFUl9QT1JUX186IHByb2Nlc3MuZW52LlNFUlZFUl9QT1JULFxuICB9LFxuICBwbHVnaW5zOiBbcmVhY3QoKSwgbWFjcm9zUGx1Z2luKCldLFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFYsU0FBUyxvQkFBb0I7QUFDelgsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGtCQUFrQjtBQUV6QixPQUFPLE9BQU87QUFHZCxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixRQUFRO0FBQUEsSUFDTixNQUFNLE9BQU8sUUFBUSxJQUFJLFdBQVcsS0FBSztBQUFBLEVBQzNDO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixpQkFBaUIsUUFBUSxJQUFJO0FBQUEsRUFDL0I7QUFBQSxFQUNBLFNBQVMsQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDO0FBQ25DLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
