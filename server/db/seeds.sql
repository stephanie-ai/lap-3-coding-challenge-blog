DROP TABLE IF EXISTS postdb;

CREATE TABLE postdb (
    id serial PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    story VARCHAR(1000) NOT NULL
);

INSERT INTO postdb (title, name, story)
VALUES
    ('Shopping', 'Tom', 'I had to do some shopping');



