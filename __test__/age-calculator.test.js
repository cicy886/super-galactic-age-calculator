import {AgeCalculator} from '../src/age-calculator.js';

describe ('AgeCalculator', () => {

  test('Should correctly receive users age',() =>{
    const ageCalculator= new AgeCalculator (15);
    expect(ageCalculator.age).toEqual(13);
  });
});