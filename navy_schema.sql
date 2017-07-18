select 'hello, PG';

create database navy;


create table fleet (
  id serial primary key,
  name varchar(50)
);

create table rank (
  id serial primary key,
  name varchar(50)
);

create table sailor (
  id serial primary key,
  name varchar(50),
  dob date
);

create table duty (
  id serial primary key,
  rank_id serial references rank(id),
  length int
);

create table ship (
  id serial primary key,
  name varchar(50),
  date_built date,
  fleet_id serial references fleet(id)
);

create table duty_by_ship (
  start_date date,
  end_date date,
  ship_id serial references ship(id),
  duty_id serial references duty(id),
  sailor_id serial references sailor(id)
);