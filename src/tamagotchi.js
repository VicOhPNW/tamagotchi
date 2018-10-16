export class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.food = 10;
    this.sleep = 10;
    this.love = 10;
    this.life = true;
  }

  setHunger() {
    setInterval(() => {
      if (this.food === 0) {
        this.life = false;
      } else {
        this.food--;
      }
    }, 4000);
  }


  setSleep() {
    setInterval(() => {
      if (this.sleep === 0) {
        this.life = false;
      } else {
        this.sleep--;
      }
    }, 5000);
  }

//
  setLove() {
    setInterval(() => {
      if (this.love === 0) {
        this.life = false;
      } else {
        this.love--;
      }
    }, 3000);
  }


  giveFood() {
    this.food++;
    console.log("FEED");
  }
  getFood(){
    return this.food;
  }

  giveSleep() {
    this.sleep++;
  }
  getSleep() {
    return this.sleep;
  }

  giveLove() {
    console.log("WHY");
    this.love++;
  }
  getLove() {
    return this.love;
  }

  getLife() {
    return this.life;
  }
}
