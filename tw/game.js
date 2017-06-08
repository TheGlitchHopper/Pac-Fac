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
[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,6,0,0,0,0,0,1,1,1,1],
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
g1_pos.x = 22;
g1_pos.y = 5;

var g2_pos = {};
g2_pos.x = 22;
g2_pos.y = 7;

var g3_pos = {};
g2_pos.x = 22;
g2_pos.y = 9;

var g4_pos = {};
g2_pos.x = 22;
g2_pos.y = 12;

var pacman;
pacman = document.createElement('img');
//pacman.setAttribute('id','pacman');
pacman.setAttribute('src', localStorage.getItem("avatar"));
pacman.setAttribute('width','45px');
pacman.setAttribute('height','45px');
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
async function g_move(ghost){
	var rand =getRandomInt(1, 4)
	switch (rand){
		case 1://left
			while(maze[ghost.y][ghost.x-1] == 0 && rand ==1){
				if(maze[ghost.y][ghost.x] == 6){
					maze[ghost.y][ghost.x] = 0;
					maze[ghost.y][ghost.x-1] = 6;
				}
				else{
					maze[ghost.y][ghost.x] = 0;
					maze[ghost.y][ghost.x-1] = 4
				}
				ghost.x -= 1;
				await sleep(150);
			}
			break;

		case 2://right
			while(maze[ghost.y][ghost.x+1] == 0 && rand ==2){
				if(maze[ghost.y][ghost.x] == 6){
					maze[ghost.y][ghost.x] = 0;
					maze[ghost.y][ghost.x+1] = 6;
				}
				else{
					maze[ghost.y][ghost.x] = 0;
					maze[ghost.y][ghost.x+1] = 4;
				}
				ghost.x += 1;
				await sleep(150);
			}
			break;

		case 3://up
			while(maze[ghost.y-1][ghost.x] == 0 && rand ==3){
				if(maze[ghost.y][ghost.x] == 6){
					maze[ghost.y][ghost.x] = 0;
					maze[ghost.y-1][ghost.x] = 6;
				}
				else{
					maze[ghost.y][ghost.x] = 0;
					maze[ghost.y-1][ghost.x] = 4;
				}
				ghost.y -= 1;
				await sleep(150);
			}
			break;
		
		case 4://down
			while(maze[ghost.y+1][ghost.x] == 0 && rand == 4){
				if(maze[ghost.y][ghost.x] == 6){
					maze[ghost.y][ghost.x] = 0;
					maze[ghost.y+1][ghost.x] = 6;
				}
				else{
					maze[ghost.y][ghost.x] = 0;
					maze[ghost.y+1][ghost.x] = 4;
				}
				ghost.y += 1;
				await sleep(150);
			}
			break;
	}
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
                      square.setAttribute('src', 'media/wall.png');
                      square.setAttribute('id', String(i).concat(String(j)));
                      square.setAttribute('width', '100%');
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
                      square.setAttribute('src', 'media/dot.png');
                      square.setAttribute('id', String(i).concat(String(j)));
                      square.setAttribute('width', '60%');
                      mytd.appendChild(square); 
                      mytr.appendChild(mytd); 
              }
              else if(maze[i][j] == "2"){
                   var mytd = document.createElement('td');
                      var square = document.createElement('img');
                      square.setAttribute('src', 'http://ww1.prweb.com/prfiles/2014/05/02/11821022/tN_59317_WYWMG%20CoverArt.png');
                      square.setAttribute('id', String(i).concat(String(j)));
                      square.setAttribute('width','45px');
					  square.setAttribute('height','45px');
                      mytd.appendChild(square); 
                      mytr.appendChild(mytd); 
              }
               else if(maze[i][j] == "4"){
                   var mytd = document.createElement('td');
                      var square = document.createElement('img');
                      square.setAttribute('src', 'media/g1.gif');
                      square.setAttribute('id', String(i).concat(String(j)));
                      square.setAttribute('width', '45px');
                      mytd.appendChild(square); 
                      mytr.appendChild(mytd); 
              }
              else if(maze[i][j] == "6"){
                   var mytd = document.createElement('td');
                      var square = document.createElement('img');
                      square.setAttribute('src', 'media/g3.gif');
                      square.setAttribute('id', String(i).concat(String(j)));
                      square.setAttribute('width', '45px');
                      mytd.appendChild(square); 
                      mytr.appendChild(mytd); 
              }
  		}
      mydiv.appendChild(mytr);
  	}
    document.body.appendChild(mydiv);
}

window.onload = maze_generate;

document.addEventListener("keydown",move);

 async function move(e){
	e = e || window.event;
    keycode = e.which || e.keyCode;
    g_move(g1_pos);
	g_move(g2_pos);
	g_move(g3_pos);
	g_move(g4_pos);
    console.log(count);
    switch(keycode){
        
        case 65: //left
			while((maze[pos.y][pos.x-1] == 0 || maze[pos.y][pos.x-1] == 2 || maze[pos.y][pos.x-1] == 4 || maze[pos.y][pos.x-1] == 6)&& keycode == 65){
				  if(maze[pos.y][pos.x-1] != 1){
				  	if(maze[pos.y][pos.x-1] == 0)
				  		count+=1;
				  	else if(maze[pos.y][pos.x-1] == 4 || maze[pos.y][pos.x-1] == 6)
				  		window.location.href = "gameover.html";
					maze[pos.y][pos.x] = 2;
					maze[pos.y][pos.x-1] = 5;
					pos.x -= 1;
					if (pos.x==0)
						pos.x=32;
				  }
    			  if(count == 164) alert("We have a winner!");
				  mydiv.parentNode.removeChild(mydiv);
				  maze_generate();
				  await sleep(150);
			}
			break;
        
        case 87: //up
			while((maze[pos.y-1][pos.x] == 0 || maze[pos.y-1][pos.x] == 2 || maze[pos.y-1][pos.x] == 4 || maze[pos.y-1][pos.x] == 6)&& keycode == 87){
				
				  if(maze[pos.y-1][pos.x] != 1){
				  	if(maze[pos.y-1][pos.x] == 0)
				  		count+=1;
				  	else if(maze[pos.y-1][pos.x] == 4 || maze[pos.y-1][pos.x] == 6)
				  		window.location.href = "gameover.html";
					maze[pos.y][pos.x] = 2;
					maze[pos.y-1][pos.x] = 5;
					pos.y -= 1;
					if (pos.y==0)
						pos.y=13;
				  }
				  if(count == 164) alert("We have a winner!");
			 	  mydiv.parentNode.removeChild(mydiv);
			  	  maze_generate();
				  await sleep(150);
			}
          break;
        
        case 68: //right
			while((maze[pos.y][pos.x+1] == 0 || maze[pos.y][pos.x+1] == 2 || maze[pos.y][pos.x+1] == 4 || maze[pos.y][pos.x+1] == 6)&& keycode == 68){
				
				  if(maze[pos.y][pos.x+1] != 1){
				  	if(maze[pos.y][pos.x+1] == 0)
				  		count+=1;
				  	else if(maze[pos.y][pos.x+1] == 4 || maze[pos.y][pos.x+1] == 6)
				  		window.location.href = "gameover.html";
					maze[pos.y][pos.x] = 2;
					maze[pos.y][pos.x+1] = 5;		
					pos.x += 1;
					if (pos.x==32)
						pos.x=0;
				  }
			      if(count == 164) alert("We have a winner!");
				  mydiv.parentNode.removeChild(mydiv);
				  maze_generate();
				  await sleep(150);
		}
		
          break;
        
        case 83: //down
			while((maze[pos.y+1][pos.x] == 0 || maze[pos.y+1][pos.x] == 2 || maze[pos.y+1][pos.x] == 4 || maze[pos.y+1][pos.x] == 6)&& keycode == 83){
				
				  if(maze[pos.y+1][pos.x] != 1){
				  	if(maze[pos.y+1][pos.x] == 0)
				  		count+=1;
				  	else if(maze[pos.y+1][pos.x] == 4 || maze[pos.y+1][pos.x] == 6)
				  		window.location.href = "gameover.html";
					maze[pos.y][pos.x] = 2;
					maze[pos.y+1][pos.x] = 5;
					pos.y += 1;
					if (pos.y==13)
						pos.y=0;
				  }
				  if(count == 164) alert("We have a winner!");
		          mydiv.parentNode.removeChild(mydiv);
		          maze_generate();
				  await sleep(150);
			}
		break; 		 
	}
}

