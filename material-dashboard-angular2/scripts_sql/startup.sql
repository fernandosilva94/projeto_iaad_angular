-- Script do Banco de Dados Startup
-- Aula Presencial 

begin;
drop schema if exists Startup; 
create schema Startup;
use Startup;

-- criando as tabelas 
create table STARTUP(
	id_startup CHAR(5), -- I. Restrição de integridade de domínio 
    nome_startup VARCHAR(50) not null, -- II. Restrição de integridade de vazio/null
    cidade_sede VARCHAR (50),
    PRIMARY KEY (id_startup));

create table PROGRAMADOR(
	id_programador int NOT NULL auto_increment, -- I. Restrição de integridade de domínio 
	id_startup CHAR(5),
    nome_programador VARCHAR(50) not null, -- II. Restrição de integridade de vazio/null
    genero CHAR(1), -- I
    data_nascimento DATE, 
    email VARCHAR(50), 
    PRIMARY KEY (id_programador),
    UNIQUE(email)); -- III. Restrição de integridade (unicidade)
 
create table LINGUAGEM_PROGRAMACAO(
	id_linguagem int, -- I. Restrição de integridade de domínio 
    nome_linguagem VARCHAR(50) not null, -- II. Restrição de integridade de vazio/null
    ano_lançamento YEAR, -- I. Restrição de integridade de domínio 
    PRIMARY KEY(id_linguagem)); 
 
create table PROGRAMADOR_LINGUAGEM(
	id_programador int,
	id_linguagem int);
 --   PRIMARY KEY (id_programador, id_linguagem));  
  
-- populando/carregando as tabelas do banco de dados
insert into STARTUP values
('10001', 'Tech4Toy', 'Porto Alegre'),
('10002', 'Smart123','Belo Horizonte'),
('10003', 'knowledgeUp','Rio de Janeiro'),
('10004', 'BSI Next Level','Recife'),
('10005', 'QualiHealth','São Paulo'),
('10006', 'ProEdu','Florianópolis');

insert into PROGRAMADOR values 
(30001, '10001', 'João Pedro', 'M', '1993-06-23', 'joaop@mail.com'),
(30002, '10002', 'Paula Silva', 'F', '1986-01-10', 'paulas@mail.com'),
(30003, '10003', 'Renata Vieira', 'F', '1991-07-05', 'renatav@mail.com'),
(30004, '10004', 'Felipe Santos', 'M', '1976-11-25', 'felipes@mail.com'),
(30005, '10001', 'Ana Cristina', 'F', '1968-02-19', 'anac@mail.com'),
(30006, '10004', 'Alexandre Alves', 'M', '1988-07-07', 'alexandrea@mail.com'),
(30007, '10002', 'Laura Marques', 'F', '1987-10-04', 'lauram@mail.com');

insert into LINGUAGEM_PROGRAMACAO values
(20001, 'Python', 1991),
(20002, 'PHP', 1995),
(20003, 'Java', 1995),
(20004, 'C', 1972),
(20005, 'JavaScript', 1995),
(20006, 'Dart', 2011);

insert into PROGRAMADOR_LINGUAGEM values
(30001, 20001),
(30001, 20002),
(30002, 20003),
(30003, 20004),
(30003, 20005),
(30004, 20005),
(30007, 20001),
(30007, 20002);

-- Aplicando a restrição de integridade referencial 
alter table PROGRAMADOR_LINGUAGEM ADD FOREIGN KEY(id_linguagem) REFERENCES LINGUAGEM_PROGRAMACAO(id_linguagem) ON DELETE CASCADE ON UPDATE CASCADE; -- IV. Restrição de Integridade Referecial  (Obervação: pode retirar "ON DELETE RESTRICT").
alter table PROGRAMADOR_LINGUAGEM ADD FOREIGN KEY(id_programador) REFERENCES PROGRAMADOR(id_programador) ON DELETE CASCADE ON UPDATE CASCADE; -- V. Restrição de Integridade Referecial
alter table PROGRAMADOR ADD FOREIGN KEY(id_startup) REFERENCES STARTUP(id_startup) ON UPDATE CASCADE; -- VI. Restrição de Integridade Referecial
alter table PROGRAMADOR AUTO_INCREMENT=30000;

commit;