export class AgeCalculator{
  constructor (name,age){
    this.name = name;
    this.age = age;
  }

  checkMercuryAge(){
    return this.age = Math.round(this.age*0.24);
  }

  checkVenusAge(){
    return this.age = Math.round(this.age*0.62);
  }

  checkMarsAge(){
    return this.age = Math.round(this.age*1.88);
  }

  checkJupiterAge(){
    return this.age = Math.round(this.age*11.86);
  }

}