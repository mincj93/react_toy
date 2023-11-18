import { React, useState } from 'react';
import axios from 'axios';

const lg = console.log;




const BoardMain = (props) => {
    let [result, setResult] = useState('');

    lg('BoardMain');

    axios.get('http://localhost:3030/test1')
        .then((resultData) => {
            lg('axios 통신 ', resultData.data);
            setResult(JSON.stringify(resultData.data));
            // result = resultData.data;
        })
        .catch((err) => {
            lg('통신 실패', err);
            setResult('Fail');
        })
    return (
        <>
            <h3>BoardMain 메인.</h3>
            <h3>result = {result}</h3>
        </>
    );
}

export default BoardMain;