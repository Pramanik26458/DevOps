import express from 'express'
import morgan from 'morgan'


const app = express();
app.use(morgan('dev'));
app.use(express.static('public'));


app.get("/api/health", (req, res) => {
    res.status(200).json({
        status:
            "OK"
    });
})

app.get("/api/hello", (req, res) => {
    res.status(200).json({
        status:
            "hello from server"
    });
})

app.get("/api/user", (req, res) => {

    const user=[
        {id:1,name:"ram"},
        {id:2,name:"shyam"},
        {id:3,name:"mohan"},
    ]
    res.status(200).json(user);
})


app.get('*name', (req, res) => {
    res.sendFile('public/index.html', { root: '__dirname' });
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})