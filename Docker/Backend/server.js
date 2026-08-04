import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.status(200).json({ message: "Sucess" });
});

app.get('/api/data',(req,res)=>{
    const data={
        id:1,
        name:'simple data',
        description:"this is a simple dat response from the API"
    };
    res.status(200).json(data);
})

app.get('/health', (req, res) => {
    res.status(200).json({ message: "The Server is Running Well" });
});


app.listen(PORT, () => {
    console.log(`Server is runnin in the http://localhost:${PORT}`);
})

