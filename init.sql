CREATE DATABASE postgres;

\c postgres;

CREATE TABLE public.produtor (
	id uuid NOT NULL primary key,
	documento varchar NOT NULL,
	nome varchar NOT NULL,
	nome_fazenda varchar NOT NULL,
	cidade  varchar NULL,
  estado varchar NULL,
	area_total decimal NULL,
	area_cultivavel decimal NULL,
	area_vegetacao decimal NULL,
	culturas varchar NULL,
	data_criacao date,
	data_alteracao date
);
