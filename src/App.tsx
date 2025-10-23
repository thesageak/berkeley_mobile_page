import { Outlet } from "react-router-dom"
import Background from './Background'
import Footer from './Footer'


function App() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Background />

      <main className="flex flex-col flex-1 justify-center z-10">
        <Outlet />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}

export default App
