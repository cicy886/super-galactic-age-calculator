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
});