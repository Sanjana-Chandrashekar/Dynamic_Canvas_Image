window.onresize = function () { location.reload(); }

function cdraw() {
    let c = document.getElementById("canvas");
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    var ctx = c.getContext('2d');
    var x = .4;
    var x1 = .73;
    var x2 = .86;

    ctx.clearRect(0, 0, innerWidth, innerHeight);


    var color = 'black';
    drawBlack(color,x,x1,x2);
    drawWhite();
    //animate();


}



function drawBlack(color, x, x1,x2){
    let c = document.getElementById("canvas");

    let ctx = c.getContext('2d');

    var maxHeight = innerHeight; //y axis
    var maxWidth = innerWidth;// x axis
    ctx.beginPath();
    ctx.moveTo(maxWidth*.14, maxHeight*.01);
    ctx.lineTo(maxWidth*.18,maxHeight*.01);
    ctx.lineTo(maxWidth*x,maxHeight*.58);
    ctx.lineTo(maxWidth*.18,maxHeight*.96);
    ctx.lineTo(maxWidth*.14,maxHeight*.96);
    ctx.lineTo(maxWidth*.28,maxHeight*.62);
    ctx.lineTo(maxWidth*.14,maxHeight*.01);
    ctx.fillStyle = color;
    ctx.fill();



    ctx.beginPath();
    ctx.moveTo(maxWidth*.22, maxHeight*.01);
    ctx.lineTo(maxWidth*.26,maxHeight*.01);
    ctx.lineTo(maxWidth*.58,maxHeight*.53);
    ctx.lineTo(maxWidth*.26,maxHeight*.96);
    ctx.lineTo(maxWidth*.22,maxHeight*.96);
    ctx.lineTo(maxWidth*.49,maxHeight*.55);
    ctx.lineTo(maxWidth*.22,maxHeight*.01);
    ctx.fillStyle = "black";
    ctx.fill();


    ctx.beginPath();
    ctx.moveTo(maxWidth*.30, maxHeight*.01);
    ctx.lineTo(maxWidth*.34,maxHeight*.01);
    ctx.lineTo(maxWidth*x1,maxHeight*.48);
    ctx.lineTo(maxWidth*.34,maxHeight*.96);
    ctx.lineTo(maxWidth*.30,maxHeight*.96);
    ctx.lineTo(maxWidth*.66,maxHeight*.50);
    ctx.lineTo(maxWidth*.30,maxHeight*.01);
    ctx.fillStyle = color;
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(maxWidth*.38, maxHeight*.01);
    ctx.lineTo(maxWidth*.42,maxHeight*.01);
    ctx.lineTo(maxWidth*.81,maxHeight*.45);
    ctx.lineTo(maxWidth*.42,maxHeight*.96);
    ctx.lineTo(maxWidth*.38,maxHeight*.96);
    ctx.lineTo(maxWidth*.77,maxHeight*.46);
    ctx.lineTo(maxWidth*.38,maxHeight*.01);
    ctx.fill();


    ctx.beginPath();
    ctx.moveTo(maxWidth*.46, maxHeight*.01);
    ctx.lineTo(maxWidth*.50,maxHeight*.01);
    ctx.lineTo(maxWidth*x2,maxHeight*.43);
    ctx.lineTo(maxWidth*.50,maxHeight*.96);
    ctx.lineTo(maxWidth*.46,maxHeight*.96);
    ctx.lineTo(maxWidth*.84,maxHeight*.44);
    ctx.lineTo(maxWidth*.46,maxHeight*.01);
    ctx.fillStyle=color;
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(maxWidth*.54, maxHeight*.01);
    ctx.lineTo(maxWidth*.58,maxHeight*.01);
    ctx.lineTo(maxWidth*.90,maxHeight*.41);
    ctx.lineTo(maxWidth*.58,maxHeight*.96);
    ctx.lineTo(maxWidth*.54,maxHeight*.96);
    ctx.lineTo(maxWidth*.88,maxHeight*.42);
    ctx.lineTo(maxWidth*.54,maxHeight*.01);
    ctx.fillStyle='black';
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(maxWidth*.62, maxHeight*.01);
    ctx.lineTo(maxWidth*.66,maxHeight*.01);
    ctx.lineTo(maxWidth*.92,maxHeight*.40);
    ctx.lineTo(maxWidth*.66,maxHeight*.96);
    ctx.lineTo(maxWidth*.62,maxHeight*.96);
    ctx.lineTo(maxWidth*.91,maxHeight*.40);
    ctx.lineTo(maxWidth*.62,maxHeight*.01);
    ctx.fill();


    ctx.beginPath();
    ctx.moveTo(maxWidth*.70, maxHeight*.01);
    ctx.lineTo(maxWidth*.74, maxHeight*.01);
    ctx.lineTo(maxWidth*.94,maxHeight*.38);
    ctx.lineTo(maxWidth*.74,maxHeight*.96);
    ctx.lineTo(maxWidth*.70,maxHeight*.96);
    ctx.lineTo(maxWidth*.93,maxHeight*.39);
    ctx.lineTo(maxWidth*.70,maxHeight*.01);
    ctx.fill();


    ctx.beginPath();
    ctx.moveTo(maxWidth*.78, maxHeight*.01);
    ctx.lineTo(maxWidth*.82, maxHeight*.01);
    ctx.lineTo(maxWidth*.96,maxHeight*.36);
    ctx.lineTo(maxWidth*.82,maxHeight*.96);
    ctx.lineTo(maxWidth*.78,maxHeight*.96);
    ctx.lineTo(maxWidth*.95,maxHeight*.37);
    ctx.lineTo(maxWidth*.78,maxHeight*.01);
    ctx.fill();
}








function drawWhite(){
    let c = document.getElementById("canvas");
    let ctx = c.getContext('2d');

    var maxHeight = innerHeight; //y axis
    var maxWidth = innerWidth;// x axis
    ctx.beginPath();
    ctx.moveTo(maxWidth*.18, maxHeight*.01);
    ctx.lineTo(maxWidth*.22,maxHeight*.01);
    ctx.lineTo(maxWidth*.49,maxHeight*.55);
    ctx.lineTo(maxWidth*.22,maxHeight*.96);
    ctx.lineTo(maxWidth*.18,maxHeight*.96);
    ctx.lineTo(maxWidth*.40,maxHeight*.58);
    ctx.lineTo(maxWidth*.18,maxHeight*.01);
    ctx.fillStyle = "lightyellow";
    ctx.fill();
    ctx.closePath()


    ctx.beginPath();
    ctx.moveTo(maxWidth*.26, maxHeight*.01);
    ctx.lineTo(maxWidth*.30,maxHeight*.01);
    ctx.lineTo(maxWidth*.66,maxHeight*.50);
    ctx.lineTo(maxWidth*.30,maxHeight*.96);
    ctx.lineTo(maxWidth*.26,maxHeight*.96);
    ctx.lineTo(maxWidth*.58,maxHeight*.53);
    ctx.lineTo(maxWidth*.26,maxHeight*.01);
    ctx.fillStyle = "lightyellow";
    ctx.fill();
    ctx.closePath()

    ctx.beginPath();
    ctx.moveTo(maxWidth*.34, maxHeight*.01);
    ctx.lineTo(maxWidth*.38,maxHeight*.01);
    ctx.lineTo(maxWidth*.77,maxHeight*.46);
    ctx.lineTo(maxWidth*.38,maxHeight*.96);
    ctx.lineTo(maxWidth*.34,maxHeight*.96);
    ctx.lineTo(maxWidth*.73,maxHeight*.48);
    ctx.lineTo(maxWidth*.34,maxHeight*.01);
    ctx.fillStyle = "lightyellow";
    ctx.fill();
    ctx.closePath()

    ctx.beginPath();
    ctx.moveTo(maxWidth*.42, maxHeight*.01);
    ctx.lineTo(maxWidth*.46,maxHeight*.01);
    ctx.lineTo(maxWidth*.84,maxHeight*.44);
    ctx.lineTo(maxWidth*.46,maxHeight*.96);
    ctx.lineTo(maxWidth*.42,maxHeight*.96);
    ctx.lineTo(maxWidth*.81,maxHeight*.45);
    ctx.lineTo(maxWidth*.42,maxHeight*.01);
    ctx.fillStyle = "lightyellow";
    ctx.fill();
    ctx.closePath()

    ctx.beginPath();
    ctx.moveTo(maxWidth*.50, maxHeight*.01);
    ctx.lineTo(maxWidth*.54,maxHeight*.01);
    ctx.lineTo(maxWidth*.88,maxHeight*.42);
    ctx.lineTo(maxWidth*.54,maxHeight*.96);
    ctx.lineTo(maxWidth*.50,maxHeight*.96);
    ctx.lineTo(maxWidth*.86,maxHeight*.43);
    ctx.lineTo(maxWidth*.50,maxHeight*.01);
    ctx.fillStyle = "lightyellow";
    ctx.fill();
    ctx.closePath()

    ctx.beginPath();
    ctx.moveTo(maxWidth*.58, maxHeight*.01);
    ctx.lineTo(maxWidth*.62,maxHeight*.01);
    ctx.lineTo(maxWidth*.91,maxHeight*.40);
    ctx.lineTo(maxWidth*.62,maxHeight*.96);
    ctx.lineTo(maxWidth*.58,maxHeight*.96);
    ctx.lineTo(maxWidth*.90,maxHeight*.41);
    ctx.lineTo(maxWidth*.58,maxHeight*.01);
    ctx.fillStyle = "lightyellow";
    ctx.fill();
    ctx.closePath()

    ctx.beginPath();
    ctx.moveTo(maxWidth*.66, maxHeight*.01);
    ctx.lineTo(maxWidth*.70, maxHeight*.01);
    ctx.lineTo(maxWidth*.93,maxHeight*.39);
    ctx.lineTo(maxWidth*.70,maxHeight*.96);
    ctx.lineTo(maxWidth*.66,maxHeight*.96);
    ctx.lineTo(maxWidth*.92,maxHeight*.40);
    ctx.lineTo(maxWidth*.66,maxHeight*.01);
    ctx.fillStyle = "lightyellow";
    ctx.fill();
    ctx.closePath()


    ctx.beginPath();
    ctx.moveTo(maxWidth*.74, maxHeight*.01);
    ctx.lineTo(maxWidth*.78, maxHeight*.01);
    ctx.lineTo(maxWidth*.95,maxHeight*.37);
    ctx.lineTo(maxWidth*.78,maxHeight*.96);
    ctx.lineTo(maxWidth*.74,maxHeight*.96);
    ctx.lineTo(maxWidth*.94,maxHeight*.38);
    ctx.lineTo(maxWidth*.74,maxHeight*.01);
    ctx.fillStyle = "lightyellow";
    ctx.fill();
    ctx.closePath();

}



function animate(e) {

    //requestAnimationFrame(animate);
    console.log("hjgjj");

    let c = document.getElementById("canvas");

    var ctx = c.getContext('2d');

    var maxHeight = innerHeight; //y axis
    var maxWidth = innerWidth;// x axis

    for (var i = 0; i < 10000; i++) {

        var x1 = .14;
        var x2 = .18;
        var x3 = .45;
        var x4 = .28;

        ctx.beginPath();
        ctx.moveTo(maxWidth * x1, maxHeight * .01);
        ctx.lineTo(maxWidth * x2, maxHeight * .01);
        ctx.lineTo(maxWidth * e, maxHeight * .58);
        ctx.lineTo(maxWidth * x2, maxHeight * .96);
        ctx.lineTo(maxWidth * x1, maxHeight * .96);
        ctx.lineTo(maxWidth * x4, maxHeight * .62);
        ctx.lineTo(maxWidth * x1, maxHeight * .01);
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.closePath();

        x1 += .2; x2 += .2; x3 += .2; x4 += .2;
    }

}

window.addEventListener('devicemotion', deviceMotionHandler, true);

function deviceMotionHandler(e) {
    var x = e.accelerationIncludingGravity.x;
    var y = e.accelerationIncludingGravity.y;

    //left motion
    if (x > 0) {
        var x1 = x;
        console.log(x1);
        var color = "lightblue"
        cdraw();
        requestAnimationFrame(drawBlack(color,x1,x1,x1));
    }

    if(x<0){
        var x1 = Math.abs(x);
        console.log(x1);
        var color = 'lightgreen';
        cdraw();
        requestAnimationFrame(drawBlack(color,x1,x1,x1))
    }
}




