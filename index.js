import express from "express"

const app = express()
const port = 3000;

app.get('/', (req,res)=>{
    res.send("welocme to  sampple app");
})

app.get('/api1', (req,res)=>{
    res.send("welocme to sample app api");
})

app.listen(port, () => {
    console.log(`Server is running on locahost 3000`);
  });
  