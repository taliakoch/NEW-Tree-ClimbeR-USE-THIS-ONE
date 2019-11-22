function scoreBoard (context)
{
context.fillStyle='yellow';
  context.fillRect (330, 10, 120, 60);
  context.fillStyle='black';
  context.font = "20px Arial";
  context.fillText(" Score: " + distance, 330, 30);

  context.fillStyle='black';
  context.font = "20px Arial";
  context.fillText(" Apples: "+appleScore, 330, 60);
}
