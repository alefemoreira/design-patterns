import { Character } from ".";

export class Troll extends Character {
  public fight(): void {
    console.log("I am a Troll and I am");
    this.weaponBehavior.useWeapon();
  }
}
