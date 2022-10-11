CREATE VIEW nome_programador_nome_linguagem AS SELECT p.nome_programador, lp.nome_linguagem FROM programador_linguagem as pl
															left join programador as p on pl.id_programador = p.id_programador
															left join linguagem_programacao as lp on lp.id_linguagem = pl.id_linguagem;