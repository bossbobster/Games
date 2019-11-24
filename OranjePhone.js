//THIS IS KHAN ACADEMY CODE (PROCESSING JS)

frameRate(60);

//global variables
var curApp = "off";

//password variables
var password = "";

//home variables
var appColors = [[[10, 255, 80], [255, 100, 0], [255, 255, 255], [255, 255, 20]], [[200, 200, 200], [255, 255, 255], [100, 100, 100], [255, 255, 255]], [[0, 225, 0], [0, 0, 0], [255, 255, 255], [random(0, 255), random(0, 255), random(0, 255)]], [[30, 255, 255], [255, 255, 255], [0, 0, 255], [255, 220, 0]], [[255, 255, 255], [100, 50, 0], [255, 255, 255], [200, 200, 200]]];
var apps = [["memetube", "dotclicker", "", "calculator"], ["clock", "", "beatmaker", ""], ["snake", "asteroids", "", "seizure"], ["crossyroad", "", "chatbot", "flappybird"], ["", "draw", "", "dinosaur"]];

//calculator variables
var o1 = "";
var o2 = "";
var digits=0;
var operator1 = true;
var result = "";
//+,-./,x
var operator = "";
var key1="";
var keyP="";
//keys['key',keyX, keyY, keyW, keyR, keyB, keyG, keyS, keyDX, keyDY] - can           be used both to render the calculator, and to identify in a single for             what key was pressed.
var keys = [[1, 105, 100, 40, 235, 235, 235, 40, 10, 35],[2,150, 100, 40,          235,235, 235, 40, 10, 35], [3, 195, 100, 40, 235, 235, 235, 40, 10,35], ["+", 240,100, 50, 133, 111, 0, 40, 14, 30], [4, 105, 150, 40,           235, 235,235, 40, 10, 35],[5, 150, 150, 40, 235, 235, 235, 40, 10,           35], [6, 195, 150, 40, 235, 235, 235,40, 10, 35], ["-", 240, 150, 50,         133, 111, 0, 40, 18, 32], [7, 105, 200, 40,       235, 235, 235, 40, 10,           35],[8, 150, 200, 40, 235, 235, 235, 40, 10, 35], [9, 195,200,40, 235, 235, 235, 40, 10, 35], ["*", 240, 200, 50, 133, 111, 0, 40, 17, 45], ["=", 105, 250, 40, 232, 178, 0, 40, 9, 31],[0, 150, 250, 40, 235,          235, 235, 40, 10, 35], ["AC", 195, 250, 40, 232, 178, 0, 25, 3, 29], ["/",         240, 250, 50, 133, 111, 0, 40, 18, 35], ["^", 105, 300, 60, 133, 111, 0, 35, 20, 38]     , ["√", 170, 300, 60, 133, 111, 0, 35, 15, 38], ["%", 235, 300, 55, 133, 111, 0     , 35, 11, 34]];
var smartRound = function(num)
{
    //see if the rounding error is very small and only round in that case
    if(abs(round(num) - num) <= 0.001)
    {
        return round(num);
    } 
    else 
    {
        return (num);
    }
};
        


//memetube variables
var curScreen = "Home";
var screens = ["Home", "Newest", "  Top", "Generator"];
var images = [getImage("avatars/mr-pink-orange"), getImage("avatars/old-spice-man"), getImage("avatars/purple-pi-teal"), getImage("avatars/robot_male_3"), getImage("avatars/spunky-sam-green"), getImage("creatures/Hopper-Cool"), getImage("creatures/Winston"), getImage("avatars/avatar-team"), getImage("avatars/mr-pants-with-hat"), getImage("avatars/marcimus-orange"), getImage("avatars/orange-juice-squid"), getImage("avatars/robot_male_3"), getImage("avatars/robot_male_1"), getImage("avatars/starky-sapling"), getImage("creatures/OhNoes-Hmm"), getImage("creatures/OhNoes-Happy"), getImage("avatars/primosaur-ultimate"), getImage("avatars/leafers-seed"), getImage("avatars/duskpin-ultimate"), getImage("avatars/leaf-red")];
var texts = ["When you win the lottery", "When you try to be cool", "It's ok! At least you're not as sad as me!", "When you see your friend at the mall", "You are loved", "When you go to the pet store and see this", "When you get beaten by your little brother", "When your mom is 'disapointed' in you", "My face when I saw my grade", "I failed life", "When you make a meme", "When you find out how hotdogs are made", "Why", "Whaaaaa?", "When you draw something ugly", "When you see the iPhone 11", "When you get your Oranje phone", "When your friend flexes his watch", "When you realize a project is due", "When you drop your phone"];
var homeNums = [0, 0, 0];
var newestNums = [0, 0, 0];
var topNums = [0, 0, 0];
var yourMessage = "";
var yourImage = getImage("avatars/avatar-team");
var currentMessage = "";
var currentImage = getImage("cute/Blank");


//asteroids variables
var curPlay = "no";
var asteroidsFont = createFont("fantasy");
var shipX = 200;
var speed = 0;
var asteroidX = 0;
var asteroidY = 0;
var asteroidS = 0;
var asteroidR = 0;
var projectileX = 0;
var projectileY = 0;
var score = 0;
var highscore = 0;



//snake variables
var curPlaySnake = "no";
var snake = [[13, 15], [14, 15], [15, 15]];
var apple = [0, 0];
var snakeFont = createFont("times new roman");
var snakeHighscore = 0;
var snakeScore = 0;
var direction = [1, 0];
var time = 0;
var temp = [0];
var snakeSpeed = 1;


//drawing app variables
var brushW = 20;
var selColor = 0;
var colors=[[255, 0, 0],[0, 255, 0],[0, 0, 255],[255, 255, 0],[255, 0, 255],[0, 255, 255],[0, 0, 0],[255, 187, 0],[10, 156, 0],[130, 91, 0],[255,255,255]];
var firstDraw = false;
var prevMouseX = 0;
var prevMouseY = 0;

var drawBrush = function(y, brs)
{
    //side rectangles
    strokeWeight(1);
    stroke(0, 0, 0);
    fill(255, 255, 255);
    rect(283, y, 30, 30);
    if(brushW / 4.3 * 4 / 3 === brs)
    {
        fill(colors[selColor][0], colors[selColor][1], colors[selColor][2]);
        ellipse(298.5, y + 16, brs*4.3 / 4 * 3, brs*4.3 / 4 * 3);
    }
    ellipse(298.5, y + 16, brs*4.3 / 4 * 3, brs*4.3 / 4 * 3);
};

var drawColor = function(x, clr)
{
    //side rectangles
    strokeWeight(1);
    stroke(0, 0, 0);
    fill(255, 255, 255);
    rect(x + 87.5, 310, 21.6, 30);
    fill(colors[clr][0], colors[clr][1], colors[clr][2]);
    if(clr === selColor) 
    {
        ellipse(x + 99.5, 325.5, brushW * 21.6 / 30, brushW);
    }
    else 
    {
        ellipse(x + 99.5, 325.5, 20 * 21.6 / 30, 20);
    }
};



//clock variables
var clockFont = createFont("fantasy");
var stopwatch = [0, 0, 0, 0];
var stopwatchGoing = false;
var firstText = "START";



//chatbot variables
var possibleTexts = ["LOL", "I know, right?", "What did you do?", "Me too!", "YOLO", "GTG", "BYEEEE!", "Why?", "Please stop", "What, you've never played Tuber Simulator?", ":)", ":(", ";)", "What do you mean", "Come on!", "Good night", "Hi", "No you", "Cheese", "What?", "I need help on homework", "Can I come over?", "Can you come over?", "I don't have one", "What did you get on the text", "Ok", "K", "No", "Sure", "Yes", "Why not"];
var curText = "";
var curX = 0;
var curY = 0;
var curW = 0;
var curH = 0;
var allTexts = [];
var allX = [];
var allY = [];
var allW = [];
var allH = [];
var curNum = 0;
var y = 0;



//beat maker variables
var sounds = [getSound("rpg/battle-swing"), getSound("rpg/coin-jingle"), getSound("rpg/giant-hyah"), getSound("rpg/giant-no"), getSound("rpg/giant-yah"), getSound("rpg/hit-clop"), getSound("rpg/hit-splat"), getSound("rpg/hit-thud"), getSound("rpg/hit-whack"), getSound("rpg/metal-chime"), getSound("rpg/metal-clink"), getSound("rpg/step-heavy"), getSound("rpg/water-bubble"), getSound("rpg/water-slosh"), getSound("retro/boom1"), getSound("retro/boom2"), getSound("retro/coin"), getSound("retro/hit2"), getSound("retro/jump1"), getSound("retro/jump2"), getSound("retro/laser1"), getSound("retro/laser2"), getSound("retro/laser3"), getSound("retro/laser4"), getSound("retro/thruster-short")];
var curSoundIdx = 0;
var curTime = "";
var curSong = [];
var songPlaying = false;
var songTime = 0;



//crossy road variables
var curPlayCrossy = false;
var curRow = 7;
var curColumn = 4;
var curDirection = 0;
var curCoin = 0;
var curCoinPlace = 0;
var curIdx = 11;
var possibleStages = ["road", "grass"];
var curGame = [["grass", ""], ["grass", ""], ["grass", ""], ["grass", ""], ["grass", ""], ["grass", ""], ["grass", ""], ["grass", ""], ["grass", ""], ["grass", ""]];
var speeds = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var crossyColors = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]];
var directions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var startXs = [58.5, 283.5];
var Xs = [87.5, 87.5, 87.5, 87.5, 87.5, 87.5, 87.5, 87.5, 87.5, 87.5];
var crossyScore = 0;
var crossyHighscore = 0;



//dinosaur variables
var dinosaurY = 195;
var jumping = false;
var curPlayDinosaur = false;
var dinosaurTime = 0;
var dinosaurScore = 0;
var dinosaurHighscore = 0;
var obstacleX = 312.5;
var gameSpeed = 2.5;
var randNum = 312.5;




//dot clicker variables
var dotX = 200;
var dotY = 200;
var dotS = 10;
var dotclickerScore = 0;
var dotclickerHighscore = 0;
var dotColor = [255, 255, 255];
var dotTimeLimit = 5;
var dotclickerTime = 0;
var curPlayDotclicker = false;




//flappy bird variables
var flappyBackgroundX = 0;
var pipeThing = function(x, y)
{
    stroke(0, 0, 0);
    fill(0, 186, 25);
    rect(max(87.5, min(312.5, x)), 50, max(0, min(min(x - 37.5, 50), 312.5 - x)), y);
    rect(max(87.5, min(312.5, x - 10)), y + 50, max(0, min(min(x - 27.5, 70), 322.5 - x)), 20);
    rect(max(87.5, min(312.5, x)), y + 180, max(0, min(min(x - 37.5, 50), 312.5 - x)), 335 - y - 175);
    rect(max(87.5, min(312.5, x - 10)), y + 160, max(0, min(min(x - 27.5, 70), 322.5 - x)), 20);
};
var curPlayFlappy = false;
var flappyScore = 0;
var flappyHighscore = 0;
var flappyJump = false;
var birdY = 150;
var pipeH = [random(0, 150), random(0, 150)];
var speed = 1;
var flappyTime = 0;
var ogY = 0;



//seizure variables
var curPlaySeizure = false;




draw = function()
{
    if(curApp !== "draw")
    {
        background(255, 255, 255);
    }
    //top & bottom
    fill(163, 163, 163);
    rect(87.5, 25, 225, 40, 30);
    if(curApp === "draw" && !firstDraw)
    {
        fill(255, 255, 255);
        noStroke();
        rect(88.5, 50, 223, 314);
        firstDraw = true;
    }
    if(curApp === "draw")
    {
        fill(0, 0, 0);
        noStroke();
        rect(88.5, 50, 223, 20);
        fill(255, 255, 255);
        text("DRAW!", 168, 64);
    }
    stroke(0, 0, 0);
    fill(163, 163, 163);
    rect(87.5, 317, 225, 57.5, 30);
    //power button
    rect(308, 110, 10, 25, 30);
    //circle button
    ellipse(200, 358, 30, 30);
    //post-it
    fill(247, 255, 0);
    rotate(-30);
    rect(62, 59, 30, 30);
    fill(0, 0, 0);
    textSize(11);
    text("Code:", 63, 70);
    text("3215", 64, 85);
    rotate(30);
    //logo
    fill(255, 200, 0);
    ellipse(290, 38, 20, 20);
    fill(0, 186, 3);
    ellipse(292, 33, 3, 3);
    fill(5, 5, 5);
    text("Oranje", 240, 41);
    //camera
    fill(0, 0, 0);
    ellipse(200, 38, 15, 15);
    fill(79, 79, 79);
    ellipse(200, 38, 7, 7);
    //code that makes EVERY button work
    mouseReleased = function()
    {
        if(mouseX > 185 && mouseX < 215 && mouseY > 343 && mouseY < 373)
        {
            firstDraw = false;
            if(curApp === "off")
            {
                curApp = "passcode";
            }
            else if(curApp === "passcode" || curApp === "home")
            {
                curApp = curApp;
            }
            else
            {
                curApp = "home";
            }
        }
        if(mouseX > 312.5 && mouseX < 333 && mouseY > 110 && mouseY < 135)
        {
            if(curApp === "off")
            {
                curApp = "passcode";
            }
            else
            {
                curApp = "off";
                firstDraw = false;
            }
        }
        if(curApp === "passcode")
        {
            for(var i = 0; i < 3; i ++)
            {
                for(var j = 1; j <= 3; j ++)
                {
                    if(mouseX > (j * 70 + 35) && mouseX < (j * 70 + 85) &&
                       mouseY > (i * 70 + 85) && mouseY < (i * 70 + 135))
                    {
                        password += String(i * 3 + j); 
                    }
                }
            }
        }
        if(curApp === "home")
        {
            for(var i = 0; i < 5; i ++)
            {
                for(var j = 0; j < 4; j ++)
                {
                    if(mouseX > (55 * j + 95) && mouseX < (55 * j + 140) &&                           mouseY > (55 * i + 60) && mouseY < (55 * i + 105))
                    {
                        curApp = apps[i][j];
                        curPlay = "no";
                        curPlaySnake = "no";
                        curScreen = "Home";
                    }
                }
            }
        }
        if(curApp === "memetube")
        {
            for(var i = 0; i < screens.length; i ++)
            {
                if(mouseX > 90 + 55 * i && mouseX < 133 + 55 * i && mouseY > 101 &&                     mouseY < 126)
                {
                    curScreen = screens[i];
                    if(curScreen === "Generator")
                    {yourImage = images[round(random(0, 19))];}
                }
            }
            if(curScreen === "Generator")
            {
                if(mouseX > 100 && mouseX < 140 && mouseY > 230 && mouseY < 245)
                {
                    currentImage = yourImage;
                    currentMessage = yourMessage;
                    images.push(yourImage);
                    texts.push(yourMessage);
                    yourImage = images[round(random(0, 19))];
                    yourMessage = "";
                }
                if(mouseX > 180 && mouseX < 220 && mouseY > 185 && mouseY < 225)
                {
                    yourImage = images[round(random(0, 19))];
                }
            }
        }
        
        if(curApp === "asteroids")
        {
            projectileX = shipX - 2.5;
            projectileY = 300;
        }
        
        if(curApp === "draw")
        {
            if(mouseX > 282 && mouseX < 313 && mouseY > 310 && mouseY < 340)
            {
                fill(255, 255, 255);
                rect(87.5, 50, 195, 260, 0);
            }
            if(mouseY > 50 && mouseY < 80 && mouseX > 282.5 && mouseX < 312.5) 
            {
                selColor=10;
                brushW = 30;
            }
            if(mouseX > 282.5 && mouseX < 312.5 && mouseY < 319 && mouseY > 80)
            {
                brushW=round(((mouseY - 65)/30))*4.3 / 4 * 3;
                fill(255, 0, 0);
            }
            else if(mouseY > 299.5 && mouseY < 329.5 && mouseX > 81.5 && mouseX < 281)
            { 
                //color
                selColor = round((mouseX - 81)/21.6)-1;
            } 
        }
        
        if(curApp === "clock")
        {
            rect(100, 267, 70, 40);
            rect(230, 267, 70, 40);
            if(mouseX > 100 && mouseX < 170 && mouseY > 267 && mouseY < 307)
            {
                if(firstText === "START")
                {
                    stopwatchGoing = true;
                    firstText = "STOP";
                }
                else
                {
                    stopwatchGoing = false;
                    firstText = "START";
                }
            }
            if(mouseX > 230 && mouseX < 300 && mouseY > 267 && mouseY < 307)
            {
                stopwatchGoing = false;
                firstText = "START";
                stopwatch[0] = stopwatch[1] = stopwatch[2] = stopwatch[3] = 0;
            }
        }
        if(curApp === "chatbot")
        {
            rect(270, 85, 31, 11); 
            if(mouseX > 270 && mouseX < 301 && mouseY > 85 && mouseY < 96)
            {
                if(300 - textWidth(curText) >= 210) {allX.push(300 - textWidth(curText));}
                else {allX.push(209);}
                if(allY.length > 0) {allY.push(allY[allY.length - 1] + allH[allH.length - 1] + 5);}
                else {allY.push(150);}
                allH.push(floor(textWidth(curText) / 80) * 14 + 12);
                allW.push(min(90, textWidth(curText)));
                allTexts.push(curText);
                
                //bot generated text
                curNum = round(random(0, possibleTexts.length - 1));
                allX.push(91.5);
                allY.push(allY[allY.length - 1] + allH[allH.length - 1] + 5);
                allW.push(min(90, textWidth(possibleTexts[curNum])));
                allH.push(floor(textWidth(possibleTexts[curNum]) / 80) * 14 + 12);
                allTexts.push(possibleTexts[curNum]);
            }
            if(mouseX > 307 && mouseX < 312.5 && mouseY > 230 && mouseY < 237)
            {
                if(y > 0)
                {
                    y -= 10;
                }
            }
            if(mouseX > 307 && mouseX < 312.5 && mouseY > 240 && mouseY < 247)
            {
                if(y < allY[allY.length - 1] - 10)
                {
                    y += 10;
                }
            }
        }
        
        if(curApp === "beatmaker")
        {
            for(var i = 0; i < 5; i ++)
            {
                for(var j = 0; j < 5; j ++)
                {
                    if(mouseX >= 117 + j * 10 && mouseX <= 127 + j * 10 && mouseY >= 70 + i * 10 && mouseY <= 80 + i * 10)
                    {
                        curSoundIdx = i * 5 + j;
                        playSound(sounds[curSoundIdx]);
                    }
                }
            }
            if(mouseX > 285 && mouseX < 305 && mouseY > 110 && mouseY < 120)
            {
                curSong.push([sounds[curSoundIdx], parseInt(curTime, 10)]);
            }
            if(mouseX > 117.5 && mouseX < 167.5 && mouseY > 130 && mouseY < 150)
            {
                songPlaying = true;
            }
            if(mouseX > 232.5 && mouseX < 282.5 && mouseY > 130 && mouseY < 150)
            {
                if(songPlaying) {songPlaying = false;}
                else {songTime = 0;}
            }
            if(mouseX > 180.5 && mouseX < 220.5 && mouseY > 130 && mouseY < 150)
            {
                while(curSong.length !== 0) {curSong.pop();}
            }
            if(mouseX > 210 && mouseX < 241 && mouseY > 110 && mouseY < 120)
            {
                for(var i = 0; i < curSong.length; i ++)
                {
                    if(curSong[i][1] === parseInt(curTime, 10)) {curSong.pop();}
                }
            }
        }
        
        if(curApp === "dotclicker")
        {
            if(mouseX > dotX - (dotS / 2) && mouseX < dotX + (dotS / 2) && mouseY > dotY - (dotS / 2) && mouseY < dotY + (dotS / 2))
            {
                dotclickerScore ++;
                dotColor = [random(150, 255), random(150, 255), random(150, 255)];
                dotS = random(5, 30);
                dotX = random(87.5 + (dotS / 2), 312.5 - (dotS / 2));
                dotY = random(50 + (dotS / 2), 340 - (dotS / 2));
                if(dotTimeLimit > 1) {dotTimeLimit -= 0.05;}
                dotclickerTime = 0;
            }
        }
    };
    
    
    
    keyPressed = function()
    {
        if(curScreen === "Generator" && curApp === "memetube")
        {
            if(key.code !== 8 && key.code !== 65535 && key.code !== 10){yourMessage+= key.toString();}
            if(key.code === 8){yourMessage = yourMessage.substring(0, yourMessage.length - 1);}
        }
        if(curApp === "asteroids")
        {
            if(key.code === 32 && curPlay === "no")
            {
                curPlay = "yes";
                shipX = 200;
                speed = 0;
                asteroidX = 0;
                asteroidY = 0;
                asteroidS = 0;
                asteroidR = 0;
                projectileX = 0;
                projectileY = 0;
                score = 0;
            }
            if(key.code === 65535 && curPlay === "yes"){curPlay = "no";}
            if(curPlay === "yes")
            {
                switch(key.code)
                {
                    case 97:
                        shipX -= 10;
                        break;
                    case 100:
                        shipX += 10;
                        break;
                    default:
                        break;
                }
            }
        }
        if(curApp === "snake")
        {
            if(key.code === 32 && curPlaySnake === "no")
            {
                curPlaySnake = "yes";
                snake = [[13, 15], [14, 15], [15, 15]];
                apple = [round(random(0, 28)), round(random(0, 28))];
                snakeScore = 0;
                direction = [1, 0];
                time = 0;
                snakeSpeed = 1;
            }
            if(key.code === 65535 && curPlaySnake === "yes"){curPlaySnake = "no";}
            if(curPlaySnake === "yes")
            {
                switch(key.code)
                {
                    case 97:
                        if(direction[0] !== 1) 
                        {
                            direction = [-1, 0];
                            time = 10;
                            playSound(getSound("retro/jump2"));
                        }
                        break;
                    case 100:
                        if(direction[0] !== -1) 
                        {
                            direction = [1, 0];
                            time = 10;
                            playSound(getSound("retro/jump2"));
                        }
                        break;
                    case 115:
                        if(direction[1] !== -1) 
                        {
                            direction = [0, 1];
                            time = 10;
                            playSound(getSound("retro/jump2"));
                        }
                        break;
                    case 119:
                        if(direction[1] !== 1) 
                        {
                            direction = [0, -1];
                            time = 10;
                            playSound(getSound("retro/jump2"));
                        }
                        break;
                    default:
                        break;
                }
            }
        }
        if(curApp === "chatbot")
        {
            if(key.code !== 8 && key.code !== 65535 && key.code !== 10){curText += key.toString();}
            if(key.code === 8){curText = curText.substring(0, curText.length - 1);}
        }
        if(curApp === "beatmaker")
        {
            if(key.code >= 48 && key.code <= 57){curTime += key.toString();}
            if(key.code === 8){curTime = curTime.substring(0, curText.length - 1);}
        }
        if(curApp === "crossyroad")
        {
            if(key.code === 32 && !curPlayCrossy) {curPlayCrossy = true; crossyScore = 0;}
            if(key.code === 65535 && curPlayCrossy) {curPlayCrossy = false;}
            if(curPlayCrossy)
            {
                switch(key.code)
                {
                    case 97:
                        if(curColumn > 0) {curColumn --;}
                        break;
                    case 100:
                        if(curColumn < 8) {curColumn ++;}
                        break;
                    case 115:
                        if(curRow < 9) {curRow ++;}
                        break;
                    case 119:
                        if(curRow > 7) {curRow --;}
                        else 
                        {
                            crossyScore ++; 
                            var tmp = round(random(0, 1)); 
                            curGame.push([possibleStages[tmp], ""]);
                            if(tmp === 1) {speeds.push(0); colors.push([0, 0, 0]); directions.push(round(random(0, 1))); Xs.push(startXs[directions[directions.length - 1]]);}
                            if(tmp === 0) {speeds.push(random(0.001, 5)); colors.push([random(0, 255), random(0, 255), random(0, 255)]); directions.push(round(random(0, 1))); Xs.push(startXs[directions[directions.length - 1]]);}
                        }
                        break;
                    default:
                        break;
                }
            }
        }
        
        if(curApp === "dinosaur")
        {
            if(curPlayDinosaur === true)
            {
                switch(key.code)
                {
                    case 32:
                        jumping = true;
                        break;
                }
                if(key.code === 65535) {curPlayDinosaur = false;}
            }
            else
            {
                if(key.code === 32) {curPlayDinosaur = true;}
            }
        }
        
        if(curApp === "dotclicker")
        {
            if(!curPlayDotclicker)
            {
                if(key.code === 32) {curPlayDotclicker = true;}
            }
            else
            {
                if(key.code === 65535) {curPlayDotclicker = false;}
            }
        }
        
        if(curApp === "flappybird")
        {
            if(!curPlayFlappy)
            {
                if(key.code === 32) 
                {
                    curPlayFlappy = true;
                    flappyBackgroundX = 0; 
                    flappyScore = 0;
                    flappyJump = false;
                    birdY = 150;
                    pipeH = [random(0, 150), random(0, 150)];
                    speed = 0.5;
                }
            }
            else
            {
                if(key.code === 65535) {curPlayFlappy = false;}
                if(key.code === 32) {flappyJump = true; ogY = birdY; flappyTime = 0;}
            }
        }
        
        if(curApp === "seizure")
        {
            if(!curPlaySeizure)
            {
                if(key.code === 32) {curPlaySeizure = true;}
            }
            else
            {
                if(key.code === 65535) {curPlaySeizure = false;}
            }
        }
    };
    //mouse clicked function for calculator
    mouseClicked = function() 
    {
        for(var i = 0; i < keys.length; i ++) {
            if(mouseX > keys[i][1] && mouseX < keys[i][1] + keys[i][3] &&                         mouseY > keys[i][2] && mouseY < keys[i][2] + 40) 
            {
                keyP = keys[i][0];
                if (keyP === "=")
                {
                    switch(operator)
                    {
                        case "+":
                            result = o1 + o2;
                            break;
                        case "-":
                            result = o1 - o2;
                            break;
                        case "*":
                            result = o1 * o2;
                            break;
                        case "/":
                            result = o1 / o2;
                            break;
                        case "^":
                            result = pow(o1, o2);
                            break;
                        case "√":
                            result = smartRound(pow(o2, 1/o1));
                            break;
                        case "%":
                            result = o1 * (o2 / 100);
                            break;
                        default:
                            result = o1;
                            break;
                    }
                    o1 = result;
                    result = "";
                    o2 = "";
                    operator1 = true;
                    operator = "";
                    digits = 0;
                    break;
                }
                if (keyP > -1 && keyP < 10 && keyP !== "=")
                {
                    key1 = keys[i][0];
                    digits++; //we only support 9 digits
                    if(digits<10)
                    {
                        if(operator1 === true)
                        {
                            o1 = Math.floor(o1 * 10 + key1);
                        }
                        else
                        {
                            o2 = Math.floor(o2 * 10 + key1);
                        }
                    }
                    break;
                }
                if (operator1 === true && o1 !== "" && (keyP === "*" || keyP                           === "+" || keyP === "-" || keyP === "/" || keyP === "^" ||                         keyP === "√" || keyP === "%"))
                {
                    operator1 = false;
                    operator = keys[i][0];
                    digits=0;
                    break;
                }
            }
            if(keyP === "AC") 
            {
                o1 = "";
                o2 = "";
                digits=0;
                operator1 = true;
                result = "";
                operator = "";
            }
        }
        keyP="";
    };
    
    
    //if the phone is off
    if(curApp === "off")
    {
        //screen
        fill(0, 0, 0);
        rect(87.5, 50, 225, 290, 0);
    }
    
    //if the phone is in the password screen
    if(curApp === "passcode")
    {
        //background
        fill(94, 94, 94);
        rect(87.5, 50, 225, 290, 0);
        //title
        fill(0, 0, 0);
        textSize(30);
        text("PASSCODE", 117.5, 77.5);
        //buttons
        for(var i = 0; i < 3; i ++)
        {
            for(var j = 1; j <= 3; j ++)
            {
                fill(171, 171, 171);
                ellipse(j * 70 + 60, i * 70 + 110, 50, 50);
                fill(0, 0, 0);
                text(3 * i + j, j * 70 + 51.5, i * 70 + 120);
            }
        }
        //current passcode
        ellipse(200, 310, 50, 50);
        fill(255, 255, 255);
        textSize(14);
        text(password, 184, 314);
        if(password.length === 4 && password !== "3215")
        {
            for(var i = 0; i < 2000000; i ++)
            {}
            password = "";  
        }
        if(password === "3215")
        {
            curApp = "home";
            password = "";
            for(var i = 0; i < 3; i ++)
            {
                if(i === 0)
                {
                    homeNums[i] = round(random(0, images.length - 1));
                    newestNums[i] = round(random(0, images.length - 1));
                    topNums[i] = round(random(0, images.length - 1));
                }
                if(i === 1) 
                { 
                    homeNums[i] = round(random(0, images.length - 1));
                    newestNums[i] = round(random(0,images.length - 1));
                    topNums[i] = round(random(0, images.length - 1));
                    while(homeNums[i] === homeNums[0]){homeNums[i] = round(random(0, images.length - 1));}
                    while(newestNums[i] === newestNums[0]){newestNums[i] = round(random(0, images.length - 1));}
                    while(topNums[i] === topNums[0]){topNums[i] = round(random(0, images.length - 1));}
                }
                if(i === 2) 
                { 
                    homeNums[i] = round(random(0, images.length - 1));
                    newestNums[i] = round(random(0, images.length - 1));
                    topNums[i] = round(random(0, images.length - 1));
                    while(homeNums[i] === homeNums[0] || homeNums[i] === homeNums[1]){homeNums[i] = round(random(0, images.length - 1));}
                    while(newestNums[i] === newestNums[0] || newestNums[i] === newestNums[1]){newestNums[i] = round(random(0, images.length - 1));}
                    while(topNums[i] === topNums[0] || topNums[i] === topNums[1]){topNums[i] = round(random(0, images.length - 1));}
                }
            }
        }
    }
    
    
    //if the phone is in the home screen
    if(curApp === "home")
    {
        //background
        fill(0, 196, 255);
        rect(87.5, 50, 225, 290, 0);
        fill(255, 0, 0);
        for(var i = 0; i < 5; i ++)
        {
            for(var j = 0; j < 4; j ++)
            {
                fill(appColors[i][j][0], appColors[i][j][1], appColors[i][j][2]);
                rect(55 * j + 95, 55 * i + 60, 45, 45, 20);
            }
        }
    }
    
    
    //if the current app is calculator
    if(curApp === "calculator")
    {
        //background
        fill(222, 222, 222);
        rect(87.5, 50, 225, 290, 0);
        for(var i = 0; i < keys.length; i++) {
            fill(keys[i][4], keys[i][5], keys[i][6]);
            rect(keys[i][1], keys[i][2],  keys[i][3], 40);
            textSize(keys[i][7]);
            fill(0, 0, 0);
            text(keys[i][0], keys[i][1] + keys[i][8], keys[i][2] + keys[i][9]);
        }
        fill(69, 69, 69);
        //screen
        rect(107.5, 60, 180, 35);
        
        //text on calculator screen
        textSize(15);
        fill(255, 255, 255);
        if(result === "")
        {
            text(o1 + " " + operator + " " + o2, 110, 70, 190, 40);
        }
        else
        {
            text(smartRound(result), 115, 78, 200, 40);
        }
        if(o1 > 100000000000) 
        {
            result = "ERROR";
        }
        key1="";
    }
    
    
    
    //memetube
    if(curApp === "memetube")
    {
        //screen
        fill(255, 255, 255);
        rect(87.5, 50, 225, 290, 0);
        
        //title
        fill(random(0, 255), random(0, 255), random(0, 255));
        textSize(30);
        text("M", 100, 95);
        text("E", 126, 90);
        text("M", 152, 85);
        text("E", 178, 80);
        text("T", 204, 80);
        text("U", 230, 85);
        text("B", 256, 90);
        text("E", 282, 95);
        textSize(20);
        text("LoL", 185, 100);
        line(87.5, 101, 312.5, 101);
        
        //hotbar
        fill(0, 0, 0);
        rect(87.5, 101, 225, 25);
        fill(242, 242, 242);
        textSize(12);
        for(var i = 0; i < screens.length; i ++)
        {
            text(screens[i], 55 * i + 90, 118);
            if(mouseX > 90 + 55 * i && mouseX < 133 + 55 * i && mouseY > 101 &&                     mouseY < 126)
            {
                for(var j = 0; j < screens[i].length - 1; j ++)
                {
                    text("_", 90 + 55 * i + 7 * j, 119);
                }
            }
            stroke(242, 239, 239);
            if(i < screens.length - 1){line(55 * i + 135, 101, 55 * i + 135, 126);}
        }
        stroke(0, 0, 0);
        fill(0, 0, 0);
        if(curScreen === "Home")
        {
            textSize(20);
            text("HOME", 170, 146);
            textSize(12);
            line(87.5, 150, 312.5, 150);
            text(texts[homeNums[0]], 87, 161, 226, 100);
            image(images[homeNums[0]], 172, 177, 40, 40);
            line(87.5, 222.5, 312.5, 222.5);
            text(texts[homeNums[1]], 87, 226, 226, 100);
            image(images[homeNums[1]], 172, 239, 40, 40);
            line(87.5, 282.5, 312.5, 282.5);
            text(texts[homeNums[2]], 87, 286, 226, 100);
            image(images[homeNums[2]], 172, 298, 40, 40);
        }
        if(curScreen === "Newest")
        {
            textSize(20);
            text("NEWEST", 160, 146);
            textSize(12);
            line(87.5, 150, 312.5, 150);
            text(texts[newestNums[0]], 87, 161, 226, 100);
            image(images[newestNums[0]], 172, 177, 40, 40);
            line(87.5, 222.5, 312.5, 222.5);
            text(texts[newestNums[1]], 87, 226, 226, 100);
            image(images[newestNums[1]], 172, 239, 40, 40);
            line(87.5, 282.5, 312.5, 282.5);
            text(texts[newestNums[2]], 87, 286, 226, 100);
            image(images[newestNums[2]], 172, 298, 40, 40);
        }
        if(curScreen === "  Top")
        {
            textSize(20);
            text("TOP", 180, 146);
            textSize(12);
            line(87.5, 150, 312.5, 150);
            text(texts[topNums[0]], 87, 161, 226, 100);
            image(images[topNums[0]], 172, 177, 40, 40);
            line(87.5, 222.5, 312.5, 222.5);
            text(texts[topNums[1]], 87, 226, 226, 100);
            image(images[topNums[1]], 172, 239, 40, 40);
            line(87.5, 282.5, 312.5, 282.5);
            text(texts[topNums[2]], 87, 286, 226, 100);
            image(images[topNums[2]], 172, 298, 40, 40);
        }
        if(curScreen === "Generator")
        {
            textSize(20);
            text("GENERATOR", 136, 146);
            textSize(13);
            text("MakeAMeme (Type to start text):", 92, 165);
            text(yourMessage, 92, 175, 210, 20);
            image(yourImage, 172, 190, 40, 40);
            fill(84, 110, 255);
            rect(100, 230, 40, 15, 5);
            fill(255, 255, 255);
            text("POST!", 101, 242);
            line(87.5, 250, 312.5, 250);
            fill(0, 0, 0);
            text("MOST CURRENT MEME", 122.5, 262.5);
            text(currentMessage, 92, 275, 210, 20);
            image(currentImage, 172, 290, 40, 40);
        }
    }
    
    
    
    //asteroids
    if(curApp === "asteroids")
    {
        //screen
        fill(30, 30, 30);
        rect(87.5, 50, 225, 290, 0);
        if(curPlay === "no")
        {
            fill(237, 237, 237);
            textFont(asteroidsFont);
            textSize(31);
            text("ASTEROIDS", 116, 83);
            textSize(20);
            text("Press 'SPACE' To Play", 107, 326);
            text("'AD' TO MOVE, CLICK TO SHOOT", 94, 142, 250, 200);
            text("HIGHSCORE: " + highscore, 134, 120);
            textFont("sans-serif");
        }
        if(curPlay === "yes")
        {
            stroke(255, 255, 255);
            fill(255, 255, 255);
            text("SCORE: " + score, 88.5, 60);
            text("HIGHSCORE: " + highscore, 88.5, 72);
            fill(0, 0, 0);
            if(shipX + 7 > 313){shipX = 97;}
            if(shipX - 7 < 90){shipX = 305;}
            triangle(shipX, 310, shipX - 7, 325, shipX + 7, 325);
            rect(asteroidX, asteroidY, asteroidS, asteroidS, asteroidR);
            fill(255, 255, 255);
            rect(projectileX, projectileY, 5, 10, 5); 
            fill(0, 0, 0);
            asteroidY += speed;  
            projectileY -= 10;
            if(asteroidY > 310 - asteroidS)
            {
                if(score > highscore)
                {
                    highscore = score;
                }
                score = -1;
                curPlay = "no";
            }
            if(score === -1)
            {
                score = 0;
                speed = random(1, 1.5);
                asteroidX = random(90, 260);
                asteroidY = 50;
                asteroidS = random(20, 50);
                asteroidR = random(1, 100);
            }
            if((projectileX + 5 >= asteroidX && projectileX - 5 <= asteroidX + asteroidS && projectileY <= asteroidY + asteroidS))
            {
                score ++;
                speed = random(score / 100 + 1, score / 100 + 3);
                asteroidX = random(90, 260);
                asteroidY = 50;
                asteroidS = random(20, 50);
                asteroidR = random(1, 100);
                projectileX = -100;
                projectileY = -100;
            }
            if(projectileY < 50)
            {
                projectileX = -100;
                projectileY = -100;
            }
            stroke(0, 0, 0);
        }
    }
    
    
    
    
    //snake
    if(curApp === "snake")
    {
        //screen
        fill(222, 167, 0);
        rect(87.5, 50, 225, 290, 0);
        fill(0, 0, 0);
        textFont(snakeFont);
        textSize(35);
        if(curPlaySnake === "no")
        {
            text("SNAKE", 142.5, 85);
            textSize(20);
            text("HIGHSCORE: " + snakeHighscore, 130, 110);
            text("PRESS 'SPACE' TO PLAY", 92.5, 320);
            text("'WASD' TO MOVE", 120, 131);
        }
        if(curPlaySnake === "yes")
        {
            time += snakeSpeed;
            snakeSpeed += 0.0001;
            fill(0, 0, 0);
            textSize(13);
            text("SCORE: " + snakeScore, 88.5, 60);
            text("HIGHSCORE: " + snakeHighscore, 88.5, 72);
            line(97, 80, 97, 283);
            line(98, 79, 301, 79);
            line(301, 80, 301, 283);
            line(98, 283, 301, 283);
            fill(189, 139, 0);
            noStroke();
            for(var i = 0; i < 29; i ++)
            {
                for(var j = i % 2; j < 29; j += 2)
                {
                    rect(98 + j * 7, 80 + i * 7, 7, 7);
                }
            }
            fill(67, 235, 0);
            stroke(0, 0, 0);
            for(var i = 0; i < snake.length; i ++)
            {
                rect(98 + snake[i][0] * 7, 80 + snake[i][1] * 7, 7, 7);
                if(i === snake.length - 1)
                {
                    fill(0, 0, 0);
                    rect(99 + snake[i][0] * 7, 81 + snake[i][1] * 7, 2, 2);
                    rect(99 + snake[i][0] * 7 + abs(direction[1]) * 4, 81 + snake[i][1] * 7, 2, 2 + abs(direction[0]) * 4);
                }
            }
            fill(255, 0, 0);
            rect(98 + apple[0] * 7, 80 + apple[1] * 7, 6.5, 6.5);
            if(time >= 10)
            {
                for(var i = 0; i < snake.length; i ++)
                {
                    temp[i] = snake[i];
                }
                for(var i = snake.length - 2; i >= 0; i --)
                {
                    snake[i] = temp[i + 1];
                }
                snake[snake.length - 1] = [snake[snake.length - 1][0] + direction[0], snake[snake.length - 1][1] + direction[1]];
                
                
                //apple collision
                if(snake[snake.length - 1][0] === apple[0] && snake[snake.length - 1][1] === apple[1])
                {
                    playSound(getSound("retro/coin"));
                    snake.unshift([snake[0][0] - direction[0], snake[0][1] - direction[1]]);
                    apple = [round(random(0, 28)), round(random(0, 28))];
                    snakeScore ++;
                }
                time = 0;
                
                //wall and self-collision
                if(snake[snake.length - 1][0] < 0 || snake[snake.length - 1][0] > 28 || snake[snake.length - 1][1] < 0 || snake[snake.length - 1][1] > 28)
                {
                    if(snakeScore > snakeHighscore) {snakeHighscore = snakeScore;}
                    snakeScore = 0;
                    curPlaySnake = "no";
                }
                for(var i = 0; i < snake.length - 1; i ++)
                {
                    if(snake[snake.length - 1][0] === snake[i][0] && snake[snake.length - 1][1] === snake[i][1])
                    {
                        if(snakeScore > snakeHighscore) {snakeHighscore = snakeScore;}
                        snakeScore = 0;
                        curPlaySnake = "no";
                    }
                }
            }
        }
        textFont("sans-serif");
    }
    
    
    
    
    //drawing app
    if(curApp === "draw")
    {
        fill(255, 255, 255);
        rect(282, 310, 31, 30);
        //brush tooling
        for(var brs=0;brs<9;brs++)
        {
            drawBrush(brs*28.7 + 50, brs);
            drawColor(brs*21.6, brs);
        }
    
        if(mouseIsPressed) 
        {
            if(mouseX >= 89 + brushW / 2 && mouseX < 312.3 - brushW / 2 && mouseY >= 50.2 + brushW / 2 && mouseY < 348 - brushW / 2)
            {
                //brush
                noStroke();
                fill(colors[selColor][0], colors[selColor][1], colors[selColor][2]);
                if(prevMouseX !== 0 && prevMouseY !== 0)
                {
                    for(var i = 0; i < 50; i ++)
                    {
                        ellipse(prevMouseX + (mouseX - prevMouseX) / 50* i, prevMouseY + (mouseY - prevMouseY) / 50 * i, brushW, brushW);
                    }
                    prevMouseX = mouseX;
                    prevMouseY = mouseY;
                }
                else
                {
                    ellipse(mouseX, mouseY, brushW, brushW);
                    prevMouseX = mouseX;
                    prevMouseY = mouseY;
                }
            }
        } 
        else
        {
            if(mouseX >= 89 + brushW / 2 && mouseX < 312.3 - brushW / 2 && mouseY >= 50.2 + brushW / 2 && mouseY < 348 - brushW / 2)
            {
                prevMouseX = mouseX;
                prevMouseY = mouseY;
            }
        }
        stroke(0, 0, 0);
    }
    
    
    
    //clock
    if(curApp === "clock")
    {
        //screen
        fill(41, 40, 41);
        rect(87.5, 50, 225, 290, 0);
        fill(255, 255, 255);
        textFont(clockFont);
        textSize(30);
        text(month() + "/" + day() + "/" + year(), 138, 77);
        text(hour() + ":" + minute() + ":" + second(), 142, 115);
        text(stopwatch[0] + ":" + stopwatch[1] + ":" + stopwatch[2] + ":" + round(stopwatch[3]), 145, 245);
        fill(255, 255, 255);
        rect(100, 267, 70, 40);
        rect(230, 267, 70, 40);
        fill(0, 0, 0);
        textSize(20);
        text(firstText, 105, 295);
        textSize(17);
        text("CANCEL", 232, 295);
        textFont("sans-serif", 12);
        if(stopwatchGoing)
        {
            stopwatch[3] += 100 / 60;
            if(stopwatch[3] >= 100)
            {
                stopwatch[3] = 0;
                stopwatch[2] ++;
            }
            for(var i = 2; i >= 1; i --)
            {
                if(stopwatch[i] >= 60)
                {
                    stopwatch[i] = 0;
                    stopwatch[i - 1] ++;
                }
            }
        }
    }
    
    
    
    //chatbot
    if(curApp === "chatbot")
    {
        //screen
        fill(255, 255, 255);
        rect(87.5, 50, 225, 290, 0);
        fill(0, 0, 0);
        stroke(0, 0, 0);
        line(87.5, 80, 312.5, 80);
        text("CHATBOT :)", 171, 60);
        text("NOW W/ RANDOMLY GENERATED TEXT!", 94, 75);
        line(87.5, 140, 312.5, 140);
        text("TYPE HERE", 168, 94);
        fill(255, 255, 255);
        rect(270, 85, 31, 11); 
        fill(0, 0, 0);
        text("SEND", 271, 94.5);
        text(curText, 90, 101, 215, 40);
        //arrows
        line(307, 140, 307, 340);
        fill(255, 255, 255);
        rect(307, 230, 5.5, 7);
        rect(307, 240, 5.5, 7);
        line(307, 237, 311, 230);
        line(311, 230, 313, 237);
        line(307, 240, 311, 247);
        line(311, 247, 313, 240);
        for(var i = 0; i < allX.length - 1; i += 2)
        {
            if(allY[i] - y > 140 && allY[i] - y + allH[i] < 340)
            {
                fill(66, 110, 255);
                rect(allX[i], allY[i] - y, allW[i] + 5, allH[i], 10); 
                fill(255, 255, 255);
                text(allTexts[i], allX[i] + 2, allY[i] + 3 - y, allW[i] + 1, allH[i]);
            }
            if(allY[i + 1] - y > 140 && allY[i + 1] - y + allH[i + 1] < 340)
            {
                fill(212, 212, 212);
                rect(allX[i + 1], allY[i + 1] - y, allW[i + 1] + 5, allH[i + 1], 10);
                fill(0, 0, 0);
                text(allTexts[i + 1], allX[i + 1] + 2, allY[i + 1] - y + 3, allW[i + 1] + 6, allH[i + 1]);
            }
        }
    }
    
    
    
    //beat maker
    if(curApp === "beatmaker")
    {
        //screen
        fill(156, 96, 0);
        rect(87.5, 50, 225, 290, 0);
        fill(0, 0, 0);
        rect(87.5, 50, 225, 75);
        fill(107, 107, 107);
        rect(87.5, 125, 225, 30);
        fill(255, 255, 255);
        text("Select Sound:", 110, 63);
        stroke(255, 255, 255);
        fill(0, 0, 0);
        for(var i = 0; i < 5; i ++)
        {
            for(var j = 0; j < 5; j ++)
            {
                if(i * 5 + j === curSoundIdx)
                {
                    fill(255, 0, 0);
                }
                else
                {
                    fill(0, 0, 0);
                }
                rect(117 + j * 10, 70 + i * 10, 10, 10);
            }
        }
        fill(255, 255, 255);
        line(200, 50, 200, 125);
        text("Type time:", 230, 63);
        rect(285, 110, 20, 10, 5);
        rect(210, 110, 31, 10, 5);
        text(curTime, 245, 80);
        fill(0, 0, 0);
        text("Add", 285, 120);
        text("Delete", 210, 120);
        fill(255, 255, 255);
        rect(117.5, 130, 50, 20, 5);
        rect(232.5, 130, 50, 20, 5);
        fill(194, 194, 194);
        rect(180.5, 130, 40, 20, 5);
        textSize(20);
        fill(0, 0, 0);
        text("PLAY", 119, 148);
        text("STOP", 231, 148);
        textSize(8);
        text("DELTETE ALL", 182, 134, 40, 100);
        stroke(0, 0, 0);
        line((songTime / 400 * 225) + 87.5, 155, (songTime / 400 * 225) + 87.5, 340);
        stroke(255, 255, 255);
        for(var i = 0; i < curSong.length; i ++)
        {
            rect((curSong[i][1] / 400 * 225 + 88.5), 200, min(3, ((312.5) - (curSong[i][1] / 400 * 225 + 88.5))), 50);
        }
        if(songPlaying)
        {
            songTime ++;
            if(songTime >= 401)
            {
                songTime = 0;
            }
            for(var i = 0; i < curSong.length; i ++)
            {
                if(curSong[i][1] === songTime) {playSound(curSong[i][0]);}
            }
        }
        stroke(0, 0, 0);
    }  
    
    
    
    //crossy road
    if(curApp === "crossyroad")
    {
        //screen
        fill(0, 255, 191);
        rect(87.5, 50, 225, 290, 0);
        if(!curPlayCrossy)
        {
            fill(255, 255, 255);
            textSize(30);
            text("CROSSY ROAD", 90, 80);
            textSize(20);
            text("'WASD' TO MOVE", 115, 100);
            text("'SPACE' TO START", 108, 320);
            text("HIGHSCORE: " + crossyHighscore, 117.5, 125);
        }
        if(curPlayCrossy)
        {
            for(var i = crossyScore; i < crossyScore + 10; i ++)
            {
                if(curGame[i][0] === "grass") {fill(4, 207, 24);}
                if(curGame[i][0] === "road") {fill(51, 51, 51);}
                rect(87.5, 311 - ((i - crossyScore) * 29), 225, 29);
                if(curGame[i][0] !== "grass")
                {
                    fill(crossyColors[i][0], crossyColors[i][1], crossyColors[i][2]);
                    if(!directions[i])
                    {
                        rect(max(min(Xs[i], 312.5), 87.5), 313 - ((i - crossyScore) * 29), min(min(23, Xs[i] - 64.5), max(312.5 - Xs[i], 0)), 23);
                    }
                    else
                    {
                        rect(max(min(Xs[i], 312.5), 87.5), 313 - ((i - crossyScore) * 29), min(min(23, 312.5 - Xs[i]), max(Xs[i] - 64.5, 0)), 23);
                    }
                    if(!directions[i]) {Xs[i] += speeds[i];}
                    else {Xs[i] -= speeds[i];}
                    if(Xs[i] < 64.4) {Xs[i] = 312.5;}
                    if(Xs[i] > 312.6) {Xs[i] = 64.5;}
                    if((9 - curRow) + crossyScore === i)
                    {
                        if(Xs[i] + 29 > curColumn * 29 + 84.5 && Xs[i] + 6 < curColumn * 29 + 107.5 && curGame[i][0] === "road")
                        {
                            curGame = [["grass", ""], ["grass", ""], ["grass", ""], ["grass", ""], ["grass", ""], ["grass", ""], ["grass", ""], ["grass", ""], ["grass", ""], ["grass", ""]];
                            speeds = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                            crossyColors = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]];
                            directions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                            Xs = [87.5, 87.5, 87.5, 87.5, 87.5, 87.5, 87.5, 87.5, 87.5, 87.5];
                            if(crossyScore > crossyHighscore) {crossyHighscore = crossyScore;}
                            crossyScore = 0;
                            curPlayCrossy = false;
                        }
                    }
                }
            }
            
            fill(255, 255, 255);
            rect(curColumn * 25 + 87.5, curRow * 29 + 53, 23, 23, 2);
            textSize(30);
            text(crossyScore, 90, 75);
        }
    }
    
    
    
    
    //dinosaur game
    if(curApp === "dinosaur")
    {
        //screen
        fill(255, 255, 255);
        rect(87.5, 50, 225, 290, 0);
        if(!curPlayDinosaur)
        {
            fill(0, 0, 0);
            textSize(30);
            text("Dinosaur Game", 95, 80);
            textSize(20);
            text("Space TO JUMP", 115, 100);
            text("'SPACE' TO START", 108, 320);
            text("HIGHSCORE: " + dinosaurHighscore, 117.5, 125);
        }
        if(curPlayDinosaur)
        {
            fill(242, 242, 242);
            rect(87.5, 230, 225, 110);
            fill(0, 140, 7);
            rect(120, dinosaurY, 20, 40, 10);
            fill(255, 255, 255);
            ellipse(125, dinosaurY + 10, 4, 4);
            ellipse(135, dinosaurY + 10, 4 , 4);
            stroke(255, 255, 255);
            line(121, dinosaurY + 13, 139, dinosaurY + 13);
            stroke(0, 0, 0);
            fill(43, 43, 43);
            rect(max(87.5, min(obstacleX, 312.5)), 200, min(min(10, abs(obstacleX - 67.5)), max(0, 312.5 - obstacleX)), 35);
            textSize(15); 
            obstacleX -= gameSpeed;
            if(gameSpeed < 6) {gameSpeed += 0.001;}
            if(obstacleX <= 67.5) {randNum = random(312.5, 600); obstacleX = randNum; dinosaurScore ++;}
            text("SCORE: " + dinosaurScore, 150, 65);
            if(obstacleX < 140 && obstacleX > 110 && dinosaurY + 40 >= 200)
            {
                dinosaurY = 195;
                jumping = false;
                curPlayDinosaur = false;
                dinosaurTime = 0;
                dinosaurHighscore = max(dinosaurScore, dinosaurHighscore);
                dinosaurScore = 0;
                obstacleX = 312.5;
                gameSpeed = 3;
                randNum = 312.5;
            }
            if(jumping)
            {
                dinosaurY = 195 - sin(dinosaurTime) * 60;
                dinosaurTime += 5;
                if(dinosaurY >= 196)
                {
                    dinosaurY = 195;
                    dinosaurTime = 0;
                    jumping = false;
                }
            }
        }
    }
    
    
    
    
    //dot clicker
    if(curApp === "dotclicker")
    {
        //screen
        fill(0, 0, 0);
        rect(87.5, 50, 225, 290, 0);
        if(!curPlayDotclicker)
        {
            fill(255, 255, 255);
            textSize(30);
            text("Dot Clicker", 120, 80);
            textSize(20);
            text("(Rhys's Idea)", 135, 100);
            text("Click TO BREAK DOTS", 95, 120);
            text("'SPACE' TO START", 108, 320);
            text("HIGHSCORE: " + dotclickerHighscore, 117.5, 140);
        }
        if(curPlayDotclicker)
        {
            dotclickerTime += 1/60;
            fill(255, 255, 255);
            textSize(10);
            text("SCORE: " + dotclickerScore, 176, 60);
            fill(dotColor[0], dotColor[1], dotColor[2]);
            ellipse(dotX, dotY, dotS, dotS);
            if(dotclickerTime >= dotTimeLimit)
            {
                dotclickerHighscore = max(dotclickerScore, dotclickerHighscore);
                dotclickerScore = 0;
                dotclickerTime = 0;
                dotTimeLimit = 5;
                dotColor = [255, 255, 255];
                curPlayDotclicker = false;
            }
        }
    }
    
    
    
    
    //flappy bird
    if(curApp === "flappybird")
    {
        //screen
        fill(0, 196, 255);
        rect(87.5, 50, 225, 290, 0);
        if(!curPlayFlappy)
        {
            fill(0, 0, 0);
            textSize(30);
            text("Flappy Bird", 120, 80);
            textSize(20);
            text("Space to jump", 130, 100);
            text("'SPACE' TO START", 108, 320);
            text("HIGHSCORE: " + flappyHighscore, 117.5, 120);
        }
        if(curPlayFlappy)
        {
            flappyBackgroundX --;
            birdY += speed;
            if(speed <= 5) {speed += 0.05;} 
            
            //bird
            fill(238, 255, 0);
            ellipse(150, birdY, 20, 20);
            if(birdY >= 330 || birdY <= 60)
            {
                flappyHighscore = max(flappyScore, flappyHighscore);
                curPlayFlappy = false;
            }
            if(flappyJump)
            {
                birdY = ogY - sin(flappyTime) * 50;
                flappyTime += 3;
                if(birdY > ogY)
                {
                    flappyTime = 0;
                    flappyJump = false;
                }
            }
            
            //pipes
            for(var i = 0; i < 2; i ++)
            {
                if(350 + (i * 200 + flappyBackgroundX) % 400 < 27.5)
                {
                    pipeH[i] = random(0, 150);
                }
                if(350 + (i * 200 + flappyBackgroundX) % 400 === 120)
                {
                    flappyScore ++;
                }
                if((birdY - 10 < pipeH[i] + 60 || birdY + 10 > pipeH[i] + 160) && 350 + (i * 200 + flappyBackgroundX) % 400 > 105 && 350 + (i * 200 + flappyBackgroundX) % 400 < 165)
                {
                    flappyHighscore = max(flappyScore, flappyHighscore);
                    curPlayFlappy = false;
                }
                pipeThing(350 + (i * 200 + flappyBackgroundX) % 400, pipeH[i]);
            }
            
            //score
            textSize(30);
            fill(255, 255, 255);
            text(flappyScore, 90, 75);
        }
    }
    
    
    
    
    //seizure
    if(curApp === "seizure")
    {
        if(!curPlaySeizure)
        {
            //screen
            fill(random(0, 255), random(0, 255), random(0, 255));
            rect(87.5, 50, 225, 290, 0);
            fill(0, 0, 0);
            textSize(random(10, 25));
            text("SEIZURE", random(100, 200), random(80, 300));
            fill(random(0, 255), random(0, 255), random(0, 255));
            textSize(random(10, 20));
            text("Press 'SPACE' to start", 100, 320);
        }
    }
};
