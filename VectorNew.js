// Gaussain variable generator using Box-Muller transform.
function randn_bm() {
    var u = 1 - Math.random(); // Subtraction to flip [0, 1) to (0, 1].
    var v = 1 - Math.random();
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v )/2;
}


function histo(Ens){
		// Histogram of Stifnesses 
		var x = [];
		for (var i = 0; i < Ne; i ++) {
			x[i] = Math.log(Ens[i].stiffness);
		}

		var data = [
		  {
		    x: x,
		    type: 'histogram',
			marker: {
		    color: 'rgba(100,250,100,0.7)',
			},
		  }
		];
		Plotly.newPlot('histo', data);
}


function Vector(x,y){
	var v = Object.create(Methods);
	v.x = x; v.y = y;
	return v;
}
var Methods = {
	dot:function(v1){
		return this.x*v1.x + this.y*v1.y;
	},
	abs:function(){
		return Math.sqrt(this.x*this.x + this.y*this.y);
	},
	plus:function(v1){
		return Vector(this.x+v1.x, this.y+v1.y);
	},
	minus:function(v1){
		return Vector(this.x-v1.x, this.y-v1.y);
	},
	unit:function(){
		var mag = this.abs(); 
		return Vector(this.x/mag, this.y/mag);
	},
	scale:function(mag){
		return Vector(this.x*mag,this.y*mag);
	},
	distance:function(v1){
		return this.minus(v1).abs();
	}
}


