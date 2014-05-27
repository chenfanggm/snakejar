function Jet(){
	this.srcX = 0;
	this.srcY = 500;
	this.width = 100;
	this.height = 40;
	this.drX = 220;
	this.drY = 200;
	this.speed = 5;
	this.isUpKey = false;
	this.isRightKey = false;
	this.isDownKey = false;
	this.isLeftKey = false;
}

Jet.prototype.update = function() {
	this.checkDirection();
};

Jet.prototype.draw = function () {
	clearCtxJet();
	ctxJet.drawImage(imgSprite,this.srcX,this.srcY,this.width,this.height,this.drX,this.drY,this.width,this.height);
};

function clearCtxJet () {
    ctxJet.clearRect(0,0,gameWidth,gameHeight);
}


Jet.prototype.checkDirection = function (){
	if (this.isUpKey){
		this.drY -= this.speed;
	}
	if (this.isRightKey){
		this.drX += this.speed;
	}
	if (this.isDownKey){
		this.drY += this.speed;
	}
	if (this.isLeftKey){
		this.drX -= this.speed;
	}	
};