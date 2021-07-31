import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {AgeCalculator} from './age-calculator.js';

$(document).ready(function() {
  $('#age-calculator-form').submit(function(event){
    event.preventDefault();
    const name = $('#name').val;
    const earthAge = $('#age').val;
    const ageCalculator = new AgeCalculator(name,earthAge);
    $('#display-age').append("<li>" + "Hi " + name + "!" + "</li");
    const mercuryAge = ageCalculator.checkMercuryAge();
    $('#display-age').append("<li>" + "Your Merury Age is " + mercuryAge + "</li");
  });
});