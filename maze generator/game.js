var maze2 = [
[1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,5,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
[1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1],
[1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
[1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1],
[1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
[1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1],
[1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
[1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1],
[1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1],
[1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
[1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];
var maze = [
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,5,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1],
[1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1],
[1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1],
[1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1],
[0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
[1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1],
[1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
[1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1],
[0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
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

var posv = {};
pos.xv = 0;
pos.yv = 0;

var pacman;
pacman = document.createElement('img');
pacman.setAttribute('id','pacman');
pacman.setAttribute('src', 'https://forum.infinitymu.net/images/smilies/insania/pacman.png');


function maze_generate(){  
  mydiv = document.createElement('div');
  mydiv.setAttribute('id', 'mydiv');
  	for(i=0;i<14;i++){
          mytr = document.createElement('tr');
  		for(j=0;j<32;j++){
              if(maze[i][j] == "1"){
                  var mytd = document.createElement('td');
          			var square = document.createElement('img');
                      square.setAttribute('src', 'http://www.dadabhagwan.org/images/nav-icon.png');
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
                      square.setAttribute('src', 'http://www.kidspot.com.au/bundles/nlmkidspot/images/social_pinterest.png');
                      square.setAttribute('id', String(i).concat(String(j)));
                      mytd.appendChild(square); 
                      mytr.appendChild(mytd); 
              }
              else if(maze[i][j] == "2"){
                   var mytd = document.createElement('td');
                      var square = document.createElement('img');
                      square.setAttribute('src', '');
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
    switch(keycode){
        
        case 65: //left
			while(maze[pos.y][pos.x-1] == 0 || maze[pos.y][pos.x-1] == 2 || pos.x == 0){
				if(pos.x > 0){
				  if(maze[pos.y][pos.x-1] == 0 || maze[pos.y][pos.x-1] == 2){
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
			while(maze[pos.y-1][pos.x] == 0 || maze[pos.y-1][pos.x] == 2 || pos.y == 0){
				if(pos.y > 0){
				  if(maze[pos.y-1][pos.x] == 0 || maze[pos.y-1][pos.x] == 2){
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
			while(maze[pos.y][pos.x+1] == 0 || maze[pos.y][pos.x+1] == 2 || pos.x == 31){
				if(pos.x < 31){
				  if(maze[pos.y][pos.x+1] == 0 || maze[pos.y][pos.x+1] == 2){
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
			while(maze[pos.y+1][pos.x] == 0 || maze[pos.y+1][pos.x] == 2 || pos.y == 13){
				if(pos.y < 13){
				  if(maze[pos.y+1][pos.x] == 0 || maze[pos.y+1][pos.x] == 2){
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
				  mydiv.parentNode.removeChild(mydiv);
          		  maze_generate();
				}
			
	          mydiv.parentNode.removeChild(mydiv);
	          maze_generate();
			}
		break; 		 
	}
}

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}