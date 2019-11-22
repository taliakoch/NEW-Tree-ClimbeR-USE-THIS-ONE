//var image=new Image();
var image2 = new Image();
image2.src="images/apple.jpg.png";
var appleScore = 0;


function addApple(x,y,l) {
  GAME.apples.push(new Apple(x,y));
}

function Apple(x,y) {
  //x- and y-coordinates of an individual acorn
  this.x=x;
  this.y=y;
}

//Initial timer before acorns start spawning
var appleAddTimer=200;

function animateApples() {

  if(appleAddTimer==0) {
    addApple(Math.random()*GAME.canvas.width, 0);
    //Time before next acorn should be added
    appleAddTimer=130;
  }
  appleAddTimer--;

  //Moves the acorns down the screen at speed 3, as if the player is moving up
  for(var i = 0; i < GAME.apples.length; i++) {
    GAME.apples[i].y+=2;

    //Removes an acorn if it is off screen
    if(GAME.apples[i].y>GAME.canvas.height) {
      GAME.apples.splice(i, 1);
      i--;
    }
  }
}

function RenderApples(context) {
  //Temporary Rectangle Acorn Sprite
  context.fillStyle='red';
  for(var i = 0; i < GAME.apples.length; i++) {
    context.drawImage (image2, GAME.apples[i].x,GAME.apples[i].y, 40, 40);
  }
}

function appleCollision ()
{
  for (var i=0; i< GAME.apples.length; i++){
  var appleX = GAME.apples[i].x;
  var appleY = GAME.apples[i].y;
  if ((GAME.players[0].x-40 <= appleX+20 && appleX+20 <= GAME.players[0].x + 40) && (GAME.players[0].y-120 <= appleY+20 && appleY+20 <= GAME.players[0].y))
  {
    appleScore +=1;
    GAME.apples.splice (i,1);
  }
}
}
