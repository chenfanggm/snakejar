function spawnEnemy(numSpawn){
	for(var i=0; i < numSpawn; i++){
		if(enemies.forEach(hasInActive)){
			continue;
		}
		else if (totalEnemies < numSpawn){
			enemies[totalEnemies] = new Enemy();
			totalEnemies++;		
		}		
	}
}

function hasInActive(element, index, array){
	if(element.isActive === false){
		element.spawn();
		return true;
	}
	else{
		return false;
	}
}


function startSpawning(){
	stopSpawning();
	spawnInterval = setInterval(function(){spawnEnemy(spawnAmount);}, spawnRate);
}

function stopSpawning(){
	clearInterval(spawnInterval);
}

function updateAllEnemies(){
	for (var i=0; i < enemies.length; i++) {
		enemies[i].update();
	}
}

function drawAllEnemies(){
	clearCtxEnemy();
	for (var i=0; i < enemies.length; i++) {
		enemies[i].draw();
	}
}

function clearCtxEnemy () {
    ctxEnemy.clearRect(0,0,gameWidth,gameHeight);
}
