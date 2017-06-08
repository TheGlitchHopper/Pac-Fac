var maze2 = [
[1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,5,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,1,1,1,1],
[1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1],
[1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
[1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1],
[1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
[1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1],
[1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
[1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1],
[1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1],
[1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,4,1,1,1,1],
[1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];
var maze = [
[1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,5,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1],
[1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1],
[1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1],
[1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1],
[0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0],
[1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
[1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1],
[1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
[1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1],
[0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
[1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];
var maze3 = [
[1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1],
[1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1],
[1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1],
[1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1],
[1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1],
[1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1],
[1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1],
[1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1],
[1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1],
[1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1],
[1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
[1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];
var maze4 = [
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1],
[1,1,1,5,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1],
[1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1],
[1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1],
[0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0],
[1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1],
[1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1],
[1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1],
[1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1],
[1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];
var maze5 = [
[1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1],
[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1],
[1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1],
[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1],
[1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1],
[1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1],
[1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
[1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1],
[1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1],
[1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1],
[1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1],
[1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1],
[1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1]
];

var pos = {};
pos.x = 3;
pos.y = 1;

var count = 0;

var g1_pos = {};
g1_pos.x = 21;
g1_pos.y = 5;

var pacman;
pacman = document.createElement('img');
pacman.setAttribute('id','pacman');
pacman.setAttribute('src', 'https://forum.infinitymu.net/images/smilies/insania/pacman.png');
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
async function g_move(ghost){
		
	while(true)
	switch (getRandomInt(1, 4)){
		case 1://left
		if(maze[ghost.y][ghost.x-1] == 0){
		maze[ghost.y][ghost.x] = 0;
		maze[ghost.y][ghost.x-1] = 4;
		ghost.x -= 1;
		await sleep(600);
		console.log(maze[ghost.y][ghost.x-1]);}
		break;
		case 2://right
		if(maze[ghost.y][ghost.x+1] == 0){
		maze[ghost.y][ghost.x] = 0;
		maze[ghost.y][ghost.x+1] = 4;
		ghost.x += 1;
		await sleep(600);
		console.log(maze[ghost.y][ghost.x+1]);}
		break;
		case 3://up
		if(maze[ghost.y-1][ghost.x] == 0){
		maze[ghost.y][ghost.x] = 0;
		maze[ghost.y-1][ghost.x] = 4;
		ghost.y -= 1;
		await sleep(600);
		console.log(maze[ghost.y-1][ghost.x]);}
		break;
		case 4://down
		if(maze[ghost.y+1][ghost.x] == 0){
		maze[ghost.y][ghost.x] = 0;
		maze[ghost.y+1][ghost.x] = 4;
		ghost.y += 1;
		await sleep(600);
		console.log(maze[ghost.y][ghost.x-1]);}
		break;
		default:
		{
			mydiv.parentNode.removeChild(mydiv);
			maze_generate();
			if(maze[ghost.y][ghost.x-1] == 0){
		maze[ghost.y][ghost.x] = 0;
		maze[ghost.y][ghost.x-1] = 4;
		ghost.x -= 1;
		await sleep(600);
		console.log(maze[ghost.y][ghost.x-1]);}
		if(maze[ghost.y][ghost.x+1] == 0){
		maze[ghost.y][ghost.x] = 0;
		maze[ghost.y][ghost.x+1] = 4;
		ghost.x += 1;
		await sleep(600);
		console.log(maze[ghost.y][ghost.x+1]);}
		if(maze[ghost.y-1][ghost.x] == 0){
		maze[ghost.y][ghost.x] = 0;
		maze[ghost.y-1][ghost.x] = 4;
		ghost.y -= 1;
		await sleep(600);
		console.log(maze[ghost.y-1][ghost.x]);}
		if(maze[ghost.y+1][ghost.x] == 0){
		maze[ghost.y][ghost.x] = 0;
		maze[ghost.y+1][ghost.x] = 4;
		ghost.y += 1;
		await sleep(600);
		console.log(maze[ghost.y][ghost.x-1]);}
	}
	break;}
}


function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}


function maze_generate(){  
  mydiv = document.createElement('div');
  mydiv.setAttribute('id', 'mydiv');
  if(count == 160) alert("Congratulations. You won!");
  	for(i=0;i<14;i++){
          mytr = document.createElement('tr');
  		for(j=0;j<32;j++){
              if(maze[i][j] == "1"){
                  var mytd = document.createElement('td');
          			var square = document.createElement('img');
                      square.setAttribute('src', 'wall.png');
                      square.setAttribute('id', String(i).concat(String(j)));
                      mytd.appendChild(square); 
                      mytr.appendChild(mytd); 
              }
              else if (maze[i][j] == "5"){
                   var mytd = document.createElement('td');
                      mytd.appendChild(pacman); 
                      mytr.appendChild(mytd); 
              }
              else if(maze[i][j] == "0"){
                   var mytd = document.createElement('td');
                      var square = document.createElement('img');
                      square.setAttribute('src', 'dot.png');
                      square.setAttribute('id', String(i).concat(String(j)));
                      square.setAttribute('width', '60%');
                      mytd.appendChild(square); 
                      mytr.appendChild(mytd); 
              }
              else if(maze[i][j] == "2"){
                   var mytd = document.createElement('td');
                      var square = document.createElement('img');
                      square.setAttribute('src', 'https://www.pawbe.com/images/Blank.png');
                      square.setAttribute('id', String(i).concat(String(j)));
                      mytd.appendChild(square); 
                      mytr.appendChild(mytd); 
              }
               else if(maze[i][j] == "4"){
                   var mytd = document.createElement('td');
                      var square = document.createElement('img');
                      square.setAttribute('src', 'http://got-djent.com/kidman/img/okubo.png');
                      square.setAttribute('id', String(i).concat(String(j)));
                      mytd.appendChild(square); 
                      mytr.appendChild(mytd); 
              }
  		}
      mydiv.appendChild(mytr);
  	}
    document.body.appendChild(mydiv)
}

window.onload = maze_generate;

document.addEventListener("keydown",move);

 async function move(e){
	e = e || window.event;
    keycode = e.which || e.keyCode;
    g_move(g1_pos);
	maze[5][21] = 0;
    console.log(count);
    switch(keycode){
        
        case 65: //left
			while((maze[pos.y][pos.x-1] == 0 || maze[pos.y][pos.x-1] == 2)&& keycode == 65){
				  if(maze[pos.y][pos.x-1] != 1){
				  	if(maze[pos.y][pos.x-1] == 0)
				  		count+=1;
					maze[pos.y][pos.x] = 2;
					maze[pos.y][pos.x-1] = 5;
					pos.x -= 1;
					await sleep(150);
				  }
    			  if(count == 164) alert("We have a winner!");
				  mydiv.parentNode.removeChild(mydiv);
				  maze_generate();
			}
			break;
        
        case 87: //up
			while((maze[pos.y-1][pos.x] == 0 || maze[pos.y-1][pos.x] == 2)&& keycode == 87){
				
				  if(maze[pos.y-1][pos.x] != 1){
				  	if(maze[pos.y-1][pos.x] == 0)
				  		count+=1;
					maze[pos.y][pos.x] = 2;
					maze[pos.y-1][pos.x] = 5;
					pos.y -= 1;
					await sleep(150);
				  }
				  if(count == 164) alert("We have a winner!");
			 	  mydiv.parentNode.removeChild(mydiv);
			  	  maze_generate();
			}
          break;
        
        case 68: //right
			while((maze[pos.y][pos.x+1] == 0 || maze[pos.y][pos.x+1] == 2)&& keycode == 68){
				
				  if(maze[pos.y][pos.x+1] != 1){
				  	if(maze[pos.y][pos.x+1] == 0)
				  		count+=1;
					maze[pos.y][pos.x] = 2;
					maze[pos.y][pos.x+1] = 5;		
					pos.x += 1;
					await sleep(150);
				  }
			      if(count == 164) alert("We have a winner!");
				  mydiv.parentNode.removeChild(mydiv);
				  maze_generate();
		}
		
          break;
        
        case 83: //down
			while((maze[pos.y+1][pos.x] == 0 || maze[pos.y+1][pos.x] == 2)&& keycode == 83){
				
				  if(maze[pos.y+1][pos.x] != 1){
				  	if(maze[pos.y+1][pos.x] == 0)
				  		count+=1;
					maze[pos.y][pos.x] = 2;
					maze[pos.y+1][pos.x] = 5;
					pos.y += 1;
					await sleep(150);
				  }
				  if(count == 164) alert("We have a winner!");
		          mydiv.parentNode.removeChild(mydiv);
		          maze_generate();
			}
		break; 		 
	}
}

