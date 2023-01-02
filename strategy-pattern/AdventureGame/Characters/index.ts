import { WeaponBehavior } from "../Behaviors/WeaponBehavior";

export abstract class Character {
  protected weaponBehavior: WeaponBehavior;

  public setWeaponBehavior(behavior: WeaponBehavior) {
    this.weaponBehavior = behavior;
  }

  public abstract fight(): void;
}
