# For your information

<h2>Untuk test backend</h2>
enpoint api = localhost:5000/api/v1
engineDb = postgre

Proses buat table

Data user
```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    nama VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    npp SMALLINT NOT NULL,
    npp_supervisor SMALLINT NOT NULL,
    password VARCHAR NOT NULL
) 
```

Data epresence 
```sql
CREATE TABLE epresence (
    id SERIAL PRIMARY KEY,
    id_users SMALLINT NOT NULL,
    type VARCHAR(5) NOT NULL,
    is_approve BOOLEAN NOT NULL,
    waktu VARCHAR NOT NULL
) 
```