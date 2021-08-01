export class AgeCalculator{
  constructor (name,age,lifeExpectancy){
    this.name = name;
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
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

  remainingMercuryLife(){
    this.lifeExpectancy = this.lifeExpectancy*0.24 - this.age;
    if (this.lifeExpectancy < 0) {
      return this.lifeExpectancy * -1;
    }
    return this.lifeExpectancy;
  }

  remainingVenusLife(){
    this.lifeExpectancy = this.lifeExpectancy*0.62 - this.age;
    if (this.lifeExpectancy < 0) {
      return this.lifeExpectancy * -1;
    }
    return this.lifeExpectancy;
  }

  remainingMarsLife(){
    return this.lifeExpectany = this.lifeExpectancy*1.88 - this.age;
  }

  remainingJupiterLife(){
    return this.lifeExpectany = this.lifeExpectancy*11.86 - this.age;
  }

}