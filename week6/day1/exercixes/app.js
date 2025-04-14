import express from 'express'
import router from './routes/index.js';
const app=express()
const port =3000
app.use('/', router);
app.get('/',(req,res) =>{
    res.send('heelllo in home page user ')
})
app.get('/about',(req,res) =>{
    res.send('about us')
})
app.get('/data', (req, res) => {
    res.json({ message: 'Voici quelques données', status: 'succès' });
  });
  

app.listen(port,() =>{
    console.log(`server display in port ${port}`);
    
})