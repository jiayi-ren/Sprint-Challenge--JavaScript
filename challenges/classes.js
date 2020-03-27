// 1. Copy and paste your prototype in here and refactor into class syntax.
// function CuboidMaker(dimension){
//     this.length = dimension.length;
//     this.width = dimension.width;
//     this.height = dimension.height;
// }
// CuboidMaker.prototype.volume = function(){
//     return this.length * this.width * this.height;
// }
// CuboidMaker.prototype.surfaceArea = function(){
//     return (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
// }
// const cuboid = new CuboidMaker({
//     length: 4,
//     width: 5,
//     height: 5
// })

class CuboidMaker{
    constructor(dimension){
        this.length = dimension.length;
        this.width = dimension.width;
        this.height = dimension.height;
    }
    volume(){
        return this.length * this.width * this.height;
    }
    surfaceArea(){
        return (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
    }
}

const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
})
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker{
    constructor(dimension){
        super(dimension);
    }
    cubeVolume(){
        return this.length ** 3;
    }
    cubeSurfaceArea(){
        return 6* this.length** 2;
    }
}

const cube = new CubeMaker({
    length: 4,
    width: 4,
    height: 4
})

console.log(cube.volume()); // 64
console.log(cube.cubeVolume()); // 64
console.log(cube.surfaceArea()); // 96
console.log(cube.cubeSurfaceArea()); // 96