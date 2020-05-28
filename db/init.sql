DROP TABLE IF EXISTS users;
CREATE TABLE users(
   id INT AUTO_INCREMENT  PRIMARY KEY NOT NULL,
   first_name VARCHAR(100),
   last_name VARCHAR(100),
   email VARCHAR(50),
   password VARCHAR(50),
   location VARCHAR(100),
   created_at DATETIME,
   update_at DATETIME,
   deleted_at DATETIME
);

DROP TABLE IF EXISTS accounts;
CREATE TABLE accounts (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    user_id INT,
    role VARCHAR(50) NOT NULL, 
    created_at DATETIME,
    update_at DATETIME,
    deleted_at DATETIME, 
    FOREIGN KEY (user_id) REFERENCES users(id)
);

DROP TABLE IF EXISTS roles;
CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name INT NOT NULL,
    type  VARCHAR(100) NOT NULL, 
    extra VARCHAR(100) ,
    created_at DATETIME,
    update_at DATETIME,
    deleted_at DATETIME
);

DROP TABLE IF EXISTS companies;
CREATE TABLE companies (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    owner_id INT,
    name VARCHAR(50), 
    address VARCHAR(100),
    created_at DATETIME,
    update_at DATETIME,
    deleted_at DATETIME, 
    FOREIGN KEY (owner_id) REFERENCES accounts(id)
);

-- INSERT INTO users (first_name, last_name, email, password, location,   created_at) values ('John', 'Doe', 'test@email.com', '123456','Philippines',  now());
-- INSERT INTO accounts (userI, last_name, email, password, location,   created_at) values ('John', 'Doe', 'test@email.com', '123456','Philippines',  now());
