import mysql from "mysql2";

const connection = mysql.createConnection({
  host: 'localhost',  // MySQL 서버의 호스트 이름
  user: 'root',       // MySQL 사용자 이름
  password: 'fpsWid33!',   // MySQL 사용자 비밀번호
  database: 'sakila',   // 연결할 데이터베이스 이름
});

connection.connect((err) => {
  if(err) console.log("error while connect DB",err); //연결 실패시 에러 출력
  console.log("connect success with DB"); //연결 성공시 로그 출력
});