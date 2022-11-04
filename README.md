## Clipboard Health Test
## Description
Code challenge about a microservice that returns statistics about an entity which I called employees

the project is divided into 2 routes 
```
/employees/
/statistics/
```

### Stack
- NestJS as the backend framework
- Typescript as the language
- runtime: node 18
- db: Sqlite3
- orm: sequelize
- authentication: passportjs
- authorization: jwt
- docker
- NestJS class-validator to validate input

### Running the app

```bash
# development
docker-compose up
```

### Testing Endpoints
I used a vscode extension called `REST Client` id: humao.rest-client

There are two files containing employees endpoints and statistics endpoints

located in 
```
/http/employees.http
/http/statistics.http
```

To make a request first you need to login which I created a dummy user/pass: "test/secret" then the token will be used automatically