DROP DATABASE if EXISTS PERSO;
CREATE DATABASE if NOT EXISTS PERSO;
USE PERSO;

DROP TABLE if EXISTS USERS;
CREATE TABLE USERS(
	IDUSER INT NOT NULL AUTO_INCREMENT,
	USERNAME VARCHAR(30),
	PASSUSER VARCHAR(30),
	KEYUSER INT,
	PRIMARY KEY(IDUSER)
);

INSERT INTO users (USERNAME,PASSUSER,KEYUSER)
VALUES
('BOB','1234bob',666),
('DAVID','1234david',333),
('MARIE','1234marie',555);




