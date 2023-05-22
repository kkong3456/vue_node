const database=require('./database');

const express=require('express')
const app=express()
const port=3000

const bodyParser=require('body-parser')

app.use(bodyParser.json())


app.get('/api/memos',async (req,res)=>{
    result=await database.run("select * from memos");
    res.send(result)
})

app.post('/api/memos',async (req,res)=>{
    await database.run(`insert into memos (content) values (?)`,[req.body.content]);
    const result=await database.run('select * from memos');
    //memos.push(req.body.content);
    res.send(result);
})

app.put('/api/memos/:id',async (req,res)=>{
    await database.run(`update memos set content=? where id=?`,[req.body.content,req.params.id]);
    const result=await database.run('select * from memos');
    // memos[req.params.id]=req.body.content;
    res.send(result);
})

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})