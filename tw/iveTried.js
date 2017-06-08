<script>
async function run()
{
	var maze = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,5,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1],
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
	for(var i=0;i<14;i++)
	{
        mytr = document.createElement('tr');
  		for(var j=0;j<32;j++)
		{
			switch(maze[i][j])
			{
				case 1:var mytd = document.createElement('td');
						var square = document.createElement('img');
						square.setAttribute('src', 'media/wall.png');
						square.setAttribute('class','tuple ' + String(i) + String(j));;
						mytd.appendChild(square); 
						mytr.appendChild(mytd);break;
                case 0:var mytd = document.createElement('td');
						var square = document.createElement('img');
						square.setAttribute('src', 'media/dot.png');
						square.setAttribute('class','tuple ' + String(i) + String(j));
						mytd.appendChild(square); 
						mytr.appendChild(mytd);break;
				case 5:var mytd = document.createElement('td');
						var pacman = document.createElement('img');
						pacman.setAttribute('src', localStorage.getItem("avatar"));
						pacman.setAttribute('class','tuple pacman');
						mytd.appendChild(pacman); 
						mytr.appendChild(mytd);
            }
  		}
      document.body.appendChild(mytr);
  	}
	var pos = {};
	pos.x = 1;
	pos.y = 3;
	var posv = {};
	posv.x = 0;
	posv.y = 0;
	var k = {};
	k.x = 0;
	k.y = 0;
	var starttime = Date();
	var timelapse = 1000;
	for (;;)
	{
		var key;
		window.onkeydown = function(e) {key = e.keyCode;}
		switch(key)
		{
			case 87:k.x = -1; k.y = 0;break;
			case 83:k.x = 1; k.y = 0;break;
			case 65:k.x = 0; k.y = -1;break;
			case 68:k.x = 0; k.y = 1;break;
			case 27:close();break;
		}
		if(maze[pos.x + k.x][pos.y + k.y]==0)
		{
			posv.x = k.x;
			posv.y = k.y;
		}
		if(maze[pos.x + posv.x][pos.y + posv.y]==0)
		{
			pos.x = pos.x + posv.x;
			pos.y = pos.y + posv.y;
			var aux;
			aux = document.getElementsByClassName(String(pos.x)+String(pos.y));
			aux.setAttribute('src',localStorage.getItem("avatar"))
		}
		await sleep(30);
	}
}
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
</script>