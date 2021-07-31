export class AgeCalculator{
  constructor (age){
    this.age = age;
  }

  checkMercuryAge(){
    return this.age = Math.round(this.age*0.24);
  }
}