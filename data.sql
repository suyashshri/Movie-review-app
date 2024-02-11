CREATE DATABASE yelp;

CREATE TABLE movies (
    id SERIAL PRIMARY KEY, 
    title TEXT NOT NULL,  
    genres TEXT , 
    imdb Numeric(2,1) CHECK (imdb >=0 AND imdb <=10),
    year INTEGER NOT NULL
    );