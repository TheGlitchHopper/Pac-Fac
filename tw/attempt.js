function run()
{
	var maze = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1],
	[1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1],
	[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1],
	[1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1],
	[0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
	[1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1],
	[1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
	[1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1],
	[0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
	[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
	];
	for(i=0;i<14;i++){
          mytr = document.createElement('tr');
  		for(j=0;j<32;j++)
		{
			switch(maze[i][j])
			{
				case "1":var mytd = document.createElement('td');
						var square = document.createElement('img');
						square.setAttribute('src', 'media/wall.png');
						//square.setAttribute('width','46vw');
						square.setAttribute('Id',String(i) + String(j));
						mytd.appendChild(square); 
						mytr.appendChild(mytd);break;
                case "0":var mytd = document.createElement('td');
						var square = document.createElement('img');
						square.setAttribute('src', 'media/dot.png');
						//square.setAttribute('width','46vw');
						square.setAttribute('Id',String(i) + String(j));
						mytd.appendChild(square); 
						mytr.appendChild(mytd);break;
				case "5":var mytd = document.createElement('td');
						var pacman = document.createElement('img');
						pacman.setAttribute('src', localStorage.getItem("avatar"));
						//pacman.setAttribute('width','46vw');
						mytd.appendChild(pacman); 
						mytr.appendChild(mytd);
            }
  		}
      document.body.appendChild(mytr);
  	}
}