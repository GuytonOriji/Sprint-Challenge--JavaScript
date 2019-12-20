// 1. Copy and paste your prototype in here and refactor into class syntax.
//step 1
class CuboidMaker{
    constructor(obj){
        this.length = obj.length;
        this.width=obj.width;
        this.height=obj.height;
    }

      //step 2
    volume(){
        return this.length * this.width * this.height
      }
  //step 2



   //step 3
   surfaceArea(){
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
  }
  //step 3
  
}
  //step 1
  
  
  
  //step 4
  const cuboid = new CuboidMaker({
    length:4,
    width:5,
    height:5,
  })
  //step 4

  //stretch
  class CubeMaker extends CuboidMaker{
        constructor(obj){
            super(obj)
            
        }

        // volume(){
        //     return this.length * this.width * this.height;
        //   }
        //   surfaceArea() {
        //     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height); 
        //   } 
  }

  const cube = new CubeMaker({
      length:12,
      width:5,
      height:8,
  })
  //stretch
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cube.volume()); // 480
console.log(cube.surfaceArea()); // 392

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.