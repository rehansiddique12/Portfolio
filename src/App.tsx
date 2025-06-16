import { Route, Routes } from "react-router-dom";
import MianPage from "./pages/mianPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MianPage/>}></Route>
    </Routes>
  )
}

export default App