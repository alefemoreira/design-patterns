import { Character } from ".";

export class King extends Character {
  public fight(): void {
    console.log("I am a King and I am");
    this.weaponBehavior.useWeapon();
  }
}
