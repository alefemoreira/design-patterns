import { RocketFly } from "../Behaviors/FlyBehavior.ts";
import { Quack } from "../Behaviors/QuackBehavior.ts";
import { Duck } from "./index.ts";

export class RocketDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new RocketFly();
    this.quackBehavior = new Quack();
  }

  display(): void {
    console.log("I am a RocketDuck");
  }
}
