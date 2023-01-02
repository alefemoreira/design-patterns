import { Character } from ".";

export class Knight extends Character {
  public fight(): void {
    console.log("I am a Knight and I am");
    this.weaponBehavior.useWeapon();
  }
}
