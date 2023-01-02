import { FlyWithWings } from "../Behaviors/FlyBehavior.ts";
import { Quack } from "../Behaviors/QuackBehavior.ts";
import { Duck } from "./index.ts";

export class MallardDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new Quack();
  }

  display(): void {
    console.log("I am a MallardDuck");
  }
}
