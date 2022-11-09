const express = require('express')
const app= express()
const cors= require('cors')
const pool = require ('./db')

//middleware
app.use(cors());
app.use(express.json())

//Routes 

// ================================================================================================= STUDENTS =====================================================================================================
//creates student
app.post("/api/student/create", async (req, res) => {
    try{
   const profile = req.body;
   const newProfile= await pool.query('INSERT INTO students(name, age, level, contact, email) VALUES ($1, $2, $3, $4, $5)', [profile.name, profile.age, profile.level, profile.contact, profile.email]);     
   res.json({status: 'ok', message: 'profile is created'})
    }
  catch(err){
    console.log(err.message)
  }});

//gets all students
app.get("/api/students/getall", async(req, res)=>{
    try{
        const profile = await pool.query('SELECT * from students')
        res.json(profile.rows)
    }
    catch(err){
        console.log(err.message)
    }})

//gets a student
app.get("/api/student/:id", async(req, res)=>{
    try{
        const profile = await pool.query('SELECT * from students WHERE id = $1', [req.params.id])
        res.json(profile.rows)
    }
    catch(err){
        console.log(err.message)
    }})

//update a student 
app.patch('/api/student/:id', async(req, res)=>{
    try{
        const profile = req.body;
        const updatedprofile = await pool.query('UPDATE students SET name= $1, age= $2, level= $3, contact= $4, email= $5 WHERE id = $6', [profile.name, profile.age, profile.level, profile.contact, profile.email,req.params.id])
        res.json({status: 'ok', message: 'profile is updated'})
    }
    catch(err){
        console.log(err.message)
    }})
// ====================================================================================================================================================================================================================
app.listen(5001,()=>{
    console.log('swim app is running!!')
})

req.body = {
    name: 'john',
    age: 12,
    level: 2
}

Object.keys(req.body).forEach((key) => {
    let query = `UPDATE students SET $1 = $2`
    let results = pool.query(query, [key, req.body[key]])
})