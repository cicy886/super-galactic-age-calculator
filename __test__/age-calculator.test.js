import {AgeCalculator} from '../src/age-calculator.js';

describe ('AgeCalculator', () => {

  test('should correctly receive users age',() =>{
    const ageCalculator= new AgeCalculator (15);
    expect(ageCalculator.age).toEqual(15);
  });

  test('should correctly calculate users Mercury age',() =>{
    let mercuryAge = new AgeCalculator (15);
    expect(mercuryAge.checkMercuryAge()).toEqual(4);
  });

  test('should correctly calculate users Venus age', () =>{
    let venusAge = new AgeCalculator (15);
    expect(venusAge.checkVenusAge()).toEqual(9);
  });

  test('should correctly calculate users Mars age', () =>{
    let marsAge = new AgeCalculator (15);
    expect(marsAge.checkMarsAge()).toEqual(28);
  });

});