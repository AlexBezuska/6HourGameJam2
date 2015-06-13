var canvas = document.getElementById("canvas");
var assets = {
	"images":{},
	"animations":{},
	"sounds": {}
};
var game = new Splat.Game(canvas, assets);


game.scenes.add("title", new Splat.Scene(canvas, function() {
	// setup
	this.player = new Splat.Entity(canvas.width/2, canvas.height/2, 80, 90);
	this.player.color = "#EDBC49";
 	// this.bees = makeBees(20, 4);

 	var scene = this;

// this.timers.moveBees = new Splat.Timer(undefined, 2000, function(){
// 		for(var i = 0; i < scene.bees.length; i++){
// 			if(randomRange(0,10) < 2){
// 				scene.bees[i].vx = randomRange(-scene.bees[i].speed, scene.bees[i].speed);
// 				scene.bees[i].vy = randomRange(-scene.bees[i].speed, scene.bees[i].speed);
// 			}
// 		}
// 	this.reset();
// 	this.start();
// 	});
// 	this.timers.moveBees.start();

}, function(time) {
	// simulation

	this.player.x = game.mouse.x;
	this.player.y = game.mouse.y;



// manage_bees(this.player, this.bees, time);




}, function(context) {
	// draw
	context.clearRect(0,0,canvas.width, canvas.height);
	context.fillStyle= "#0B1009";
	context.fillRect(0, 0, canvas.width, canvas.height);
  //drawLine(context, this.player, game.mouse, "rgba(255,255,255,0.3)");

  drawBee(context, game.mouse, this.player);

//   for(var i =0; i < this.bees.length; i++){
// 	draw_line(context, this.player, this.bees[i], "rgba(255,255,255, 0.1)");
// }


//drawCircle(context, this.player.x, this.player.y, 150, "rgba(255,255,255, 0.1)");

// context.fillStyle = "white";
// context.font = "32px helvetica";
// centerText(context, "bees:" + this.bees.length, 0, 50);

var color = "white";


var offsetx = (game.mouse.x - canvas.width/2) / 5;
var offsety = (game.mouse.y - canvas.height/2) / 5;
drawLine(context, {x:(canvas.width * .20) - offsetx, y: (canvas.height * 0.9) - offsety}, {x:(canvas.width * .80) - offsetx, y: (canvas.height * 0.9) - offsety}, color);

drawLine(context, {x:(canvas.width * .20) - offsetx, y: 0}, {x:(canvas.width * .20) - offsetx, y: (canvas.height * 0.9) - offsety}, color);
drawLine(context, {x:0, y: canvas.height}, {x:(canvas.width * .20) - offsetx, y: (canvas.height * 0.9) - offsety}, color);

drawLine(context, {x:(canvas.width * .80) - offsetx, y: 0}, {x:(canvas.width * .80) - offsetx, y: (canvas.height * 0.9) - offsety}, color);
drawLine(context, {x:canvas.width, y: canvas.height}, {x:(canvas.width * .80) - offsetx, y: (canvas.height * 0.9) - offsety}, color);


drawLine(context, {x:canvas.width/2, y: canvas.height}, {x:(canvas.width/2) - offsetx, y: (canvas.height * 0.9) - offsety}, color);

}));

game.scenes.switchTo("loading");





function drawLine(context, start, end, color) {
	context.strokeStyle = color;
	context.beginPath();
	context.moveTo(start.x, start.y);
	context.lineTo(end.x,end.y);
	context.stroke();
}

function drawBees(context, entities){
	for(var i = 0; i < entities.length; i++){
		var bee = entities[i];
		var beeTop = {x: bee.x, y: bee.y - (bee.height/2)};
		var beeRight = {x: bee.x + (bee.width/2), y: bee.y};
		var beeBottom = {x: bee.x, y: bee.y + (bee.height/2)};
		var beeLeft = {x: bee.x - (bee.width/2), y: bee.y};
		drawLine(context, beeLeft, beeTop, bee.color);
		drawLine(context, beeTop, beeRight, bee.color);
		drawLine(context, beeLeft, beeBottom, bee.color);
		drawLine(context, beeBottom, beeRight, bee.color);
	}
}

function drawBee(context, mouse, entity){
var bee = entity;
	var offsetx = (mouse.x - canvas.width/2) / 4;
	var offsety = (mouse.y - canvas.height/2) / 4;
	var beeTop = 0,
		beeRight = 0,
		beeLeft = 0,
		beeBottom = 0;


beeTop = {
		x: bee.x - offsetx*3, 
		y: (bee.y - (bee.height/6) ) - offsety*3
	};
	beeRight = {
		x: (bee.x + (bee.width/6)) - offsetx*3, 
		y: bee.y  - offsety*3
	};
	beeBottom = {
		x: bee.x - offsetx*3, 
		y: (bee.y + (bee.height/6) ) - offsety*3
	};
	beeLeft = {
		x: (bee.x - (bee.width/6)) - offsetx*3, 
		y: bee.y  - offsety*3
	};
	
	drawLine(context, beeLeft, beeRight, "#F04C4A");
	drawLine(context, beeTop, beeBottom, "#F04C4A");
	


	
	 beeTop = {
		x: bee.x - offsetx/2, 
		y: (bee.y - (bee.height/2)) - offsety/2
	};
	beeRight = {
		x: (bee.x + (bee.width/2)) - offsetx/2, 
		y: bee.y - offsety/2
	};
	 beeBottom = {
		x: bee.x - offsetx/2, 
		y: (bee.y + (bee.height/2)) - offsety/2
	};
	 beeLeft = {
		x: (bee.x - (bee.width/2)) - offsetx/2, 
		y: bee.y - offsety/2
	};
	drawLine(context, beeLeft, beeTop, bee.color);
	drawLine(context, beeTop, beeRight, bee.color);
	drawLine(context, beeLeft, beeBottom, bee.color);
	drawLine(context, beeBottom, beeRight, bee.color);


	beeTop = {
		x: bee.x - offsetx*3, 
		y: (bee.y - (bee.height/6) ) - offsety*3
	};
	beeRight = {
		x: (bee.x + (bee.width/6)) - offsetx*3, 
		y: bee.y  - offsety*3
	};
	beeBottom = {
		x: bee.x - offsetx*3, 
		y: (bee.y + (bee.height/6) ) - offsety*3
	};
	beeLeft = {
		x: (bee.x - (bee.width/6)) - offsetx*3, 
		y: bee.y  - offsety*3
	};
	
	drawLine(context, beeLeft, beeRight, "#FA0C0C");
	drawLine(context, beeTop, beeBottom, "#FA0C0C");
	



	beeTop = {
		x: bee.x - offsetx/3, 
		y: (bee.y - (bee.height/3) ) - offsety/3
	};
	beeRight = {
		x: (bee.x + (bee.width/3)) - offsetx/3, 
		y: bee.y  - offsety/3
	};
	beeBottom = {
		x: bee.x - offsetx/3, 
		y: (bee.y + (bee.height/3) ) - offsety/3
	};
	beeLeft = {
		x: (bee.x - (bee.width/3)) - offsetx/3, 
		y: bee.y  - offsety/3
	};
	drawLine(context, beeLeft, beeTop, bee.color);
	drawLine(context, beeTop, beeRight, bee.color);
	drawLine(context, beeLeft, beeBottom, bee.color);
	drawLine(context, beeBottom, beeRight, bee.color);

	beeTop = {
		x: (bee.x) - offsetx/4.5, 
		y: (bee.y - (bee.height/4.5) ) - offsety/4.5
	};
	beeRight = {
		x: (bee.x + (bee.width/4.5)) - offsetx/4.5, 
		y: bee.y  - offsety/4.5
	};
	beeBottom = {
		x: (bee.x) - offsetx/4.5, 
		y: (bee.y + (bee.height/4.5) ) - offsety/4.5
	};
	beeLeft = {
		x: (bee.x - (bee.width/4.5)) - offsetx/4.5, 
		y: bee.y  - offsety/4.5
	};
	drawLine(context, beeLeft, beeTop, bee.color);
	drawLine(context, beeTop, beeRight, bee.color);
	drawLine(context, beeLeft, beeBottom, bee.color);
	drawLine(context, beeBottom, beeRight, bee.color);
	beeTop = {
		x: (bee.x) - offsetx/6, 
		y: (bee.y - (bee.height/6) ) - offsety/6
	};
	beeRight = {
		x: (bee.x + (bee.width/6)) - offsetx/6, 
		y: bee.y  - offsety/6
	};
	beeBottom = {
		x: (bee.x) - offsetx/6, 
		y: (bee.y + (bee.height/6) ) - offsety/6
	};
	beeLeft = {
		x: (bee.x - (bee.width/6)) - offsetx/6, 
		y: bee.y  - offsety/6
	};
	drawLine(context, beeLeft, beeTop, bee.color);
	drawLine(context, beeTop, beeRight, bee.color);
	drawLine(context, beeLeft, beeBottom, bee.color);
	drawLine(context, beeBottom, beeRight, bee.color);
}



function drawReticule(context, mouse, bee, color){
var bee = entity;
	var offsetx = (mouse.x - canvas.width/2) / 4;
	var offsety = (mouse.y - canvas.height/2) / 4;
	var beeTop = 0,
		beeRight = 0,
		beeLeft = 0,
		beeBottom = 0;


beeTop = {
		x: bee.x - offsetx*3, 
		y: (bee.y - (bee.height/6) ) - offsety*3
	};
	beeRight = {
		x: (bee.x + (bee.width/6)) - offsetx*3, 
		y: bee.y  - offsety*3
	};
	beeBottom = {
		x: bee.x - offsetx*3, 
		y: (bee.y + (bee.height/6) ) - offsety*3
	};
	beeLeft = {
		x: (bee.x - (bee.width/6)) - offsetx*3, 
		y: bee.y  - offsety*3
	};
	
	drawLine(context, beeLeft, beeRight, "#FA0C0C");
	drawLine(context, beeTop, beeBottom, "#FA0C0C");
	

}


function makeBees(quantity, variance){
	var returnValue = [];
	for(var i = 0; i < quantity; i++){
		var entity = new Splat.Entity(canvas.width/2, canvas.height/2, 25, 10);
		entity.xDirection = randomRange(-variance, variance);
		entity.yDirection = randomRange(-variance, variance);
		entity.color = "#F0C000";
		entity.speed = 0.04;
		returnValue.push(entity);
	}
	return returnValue;
}


function manage_bees(player, bees, time){
	for(var i = 0; i < bees.length; i++){
		var bee = bees[i];
		bee.move(time);
		if (findLength(player, bee ) > 150 ){
			var vx  = player.x - bee.x;
			var vy  = player.y - bee.y;
			var magnitude = Math.sqrt((vx * vx) + (vx * vy));
			bee.vx = vx / magnitude * bee.speed;
			bee.vy = vy / magnitude * bee.speed;
		}
		keepOnScreen(bee);
		if(bee.x === NaN || bee.y === NaN){
			console.log("Bee pos is nan");
		}

		if(bee.vx === NaN || bee.xy === NaN){
			console.log("Bee velocity is nan");
		}
		if(bee.x === undefined || bee.y === undefined){
			console.log("Bee pos is undefined");
		}

		if(bee.vx === undefined){
			bee.vx = 0;
		}
		if(bee.vy === undefined){
			bee.vy = 0;
		}
	}
}


function randomColor(){
	return '#' + (function co(lor){   return (lor +=
		[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
	&& (lor.length == 6) ?  lor : co(lor); })('');
}

function getPercentChange(newVal, oldVal) {
	return (newVal - oldVal) / oldVal;
}

function findLength(start, end) {
	var a = end.x - start.x;
	var b = end.y - start.y;
	var csq = (a * a) + (b * b);
	return Math.floor(Math.sqrt(csq));
}

function findMidPoint(start, end) {
	return {
		x: (start.x + end.x) / 2,
		y: (start.y + end.y) / 2
	};
}

function slopeAngle(start, end) {
	var run = end.x - start.x;
	var rise = end.y - start.y;
	return Math.atan2(run, rise);
}

function fillScreen(context, color){
	context.fillStyle = color;
	context.fillRect(0, 0, canvas.width, canvas.height);
}

function rotate(entity, direction, speed){
	if(entity instanceof Array){
		for(var i = 0; i < entity.length; i++){
			if(direction == "right"){
				entity[i].angle += speed;
			}else if(direction == "left"){
				entity[i].angle -= speed;
			}
		}
	}else{
		if(direction == "right"){
			entity.angle += speed;
		}else if(direction == "left"){
			entity.angle -= speed;
		}
	}

}

function moveForward(entity, speed){
	entity.vx = speed * Math.cos(entity.angle * (Math.PI /180));
	entity.vy = speed * Math.sin(entity.angle * (Math.PI /180));
}	

function drawMultiple(context, array){
	for(var i = 0; i < array.length; i++){
		array[i].draw(context);
	}
}

function randomRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function centerText(context, text, offsetxX, offsetxY) {
	var w = context.measureText(text).width;
	var x = offsetxX + (canvas.width / 2) - (w / 2) | 0;
	var y = offsetxY | 0;
	context.fillText(text, x, y);
}

function drawOutline(context, entity) {
	context.strokeStyle = "white";
	context.strokeRect(entity.x, entity.y, entity.width, entity.height);
}

function keepOnScreen(entity) {
	if (entity.x < 0) {
		entity.x = 0;
	}
	if (entity.x + entity.width > canvas.width) {
		entity.x = canvas.width - entity.width;
	}
	if (entity.y < 0) {
		entity.y = 0;
	}
	if (entity.y + entity.height > canvas.height) {
		entity.y = canvas.height - entity.height;
	}
}

function center(axis, sprite){
	if(axis == "x"){
		return (canvas.width/2) - (sprite.width/2);
	}else{
		return (canvas.height/2) - (sprite.height/2);
	}
}







function move_particles(particles, collisions, gravity, time, delete_on_collision, delete_off_screen){
	if(particles.length > 0){
		for(var i = 0; i < particles.length; i++){
			if(!particles[i].frozen){
				particles[i].vy += gravity;
				particles[i].vx = particles[i].speed;
				particles[i].move(time);
				particles[i].angle += 1;
				if(particles[i].y > canvas.height && delete_off_screen){
					particles.splice(i, 1);
				}

				for(var c = 0; c < collisions.length; c++){
					if(collisions[c] !== undefined &&  particles[i] !== undefined){
						if( collisions[c].collides(particles[i]) ){
							if(delete_on_collision){
								particles.splice(i, 1);
							}else if (collisions[c].y + collisions[c].height >= particles[i].y) {
								particles[i].frozen = true;
							}

						}
					}
				}
				
			}
		}
	}
}


function random_range(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function moveForward(entity, speed){
	entity.vx = speed * Math.cos(entity.angle * (Math.PI /180));
	entity.vy = speed * Math.sin(entity.angle * (Math.PI /180));
}	



function drawMultiple(context, array){
	for(var i = 0; i < array.length; i++){
		array[i].draw(context);
	}
}

function centerText(context, text, offsetxX, offsetxY) {
	var w = context.measureText(text).width;
	var x = offsetxX + (canvas.width / 2) - (w / 2) | 0;
	var y = offsetxY | 0;
	context.fillText(text, x, y);
}



function keepOnScreen(entity) {
	if (entity.x < 0) {
		entity.x = 0;
	}
	if (entity.x + entity.width > canvas.width) {
		entity.x = canvas.width - entity.width;
	}
	if (entity.y < 0) {
		entity.y = 0;
	}
	if (entity.y + entity.height > canvas.height) {
		entity.y = canvas.height - entity.height;
	}
}

function draw_line(context, entity1, entity2, color) {
	if(entity1 && entity2){
		context.strokeStyle = color;
		context.beginPath();
		context.moveTo(entity1.x + entity1.width/2, entity1.y + entity1.height/2);
		context.lineTo(entity2.x + entity2.width/2, entity2.y + entity2.height/2);
		context.stroke();
	}
}

function draw_cursor_line(context, entity1, entity2, color) {
	if(entity1 && entity2){
		context.strokeStyle = color;
		context.beginPath();
		context.moveTo(entity1.x + entity1.width/2, entity1.y + entity1.height/2);
		context.lineTo(entity2.x,entity2.y);
		context.stroke();
	}
}


function drawCircle(context, x, y, width, color){
	context.fillStyle = color;
	context.beginPath();
	context.arc(x, y, width, 0, Math.PI*2, true); 
	context.closePath();
	context.fill();
}

function find_length(start, end) {
	var a = (end.x + end.width/2) - (start.x + start.width/2);
	var b = (end.y + end.height/2) - (start.y + start.height/2);
	var csq = (a * a) + (b * b);
	return Math.floor(Math.sqrt(csq));
}

function make_entities(array){
	var new_array = [];
	for(var i = 0; i < array.length; i++){
		var thing = new Splat.AnimatedEntity(array[i].x, array[i].y, array[i].width, array[i].height, game.images.get("sprite"), 0, 0);
		new_array.push(thing);
	}
	console.log(new_array);
	return new_array;
}