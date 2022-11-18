create DATABASE swim_app

CREATE TABLE users(
	id SERIAL PRIMARY KEY,
	email VARCHAR(30),
	password VARCHAR(100),
	is_admin BOOLEAN
);

CREATE TABLE profiles(
    id SERIAL PRIMARY KEY, 
    name VARCHAR(20),
    age INT,
    level VARCHAR(2),
    contact VARCHAR(8),
    is_instructor BOOLEAN
    );

CREATE TABLE sessions(
    id SERIAL PRIMARY KEY,
    start_time TIMESTAMP,
    end_time TIMESTAMP
	);

-- seed sessions --
INSERT INTO sessions(start_time, end_time) VALUES ('8:50', '9:40');

INSERT INTO sessions(start_time, end_time) VALUES ('10:00', '10:50');

INSERT INTO sessions(start_time, end_time) VALUES ('11:10', '12:00');

INSERT INTO sessions(start_time, end_time) VALUES ('14:50', '15:40');

INSERT INTO sessions(start_time, end_time) VALUES ('16:00', '16:50');

INSERT INTO sessions(start_time, end_time) VALUES ('17:10', '18:00');

CREATE TABLE events(
id SERIAL PRIMARY KEY,
image TEXT, 
start_time TIMESTAMP,
end_time TIMESTAMP,
description text
);user_id


CREATE TABLE event_user(
	id SERIAL PRIMARY KEY,
	event_id INT,
	user_id INT,
	FOREIGN KEY(event_id) REFERENCES events(id),
	FOREIGN KEY(user_id) REFERENCES users(id)
)


CREATE TABLE class_session(
    id SERIAL PRIMARY KEY,
    date TIMESTAMP,
    session_id INT,
    FOREIGN KEY(session_id) REFERENCES sessions(id)
)

CREATE TABLE classes(
	id SERIAL PRIMARY KEY,
	class_session_id INT,
	level VARCHAR(2),
	instructor_name VARCHAR(20),
	FOREIGN KEY(class_session_id) REFERENCES class_session(id)
)


CREATE TABLE class_user(
	id SERIAL PRIMARY KEY,
	class_id INT,
	user_id INT,
	FOREIGN KEY(user_id) REFERENCES
	users(id),
	FOREIGN KEY(class_id) REFERENCES
	classes(id)
)
