import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navber from './Component/Navber/Navber';
import ToDo from './Component/ToDo/ToDo';


function App() {
  return (
    <div className="">

      <Navber></Navber>
      <Routes>
        <Route path='todo' element={<ToDo />}></Route>
      </Routes>


    </div>
  );
}

export default App;
