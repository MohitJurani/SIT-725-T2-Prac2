var express = require("express")
var app = express();
var port = process.env.port || 3000;

app.use(express.static('public'));  
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const addition = (num1, num2) =>{
    var no1 = parseInt(num1);
    var no2 = parseInt(num2);
    var ans = no1 + no2
    return ans;
}

app.post('/add', function (req, res) {  
    let html = `<h1>The sum of the two numbers is ${ addition(req.body.num1 , req.body.num2) }</h1>`;
    res.send(html);
});
app.listen(port,  () => console.log(" app listening at" + port));