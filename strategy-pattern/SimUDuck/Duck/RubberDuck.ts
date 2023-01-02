import { NoFly } from "../Behaviors/FlyBehavior.ts";
import { Squeak } from "../Behaviors/QuackBehavior.ts";
import { Duck } from "./index.ts";

export class RubberDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new NoFly();
    this.quackBehavior = new Squeak();
  }
  display(): void {
    console.log("I am a RubberDuck");
  }
}
