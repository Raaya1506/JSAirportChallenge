'use strict';

describe ('Airport',function(){

  var airport;

  beforeEach(function(){
    airport = new Airport(); //creating a new instance of airport
  });

  it('by default the airpot contains no planes', function(){
    expect(airport.planes()).toEqual([]);
  });
});
