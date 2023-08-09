CREATE DATABASE pernlib;

CREATE TABLE accounts(
    accounts_id SERIAL PRIMARY KEY,
    nickname TEXT,
    mail TEXT,
    first_name TEXT,
    surname TEXT,
    room/place TEXT
);

CREATE TABLE books(
    books_id SERIAL PRIMARY KEY,
    books_name TEXT,
    owner_name FOREIGN KEY,
    details TEXT
);

CREATE TABLE personal_library(
    nickname TEXT,
    books_on_shelf TEXT[],
    nfc_module_available BOOLEAN
);