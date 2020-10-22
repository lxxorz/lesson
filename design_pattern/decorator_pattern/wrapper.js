let plane = {
    fire: function(){
        console.log('发射子弹');
    }
}

let missileDecorator = function(){
    console.log('发射导弹');
}
let atomDecorator = function(){
    console.log('发射原子弹');
}
let t_fire = plane.fire;
plane.fire = function() {
    t_fire();
    atomDecorator();
    missileDecorator();
} 

plane.fire();