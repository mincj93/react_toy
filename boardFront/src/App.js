import logo from './logo.svg';
import './App.css';
import BoardHeader from './components/BoardHeader';

import BoardMain from './components/BoardMain';
import BoardList from './components/BoardList';
import BoardContent from './components/BoardContent';
import NotFound from './components/NotFound';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


const lg = console.log;

function App() {
  return (
    <>
      <BoardHeader />
      <Routes>
        <Route path='/' element={<BoardMain />} />
        <Route path='/BoardMain' element={<BoardMain />} />
        <Route path='/BoardList' element={<BoardList />} />
      </Routes>
    </>
  );
}

export default App;
