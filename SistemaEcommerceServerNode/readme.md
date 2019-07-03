drop database pds2;
create database pds2;
use pds2;

CREATE TABLE clientes (
codigo INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(60) NOT NULL,
cargo VARCHAR(60) NOT NULL,
endereco VARCHAR(60) NOT NULL,
createdAt datetime,
updatedAt datetime,
PRIMARY KEY (codigo));

CREATE TABLE cds (
codigo INT NOT NULL AUTO_INCREMENT,
artista VARCHAR(60) NOT NULL,
album VARCHAR(60) NOT NULL,
ano VARCHAR(5) NOT NULL,
createdAt datetime,
updatedAt datetime,
PRIMARY KEY (codigo));

CREATE TABLE filmes (
codigo INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(60) NOT NULL,
genero VARCHAR(60) NOT NULL,
ano VARCHAR(5) NOT NULL,
createdAt datetime,
updatedAt datetime,
PRIMARY KEY (codigo));

CREATE TABLE livros (
codigo INT NOT NULL AUTO_INCREMENT,
obra VARCHAR(60) NOT NULL,
autor VARCHAR(60) NOT NULL,
genero VARCHAR(20) NOT NULL,
isbn VARCHAR(20) NOT NULL,
createdAt datetime,
updatedAt datetime,
PRIMARY KEY (codigo));

select * from clientes;
select * from cds;
select * from filmes;
select * from livros;

INSERT INTO clientes(nome) value ('Carlos');