/**
const express = require('express');
const path = require('path');
const router = express.Router();

const boardRouter = require('./routes/board');

const app = express();
const lg = console.log;

// app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 일반 express 서버로 ejs 줄 때 public 폴더에 있는애들 쓸때 필요한 구문
// app.use('/', express.static(path.join(__dirname, '/public'))); 

// 리액트 파일 전송시 필요한 구문
app.use(express.static(path.join(__dirname, 'ReactBoard/build')));



app.use('/board', boardRouter);

// app.set('view engine', 'ejs');

// app.get('/', (req,res) =>{
//     res.render(__dirname + "/public/main.html");
// });

// 일반 express EJS 경로
// app.get('/', (req, res) => {

//     lg(`실행1`);
//     res.render(__dirname + "/public/main.ejs");
// });

// router.get('/board', (req, res) => {

//     res.render('/', boardRouter);
// });
// 일반 express EJS 경로

lg('dirname', __dirname);

// 리액트 페이지 경로
app.get('/', (req, res) => {

    lg(`실행1`);
    res.sendFile(path.join(__dirname, 'ReactBoard/build/index.html'))
});

router.get('/board', (req, res) => {

    res.render('/', boardRouter);
});

app.get('*', (req, res) => {

    res.sendFile(path.join(__dirname, 'ReactBoard/build/index.html'))
});



app.listen(3030, () => {
    console.log('서버실행 3030 포트');
});
 */

const express = require('express');
const path = require('path');
const cors = require('cors');

const router = express.Router();

const boardRouter = require('./routes/board');

const app = express();
const lg = console.log;

// app.use(express.static('public'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, '/public')));
app.use('/board', boardRouter);

app.set('view engine', 'ejs');

// app.get('/', (req,res) =>{
//     res.render(__dirname + "/public/main.html");
// });

app.get('/', (req, res) => {

    lg(`실행1`);
    // res.render(__dirname + "/public/main.ejs");
    res.json({
        "test1": "value1",
        "test2": "value2",
    });
});

app.get('/test1', (req, res) => {

    lg(`실행1`);
    // res.render(__dirname + "/public/main.ejs");
    res.json({
        "test1": "value1",
        "test2": "value2",
    });
});

app.get('/test2', (req, res) => {

    lg(`실행2`);
    // res.render(__dirname + "/public/main.ejs");
    res.json({
        "test3": "value3",
        "test4": "value4",
    });
});

// router.get('/board', (req, res) => {

//     res.render('/', boardRouter);
// });

app.listen(3030, () => {
    console.log('서버실행 3030 포트');
});