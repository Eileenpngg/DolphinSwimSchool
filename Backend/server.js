const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const bcrypt = require("bcrypt");
//middleware
app.use(cors());
app.use(express.json());

//Routes
// ================================================================================================= REGISTER =====================================================================================================

app.post("/api/user/create", async (req, res) => {
  try {
    const { name, age, level, contact, is_instructor, email, password } =
      req.body;

    const user = await pool.query(
      `SELECT * from users WHERE email = '${email}'`
    );

    //Checks if user exist
    if (user.rows.length != 0) {
      return res.status(401).send("User already exist");
    }
    const saltRound = 12;
    const bcryptedPassword = await bcrypt.hash(password, saltRound);
    console.log(name, age, level, email, contact, is_instructor);
    const newUser = await pool.query(
      `INSERT INTO users(email, password) VALUES ('${email}', '${bcryptedPassword}');`
    );
    const user_id = await pool.query(
      `SELECT id FROM users WHERE email= '${email}';`
    );
    const id = user_id.rows[0].id;
    const newProfile = await pool.query(
      `INSERT INTO profiles(id, name, age, level, contact, is_instructor ) VALUES (${id}, '${name}', ${age}, '${level}', ${contact}, '${is_instructor}');`
    );
    res.json({ status: "ok", message: "profile is created" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// ===============================================================================================================================================================================================================
// ================================================================================================= LOGIN =====================================================================================================
app.post("/api/user/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await pool.query(
      `SELECT * from users WHERE email = '${email}'`
    );

    const response = {};
    //Checks if user exist
    if (user?.rows?.length === 0) {
      return res.status(401).json("Password or Email is Incorrect");
    }

    if (user?.rows?.length != 0) {
      const validPassword = await bcrypt.compare(
        password,
        user.rows[0].password
      );
      const userDetails = await pool.query(
        `SELECT * from profiles WHERE id = ${user.rows[0].id}`
      );
      const email = await pool.query(
        `SELECT * from users WHERE id = ${user.rows[0].id}`
      );
      response.id = userDetails.rows[0].id;
      response.name = userDetails.rows[0].name;
      response.email = email.rows[0].email;
      response.level = userDetails.rows[0].level;
      response.contact = userDetails.rows[0].contact;
      response.age = userDetails.rows[0].age;
      response.is_instructor = userDetails.rows[0].is_instructor;

      if (!validPassword) {
        return res.status(401).json("Password or Email is incorrect");
      }
    }
    res.json(response);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Login Failed");
  }
});

// ================================================================================================= INSTRUCTORS =====================================================================================================

// //gets a instructor
// app.get("/api/instructor/:id", async (req, res) => {
//     try {
//       const profile = await pool.query(
//         `SELECT * from instructors WHERE id = ${id}`
        // );
//       res.json(profile.rows);
//     } catch (err) {
//       console.log(err.message);
//     }
//   });

//   //updates instructor
//   app.patch("/api/instructor/:id", (req, res) => {
//     try {
//       const profile = req.body;
//       Object.keys(profile).forEach(async (key) => {
//         results = await pool.query(
//           `UPDATE instructors SET ${key} = '${req.body[key]}';`
//         );
//       });
//       res.json({ status: "ok", message: "profile is updated" });
//     } catch (err) {
//       console.log(err.message);
//     }
//   });

//Creates classes
app.post("/api/classes/create", async (req, res) => {
  try {
    const { name, level, date, time } = req.body;
    console.log(date);

    const class_session_id = await pool.query(
      `SELECT id FROM class_session WHERE date= '${date}' AND session_id= ${time};`
    );
    console.log(class_session_id.rows);

    if (class_session_id?.rows?.length === 0) {
      const newClassSess = await pool.query(
        `INSERT INTO class_session (date, session_id)VALUES('${date}', ${time});`
      );
      const newClassSessid = await pool.query(
        `SELECT id FROM class_session WHERE date= '${date}' AND session_id= ${time};`
      );
      console.log(newClassSessid.rows[0].id);
      const newClass = await pool.query(
        `INSERT INTO classes(class_session_id, instructor_name, level) VALUES(${newClassSessid.rows[0].id}, '${name}', '${level}');`
      );
    }
    if (class_session_id?.rows?.length !== 0) {
      const newClass = await pool.query(
        `INSERT INTO classes(class_session_id, instructor_name, level) VALUES(${class_session_id.rows[0].id}, '${name}', '${level}');`
      );
    }
    res.json({ status: "ok", message: "class is created" });
  } catch (err) {
    console.log(err.message);
    res.status(500);
  }
});

//gets all sessions
app.get("/api/sessions/get", async (req, res) => {
  try {
    const sessions = await pool.query("SELECT * from sessions");
    res.json(sessions.rows);
  } catch (err) {
    console.log(err.message);
    res.status(500);
  }
});

// ===============================================================================================================================================================================================================

// ================================================================================================= STUDENTS =====================================================================================================

// //gets all students
// app.get("/api/students/getall", async (req, res) => {
//   try {
//     const profile = await pool.query("SELECT * from students");
//     res.json(profile.rows);
//   } catch (err) {
//     console.log(err.message);
//   }
// });

// //gets a student
// app.get("/api/student/:id", async (req, res) => {
//   try {
//     const profile = await pool.query("SELECT * from students WHERE id = $1", [
//       req.params.id,
//     ]);
//     res.json(profile.rows);
//   } catch (err) {
//     console.log(err.message);
//   }
// });

// //update a student
// app.patch("/api/student/:id", (req, res) => {
//   try {
//     const profile = req.body;
//     Object.keys(profile).forEach(async (key) => {
//       results = await pool.query(
//         `UPDATE students SET ${key} = '${req.body[key]}';`
//       );
//     });
//     res.json({ status: "ok", message: "profile is updated" });
//   } catch (err) {
//     console.log(err.message);
//   }
// });

// get classes available with student level
app.put("/api/classes/get", async (req, res) => {
  try {
    const { level, date } = req.body;
    const classDetails = await pool.query(`SELECT * FROM classes
        JOIN class_session 
        ON class_session.id = classes.class_session_id 
            JOIN sessions ON sessions.id=class_session.session_id
            WHERE level = '${level}' AND date = '${date}';`);
    res.json(classDetails.rows);
  } catch (err) {
    console.log(err.message);
    res.status(500);
  }
});

//get instructos
app.put("/api/instructors/get", async (req, res) => {
  try {
    const { level, date, time } = req.body;
    console.log(level);
    const classDetails = await pool.query(`SELECT * FROM classes
          JOIN class_session 
          ON class_session.id = classes.class_session_id 
              JOIN sessions ON sessions.id=class_session.session_id
              WHERE level = '${level}' AND date = '${date}' AND session_id=${time};`);
    res.json(classDetails.rows);
  } catch (err) {
    console.log(err.message);
    res.status(500);
  }
});

// book class
app.post("/api/class/book", async (req, res) => {
    try {
      const {user_id, level, date, time} = req.body;
      const class_id= await pool.query(`SELECT classes.id FROM classes JOIN class_session 
      ON class_session.id = classes.class_session_id 
          LEFT OUTER JOIN sessions ON sessions.id=class_session.session_id
          WHERE level = '${level}' AND date = '${date}' AND session_id=${time};`);

      const classDetails = await pool.query(`INSERT into class_user(class_id, user_id) VALUES(${class_id.rows[0].id}, ${user_id})`);
      res.json(classDetails);
    } catch (err) {
      console.log(err.message);
      res.status(500);
    }
  })
// ====================================================================================================================================================================================================================

// ================================================================================================= EVENTS =====================================================================================================
// create an event
app.post("/api/event/create", async (req, res) => {
  try {
    const {image, description, start_date, end_date, start_time, end_time} = req.body;
    console.log(req.body)
    const newEvent = await pool.query(
      `INSERT INTO events(image, description, start_date, end_date, start_time, end_time) VALUES ('${image}', '${description}', '${start_date}', '${end_date}', '${start_time}', '${end_time}');`
    );
    res.json({ status: "ok", message: "event is created" });
  } catch (err) {
    console.log(err.message);
    res.status(500);
  }
});

// //gets all events
// app.get("/api/events/get", async (req, res) => {
//   try {
//     const events = await pool.query("SELECT * from events");
//     res.json(events.rows);
//   } catch (err) {
//     console.log(err.message);
//   }
// });

// //update a event
// app.patch("/api/events/:id", async (req, res) => {
//   try {
//     const event = req.body;
//     const updatedEvent = await pool.query(
//       "UPDATE events SET image= $1, title= $2, description= $3 WHERE id = $4",
//       [event.image, event.title, event.description, req.params.id]
//     );
//     res.json({ status: "ok", message: "profile is updated" });
//   } catch (err) {
//     console.log(err.message);
//   }
// });

// app.delete("/api/event/delete/:id", async (req, res) => {
//   try {
//     const events = await pool.query(
//       `DELETE from events WHERE id= ${req.params.id}`
//     );
//     res.json({ status: "ok", message: "event deleted" });
//   } catch (err) {
//     console.log(err.message);
//   }
// });
// ====================================================================================================================================================================================================================

// req.body = {
//     name: 'john',
//     age: 12,
//     level: 2
// }

// Object.keys(req.body).forEach((key) => {
//     let query = `UPDATE students SET $1 = $2`
//     let results = pool.query(query, [key, req.body[key]])
// })

app.listen(5001, () => {
  console.log("swim app is running!!");
});
