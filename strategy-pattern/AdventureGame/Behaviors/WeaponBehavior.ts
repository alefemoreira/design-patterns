export interface WeaponBehavior {
  useWeapon(): void;
}

export class KnifeBehavior implements WeaponBehavior {
  useWeapon(): void {
    console.log("Cutting");
  }
}

export class AxeBehavior implements WeaponBehavior {
  useWeapon(): void {
    console.log("Chopping");
  }
}

export class SwordBehavior implements WeaponBehavior {
  useWeapon(): void {
    console.log("swinging");
  }
}

export class BowandArrowBehavior implements WeaponBehavior {
  useWeapon(): void {
    console.log("shooting a arrow with a bow");
  }
}
