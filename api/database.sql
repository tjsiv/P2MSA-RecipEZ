CREATE DATABASE mernrecipes;

CREATE TABLE recipe(
    recipe_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);

INSERT INTO recipe (title, description) VALUES 
('Magic Soup', 'A potion that turns you into a frog'),
('Flying Spaghetti', 'With real flying meatballs'),
('Invisibility Stew', 'You will not see it, but it is delicious'),
('Mystery Salad', 'Ingredients unknown even to the chef'),
('Teleporting Tacos', 'One bite and you are in Mexico'),
('Dragon Soup', 'Hot enough to make a dragon sweat'),
('Giggle Juice', 'Causes uncontrollable laughter'),
('Quantum Quiche', 'Exists in multiple states of deliciousness'),
('Zombie Soup', 'Revives you from the dead'),
('Ghostly Gumbo', 'You can feel it, but you can not see it'),
('Ninja Noodles', 'Disappear before you finish your meal'),
('Alien Avocado Toast', 'Out of this world flavor'),
('Time-Traveling Tea', 'Sips that take you to another era'),
('Superhero Smoothie', 'Gain superpowers with every sip'),
('Unicorn Udon', 'Rainbow-colored and magical'),
('Fairy Frittata', 'Made with a sprinkle of fairy dust'),
('Goblin Goulash', 'Guaranteed to scare your taste buds'),
('Witches Brew', 'A mix of mysterious ingredients'),
('Vampire Veggies', 'Garlic-free for a vampire-friendly diet'),
('Phoenix Pudding', 'Rises from the ashes of your last dessert');
