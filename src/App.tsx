import { Outlet, Link } from 'react-router'
import Background from './Background'
import Footer from './Footer'


function App() {
  return (
    <div className="flex flex-col min-h-screen relative">
      
      <Link to="/" className="z-11">
        <img
          id="logo"
          src="/logo.svg"
          className="absolute top-[2vw] left-[1vw] w-[6vw] h-[6vw]"
        />
      </Link>

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
