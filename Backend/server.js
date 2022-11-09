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
app.patch('/api/student/:id', (req, res)=>{
    try{
        const profile = req.body;
        Object.keys(profile).forEach(async(key)=>{
            results= await pool.query(`UPDATE students SET ${key} = '${req.body[key]}';`)
        })
        res.json({status: 'ok', message: 'profile is updated'})
    }
    catch(err){
        console.log(err.message)
    }})

// ====================================================================================================================================================================================================================

// ================================================================================================= EVENTS =====================================================================================================
//create an event
app.post("/api/events/create", async(req, res)=>{
    try{
        const event= req.body
        const newEvent = await pool.query('INSERT INTO events(image, title, description, start_date, end_date) VALUES ($1, $2, $3, $4, $5)', [event.image, event.title, event.description, event.start_date, event.end_date]);     
        res.json({status: 'ok', message: 'event is created'})
    }
    catch(err){
        console.log(err.message)
    }})

//gets all events
app.get("/api/events/get", async(req, res)=>{
    try{
        const events = await pool.query('SELECT * from events')
        res.json(events.rows)
    }
    catch(err){
        console.log(err.message)
    }})


//update a event
app.patch('/api/events/:id', async(req, res)=>{
    try{
        const event = req.body;
        const updatedEvent = await pool.query('UPDATE events SET image= $1, title= $2, description= $3 WHERE id = $4', [event.image, event.title, event.description, req.params.id])
        res.json({status: 'ok', message: 'profile is updated'})
    }
    catch(err){
        console.log(err.message)
    }})

// ====================================================================================================================================================================================================================


//Instructor
app.post("/api/instructor/create", async (req, res) => {
    try{
   const profile = req.body;
   const newProfile= await pool.query('INSERT INTO instructors(name, age, level, contact, position, email) VALUES ($1, $2, $3, $4, $5, $6)', [profile.name, profile.age, profile.level, profile.contact, profile.position, profile.email]);     
   res.json({status: 'ok', message: 'profile is created'})
    }
  catch(err){
    console.log(err.message)
  }});

//gets a instructor
app.get("/api/instructor/:id", async(req, res)=>{
    try{
        const profile = await pool.query('SELECT * from instructors WHERE id = $1', [req.params.id])
        res.json(profile.rows)
    }
    catch(err){
        console.log(err.message)
    }})

//updates instructor
app.patch('/api/instructor/:id', (req, res)=>{
    try{
        const profile = req.body;
        Object.keys(profile).forEach(async(key)=>{
            results= await pool.query(`UPDATE instructors SET ${key} = '${req.body[key]}';`)
        })
        res.json({status: 'ok', message: 'profile is updated'})
    }
    catch(err){
        console.log(err.message)
    }})
    






app.listen(5001,()=>{
    console.log('swim app is running!!')
})

// req.body = {
//     name: 'john',
//     age: 12,
//     level: 2
// }

// Object.keys(req.body).forEach((key) => {
//     let query = `UPDATE students SET $1 = $2`
//     let results = pool.query(query, [key, req.body[key]])
// })


