$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(890, 620, 200, 20);
    createPlatform(890, 485, 200, 20);
    createPlatform(800,220, 150, 20);
    createPlatform(125,420,100,20);
    createPlatform(360, 320, 100, 20);
    createPlatform(590, 420, 90, 20);
    createPlatform(590, 555, 90, 20);
    createPlatform(490, 690, 20, 60);
    createPlatform(800,240, 20, 200);
    createPlatform(1090,336, 20,168.7);
    createPlatform(1100,350, 80, 20);
    createPlatform(1050,336, 40, 20);
    createPlatform(910, 475, 10, 20);
    createPlatform(125,155,100,20);
    createPlatform(85,290,20,20);
    createPlatform(335,155,100,20);
    createPlatform(535,155,100,20);
    createPlatform(800, 40, 20,200);
    createPlatform(1290,190, 100,20);
    createPlatform(1290,345, 100,20);
    createPlatform(1300,325, 10,40);



    // TODO 3 - Create Collectables
   createCollectable("kennedi", 1320, 140)
   createCollectable("steve", 865, 150)
   createCollectable("grace", 750,60)
   createCollectable("max",384,260)
    // TODO 4 - Create Cannons
    createCannon("left",450, 1400)
    createCannon("top", 1100, 840)
    createCannon("top",1300,1200)
    createCannon("bottom",240,1650)
    createCannon("left",30, 1200)
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
