# ASP.NET Core 2.2 + Angular 7 JWT authorization

<b>How to run:</b><br>
<i>You can run the apps using docker containers or manually serving the apps on your local machine. Both procedures are described below</i><br>
<br>
<b>Running inside docker containers:</b><br>
<i>Prerequisites: have docker and docker-compose installed</i>
1. Build docker images for both API and ng apps:<br>
  1.1. inside JwtAuth/JwtAuthApi folder, execute: 
  <br><code>docker build -t jwt-auth-api .</code><br>
  1.2. inside JwtAuth/JwtAuthNg folder, execute: 
  <br><code>docker build -t jwt-auth-ng .</code><br>
2. Start the apps using docker compose:
  2.1. In JwtAuth (root folder), execute: 
  <br><code>docker-compose up</code><br>

<i>The ng app will be available at <code>localhost:80</code>, while the API at <code>localhost:5000</code>.</i>
<br><br><br>

<b>Running on local machine</b><br>
1. inside JwtAuth/JwtAuthApi folder, execute: 
  <br><code>dotnet run</code><br>
2. inside JwtAuth/JwtAuthNg folder, execute: 
  <br><code>ng serve</code><br>
  
  <i>The ng app will be available at <code>localhost:4200</code>, while the API at <code>localhost:5000</code>.</i>
