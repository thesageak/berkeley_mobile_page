import { Outlet } from "react-router-dom"
import Background from './Background'
import MainContent from './MainContent'
import Footer from './Footer'


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Background />

      <main className="flex flex-col flex-1 justify-center">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default App
