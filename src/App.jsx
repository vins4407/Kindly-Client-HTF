import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'
import './styles/App.css'

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
