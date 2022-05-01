import './App.css';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './component/Login/Login';
import NotFound from './component/NotFound/NotFound';
import InventoryManagement from './component/InventoryManagement/InventoryManagement';
import Footer from './component/Footer/Footer';
import Register from './component/Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/inventory/:id' element={<InventoryManagement></InventoryManagement>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
