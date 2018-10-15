export class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.food = 10;
    this.sleep = 10;
    this.love = 10;
  }

  setHunger() {
    setInterval(() => {
      this.food--;
    }, 1000);
  }

  setSleep() {
    setInterval(() => {
      this.sleep--;
    }, 1000);
  }

  setLove() {
    setInterval(() => {
      this.love--;
    }, 1000);
  }
}
