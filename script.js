var header = document.getElementById("header");
var model = document.getElementById("model");
var mph = document.getElementById("mph");
var speed = document.getElementById("speed");
var power = document.getElementById("power");
var engine = document.getElementById("engine");
var weight = document.getElementById("weight");
var price = document.getElementById("price");

document.getElementById("DUCATI").onclick = function(){
    header.style.backgroundImage = "url('images/ducati.jpeg')";
    model.innerHTML = "Ducati Panigale V4";
    mph.innerHTML = "2.5 s";
    speed.innerHTML = "305 Kmph";
    power.innerHTML = "214 BHP";
    engine.innerHTML = "1103cc, V4";
    weight.innerHTML = "198 Kg";
    price.innerHTML = "₹27.41 Lakh";
}

document.getElementById("BMW").onclick = function(){
    header.style.backgroundImage = "url('images/bmw.jpeg')";
    model.innerHTML = "BMW S1000RR";
    mph.innerHTML = "2.7 s";
    speed.innerHTML = "299 Kmph";
    power.innerHTML = "205 BHP";
    engine.innerHTML = "999cc, Inline-4";
    weight.innerHTML = "197 Kg";
    price.innerHTML = "₹23.95 Lakh";
}

document.getElementById("YAMAHA").onclick = function(){
    header.style.backgroundImage = "url('images/yamaha.jpeg')";
    model.innerHTML = "Yamaha R1";
    mph.innerHTML = "2.9 s";
    speed.innerHTML = "285 Kmph";
    power.innerHTML = "200 BHP";
    engine.innerHTML = "998cc, Inline-4";
    weight.innerHTML = "200 Kg";
    price.innerHTML = "₹20.39 Lakh";
}

document.getElementById("KAWASAKI").onclick = function(){
    header.style.backgroundImage = "url('images/kawasaki.jpg')";
    model.innerHTML = "Kawasaki Ninja H2";
    mph.innerHTML = "2.5 s";
    speed.innerHTML = "335 Kmph";
    power.innerHTML = "228 BHP";
    engine.innerHTML = "998cc, Inline-4 Supercharged";
    weight.innerHTML = "216 Kg";
    price.innerHTML = "₹34.99 Lakh";
}

document.getElementById("SUZUKI").onclick = function(){
    header.style.backgroundImage = "url('images/hayabusa.jpeg')";
    model.innerHTML = "Suzuki Hayabusa";
    mph.innerHTML = "2.6 s";
    speed.innerHTML = "310 Kmph";
    power.innerHTML = "190 BHP";
    engine.innerHTML = "1340cc, Inline-4";
    weight.innerHTML = "264 Kg";
    price.innerHTML = "₹16.90 Lakh";
}
