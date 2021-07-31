import {AgeCalculator} from './../src/age-calculator.js';

describe ('AgeCalculator', () => {

  test('should correctly receive users name, age and life expectancy',() =>{
    const ageCalculator= new AgeCalculator ("Sisi",15,100);
    expect(ageCalculator.name).toEqual("Sisi");
    expect(ageCalculator.age).toEqual(15);
    expect(ageCalculator.lifeExpectancy).toEqual(100);
  });

  test('should correctly calculate users Mercury age',() =>{
    let mercuryAge = new AgeCalculator ("Sisi",15);
    expect(mercuryAge.name).toEqual("Sisi");
    expect(mercuryAge.checkMercuryAge()).toEqual(4);
  });

  test('should correctly calculate users Venus age', () =>{
    let venusAge = new AgeCalculator ("Sisi",15);
    expect(venusAge.name).toEqual("Sisi");
    expect(venusAge.checkVenusAge()).toEqual(9);
  });

  test('should correctly calculate users Mars age', () =>{
    let marsAge = new AgeCalculator ("Sisi",15);
    expect(marsAge.name).toEqual("Sisi");
    expect(marsAge.checkMarsAge()).toEqual(28);
  });

  test('should correctly calculate users Jupiter age', () =>{
    let jupiterAge = new AgeCalculator ("Sisi",15);
    expect(jupiterAge.name).toEqual("Sisi");
    expect(jupiterAge.checkJupiterAge()).toEqual(178);
  });

});