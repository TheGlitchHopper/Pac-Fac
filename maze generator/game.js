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
[1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1],
[1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1],
[1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1],
[0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0],
[1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
[1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1],
[1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
[1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1],
[0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
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
[1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1],
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


var g1_pos = {};
g1_pos.x = 21;
g1_pos.y = 5;
var g2_pos = {};
g2_pos.x = 5;
g2_pos.y = 1;

var pacman;
pacman = document.createElement('img');
pacman.setAttribute('id','pacman');
pacman.setAttribute('src', 'https://forum.infinitymu.net/images/smilies/insania/pacman.png');

async function g_move(){
	if(maze[g1_pos.y][g1_pos.x-1] == 0){
		maze[g1_pos.y][g1_pos.x] = 0;
		maze[g1_pos.y][g1_pos.x-1] = 4;
		g1_pos.x -= 1;
		await sleep(150);
		console.log(maze[g1_pos.y][g1_pos.x-1]);
	}
}


function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}


function maze_generate(){  
  mydiv = document.createElement('div');
  mydiv.setAttribute('id', 'mydiv');
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
    g_move();
    switch(keycode){
        
        case 65: //left
			while(maze[pos.y][pos.x-1] != 1 || pos.x == 0){
				if(pos.x > 0){
				  if(maze[pos.y][pos.x-1] != 1){
					maze[pos.y][pos.x] = 2;
					maze[pos.y][pos.x-1] = 5;
					pos.x -= 1;
					await sleep(150);
				  }
				}
				else if(pos.x == 0){
				  maze[pos.y][pos.x] = 2;
				  pos.x = 31;
				  maze[pos.y][pos.x] = 5;
				  await sleep(150);
				}
				  mydiv.parentNode.removeChild(mydiv);
				  maze_generate();
			}
			break;
        
        case 87: //up
			while(pos.y == 0 || maze[pos.y-1][pos.x] != 1){
				if(pos.y > 0){
				  if(maze[pos.y-1][pos.x] != 1){
					maze[pos.y][pos.x] = 2;
					maze[pos.y-1][pos.x] = 5;
					pos.y -= 1;
					await sleep(150);
				  }
				}
				else if(pos.y == 0){
				  maze[pos.y][pos.x] = 2;
				  pos.y = 13;
				  maze[pos.y][pos.x] = 5;
				  await sleep(150);
				}
			 	  mydiv.parentNode.removeChild(mydiv);
			  	  maze_generate();
			}
          break;
        
        case 68: //right
			while(maze[pos.y][pos.x+1] != 1 || pos.x == 31){
				if(pos.x < 31){
				  if(maze[pos.y][pos.x+1] != 1){
					maze[pos.y][pos.x] = 2;
					maze[pos.y][pos.x+1] = 5;		
					pos.x += 1;
					await sleep(150);
				  }
			}
		
		
				else if(pos.x == 31){
				  maze[pos.y][pos.x] = 2;
				  pos.x = 0;
				  maze[pos.y][pos.x] = 5;
				  await sleep(150);
				}
			  mydiv.parentNode.removeChild(mydiv);
			  maze_generate();
		}
		
          break;
        
        case 83: //down
			while(maze[pos.y+1][pos.x] != 1 || pos.y == 13){
				if(pos.y < 13){
				  if(maze[pos.y+1][pos.x] != 1){
					maze[pos.y][pos.x] = 2;
					maze[pos.y+1][pos.x] = 5;
					pos.y += 1;
					await sleep(150);
				  }
				}
				if(pos.y == 13){
				  maze[pos.y][pos.x] = 2;
				  pos.y = 0;
				  maze[pos.y][pos.x] = 5;
				  await sleep(150);
				}
			
	          mydiv.parentNode.removeChild(mydiv);
	          maze_generate();
			}
		break; 		 
	}
}

