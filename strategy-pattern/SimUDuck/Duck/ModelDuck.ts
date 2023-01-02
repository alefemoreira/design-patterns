import { Duck } from "./index.ts";

export class ModelDuck extends Duck {
  display(): void {
    console.log("I am a ModelDuck");
  }
}
