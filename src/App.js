import './App.css';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './component/Login/Login';
import NotFound from './component/NotFound/NotFound';
import InventoryManagement from './component/InventoryManagement/InventoryManagement';
import Footer from './component/Footer/Footer';
import Register from './component/Register/Register';
import RequireAuth from './component/RequireAuth/RequireAuth';
import ManageFullInventory from './component/ManageFullInventory/ManageFullInventory';
import AddFruit from './component/AddFruit/AddFruit';
import MyItem from './component/MyItem/MyItem';
import Blog from './component/Blog/Blog';
import About from './component/Header/About/About';

function App() {
  return (
    <div className="App ubuntu-font">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <InventoryManagement></InventoryManagement>
          </RequireAuth>
        }></Route>
        <Route path='/manageinventory' element={
          <RequireAuth>
            <ManageFullInventory></ManageFullInventory>
          </RequireAuth>
        }></Route>
        <Route path='/addfruit' element={
          <RequireAuth>
            <AddFruit></AddFruit>
          </RequireAuth>
        }></Route>
        <Route path='/myitem' element={
          <RequireAuth>
            <MyItem></MyItem>
          </RequireAuth>
        }></Route>
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
