CREATE TABLE users(
  nome VARCHAR(50),
  email VARCHAR(100),
  idade INT 
)

INSERT INTO users VALUES(
  "Matheus",
  "guirramatheus1@gmail.com",
  18
)

INSERT INTO users(nome, email, idade) VALUES(
  "Arthur",
  "guirraarthur2@gmail.com",
  12
)

SELECT nome, email, idade FROM users

SELECT email FROM users WHERE nome = "Matheus"

SELECT * FROM users

DELETE FROM users WHERE nome = "Matheus"

UPDATE users SET nome = "Matheus" WHERE nome = "Arthur"