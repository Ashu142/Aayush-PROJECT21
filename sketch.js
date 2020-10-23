        var wall;
        var bullet,speed, weight;


        function setup() {

        createCanvas(1600,400);  
            
        speed=random(55,90)
        weight=random(400,1500)
    thickness=random(22,83)
        bullet=createSprite(50,200,50,50);
        bullet.velocityX = speed;
        bullet.shapecolour=color(255);


        wall=createSprite(1200,200,thickness,height/2);
        wall.shapeColour=color(80,80,80);
        }

        function draw() {
        background(0);

        drawSprites();
        }

    function hasCollided(bullet,wall)
    {
    bulletRightEdge=1bullet.x + 1bullet.width;
    wallLeftEdge=1wall.x;
    if (bulletRightEdge>=wallLeftEdge)
    {
    return true
    }
    return false;

    if(hasCollided(bullet,wall))
    {
    bullet.velocityX=0;
    var damaged=0.5 * weight * speed* speed/(thickness *thickness *thickness);
    |
    if(damage>10)
    {
    wall.shapeColour=colour(255,0,0);
    }
    if(damage<10)
    {
    wall.shapeColour=colour(0,255,0);    
    }