var length = data.length;


// you work goes here
// -----------------------
var i = 0;

while( i <= length ) {
    var x = data[i].x;
    var y = data[i].y;
    var color = data[i].color;

    create(x, y, color);
    
    i++;
}
