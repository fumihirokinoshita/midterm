function hash(a,b){
    return {x:a,y:b};
}

let p1 = hash()
let p2 = hash()

function distance(p1, p2){
    if(p1==p2){
        return 0;
    }else{
        x = p1.x - p2.x;
        y = p1.y - p2.y;
        return Math.abs(x) + Math.abs(y);
    }
}
