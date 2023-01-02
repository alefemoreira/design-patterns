export interface FlyBehavior {
  fly(): void;
}

export class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log("I am flying using my wings");
  }
}

export class NoFly implements FlyBehavior {
  fly(): void {
    console.log("I can't fly :(");
  }
}

export class RocketFly implements FlyBehavior {
  fly(): void {
    console.log("I am flying with a rocket haha!");
  }
}
