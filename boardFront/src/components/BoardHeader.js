import React from "react"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import BoardMain from './BoardMain';
import BoardList from './BoardList';
import BoardContent from './BoardContent';
import NotFound from './NotFound';


import axios from "axios";

//import "./css/main.css";
// import Pagination from "./Pagination";
// import UIheader from "./UIHeader.js";

const lg = console.log;


const BoardHeader = () => {

    return (
        <>
            <div>
                <h1>BoardHeader</h1>
            </div>
            <Link to='/BoardMain'><button>BoardMain</button></Link>
            <Link to='/BoardList'><button>BoardList</button></Link>
        </>
    );
}

export default BoardHeader;