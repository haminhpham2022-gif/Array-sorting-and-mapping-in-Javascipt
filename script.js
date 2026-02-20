var points=[2, 89, 63, 4, 33, 54, 81];
document.getElementById("result").innerHTML=points;

function ascending(){
    points.sort(function(a,b){
        return a-b;
    })
    document.getElementById("result").innerHTML=points;
}

function decending(){
    points.sort(function(a,b){
        return b-a;
    })
    document.getElementById("result").innerHTML=points;
}

function mapping(){
    var new_points=points.map(function(x){
    return x*2;
    })
    document.getElementById("map").innerHTML=new_points;
}
