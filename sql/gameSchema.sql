DROP DATABASE IF EXISTS `gamesDB`;
CREATE DATABASE `gamesDB`;
USE `gamesDB`;

CREATE TABLE game_system (
    game_system_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    game_system_name VARCHAR(60) NOT NULL,
    CONSTRAINT pk_game_system PRIMARY KEY(game_system_id)
);

ALTER TABLE game_system
    ADD COLUMN last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

CREATE TABLE publisher (
    publisher_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    publisher VARCHAR(60) NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_publisher PRIMARY KEY(publisher_id)
);

CREATE TABLE category (
    category_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    category VARCHAR(60) NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_category PRIMARY KEY(category_id)
);

CREATE TABLE game(
    game_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    title VARCHAR(100) NOT NULL,
    price SMALLINT UNSIGNED,
    rating ENUM('E', 'T', 'M', 'AO', 'NR') DEFAULT 'NR',
    publisher_id SMALLINT UNSIGNED NOT NULL,
    year YEAR,
    category_id SMALLINT UNSIGNED NOT NULL,
    description TINYTEXT,
    image TINYTEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_game PRIMARY KEY(game_id),
    CONSTRAINT fk_publisher_id FOREIGN KEY (publisher_id) REFERENCES publisher (publisher_id),
    CONSTRAINT fk_category_id FOREIGN KEY (category_id) REFERENCES category (category_id)
);

CREATE TABLE game_game_system(
    game_id SMALLINT UNSIGNED NOT NULL,
    game_system_id SMALLINT UNSIGNED NOT NULL,
    PRIMARY KEY (game_id, game_system_id),
    CONSTRAINT fk_gs_game FOREIGN KEY (game_id) REFERENCES game (game_id),
    CONSTRAINT fk_gs_game_system FOREIGN KEY (game_system_id) REFERENCES game_system (game_system_id)
);