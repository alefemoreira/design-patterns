import { NoFly, RocketFly } from "./Behaviors/FlyBehavior.ts";
import { Squeak } from "./Behaviors/QuackBehavior.ts";
import { Duck } from "./Duck/index.ts";
import { ModelDuck } from "./Duck/ModelDuck.ts";
import { RubberDuck } from "./Duck/RubberDuck.ts";

const rubberDuck: Duck = new RubberDuck();

console.log("-- rubber duck --");

rubberDuck.performFly();
rubberDuck.performQuack();

console.log("-- some duck --");

const someDuck: Duck = new ModelDuck(); // this will be a rubber duck that fly with a rocket;

someDuck.setFlyBehavior(new RocketFly());
someDuck.setQuackBehavior(new Squeak());

someDuck.performFly();
someDuck.performQuack();

console.log("-- behavior change --");
someDuck.setFlyBehavior(new NoFly()); // now the duck loose his rocket

someDuck.performFly();
