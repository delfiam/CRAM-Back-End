para buscar port de sql
USE master
GO
xp_readerrorlog 0, 1, N'Server is listening on' 
GO

api test
{"nombre":"aaa","mail":"aaaa@gmail.com","foto":"a","username":"aaaa","password":"aaaaaaaa"}

CONECTAR MYSQL

Reinstalar MYSQL por las dudas, después en MYSQL Installer poner reconfigure en MYSQL Server, config type Developmental Computer ---> Next ---> Next ---> root pass en Ort: 12345 ---> Next---> ![image](https://user-images.githubusercontent.com/89984382/189644429-f8087c8c-c902-4cb8-9f1d-32e89e107930.png)

Creas el user en el command line de sql, hay que entrar con el usuario que creaste al descargar MYSQL (en ort la contraseña es 12345)

CREATE USER 'admin'@'localhost'IDENTIFIED WITH mysql_native_password BY 'password';

GRANT ALL PRIVILEGES ON CRAM.* TO 'admin'@'localhost';

FLUSH PRIVILEGES;

Vas a MYSQL normal y creas una conexión en la HOME llamada CRAM, cambiar el host name de esos numeros a localhost y el user al 'admin', después te va a pedir que te loguees con la contraseña para entrar a la conexión y esa contra es 'password'

Después agregás el script de sql y lo ejecutás
