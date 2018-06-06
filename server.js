const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, _ => {
    console.log('express server is running on port: ', PORT);
});

const user = {
    name: 'abby',
    pwd: 111
};
app.get('/api/error', (req, res) => {
    let status = 200,
        resObj = {
            msg: 'ok'
        };
    if (Math.random() * 10 > 5) {
        resObj.msg = 'something bad happen~';
        status = 500;
    }
    setTimeout(_ => {
        res.status(status).send(resObj).end();
    }, 2000);
});

app.post('/api/login', (req, res) => {
    const payload = req.body,
        resBody = {
            msg: 'your username or password is incorrect~',
            status: 0,
            user: null
        };
    if (payload.name === user.name && payload.pwd === user.pwd.toString()) {
        resBody.msg = 'login successfully~';
        resBody.status = 1;
        resBody.user = user;
    }
    res.json(resBody);
});