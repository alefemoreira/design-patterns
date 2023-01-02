import { FlyBehavior } from "../Behaviors/FlyBehavior.ts";
import { QuackBehavior } from "../Behaviors/QuackBehavior.ts";

export abstract class Duck {
  protected quackBehavior: QuackBehavior;
  protected flyBehavior: FlyBehavior;

  public performQuack(): void {
    this.quackBehavior.quack();
  }
  public performFly(): void {
    this.flyBehavior.fly();
  }
  public swim(): void {
    console.log("Swiming");
  }

  public setQuackBehavior(behavior: QuackBehavior) {
    this.quackBehavior = behavior;
  }

  public setFlyBehavior(behavior: FlyBehavior) {
    this.flyBehavior = behavior;
  }

  public abstract display(): void;
}
