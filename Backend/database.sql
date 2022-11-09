CREATE TABLE students(
    id SERIAL PRIMARY KEY, 
    name VARCHAR(20),
    age INT,
    level VARCHAR(2),
    contact VARCHAR(8),
    email VARCHAR(20)
);

CREATE TABLE instructors(
    id SERIAL PRIMARY KEY, 
    name VARCHAR(20),
    level VARCHAR(2)
);


CREATE TABLE sessions(
    id SERIAL PRIMARY KEY,
    start_time TIMESTAMP,
    end_time TIMESTAMP
);


CREATE TABLE events(
    id SERIAL PRIMARY KEY, 
    start_time TIMESTAMP,
    end_time TIMESTAMP,
    description text
);

CREATE TABLE classes(
    id SERIAL PRIMARY KEY,
    date TIMESTAMP,
    session_id INT,
    FOREIGN KEY(session_id) REFERENCES sessions(id)
);

CREATE TABLE class_student(
    class_id INT,
    student_id INT, 
    FOREIGN KEY(class_id) REFERENCES classes(id),
    FOREIGN KEY(student_id) REFERENCES students(id)
);

CREATE TABLE class_session(
    class_id INT,
    session_id INT, 
    FOREIGN KEY(class_id) REFERENCES classes(id),
    FOREIGN KEY(session_id) REFERENCES sessions(id)
);
