import React, { useState } from 'react';
import axios from 'axios';

const lg = console.log;


const BoardList = (props) => {

    let [isShow, setIsShow] = useState(false);



    lg('BoardList');
    return (
        <>
            <h3>BoardList.</h3>
            <button onClick={() => {
                setIsShow(!isShow);
            }}>보이기</button>
            {
                isShow === true ? <div>보여주는칸</div> : null
            }
        </>
    );
}

export default BoardList;