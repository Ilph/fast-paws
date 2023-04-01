import { useNavigate } from 'react-router-dom'
import authController from '../modules/authModule/authController'

const MainPage = () => {
  const navigate = useNavigate()

  const logout = () => {
    authController.logout(() => navigate('/'))
  }

  return (
    <div>
      Здесь будет главная страница. Сейчас здесь тестовая страница для проверки
      API.
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default MainPage
