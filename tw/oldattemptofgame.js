$(document).ready(function(){
    console.log("jQuery has loaded");

    var pacman = {};
    pacman.x=$(document).width()*0.026;
    pacman.y=$(document).height()*0.01;

    $(document).on('keydown', controls);

    function controls(event){
        console.log(event.which);

        
            lastKey=event.which;

            switch(lastKey){
                case 65:
                    $('#pacman').css({
                        'left': (pacman.x -= 1) + '%'
                    });
                    break;
                case 87:
                    $('#pacman').css({
                        'top': (pacman.y -= 1) + '%'
                    });
                    break;
                case 68:
                    $('#pacman').css({
                        'left': (pacman.x += 1) + '%'
                    });
                    break;
                case 83:
                    $('#pacman').css({
                        'top': (pacman.y += 1) + '%'
                    });
                    break;
                case false:
                    $('#pacman').css({
                        'left':((pacman.x) += 1) + '%'
                    })
                    break;
                }
        
    }
})