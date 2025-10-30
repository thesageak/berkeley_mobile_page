import { Outlet } from "react-router";
import { Header, Background, Footer } from "../components";

function App() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <Background />
      <main className="flex flex-col flex-1 justify-center z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
