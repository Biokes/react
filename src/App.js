import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Hero from "./component/pages/home/hero";

function App() {
  return (
      <>
        <BrowserRouter>
            <Routes>
                <Route element={<Hero/>} path={"/login"}/>
            </Routes>
        </BrowserRouter>
      </>

  );
}

export default App;
