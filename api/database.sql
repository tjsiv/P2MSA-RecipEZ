CREATE DATABASE mernrecipes;

CREATE TABLE recipe(
    recipe_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);