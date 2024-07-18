CREATE DATABASE mernrecipes;

-- CREATE TABLE recipe(
--     recipe_id SERIAL PRIMARY KEY,
--     title VARCHAR(255) NOT NULL,
--     description TEXT NOT NULL
-- );


-- INSERT INTO recipe (title, description) VALUES 
-- ('Magic Soup', 'A potion that turns you into a frog'),
-- ('Flying Spaghetti', 'With real flying meatballs'),
-- ('Invisibility Stew', 'You will not see it, but it is delicious'),
-- ('Mystery Salad', 'Ingredients unknown even to the chef'),
-- ('Teleporting Tacos', 'One bite and you are in Mexico'),
-- ('Dragon Soup', 'Hot enough to make a dragon sweat'),
-- ('Giggle Juice', 'Causes uncontrollable laughter'),
-- ('Quantum Quiche', 'Exists in multiple states of deliciousness'),
-- ('Zombie Soup', 'Revives you from the dead'),
-- ('Ghostly Gumbo', 'You can feel it, but you can not see it'),
-- ('Ninja Noodles', 'Disappear before you finish your meal'),
-- ('Alien Avocado Toast', 'Out of this world flavor'),
-- ('Time-Traveling Tea', 'Sips that take you to another era'),
-- ('Superhero Smoothie', 'Gain superpowers with every sip'),
-- ('Unicorn Udon', 'Rainbow-colored and magical'),
-- ('Fairy Frittata', 'Made with a sprinkle of fairy dust'),
-- ('Goblin Goulash', 'Guaranteed to scare your taste buds'),
-- ('Witches Brew', 'A mix of mysterious ingredients'),
-- ('Vampire Veggies', 'Garlic-free for a vampire-friendly diet'),
-- ('Phoenix Pudding', 'Rises from the ashes of your last dessert');

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

--REMAKING THE TABLE WILL LEAVE OLD ONE COMMENTED OUT FOR REFERENCE
CREATE TABLE recipes (
    recipe_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category_id INT REFERENCES categories(category_id),
    instructions TEXT,
    pictures TEXT[],
    yt_link TEXT,
    ingredients TEXT[],  -- Assuming JSON or array format for ingredients and measurements
    measurements TEXT[],
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO recipes (name, category_id, instructions, pictures, yt_link, ingredients, measurements)
VALUES (
    'Spaghetti Carbonara',
    null,
    '1. Cook spaghetti according to package instructions. 2. In a large skillet, cook pancetta until crispy. 3. Whisk eggs, Parmesan cheese, and black pepper in a bowl. 4. Drain spaghetti and toss with pancetta. 5. Remove skillet from heat and mix in egg mixture until creamy.',
    '{"https://example.com/spaghetti_carbonara.jpg", "https://example.com/spaghetti_carbonara2.jpg"}',
    'https://www.youtube.com/watch?v=123456',
    '{"spaghetti", "pancetta", "eggs", "Parmesan cheese", "black pepper"}',
    '{"200g", "150g", "2", "50g", "to taste"}'
);



CREATE TABLE favorites (
    favorite_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
    recipe_id INT REFERENCES recipes(recipe_id) ON DELETE CASCADE,
    date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- Retrieve favorite recipes for user with user_id 1
-- SELECT r.recipe_id, r.name, r.category, r.instructions
-- FROM favorites f
-- JOIN recipes r ON f.recipe_id = r.recipe_id
-- WHERE f.user_id = 1;



--************************************************************************************************
--------------------- OPTIONAL ADDS-------------------------------------------
--************************************************************************************************
-- CREATE TABLE ingredients (
--     ingredient_id SERIAL PRIMARY KEY,
--     name VARCHAR(100) UNIQUE NOT NULL,
--     category VARCHAR(50),
--     description TEXT
-- );



-- CREATE TABLE comments (
--     comment_id SERIAL PRIMARY KEY,
--     recipe_id INT REFERENCES recipes(recipe_id) ON DELETE CASCADE,
--     user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
--     comment_text TEXT,
--     date_posted TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );
