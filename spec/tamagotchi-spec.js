import { Tamagotchi } from './../src/tamagotchi.js';

describe('Tamagotchi', function(){
  let bill = new Tamagotchi("Bill");

  beforeEach(function(){
    jasmine.clock().install();
    bill.setHunger();
    bill.setSleep();
    bill.setLove();
  });
  afterEach(function(){
    jasmine.clock().uninstall();
  });

  it('should have a name, food, sleep, and love values of 10 when created', function(){
    expect (bill.name).toEqual("Bill");
    expect (bill.food).toEqual(10);
    expect (bill.sleep).toEqual(10);
    expect (bill.love).toEqual(10);
  });

  it('should have food, sleep, love level of 7 after 3001 milliseconds', function(){
    jasmine.clock().tick(3001);
    expect(bill.food).toEqual(7);
    expect(bill.sleep).toEqual(7);
    expect(bill.love).toEqual(7);
  });
});
