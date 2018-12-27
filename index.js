const express = require('express');

const app = express();
const REST_API_ROOT = '/api';



// app.get(REST_API_ROOT, (req, res) => {
//      res.send('hello ddsdsworld! tu');
// });

const server = app.listen(8080, ()=> {
    console.log('server test2 running at port '+ server.address().port);
});

/* Router configuration */
app.use(REST_API_ROOT, require('./api/routes/router'));
