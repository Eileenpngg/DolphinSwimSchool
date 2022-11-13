const express = require('express')
const app= express()
const cors= require('cors')
const pool = require ('./db')
const bcrypt= require('bcrypt')
//middleware
app.use(cors());
app.use(express.json())

//Routes 
// ================================================================================================= REGISTER =====================================================================================================

app.post('/api/user/create', async (req, res) => {
    try{
        const {name,  age, level, contact, is_instructor, email, password} = req.body
        
        const user= await pool.query(`SELECT * from users WHERE email = '${email}'`); 

        //Checks if user exist
        if (user.rows.length!=0){
            return res.status(401).send('User already exist')
        }
        const saltRound = 12;
        const bcryptedPassword= await bcrypt.hash(password, saltRound);
        console.log(name, age, level, email, contact, is_instructor)
        const newUser= await pool.query(`INSERT INTO users(email, password) VALUES ('${email}', '${bcryptedPassword}');`)
        const user_id= await pool.query(`SELECT id FROM users WHERE email= '${email}';`)
        const id=user_id.rows[0].id
        const newProfile= await pool.query(`INSERT INTO profiles(id, name, age, level, contact, is_instructor ) VALUES (${id}, '${name}', ${age}, '${level}', ${contact}, '${is_instructor}');`)
        res.json({status: 'ok', message: 'profile is created'})

} catch (err){
    console.error(err.message)
    res.status(500).send('Server Error')
}
})

// ===============================================================================================================================================================================================================
// ================================================================================================= LOGIN =====================================================================================================
app.post('/api/user/login', async (req, res) => {
    try{
        const {email, password} = req.body
        const user= await pool.query(`SELECT * from users WHERE email = '${email}'`);     

        // const response={}
        //Checks if user exist
        if (user.rows.length===0){
            return res.status(401).json('Password or Email is Incorrect')
        }

        if (user.rows.length!=0){
            const validPassword= await bcrypt.compare(password, user.rows[0].password)
            const userDetails= await pool.query(`SELECT * from profiles WHERE id = ${user.rows[0].id}`)
            response.name= userDetails.rows[0].name
            response.email= userDetails.rows[0].email
            response.level= userDetails.rows[0].level
            response.contact= userDetails.rows[0].contact
            response.age= userDetails.rows[0].age

            if (!validPassword){
                return res.status(401).json('Password or Email is incorrect')
            }
        }
            res.json('login is successful');
} catch (err){
    console.error(err.message)
    res.status(500).send('Login Failed')
}})
// ===============================================================================================================================================================================================================

// ================================================================================================= STUDENTS =====================================================================================================


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

app.delete("/api/event/delete/:id", async(req, res)=>{
    try{
        const events = await pool.query(`DELETE from events WHERE id= ${req.params.id}`)
        res.json({status: 'ok', message: 'event deleted'})
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


