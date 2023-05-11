INSERT INTO game_system (game_system_name)
VALUES ('ps5');

INSERT INTO game_system (game_system_name)
VALUES ('xbox x series'), ('nintendo switch'), ('pc'), ('ps4'), ('xbox one');

INSERT INTO publisher (publisher)
VALUES ('sony');

INSERT INTO publisher (publisher)
VALUES ('ea'), ('activision'), ('mojang studios'), ('avalanche software'), ('2k games'), ('deep silver'), ('nintendo'), ('ubisoft'), ('capcom'), ('from software');

INSERT INTO category (category)
VALUES ('best seller'), ('new release'), ('pre order');

INSERT INTO game (
    title, 
    price, 
    rating, 
    publisher_id, 
    year,
    description,
    image,
    category_id
    )
    VALUES (
        'god of war ragnarok',
        69.99,
        'm',
        1,
        2022,
        'Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go',
        'https://upload.wikimedia.org/wikipedia/en/e/ee/God_of_War_Ragnar%C3%B6k_cover.jpg',
        1
    );

    INSERT INTO game (
    title, 
    price, 
    rating, 
    publisher_id, 
    year,
    description,
    image,
    category_id
    )
    VALUES (
        'star wars: jedi survior',
        70,
        't',
        2,
        2023,
        'The story of Cal Kestis continues in STAR WARS Jedi: Survivor™, a galaxy-spanning, third-person, action-adventure game. ',
        'https://upload.wikimedia.org/wikipedia/en/4/43/Star_Wars_Jedi_Survivor.jpg',
        2
    );

    INSERT INTO game (
    title, 
    price, 
    rating, 
    publisher_id, 
    year,
    description,
    image,
    category_id
    )
    VALUES (
        'call of duty: modern warfare 2',
        70,
        'm',
        3,
        2022,
        'Call of Duty: Modern Warfare II drops players into an unprecedented global conflict that features the return of the iconic Operators of Task Force 141.',
        'https://upload.wikimedia.org/wikipedia/en/4/4a/Call_of_Duty_Modern_Warfare_II_Key_Art.jpg',
        1
    );

    INSERT INTO game (
    title, 
    price, 
    rating, 
    publisher_id, 
    year,
    description,
    image,
    category_id
    )
    VALUES (
        'minecraft legends',
        40,
        'e',
        4,
        2023,
        'Discover the mysteries of Minecraft Legends, a new action strategy game. Explore a gentle land of rich resources and lush biomes on the brink of destruction.',
        'https://upload.wikimedia.org/wikipedia/en/2/23/Minecraft_Legends_Cover_Art.jpg',
        2
    );

    INSERT INTO game (
    title, 
    price, 
    rating, 
    publisher_id, 
    year,
    description,
    image,
    category_id
    )
    VALUES (
        'hogwarts legacy',
        70,
        't',
        5,
        2023,
        'Experience Hogwarts in the late 1800s and decide the fate of the wizarding world.',
        'https://upload.wikimedia.org/wikipedia/en/7/7c/Hogwarts-Legacy-cover.jpg',
        2
    );

    INSERT INTO game (
    title, 
    price, 
    rating, 
    publisher_id, 
    year,
    description,
    image,
    category_id
    )
    VALUES (
        'nba 2k23',
        60,
        'e',
        6,
        2022,
        'Take on NBA or WNBA teams and feel true-to-life gameplay.',
        'https://upload.wikimedia.org/wikipedia/en/d/d7/NBA_2K23_cover_art.jpg',
        1
    );

    INSERT INTO game (
    title, 
    price, 
    rating, 
    publisher_id, 
    year,
    description,
    image,
    category_id
    )
    VALUES (
        'battlefield 2042',
        26,
        'm',
        2,
        2021,
        'Battlefield 2042 is a first-person shooter that marks the return to the iconic all-out warfare of the franchise.',
        'https://upload.wikimedia.org/wikipedia/en/e/ec/Battlefield_2042_cover_art.jpg',
        1
    );

    INSERT INTO game (
    title, 
    price, 
    rating, 
    publisher_id, 
    year,
    description,
    image,
    category_id
    )
    VALUES (
        'dead island 2',
        70,
        'm',
        7,
        2023,
        'Dead Island 2 is a hilarious gore-fest and a competent zombie-slaying adventure, but lacks creativity outside of its great sense of humor.',
        'https://upload.wikimedia.org/wikipedia/en/0/08/Dead_Island_2_cover_art.jpg',
        2
    );

    INSERT INTO game (
    title, 
    price, 
    rating, 
    publisher_id, 
    year,
    description,
    image,
    category_id
    )
    VALUES (
        'the legend of zelda: tears of a kingdom',
        70,
        'e',
        8,
        2023,
        'In this sequel to The Legend of Zelda: Breath of the Wild, you’ll decide your own path through the sprawling landscapes of Hyrule and the mysterious islands floating in the vast skies above.',
        'https://upload.wikimedia.org/wikipedia/en/f/fb/The_Legend_of_Zelda_Tears_of_the_Kingdom_cover.jpg',
        3
    );

    INSERT INTO game (
    title, 
    price, 
    rating, 
    publisher_id, 
    year,
    description,
    image,
    category_id
    )
    VALUES (
        'xdefiant',
        10,
        't',
        9,
        2023,
        'XDefiant is a free-to-play, first-person arena shooter where you compete to be the best in fast-paced online matches.',
        'https://static-cdn.jtvnw.net/ttv-boxart/780302568-285x380.jpg',
        3
    );

    INSERT INTO game (
    title, 
    price, 
    rating, 
    publisher_id, 
    year,
    description,
    image,
    category_id
    )
    VALUES (
        'street fighter 6',
        70,
        't',
        10,
        2023,
        'Hit the streets with new ways to play and fight in the next evolution of Capcoms legendary fighting series.',
        'https://upload.wikimedia.org/wikipedia/en/9/94/Street_Fighter_6_box_art.jpg',
        3
    );

    INSERT INTO game (
    title, 
    price, 
    rating, 
    publisher_id, 
    year,
    description,
    image,
    category_id
    )
    VALUES (
        'armored core vi',
        70,
        'm',
        11,
        2023,
        'Hn ARMORED CORE VI FIRES OF RUBICON, players will assemble their mech from a wide variety of parts and weaponry to soar freely through mission locales that redefine three-dimensional mobility.',
        'https://upload.wikimedia.org/wikipedia/en/d/d6/Armored_Core_VI_Steam_artwork.jpg',
        3
    );

INSERT INTO game_game_system(game_id, game_system_id)
VALUES (1, 1)

INSERT INTO game_game_system(game_id, game_system_id)
VALUES (2, 1), (2, 2), (2, 4), (3, 1), (3, 2), (3, 4), (4, 1), (4, 2), (4, 3), (4, 4), (4, 5), (4, 6)

INSERT INTO game_game_system(game_id, game_system_id)
VALUES (5, 1), (5, 2), (5, 3), (5, 4), (5, 5), (5,6);

INSERT INTO game_game_system(game_id, game_system_id)
VALUES (6, 1), (6, 2), (6, 3), (6, 4), (6, 5), (6, 6);

INSERT INTO game_game_system(game_id, game_system_id)
VALUES (7, 1), (7, 2), (7, 4), (7, 5), (7, 6);

INSERT INTO game_game_system(game_id, game_system_id)
VALUES (8, 1), (8, 2), (8, 4), (8, 5), (8, 6);

INSERT INTO game_game_system(game_id, game_system_id)
VALUES (9, 3);

INSERT INTO game_game_system(game_id, game_system_id)
VALUES (10, 1), (10, 2), (10, 4);

INSERT INTO game_game_system(game_id, game_system_id)
VALUES (11, 1), (11, 2), (11, 4), (11, 5);

INSERT INTO game_game_system(game_id, game_system_id)
VALUES (12, 1), (12, 2), (12, 4), (12, 5), (12, 6);



