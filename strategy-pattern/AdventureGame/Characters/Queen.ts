import { Character } from ".";

export class Queen extends Character {
  public fight(): void {
    console.log("I am a Queen and I am");
    this.weaponBehavior.useWeapon();
  }
}
