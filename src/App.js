import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Hero from "./pages/home/hero";

function App() {
  return (
      <>
        <BrowserRouter>
            <Routes>
                    <Route element={<Hero/>} path={"/home"}/>
            </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
