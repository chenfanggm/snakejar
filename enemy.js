function Enemy(){
	this.srcX = 0;
	this.srcY = 540;
	this.width = 100;
	this.height = 40;
	this.drX = Math.floor(Math.random() * 1000) + gameWidth;
	this.drY = Math.floor(Math.random() * 360);
	this.speed = 2;
	this.isActive = false;
}

Enemy.prototype.update = function() {
	if(this.isActive === true){
		this.checkOutbound();
		this.drX -= this.speed;	
	}
};

Enemy.prototype.draw = function () {
	ctxEnemy.drawImage(imgSprite,this.srcX,this.srcY,this.width,this.height,this.drX,this.drY,this.width,this.height);
};

Enemy.prototype.spawn = function () {
	this.drX = Math.floor(Math.random() * 1000) + gameWidth;
	this.drY = Math.floor(Math.random() * 360);
	this.isActive = true;
};

Enemy.prototype.checkOutbound = function () {
	if(this.drX + this.width < -100){
		this.recycleEnemy();
	}
};

Enemy.prototype.recycleEnemy = function () {
	this.isActive = false;
	//this.drX = Math.floor(Math.random() * 1000) + gameWidth;
	//this.drY = Math.floor(Math.random() * 360);
	//enemies.splice(enemies.indexOf(this) , 1);
	//totalEnemies--;
};