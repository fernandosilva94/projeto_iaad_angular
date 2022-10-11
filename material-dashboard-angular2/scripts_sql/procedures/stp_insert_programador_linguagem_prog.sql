DELIMITER $$

CREATE PROCEDURE STP_INSERT_PROG_LINGUAGEM (IN stp_id_linguagem INT, IN stp_id_startup char(5), 
IN stp_nome_programador VARCHAR(50), IN stp_genero VARCHAR(1), IN stp_data_nascimento date, IN stp_email varchar(50))
BEGIN
	INSERT INTO programador (id_startup, nome_programador, genero, data_nascimento, email) VALUES (stp_id_startup, stp_nome_programador, stp_genero, stp_data_nascimento, stp_email);
    
    insert into programador_linguagem(id_programador, id_linguagem) values((select id_programador from programador where email = stp_email), stp_id_linguagem);
END $$
DELIMITER ;