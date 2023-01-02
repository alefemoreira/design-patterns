import { NoFly } from "../Behaviors/FlyBehavior.ts";
import { NoQuack } from "../Behaviors/QuackBehavior.ts";
import { Duck } from "./index.ts";

export class DecoyDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new NoFly();
    this.quackBehavior = new NoQuack();
  }

  display(): void {
    console.log("I am a DecoyDuck");
  }
}
