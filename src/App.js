 import Home from "./components/Home";
import Login from "./components/Login";
import PlanUpdate from "./components/PlanUpdate";
import ExportTable from './components/ExportTable';
import HsCode from "./components/HsCode";
import Adduser from "./components/Adduser";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
<BrowserRouter>
<Routes>
  <Route  exact path ="/" element={<Home/>} /> 
  <Route  exact path ='/login'  element={<Login/>} /> 
  <Route  exact path='/plan' element={<PlanUpdate/>}  />
  <Route exact path="/export"  element={<ExportTable/>} />
  <Route exact path = "/hs" element={<HsCode/>} /> 
  <Route exact path="/add"  element={<Adduser/>} />
</Routes>

</BrowserRouter> 
  );
}

export default App;
