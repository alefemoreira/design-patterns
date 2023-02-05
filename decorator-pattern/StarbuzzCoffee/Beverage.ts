export abstract class Beverage {
  // could be an interface
  description: string;

  public getDescription() {
    return this.description;
  }

  public abstract cost(): number;
}

export abstract class CondimentDecorator extends Beverage {
  constructor(protected beverage: Beverage) {
    super();
  }
  public abstract getDescription(): string;
}

export class MochaDecorator extends CondimentDecorator {
  public getDescription(): string {
    return this.beverage.getDescription() + ", Mocha";
  }
  public cost(): number {
    return this.beverage.cost() + 0.99;
  }
}
