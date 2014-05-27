// get resources from html
var canvasBg = document.getElementById('canvasBg');
var ctxBg = canvasBg.getContext('2d');
var canvasJet = document.getElementById('canvasJet');
var ctxJet = canvasJet.getContext('2d');
var canvasEnemy = document.getElementById('canvasEnemy');
var ctxEnemy = canvasEnemy.getContext('2d');
// basic configueration 
var gameWidth = canvasBg.width;
var gameHeight = canvasBg.height;
var fps = 70;
var isPlaying = false;
var requestAnimFrame =  window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
						window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||
						window.msRequestAnimationFrame;
var totalEnemies = 0;
var spawnInterval = 0;
var spawnRate = 2000;
var spawnAmount = 20;
// obj
var imgSprite = new Image();
var jetObj = new Jet();
var enemies = [];
// onWindow start
window.addEventListener('load', init, false);
	
// main loop functions

function init(){
	imgSprite.src = 'images/sprite.png';
	drawBg();
	startLoop();
	document.addEventListener('keydown', onKeyDown, false);
	document.addEventListener('keyup', onKeyUp, false);
}

function loop(){
	if(isPlaying === true){
		setTimeout(function() {
				jetObj.update();
				updateAllEnemies();
				draw();		
				requestAnimFrame(loop);	
	    }, 1000 / fps);
	}
}

function draw(){
	jetObj.draw();
	drawAllEnemies();
}

function startLoop(){
	isPlaying = true;
	loop();
	startSpawning();
}

function stopLoop(){
	isPlaying = false;
	stopSpawning();
}
	
function drawBg(){
	var srcX = 0;
	var srcY = 0;
	var drawX = 0;
	var drawY = 0;
	ctxBg.drawImage(imgSprite,srcX,srcY,gameWidth,gameHeight,drawX,drawY,gameWidth,gameHeight);	
}
	
function clearCtxBg() {
    ctxBg.clearRect(0,0,gameWidth,gameHeight);
}

// event functions

function onKeyDown(e) {
	var keyId = (e.keyCode) ? e.keyCode : e.which;
	if (keyId === 38 || keyId === 87){
		// 38 is upArrow, 87 is W
		jetObj.isUpKey = true;
		e.preventDefault();
	}
	if (keyId === 39 || keyId === 68){
		// 39 is rightArrow, 68 is D
		jetObj.isRightKey = true;
		e.preventDefault();
	}
	if (keyId === 40 || keyId === 83){
		// 38 is downArrow, 83 is S 
		jetObj.isDownKey = true;
		e.preventDefault();
	}
	if (keyId === 37 || keyId === 65){
		// 38 is leftArrow, 65 is A
		jetObj.isLeftKey = true;
		e.preventDefault();
	}
}

function onKeyUp(e) {
	var keyId = (e.keyCode) ? e.keyCode : e.which;
	if (keyId === 38 || keyId === 87){
		// 38 is upArrow, 87 is W
		jetObj.isUpKey = false;
		e.preventDefault();
	}
	if (keyId === 39 || keyId === 68){
		// 39 is rightArrow, 68 is D
		jetObj.isRightKey = false;
		e.preventDefault();
	}
	if (keyId === 40 || keyId === 83){
		// 38 is downArrow, 83 is S 
		jetObj.isDownKey = false;
		e.preventDefault();
	}
	if (keyId === 37 || keyId === 65){
		// 38 is leftArrow, 65 is A
		jetObj.isLeftKey = false;
		e.preventDefault();
	}
}
