DELIMITER $$

CREATE PROCEDURE STP_UPDATE_PROG_LINGUAGEM (IN stp_id_linguagem INT, IN stp_id_startup char(5), 
IN stp_nome_programador VARCHAR(50), IN stp_genero VARCHAR(1), IN stp_data_nascimento date, IN stp_email varchar(50))
BEGIN

	UPDATE programador as p
		inner join programador_linguagem as pl on p.id_programador = pl.id_programador
        set pl.id_linguagem = stp_id_linguagem,
			p.id_startup = stp_id_startup,
            p.nome_programador = stp_nome_programador,
            p.genero = stp_genero,
            p.data_nascimento = stp_data_nascimento,
            p.email = stp_email
        where p.id_programador = pl.id_programador and p.nome_programador = stp_nome_programador;
        
END $$
DELIMITER ;