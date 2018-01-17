# brain-app
Used to view brain data using node.js/express.js sever and postgres database

# create postgres database from .nii file:

## install postgress sql client
install postgres sql client
UBUNTU:
sudo apt-get update
sudo apt-get install postgresql-client

## Install python libraries nibabel and sqlalchemy, and pandas, along with their own dependencies. 
pip install nibabel
pip install sqlalchemy
pip install pandas

## Run Python file
run the python file brain_to_postgresql.py to load data into postgres table 'braintbl'
brain_to_postgresql.py

# create readonly user

Some helpful navigation hints in postgres

First change user to postgres
sudo su - postgres 

starts sql:
psql

creates database 'brain':
CREATE DATABASE brain

connects to brain:
\c brain

shows tables:
\dt

simple test command:
SELECT * FROM braintbl LIMIT 10;

dumps to file from bash:
pg_dump -h localhost --no-acl -U postgres --format=plain --no-owner brain > brain.sql

install postgres sql client
UBUNTU:
sudo apt-get update
sudo apt-get install postgresql-client

MAC:
???

## use this to grant priveleges to readonly on brain db.

First change user to postgres
sudo su - postgres 

### create readonly user
CREATE USER readonly  WITH ENCRYPTED PASSWORD 'readonly';
GRANT USAGE ON SCHEMA public to readonly;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO readonly;
-- repeat code below for each database:
GRANT CONNECT ON DATABASE brain to readonly;
\c brain
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO readonly; --- this grants privileges on new tables generated in new database "brain"
GRANT USAGE ON SCHEMA public to readonly; 
GRANT SELECT ON ALL SEQUENCES IN SCHEMA public TO readonly;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO readonly;
