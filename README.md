para buscar port de sql
USE master
GO
xp_readerrorlog 0, 1, N'Server is listening on' 
GO

api test
{"nombre":"a","mail":"a","foto":"a","username":"a","password":"aaaaaaaa"}

CONECTAR MYSQL
CREAS EL USER EN EL COMMAND LINE DE SQL, hay que entrar con el usuario que creaste al descargar MSSQL
CREATE USER 'admin'@'localhost'IDENTIFIED WITH mysql_native_password BY 'password';
GRANT ALL PRIVILEGES ON CRAM.* TO 'admin'@'localhost';
Vas a MSSQL normal y creas una conexión en la HOME llamada CRAM, cambiar el host name de esos numeros a localhost y el user al 'admin', después te va a pedir que te loguees con la contraseña para entrar a la conexión y esa contra es 'password'
Después agregás el script de sql y lo ejecutás