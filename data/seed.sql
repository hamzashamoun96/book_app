DROP TABLE IF EXISTS book;
CREATE TABLE book (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  author TEXT,
  isbn VARCHAR(255),
  image_url VARCHAR(255),
  description TEXT
);

-- INSERT INTO tasks (title, contact, status, category, description) 
-- VALUES('feed Sherry','Razan','do immediately after getting home','pets','Sherry is hungry');