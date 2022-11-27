const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.rect(0, 0, 100, 100); //(X, Y, width, height)
ctx.rect(100, 100, 100, 100); //rect - 보이지 않는 선을 만든다
ctx.rect(200, 200, 100, 100);
ctx.fill(); //fill - 색을 채운다.

ctx.beginPath(); //선의 연결을 끊는 역할
ctx.rect(250, 250, 100, 100);
ctx.fillStyle = "blue"; //색을 blue로 바꿔준다
ctx.fill();
