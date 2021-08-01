import {AgeCalculator} from './../src/age-calculator.js';

describe ('AgeCalculator', () => {

  test('should correctly receive users name, age and life expectancy',() =>{
    const ageCalculator= new AgeCalculator ("Sisi",15,100);
    expect(ageCalculator.name).toEqual("Sisi");
    expect(ageCalculator.age).toEqual(15);
    expect(ageCalculator.lifeExpectancy).toEqual(100);
  });

  test('should correctly calculate users Mercury age, remaining life or life passed expected to live',() =>{
    let mercuryAge = new AgeCalculator ("Sisi",105,100);
    expect(mercuryAge.name).toEqual("Sisi");
    expect(mercuryAge.checkMercuryAge()).toEqual(25);
    expect(mercuryAge.remainingMercuryLife()).toEqual(1);
  });

  test('should correctly calculate users Venus age', () =>{
    let venusAge = new AgeCalculator ("Sisi",105,100);
    expect(venusAge.name).toEqual("Sisi");
    expect(venusAge.checkVenusAge()).toEqual(65);
    expect(venusAge.remainingVenusLife()).toEqual(3);
  });

  test('should correctly calculate users Mars age', () =>{
    let marsAge = new AgeCalculator ("Sisi",105,100);
    expect(marsAge.name).toEqual("Sisi");
    expect(marsAge.checkMarsAge()).toEqual(197);
    expect(marsAge.remainingMarsLife()).toEqual();
  });

  test('should correctly calculate users Jupiter age', () =>{
    let jupiterAge = new AgeCalculator ("Sisi",15,100);
    expect(jupiterAge.name).toEqual("Sisi");
    expect(jupiterAge.checkJupiterAge()).toEqual(178);
    expect(jupiterAge.remainingJupiterLife()).toEqual(1008);
  });

});