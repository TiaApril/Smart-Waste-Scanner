import Instruction from "./pages/instructionpage/Instruction";
import Mainpage from "./pages/mainpage/Mainpage";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import WasteCategory from "./pages/wastecategory/WasteCategory";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element ={<Mainpage/>}></Route>
        <Route path="/instruction" element ={<Instruction/>}></Route>
        <Route path="/wastecategory" element ={<WasteCategory/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
