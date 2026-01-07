
  import { Item } from "scripts/schema";

  export const items: Record<string, Item> = {
  "adrenaline_shot": {
    "id": "adrenaline_shot",
    "name": "Adrenaline Shot",
    "description": "A serum that fully restores stamina and temporarily increases stamina regeneration.",
    "rarity": "Common",
    "value": 300,
    "weightKg": 0.2,
    "stackSize": 5,
    "imageFilename": "https://cdn.arctracker.io/items/adrenaline_shot.png",
    "type": "Quick Use",
    "effects": {
      "Stamina Regeneration": "Stamina Regeneration",
      "Duration": "Duration",
      "Use Time": "Use Time"
    },
    "recipe": {
      "chemicals": 3,
      "plastic_parts": 3
    },
    "recyclesInto": {
      "chemicals": 1,
      "plastic_parts": 1
    },
    "salvagesInto": {
      "chemicals": 1
    }
  },
  "advanced_electrical_components": {
    "id": "advanced_electrical_components",
    "name": "Advanced Electrical Components",
    "description": "Used to craft a wide range of items. Can be recycled into crafting materials. Used to craft: Tactical Mk. 3 (Defensive), Combat Mk. 3 (Flanking), Combat Mk. 3 (Aggressive), Looting Mk. 3 (Cautious), Tactical Mk. 3 (Healing)",
    "rarity": "Rare",
    "value": 1750,
    "weightKg": 1,
    "stackSize": 5,
    "imageFilename": "https://cdn.arctracker.io/items/advanced_electrical_components.png",
    "recipe": {
      "wires": 3,
      "electrical_components": 2
    },
    "type": "Refined Material",
    "foundIn": "Electrical",
    "recyclesInto": {
      "electrical_components": 1,
      "wires": 1
    },
    "salvagesInto": {
      "electrical_components": 1
    }
  },
  "advanced_mechanical_components": {
    "id": "advanced_mechanical_components",
    "name": "Advanced Mechanical Components",
    "description": "Used to craft advanced weapons. Can be recycled into crafting materials. Used to craft: Torrente, Venator, Osprey, Renegade, Bettina",
    "rarity": "Rare",
    "value": 1750,
    "weightKg": 1,
    "stackSize": 5,
    "imageFilename": "https://cdn.arctracker.io/items/advanced_mechanical_components.png",
    "recipe": {
      "steel_spring": 2,
      "mechanical_components": 2
    },
    "type": "Refined Material",
    "foundIn": "Mechanical",
    "recyclesInto": {
      "mechanical_components": 1,
      "wires": 1
    }
  },
  "angled_grip_i": {
    "id": "angled_grip_i",
    "name": "Angled Grip I",
    "description": "Slightly reduces horizontal recoil. Compatible with: Tempest, Arpeggio, Kettle, Ferro, Hullcracker",
    "rarity": "Common",
    "value": 640,
    "weightKg": 0.25,
    "imageFilename": "https://cdn.arctracker.io/items/angled_grip_i.png",
    "type": "Modification",
    "recipe": {
      "plastic_parts": 6,
      "duct_tape": 1
    },
    "effects": {
      "Reduced Horizontal Recoil": "Reduced Horizontal Recoil"
    }
  },
  "angled_grip_ii": {
    "id": "angled_grip_ii",
    "name": "Angled Grip II",
    "description": "Moderately reduces horizontal recoil. Compatible with: Arpeggio, Ferro, Il Toro, Stitcher",
    "rarity": "Uncommon",
    "value": 2000,
    "weightKg": 0.5,
    "imageFilename": "https://cdn.arctracker.io/items/angled_grip_ii.png",
    "type": "Modification",
    "recipe": {
      "mechanical_components": 2,
      "duct_tape": 3
    },
    "effects": {
      "Reduced Horizontal Recoil": "Reduced Horizontal Recoil"
    },
    "compatibleWith": [
      "Arpeggio",
      "Rattler",
      "Kettle",
      "Il Toro",
      "Stitcher"
    ],
    "recyclesInto": {
      "mechanical_components": 1,
      "duct_tape": 1
    }
  },
  "angled_grip_iii": {
    "id": "angled_grip_iii",
    "name": "Angled Grip III",
    "description": "Significantly reduces horizontal recoil. Compatible with: Arpeggio, Ferro, Venator, Il Toro, Stitcher",
    "rarity": "Rare",
    "value": 5000,
    "weightKg": 0.75,
    "imageFilename": "https://cdn.arctracker.io/items/angled_grip_iii.png",
    "type": "Modification",
    "effects": {
      "Reduced Horizontal Recoil": "Reduced Horizontal Recoil",
      "Reduced ADS Speed": "Reduced ADS Speed"
    },
    "recyclesInto": {
      "mod_components": 1,
      "duct_tape": 2
    }
  },
  "antiseptic": {
    "id": "antiseptic",
    "name": "Antiseptic",
    "description": "Used to craft medical supplies. Can be recycled into chemicals. Used to craft: Sterilized Bandage, Vita Spray, Vita Shot",
    "rarity": "Rare",
    "value": 1000,
    "weightKg": 1,
    "stackSize": 5,
    "imageFilename": "https://cdn.arctracker.io/items/antiseptic.png",
    "recipe": {
      "chemicals": 10,
      "great_mullein": 2
    },
    "type": "Refined Material",
    "foundIn": "Medical",
    "recyclesInto": {
      "chemicals": 10
    }
  },
  "anvil_i": {
    "id": "anvil_i",
    "name": "Anvil I",
    "description": "Single-action hand cannon with high damage and headshot damage, but slow handling.",
    "rarity": "Uncommon",
    "value": 5000,
    "weightKg": 5,
    "imageFilename": "https://cdn.arctracker.io/items/anvil.png",
    "recipe": {
      "mechanical_components": 5,
      "simple_gun_parts": 6
    },
    "recyclesInto": {
      "mechanical_components": 2,
      "simple_gun_parts": 2
    },
    "salvagesInto": {
      "simple_gun_parts": 2
    },
    "type": "Hand Cannon"
  },
  "anvil_ii": {
    "id": "anvil_ii",
    "name": "Anvil II",
    "description": "Single-action hand cannon with high damage and headshot damage, but slow handling.",
    "rarity": "Uncommon",
    "value": 7000,
    "weightKg": 5,
    "imageFilename": "https://cdn.arctracker.io/items/anvil.png",
    "upgradeCost": {
      "mechanical_components": 3,
      "simple_gun_parts": 1
    },
    "recyclesInto": {
      "mechanical_components": 3,
      "simple_gun_parts": 3
    },
    "salvagesInto": {
      "simple_gun_parts": 3
    },
    "type": "Hand Cannon"
  },
  "anvil_iii": {
    "id": "anvil_iii",
    "name": "Anvil III",
    "description": "Single-action hand cannon with high damage and headshot damage, but slow handling.",
    "rarity": "Uncommon",
    "value": 10000,
    "weightKg": 5,
    "imageFilename": "https://cdn.arctracker.io/items/anvil.png",
    "upgradeCost": {
      "mechanical_components": 4,
      "heavy_gun_parts": 1
    },
    "recyclesInto": {
      "mechanical_components": 4,
      "simple_gun_parts": 4
    },
    "salvagesInto": {
      "simple_gun_parts": 4
    },
    "type": "Hand Cannon"
  },
  "anvil_iv": {
    "id": "anvil_iv",
    "name": "Anvil IV",
    "description": "Single-action hand cannon with high damage and headshot damage, but slow handling.",
    "rarity": "Uncommon",
    "value": 13000,
    "weightKg": 5,
    "imageFilename": "https://cdn.arctracker.io/items/anvil.png",
    "upgradeCost": {
      "mechanical_components": 4,
      "heavy_gun_parts": 1
    },
    "recyclesInto": {
      "mechanical_components": 5,
      "simple_gun_parts": 5
    },
    "salvagesInto": {
      "simple_gun_parts": 5
    },
    "type": "Hand Cannon"
  },
  "anvil_splitter": {
    "id": "anvil_splitter",
    "name": "Anvil Splitter",
    "description": "Tech mod for the Anvil that replaces its bullets with ones that split into 4 weaker projectiles.",
    "rarity": "Legendary",
    "value": 7000,
    "weightKg": 0.5,
    "imageFilename": "https://cdn.arctracker.io/items/anvil_splitter.png",
    "type": "Modification",
    "effects": {
      "Projectiles Per Shot": "Projectiles Per Shot",
      "Reduced Projectile Damage": "Reduced Projectile Damage"
    },
    "recyclesInto": {
      "mod_components": 1,
      "processor": 1
    }
  },
  "arpeggio_i": {
    "id": "arpeggio_i",
    "name": "Arpeggio I",
    "description": "Has decent damage output and accuracy.",
    "rarity": "Uncommon",
    "value": 5500,
    "weightKg": 7,
    "imageFilename": "https://cdn.arctracker.io/items/arpeggio.png",
    "recipe": {
      "mechanical_components": 6,
      "simple_gun_parts": 6
    },
    "type": "Assault Rifle"
  },
  "arpeggio_ii": {
    "id": "arpeggio_ii",
    "name": "Arpeggio II",
    "description": "Has decent damage output and accuracy.",
    "rarity": "Uncommon",
    "value": 8000,
    "weightKg": 7,
    "imageFilename": "https://cdn.arctracker.io/items/arpeggio.png",
    "upgradeCost": {
      "mechanical_components": 4,
      "simple_gun_parts": 1
    },
    "type": "Assault Rifle"
  },
  "arpeggio_iii": {
    "id": "arpeggio_iii",
    "name": "Arpeggio III",
    "description": "Has decent damage output and accuracy.",
    "rarity": "Uncommon",
    "value": 11500,
    "weightKg": 7,
    "imageFilename": "https://cdn.arctracker.io/items/arpeggio.png",
    "upgradeCost": {
      "mechanical_components": 5,
      "medium_gun_parts": 1
    },
    "type": "Assault Rifle"
  },
  "arpeggio_iv": {
    "id": "arpeggio_iv",
    "name": "Arpeggio IV",
    "description": "Has decent damage output and accuracy.",
    "rarity": "Uncommon",
    "value": 15000,
    "weightKg": 7,
    "imageFilename": "https://cdn.arctracker.io/items/arpeggio.png",
    "upgradeCost": {
      "mechanical_components": 5,
      "medium_gun_parts": 1
    },
    "recyclesInto": {
      "mechanical_components": 5,
      "simple_gun_parts": 5
    },
    "type": "Assault Rifle"
  },
  "bandage": {
    "id": "bandage",
    "name": "Bandage",
    "description": "A medical item that gradually restores health over time.",
    "rarity": "Common",
    "value": 250,
    "weightKg": 0.1,
    "stackSize": 5,
    "imageFilename": "https://cdn.arctracker.io/items/bandage.png",
    "type": "Quick Use",
    "effects": {
      "Healing": "Healing",
      "Duration": "Duration",
      "Use Time": "Use Time"
    },
    "recipe": {
      "fabric": 5
    },
    "recyclesInto": {
      "fabric": 2
    }
  },
  "barricade_kit": {
    "id": "barricade_kit",
    "name": "Barricade Kit",
    "description": "A deployable cover that can block incoming damage until it breaks.",
    "rarity": "Uncommon",
    "value": 640,
    "weightKg": 0.4,
    "stackSize": 3,
    "imageFilename": "https://cdn.arctracker.io/items/barricade_kit.png",
    "type": "Quick Use",
    "effects": {
      "Health": "Health",
      "Duration": "Duration"
    },
    "recipe": {
      "mechanical_components": 1
    },
    "recyclesInto": {
      "metal_parts": 4
    }
  },
  "bettina_i": {
    "id": "bettina_i",
    "name": "Bettina I",
    "description": "Has slow fire rate and high damage output.",
    "rarity": "Epic",
    "value": 8000,
    "weightKg": 11,
    "imageFilename": "https://cdn.arctracker.io/items/bettina.png",
    "recipe": {
      "advanced_mechanical_components": 3,
      "heavy_gun_parts": 3,
      "canister": 3
    },
    "type": "Assault Rifle"
  },
  "bettina_ii": {
    "id": "bettina_ii",
    "name": "Bettina II",
    "description": "Has slow fire rate and high damage output.",
    "rarity": "Epic",
    "value": 11000,
    "weightKg": 11,
    "imageFilename": "https://cdn.arctracker.io/items/bettina.png",
    "upgradeCost": {
      "advanced_mechanical_components": 1,
      "heavy_gun_parts": 2
    },
    "type": "Assault Rifle"
  },
  "bettina_iii": {
    "id": "bettina_iii",
    "name": "Bettina III",
    "description": "Has slow fire rate and high damage output.",
    "rarity": "Epic",
    "value": 14000,
    "weightKg": 11,
    "imageFilename": "https://cdn.arctracker.io/items/bettina.png",
    "upgradeCost": {
      "advanced_mechanical_components": 1,
      "heavy_gun_parts": 2
    },
    "type": "Assault Rifle"
  },
  "bettina_iv": {
    "id": "bettina_iv",
    "name": "Bettina IV",
    "description": "Has slow fire rate and high damage output.",
    "rarity": "Epic",
    "value": 17000,
    "weightKg": 11,
    "imageFilename": "https://cdn.arctracker.io/items/bettina.png",
    "upgradeCost": {
      "advanced_mechanical_components": 2,
      "heavy_gun_parts": 2
    },
    "type": "Assault Rifle"
  },
  "binoculars": {
    "id": "binoculars",
    "name": "Binoculars",
    "description": "A basic pair of binoculars with two levels of magnification.",
    "rarity": "Common",
    "value": 640,
    "weightKg": 0.5,
    "imageFilename": "https://cdn.arctracker.io/items/binoculars.png",
    "type": "Quick Use",
    "effects": {
      "Durability": "Durability"
    },
    "recipe": {
      "plastic_parts": 8,
      "rubber_parts": 4
    },
    "recyclesInto": {
      "rubber_parts": 2,
      "plastic_parts": 4
    }
  },
  "blaze_grenade": {
    "id": "blaze_grenade",
    "name": "Blaze Grenade",
    "description": "A grenade that detonates on impact, covering an area in fire that deals damage over time.",
    "rarity": "Rare",
    "value": 1600,
    "weightKg": 0.2,
    "stackSize": 5,
    "imageFilename": "https://cdn.arctracker.io/items/blaze_grenade.png",
    "type": "Quick Use",
    "effects": {
      "Damage": "Damage",
      "Duration": "Duration",
      "Radius": "Radius"
    },
    "recyclesInto": {
      "oil": 2,
      "metal_parts": 4
    }
  },
  "blaze_grenade_trap": {
    "id": "blaze_grenade_trap",
    "name": "Blaze Grenade Trap",
    "description": "A laser trip wire that detonates a Blaze Grenade.",
    "rarity": "Rare",
    "value": 1000,
    "weightKg": 0.3,
    "stackSize": 3,
    "imageFilename": "https://cdn.arctracker.io/items/blaze_grenade_trap.png",
    "type": "Quick Use",
    "effects": {
      "Damage": "Damage",
      "Duration": "Duration"
    }
  },
  "blue_light_stick": {
    "id": "blue_light_stick",
    "name": "Blue Light Stick",
    "description": "A throwable chemical light that illuminates the area around it.",
    "rarity": "Common",
    "value": 150,
    "weightKg": 0.75,
    "stackSize": 5,
    "imageFilename": "https://cdn.arctracker.io/items/blue_light_stick.png",
    "type": "Quick Use",
    "effects": {
      "Illumination Radius": "Illumination Radius",
      "Duration": "Duration"
    },
    "recyclesInto": {
      "chemicals": 1
    }
  },
  "bobcat_i": {
    "id": "bobcat_i",
    "name": "Bobcat I",
    "description": "Fully automatic SMG with high fire rate but low accuracy.",
    "rarity": "Epic",
    "value": 13000,
    "weightKg": 7,
    "imageFilename": "https://cdn.arctracker.io/items/bobcat.png",
    "recipe": {
      "magnetic_accelerator": 1,
      "light_gun_parts": 3,
      "exodus_modules": 2
    },
    "recyclesInto": {
      "light_gun_parts": 2,
      "advanced_mechanical_components": 2
    },
    "salvagesInto": {
      "light_gun_parts": 2
    },
    "type": "SMG"
  },
  "bobcat_ii": {
    "id": "bobcat_ii",
    "name": "Bobcat II",
    "description": "Fully automatic SMG with high fire rate but low accuracy.",
    "rarity": "Epic",
    "value": 17000,
    "weightKg": 7,
    "imageFilename": "https://cdn.arctracker.io/items/bobcat.png",
    "upgradeCost": {
      "advanced_mechanical_components": 2,
      "light_gun_parts": 1
    },
    "recyclesInto": {
      "light_gun_parts": 3,
      "advanced_mechanical_components": 3
    },
    "salvagesInto": {
      "light_gun_parts": 3
    },
    "type": "SMG"
  },
  "bobcat_iii": {
    "id": "bobcat_iii",
    "name": "Bobcat III",
    "description": "Fully automatic SMG with high fire rate but low accuracy.",
    "rarity": "Epic",
    "value": 22000,
    "weightKg": 7,
    "imageFilename": "https://cdn.arctracker.io/items/bobcat.png",
    "upgradeCost": {
      "advanced_mechanical_components": 2,
      "light_gun_parts": 3
    },
    "recyclesInto": {
      "light_gun_parts": 4,
      "advanced_mechanical_components": 4
    },
    "salvagesInto": {
      "light_gun_parts": 4
    },
    "type": "SMG"
  },
  "bobcat_iv": {
    "id": "bobcat_iv",
    "name": "Bobcat IV",
    "description": "Fully automatic SMG with high fire rate but low accuracy.",
    "rarity": "Epic",
    "value": 27000,
    "weightKg": 7,
    "imageFilename": "https://cdn.arctracker.io/items/bobcat.png",
    "upgradeCost": {
      "advanced_mechanical_components": 2,
      "light_gun_parts": 3
    },
    "recyclesInto": {
      "light_gun_parts": 4,
      "advanced_mechanical_components": 5
    },
    "salvagesInto": {
      "light_gun_parts": 5
    },
    "type": "SMG"
  },
  "burletta_i": {
    "id": "burletta_i",
    "name": "Burletta I",
    "description": "Semi-automatic pistol with decent damage output and accuracy. Can be fired as fast as you can pull the trigger.",
    "rarity": "Uncommon",
    "value": 2900,
    "weightKg": 4,
    "imageFilename": "https://cdn.arctracker.io/items/burletta.png",
    "recipe": {
      "mechanical_components": 3,
      "simple_gun_parts": 3
    },
    "recyclesInto": {
      "mechanical_components": 1,
      "simple_gun_parts": 2
    },
    "type": "Pistol"
  },
  "burletta_ii": {
    "id": "burletta_ii",
    "name": "Burletta II",
    "description": "Semi-automatic pistol with decent damage output and accuracy. Can be fired as fast as you can pull the trigger.",
    "rarity": "Uncommon",
    "value": 5000,
    "weightKg": 4,
    "imageFilename": "https://cdn.arctracker.io/items/burletta.png",
    "upgradeCost": {
      "mechanical_components": 3,
      "simple_gun_parts": 1
    },
    "recyclesInto": {
      "mechanical_components": 2,
      "simple_gun_parts": 2
    },
    "type": "Pistol"
  },
  "burletta_iii": {
    "id": "burletta_iii",
    "name": "Burletta III",
    "description": "Semi-automatic pistol with decent damage output and accuracy. Can be fired as fast as you can pull the trigger.",
    "rarity": "Uncommon",
    "value": 7000,
    "weightKg": 4,
    "imageFilename": "https://cdn.arctracker.io/items/burletta.png",
    "upgradeCost": {
      "mechanical_components": 3,
      "simple_gun_parts": 1
    },
    "recyclesInto": {
      "mechanical_components": 3,
      "simple_gun_parts": 3
    },
    "type": "Pistol"
  },
  "burletta_iv": {
    "id": "burletta_iv",
    "name": "Burletta IV",
    "description": "Semi-automatic pistol with decent damage output and accuracy. Can be fired as fast as you can pull the trigger.",
    "rarity": "Uncommon",
    "value": 10000,
    "weightKg": 4,
    "imageFilename": "https://cdn.arctracker.io/items/burletta.png",
    "upgradeCost": {
      "mechanical_components": 4,
      "light_gun_parts": 1
    },
    "recyclesInto": {
      "mechanical_components": 4,
      "simple_gun_parts": 4
    },
    "type": "Pistol"
  },
  "combat_mk1": {
    "id": "combat_mk1",
    "name": "Combat Mk. 1",
    "description": "Basic combat augment. Supports stronger shields, but with limited backpack capacity and Quick Use slots.",
    "rarity": "Uncommon",
    "value": 640,
    "weightKg": 2,
    "imageFilename": "https://cdn.arctracker.io/items/combat_i.png",
    "type": "Augment"
  },
  "combat_mk2": {
    "id": "combat_mk2",
    "name": "Combat Mk. 2",
    "description": "A Combat augment more focused on maneuverability than absorbing damage.",
    "rarity": "Rare",
    "value": 2000,
    "weightKg": 3,
    "imageFilename": "https://cdn.arctracker.io/items/combat_i.png",
    "type": "Augment"
  },
  "combat_mk3_aggressive": {
    "id": "combat_mk3_aggressive",
    "name": "Combat Mk. 3 (Aggressive)",
    "description": "An improved version of the Combat II augment. Supports more shield types, and comes with extra space for grenades.",
    "rarity": "Epic",
    "value": 5000,
    "weightKg": 5,
    "imageFilename": "https://cdn.arctracker.io/items/combat_mk3_aggressive.png",
    "type": "Augment"
  },
  "compensator_i": {
    "id": "compensator_i",
    "name": "Compensator I",
    "description": "Slightly reduces per-shot dispersion. Compatible with: Arpeggio, Ferro, Renegade, Anvil, Stitcher",
    "rarity": "Common",
    "value": 640,
    "weightKg": 0.25,
    "imageFilename": "https://cdn.arctracker.io/items/compensator_i.png",
    "type": "Modification",
    "recipe": {
      "metal_parts": 6,
      "wires": 1
    },
    "effects": {
      "Reduced Per-Shot Dispersion": "Reduced Per-Shot Dispersion",
      "Reduced Max Shot Dispersion": "Reduced Max Shot Dispersion"
    },
    "compatibleWith": [
      "Ferro",
      "Kettle",
      "Rattler",
      "Stitcher",
      "Anvil",
      "Arpeggio",
      "Burletta",
      "Osprey",
      "Renegade",
      "Torrente",
      "Venator",
      "Bobcat",
      "Tempest"
    ],
    "recyclesInto": {
      "metal_parts": 5
    },
    "salvagesInto": {
      "metal_parts": 3
    }
  },
  "compensator_ii": {
    "id": "compensator_ii",
    "name": "Compensator II",
    "description": "Moderately reduces per-shot dispersion. Compatible with: Arpeggio, Ferro, Renegade, Anvil, Stitcher",
    "rarity": "Uncommon",
    "value": 2000,
    "weightKg": 0.5,
    "imageFilename": "https://cdn.arctracker.io/items/compensator_ii.png",
    "type": "Modification",
    "recipe": {
      "mechanical_components": 2,
      "wires": 4
    },
    "effects": {
      "Reduced Per-Shot Dispersion": "Reduced Per-Shot Dispersion",
      "Reduced Max Shot Dispersion": "Reduced Max Shot Dispersion"
    },
    "compatibleWith": [
      "Arpeggio",
      "Rattler",
      "Kettle",
      "Burletta",
      "Stitcher"
    ],
    "recyclesInto": {
      "mechanical_components": 1,
      "wires": 1
    }
  },
  "compensator_iii": {
    "id": "compensator_iii",
    "name": "Compensator III",
    "description": "Moderately reduces per-shot dispersion. Compatible with: Arpeggio, Ferro, Renegade, Anvil, Stitcher",
    "rarity": "Uncommon",
    "value": 5000,
    "weightKg": 0.75,
    "imageFilename": "https://cdn.arctracker.io/items/compensator_ii.png",
    "type": "Modification",
    "recipe": {
      "mechanical_components": 2,
      "wires": 8
    },
    "effects": {
      "Reduced Per-Shot Dispersion": "Reduced Per-Shot Dispersion",
      "Reduced Max Shot Dispersion": "Reduced Max Shot Dispersion",
      "Increased Durability Burn Rate": "Increased Durability Burn Rate"
    },
    "compatibleWith": [
      "Ferro",
      "Kettle",
      "Rattler",
      "Stitcher",
      "Anvil",
      "Arpeggio",
      "Burletta",
      "Osprey",
      "Renegade",
      "Torrente",
      "Venator",
      "Bettina",
      "Bobcat",
      "Tempest"
    ],
    "recyclesInto": {
      "mechanical_components": 1,
      "wires": 2
    }
  },
  "crude_explosives": {
    "id": "crude_explosives",
    "name": "Crude Explosives",
    "description": "Used to craft explosives. Can be recycled into crafting materials. Used to craft: Launcher Ammo, Explosive Compound, Snap Blast Grenade, Shrapnel Grenade, Trigger 'Nade",
    "rarity": "Uncommon",
    "value": 270,
    "weightKg": 0.5,
    "stackSize": 10,
    "imageFilename": "https://cdn.arctracker.io/items/crude_explosives.png",
    "recipe": {
      "chemicals": 6
    },
    "type": "Refined Material",
    "foundIn": "Industrial, Security",
    "recyclesInto": {
      "chemicals": 3
    },
    "salvagesInto": {
      "chemicals": 2
    }
  },
  "deadline": {
    "id": "deadline",
    "name": "Deadline",
    "description": "A mine that deals damage to anything within its radius once the timer runs out.",
    "rarity": "Epic",
    "value": 5000,
    "weightKg": 1,
    "stackSize": 1,
    "imageFilename": "https://cdn.arctracker.io/items/deadline.png",
    "type": "Quick Use",
    "effects": {
      "Damage": "Damage",
      "Radius": "Radius",
      "Timer Duration": "Timer Duration"
    },
    "recipe": {
      "explosive_compound": 3,
      "arc_circuitry": 2
    },
    "recyclesInto": {
      "explosive_compound": 1
    }
  },
  "defibrillator": {
    "id": "defibrillator",
    "name": "Defibrillator",
    "description": "An injection that quickly revives downed raiders and restores some health.",
    "rarity": "Rare",
    "value": 1000,
    "weightKg": 0.75,
    "stackSize": 3,
    "imageFilename": "https://cdn.arctracker.io/items/defibrillator.png",
    "type": "Quick Use",
    "effects": {
      "Healing": "Healing",
      "Use Time": "Use Time"
    },
    "recipe": {
      "plastic_parts": 9,
      "moss": 1
    },
    "recyclesInto": {
      "plastic_parts": 1,
      "moss": 1
    }
  },
  "door_blocker": {
    "id": "door_blocker",
    "name": "Door Blocker",
    "description": "A locking mechanism that can be placed on large metal doors to limit access.",
    "rarity": "Common",
    "value": 270,
    "weightKg": 0.2,
    "stackSize": 3,
    "imageFilename": "https://cdn.arctracker.io/items/door_blocker.png",
    "type": "Quick Use",
    "recipe": {
      "metal_parts": 3,
      "rubber_parts": 3
    },
    "recyclesInto": {
      "metal_parts": 2
    }
  },
  "durable_cloth": {
    "id": "durable_cloth",
    "name": "Durable Cloth",
    "description": "Used to craft medical supplies. Used to craft: Herbal Bandage, Sterilized Bandage",
    "rarity": "Uncommon",
    "value": 640,
    "weightKg": 0.25,
    "stackSize": 10,
    "imageFilename": "https://cdn.arctracker.io/items/durable_cloth.png",
    "recipe": {
      "fabric": 14
    },
    "type": "Refined Material",
    "foundIn": "Medical, Commercial",
    "recyclesInto": {
      "fabric": 6
    }
  },
  "electrical_components": {
    "id": "electrical_components",
    "name": "Electrical Components",
    "description": "Used to craft a wide range of items. Can be recycled into crafting materials. Used to craft: Tactical Mk. 2, Combat Mk. 2, Looting Mk. 2, Surge Shield Recharger, Lure Grenade",
    "rarity": "Uncommon",
    "value": 640,
    "weightKg": 0.5,
    "stackSize": 10,
    "imageFilename": "https://cdn.arctracker.io/items/electrical_components.png",
    "recipe": {
      "plastic_parts": 8,
      "rubber_parts": 4
    },
    "type": "Refined Material",
    "foundIn": "Electrical",
    "recyclesInto": {
      "plastic_parts": 3,
      "rubber_parts": 3
    },
    "salvagesInto": {
      "plastic_parts": 3
    }
  },
  "energy_clip": {
    "id": "energy_clip",
    "name": "Energy Clip",
    "description": "Compatible with: Equalizer, Jupiter",
    "rarity": "Rare",
    "value": 5,
    "weightKg": 0.3,
    "stackSize": 5,
    "imageFilename": "https://cdn.arctracker.io/items/energy_clip.png",
    "type": "Ammunition",
    "compatibleWith": [
      "Equalizer",
      "Jupiter"
    ]
  },
  "equalizer": {
    "id": "equalizer",
    "name": "Equalizer",
    "description": "A high capacity experimental beam rifle.",
    "rarity": "Legendary",
    "value": 27500,
    "weightKg": 14,
    "imageFilename": "https://cdn.arctracker.io/items/equalizer.png",
    "recipe": {
      "magnetic_accelerator": 3,
      "complex_gun_parts": 3,
      "queen_reactor": 1
    },
    "recyclesInto": {
      "magnetic_accelerator": 2,
      "complex_gun_parts": 1
    },
    "salvagesInto": {
      "magnetic_accelerator": 1
    },
    "type": "LMG"
  },
  "explosive_compound": {
    "id": "explosive_compound",
    "name": "Explosive Compound",
    "description": "Used to craft explosives. Used to craft: Wolfpack, Explosive Mine, Blaze Grenade, Heavy Fuze Grenade",
    "rarity": "Rare",
    "value": 1000,
    "weightKg": 0.3,
    "stackSize": 5,
    "imageFilename": "https://cdn.arctracker.io/items/explosive_compound.png",
    "recipe": {
      "crude_explosives": 2,
      "oil": 2
    },
    "type": "Refined Material",
    "foundIn": "Industrial, Security",
    "recyclesInto": {
      "chemicals": 2
    }
  },
  "extended_barrel": {
    "id": "extended_barrel",
    "name": "Extended Barrel",
    "description": "Moderately increases bullet velocity. Compatible with: Tempest, Arpeggio, Ferro, Renegade, Anvil",
    "rarity": "Epic",
    "value": 5000,
    "weightKg": 0.5,
    "imageFilename": "https://cdn.arctracker.io/items/extended_barrel.png",
    "type": "Modification",
    "effects": {
      "Increased Bullet Velocity": "Increased Bullet Velocity",
      "Increased Vertical Recoil": "Increased Vertical Recoil"
    },
    "recyclesInto": {
      "mod_components": 1,
      "wires": 1
    }
  },
  "extended_light_mag_i": {
    "id": "extended_light_mag_i",
    "name": "Extended Light Mag I",
    "description": "Slightly extends the ammo capacity of compatible weapons that use light ammo. Compatible with: Kettle, Burletta, Hairpin, Bobcat, Stitcher",
    "rarity": "Common",
    "value": 640,
    "weightKg": 0.25,
    "imageFilename": "https://cdn.arctracker.io/items/extended_light_mag_i.png",
    "type": "Modification",
    "recipe": {
      "plastic_parts": 6,
      "steel_spring": 1
    },
    "effects": {
      "Magazine Size": "Magazine Size"
    },
    "compatibleWith": [
      "Hairpin",
      "Kettle",
      "Stitcher",
      "Burletta",
      "Bobcat"
    ],
    "recyclesInto": {
      "plastic_parts": 6
    },
    "salvagesInto": {
      "plastic_parts": 3
    }
  },
  "extended_light_mag_ii": {
    "id": "extended_light_mag_ii",
    "name": "Extended Light Mag II",
    "description": "Moderately extends the ammo capacity of compatible weapons that use light ammo. Compatible with: Stitcher, Kettle, Burletta, Hairpin, Bobcat",
    "rarity": "Uncommon",
    "value": 2000,
    "weightKg": 0.5,
    "imageFilename": "https://cdn.arctracker.io/items/extended_light_mag_ii.png",
    "type": "Modification",
    "effects": {
      "Magazine Size": "Magazine Size"
    },
    "recyclesInto": {
      "steel_spring": 1,
      "mechanical_components": 1
    }
  },
  "extended_light_mag_iii": {
    "id": "extended_light_mag_iii",
    "name": "Extended Light Mag III",
    "description": "Significantly extends the ammo capacity of compatible weapons that use light ammo.",
    "rarity": "Rare",
    "value": 5000,
    "weightKg": 0.75,
    "imageFilename": "https://cdn.arctracker.io/items/extended_light_mag_iii.png",
    "type": "Modification",
    "effects": {
      "Magazine Size": "Magazine Size"
    },
    "recyclesInto": {
      "mod_components": 1,
      "steel_spring": 2
    }
  },
  "extended_medium_mag_i": {
    "id": "extended_medium_mag_i",
    "name": "Extended Medium Mag I",
    "description": "Moderately extends the ammo capacity of compatible weapons that use medium ammo. Compatible with: Arpeggio, Renegade, Venator, Tempest, Torrente",
    "rarity": "Common",
    "value": 640,
    "weightKg": 0.25,
    "imageFilename": "https://cdn.arctracker.io/items/extended_medium_mag_i.png",
    "type": "Modification",
    "recipe": {
      "plastic_parts": 6,
      "steel_spring": 1
    },
    "effects": {
      "Magazine Size": "Magazine Size"
    }
  },
  "extended_medium_mag_ii": {
    "id": "extended_medium_mag_ii",
    "name": "Extended Medium Mag II",
    "description": "Moderately extends the ammo capacity of compatible weapons that use medium ammo. Compatible with: Arpeggio, Renegade, Venator, Tempest, Torrente",
    "rarity": "Uncommon",
    "value": 2000,
    "weightKg": 0.5,
    "imageFilename": "https://cdn.arctracker.io/items/extended_medium_mag_ii.png",
    "type": "Modification",
    "recipe": {
      "mechanical_components": 2,
      "steel_spring": 3
    },
    "effects": {
      "Magazine Size": "Magazine Size"
    }
  },
  "extended_medium_mag_iii": {
    "id": "extended_medium_mag_iii",
    "name": "Extended Medium Mag III",
    "description": "Significantly extends the ammo capacity of compatible weapons that use medium ammo. Compatible with: Arpeggio, Renegade, Venator, Tempest, Torrente",
    "rarity": "Rare",
    "value": 5000,
    "weightKg": 0.75,
    "imageFilename": "https://cdn.arctracker.io/items/extended_medium_mag_iii.png",
    "type": "Modification",
    "recipe": {
      "mod_components": 2,
      "steel_spring": 5
    },
    "effects": {
      "Magazine Size": "Magazine Size"
    },
    "recyclesInto": {
      "mod_components": 1,
      "steel_spring": 2
    }
  },
  "extended_shotgun_mag_i": {
    "id": "extended_shotgun_mag_i",
    "name": "Extended Shotgun Mag I",
    "description": "Slightly extends the ammo capacity of shotguns. Compatible with: Il Toro, Vulcano",
    "rarity": "Common",
    "value": 640,
    "weightKg": 0.25,
    "imageFilename": "https://cdn.arctracker.io/items/extended_shotgun_mag_i.png",
    "type": "Modification",
    "recipe": {
      "plastic_parts": 6,
      "steel_spring": 1
    },
    "effects": {
      "Magazine Size": "Magazine Size"
    },
    "recyclesInto": {
      "plastic_parts": 6
    }
  },
  "extended_shotgun_mag_ii": {
    "id": "extended_shotgun_mag_ii",
    "name": "Extended Shotgun Mag II",
    "description": "Moderately extends the ammo capacity of shotguns. Compatible with: Il Toro, Vulcano",
    "rarity": "Uncommon",
    "value": 2000,
    "weightKg": 0.5,
    "imageFilename": "https://cdn.arctracker.io/items/extended_shotgun_mag_ii.png",
    "type": "Modification",
    "effects": {
      "Magazine Size": "Magazine Size"
    }
  },
  "extended_shotgun_mag_iii": {
    "id": "extended_shotgun_mag_iii",
    "name": "Extended Shotgun Mag III",
    "description": "Significantly extends the ammo capacity of shotguns. Compatible with: Il Toro, Vulcano",
    "rarity": "Rare",
    "value": 5000,
    "weightKg": 0.75,
    "imageFilename": "https://cdn.arctracker.io/items/extended_shotgun_mag_iii.png",
    "type": "Modification",
    "effects": {
      "Magazine Size": "Magazine Size"
    }
  },
  "ferro_i": {
    "id": "ferro_i",
    "name": "Ferro I",
    "description": "Packs a punch, but must be reloaded between every shot.",
    "rarity": "Common",
    "value": 475,
    "weightKg": 8,
    "imageFilename": "https://cdn.arctracker.io/items/ferro.png",
    "recipe": {
      "metal_parts": 5,
      "rubber_parts": 2
    },
    "recyclesInto": {
      "metal_parts": 2,
      "rubber_parts": 1
    },
    "salvagesInto": {
      "metal_parts": 2
    },
    "type": "Battle Rifle"
  },
  "ferro_ii": {
    "id": "ferro_ii",
    "name": "Ferro II",
    "description": "Packs a punch, but must be reloaded between every shot.",
    "rarity": "Common",
    "value": 1000,
    "weightKg": 8,
    "imageFilename": "https://cdn.arctracker.io/items/ferro.png",
    "upgradeCost": {
      "metal_parts": 7
    },
    "recyclesInto": {
      "metal_parts": 4,
      "simple_gun_parts": 3
    },
    "type": "Battle Rifle"
  },
  "ferro_iii": {
    "id": "ferro_iii",
    "name": "Ferro III",
    "description": "Packs a punch, but must be reloaded between every shot.",
    "rarity": "Common",
    "value": 2000,
    "weightKg": 8,
    "imageFilename": "https://cdn.arctracker.io/items/ferro.png",
    "upgradeCost": {
      "metal_parts": 9,
      "simple_gun_parts": 1
    },
    "recyclesInto": {
      "metal_parts": 6,
      "simple_gun_parts": 1
    },
    "type": "Battle Rifle"
  },
  "ferro_iv": {
    "id": "ferro_iv",
    "name": "Ferro IV",
    "description": "Packs a punch, but must be reloaded between every shot.",
    "rarity": "Common",
    "value": 2900,
    "weightKg": 8,
    "imageFilename": "https://cdn.arctracker.io/items/ferro.png",
    "upgradeCost": {
      "mechanical_components": 1,
      "simple_gun_parts": 1
    },
    "recyclesInto": {
      "mechanical_components": 1,
      "simple_gun_parts": 2
    },
    "salvagesInto": {
      "metal_parts": 2
    },
    "type": "Battle Rifle"
  },
  "flame_spray": {
    "id": "flame_spray",
    "name": "Flame Spray",
    "description": "A classic makeshift weapon, sure to leave scorch marks.",
    "rarity": "Uncommon",
    "value": 640,
    "weightKg": 1,
    "imageFilename": "https://cdn.arctracker.io/items/flame_spray.png",
    "type": "Quick Use",
    "effects": {
      "Durability": "Durability",
      "Damage": "Damage"
    }
  },
  "free_loadout_augment": {
    "id": "free_loadout_augment",
    "name": "Free Loadout Augment",
    "description": "Basic augment for rookie Raiders, offering slightly more backpack space and carry capacity.",
    "rarity": "Common",
    "value": 100,
    "weightKg": 1,
    "imageFilename": "https://cdn.arctracker.io/items/free_loadout_augment.png",
    "type": "Augment"
  },
  "fruit_mix": {
    "id": "fruit_mix",
    "name": "Fruit Mix",
    "description": "A food item that moderately increases both health and stamina.",
    "rarity": "Uncommon",
    "value": 1800,
    "weightKg": 0.3,
    "stackSize": 5,
    "imageFilename": "https://cdn.arctracker.io/items/fruit_mix.png",
    "type": "Quick Use",
    "effects": {
      "Healing": "Healing",
      "Stamina": "Stamina",
      "Use Time": "Use Time"
    },
    "recipe": {
      "lemon": 1,
      "apricot": 1,
      "prickly_pear": 1
    }
  },
  "gas_grenade": {
    "id": "gas_grenade",
    "name": "Gas Grenade",
    "description": "A grenade that emits a lingering toxic cloud on impact, draining the stamina of any Raiders within its area of effect.",
    "rarity": "Common",
    "value": 270,
    "weightKg": 0.2,
    "stackSize": 3,
    "imageFilename": "https://cdn.arctracker.io/items/gas_grenade.png",
    "type": "Quick Use",
    "effects": {
      "Stamina Drain": "Stamina Drain",
      "Duration": "Duration",
      "Radius": "Radius"
    },
    "recipe": {
      "chemicals": 4,
      "rubber_parts": 2
    },
    "recyclesInto": {
      "chemicals": 1,
      "rubber_parts": 1
    }
  },
  "gas_grenade_trap": {
    "id": "gas_grenade_trap",
    "name": "Gas Grenade Trap",
    "description": "A laser trip wire that detonates a Gas Grenade.",
    "rarity": "Common",
    "value": 300,
    "weightKg": 0.25,
    "stackSize": 3,
    "imageFilename": "https://cdn.arctracker.io/items/gas_grenade_trap.png",
    "type": "Quick Use",
    "effects": {
      "Stamina Drain": "Stamina Drain",
      "Duration": "Duration",
      "Radius": "Radius"
    }
  },
  "gas_mine": {
    "id": "gas_mine",
    "name": "Gas Mine",
    "description": "A proximity-triggered mine that pops up and deploys a gas cloud that rapidly drains stamina.",
    "rarity": "Common",
    "value": 270,
    "weightKg": 0.25,
    "stackSize": 3,
    "imageFilename": "https://cdn.arctracker.io/items/gas_mine.png",
    "type": "Quick Use",
    "effects": {
      "Stamina Drain": "Stamina Drain",
      "Duration": "Duration",
      "Radius": "Radius"
    },
    "recyclesInto": {
      "chemicals": 1,
      "rubber_parts": 1
    }
  },
  "green_light_stick": {
    "id": "green_light_stick",
    "name": "Green Light Stick",
    "description": "A throwable chemical light that illuminates the area around it.",
    "rarity": "Common",
    "value": 150,
    "weightKg": 0.15,
    "stackSize": 5,
    "imageFilename": "https://cdn.arctracker.io/items/green_light_stick.png",
    "type": "Quick Use",
    "effects": {
      "Illumination Radius": "Illumination Radius",
      "Duration": "Duration"
    },
    "recipe": {
      "chemicals": 3
    }
  },
  "hairpin_i": {
    "id": "hairpin_i",
    "name": "Hairpin I",
    "description": "Has a built-in silencer. Great for stealth, but tricky in combat.",
    "rarity": "Common",
    "value": 450,
    "weightKg": 3,
    "imageFilename": "https://cdn.arctracker.io/items/hairpin_i.png",
    "recipe": {
      "metal_parts": 2,
      "plastic_parts": 5
    },
    "recyclesInto": {
      "metal_parts": 2,
      "rubber_parts": 1
    },
    "salvagesInto": {
      "metal_parts": 2
    },
    "type": "Pistol"
  },
  "hairpin_ii": {
    "id": "hairpin_ii",
    "name": "Hairpin II",
    "description": "Has a built-in silencer. Great for stealth, but tricky in combat.",
    "rarity": "Common",
    "value": 1000,
    "weightKg": 3,
    "imageFilename": "https://cdn.arctracker.io/items/hairpin_i.png",
    "upgradeCost": {
      "metal_parts": 8
    },
    "recyclesInto": {
      "metal_parts": 4,
      "plastic_parts": 4
    },
    "salvagesInto": {
      "metal_parts": 4
    },
    "type": "Pistol"
  },
  "hairpin_iii": {
    "id": "hairpin_iii",
    "name": "Hairpin III",
    "description": "Has a built-in silencer. Great for stealth, but tricky in combat.",
    "rarity": "Common",
    "value": 2000,
    "weightKg": 3,
    "imageFilename": "https://cdn.arctracker.io/items/hairpin_i.png",
    "upgradeCost": {
      "metal_parts": 9,
      "simple_gun_parts": 1
    },
    "recyclesInto": {
      "metal_parts": 6,
      "simple_gun_parts": 1
    },
    "salvagesInto": {
      "simple_gun_parts": 1
    },
    "type": "Pistol"
  },
  "hairpin_iv": {
    "id": "hairpin_iv",
    "name": "Hairpin IV",
    "description": "Has a built-in silencer. Great for stealth, but tricky in combat.",
    "rarity": "Common",
    "value": 2900,
    "weightKg": 3,
    "imageFilename": "https://cdn.arctracker.io/items/hairpin_i.png",
    "upgradeCost": {
      "mechanical_components": 1,
      "simple_gun_parts": 1
    },
    "recyclesInto": {
      "mechanical_components": 1,
      "simple_gun_parts": 2
    },
    "salvagesInto": {
      "simple_gun_parts": 2
    },
    "type": "Pistol"
  },
  "heavy_ammo": {
    "id": "heavy_ammo",
    "name": "Heavy Ammo",
    "description": "Compatible with: Ferro, Anvil, Bettina",
    "rarity": "Common",
    "value": 12,
    "weightKg": 0.05,
    "stackSize": 40,
    "imageFilename": "https://cdn.arctracker.io/items/heavy_ammo.png",
    "type": "Ammunition",
    "compatibleWith": [
      "Anvil",
      "Ferro",
      "Bettina"
    ]
  },
  "heavy_fuze_grenade": {
    "id": "heavy_fuze_grenade",
    "name": "Heavy Fuze Grenade",
    "description": "A grenade that detonates after a delay, dealing explosive damage in its radius.",
    "rarity": "Rare",
    "value": 1600,
    "weightKg": 0.2,
    "stackSize": 3,
    "imageFilename": "https://cdn.arctracker.io/items/heavy_fuze_grenade.png",
    "type": "Quick Use",
    "effects": {
      "Damage": "Damage",
      "Radius": "Radius"
    },
    "recipe": {
      "explosive_compound": 1,
      "canister": 2
    },
    "recyclesInto": {
      "oil": 1,
      "rubber_parts": 2
    }
  },
  "heavy_shield": {
    "id": "heavy_shield",
    "name": "Heavy Shield",
    "description": "A heavy shield that blocks a large portion of incoming damage, but carries a significant cost to mobility.",
    "rarity": "Epic",
    "value": 5500,
    "weightKg": 9,
    "imageFilename": "https://cdn.arctracker.io/items/heavy_shield.png",
    "type": "Shield",
    "durability": 140,
    "shieldCharge": 120,
    "damageMitigation": 65,
    "movementSpeedModifier": -15
  },
  "herbal_bandage": {
    "id": "herbal_bandage",
    "name": "Herbal Bandage",
    "description": "An improvised medical item that gradually restores health over time.",
    "rarity": "Uncommon",
    "value": 640,
    "weightKg": 0.15,
    "stackSize": 5,
    "imageFilename": "https://cdn.arctracker.io/items/herbal_bandage.png",
    "type": "Quick Use",
    "effects": {
      "Healing": "Healing",
      "Duration": "Duration",
      "Use Time": "Use Time"
    },
    "recipe": {
      "durable_cloth": 1,
      "great_mullein": 1
    },
    "recyclesInto": {
      "assorted_seeds": 2,
      "fabric": 5
    }
  },
  "horizontal_grip": {
    "id": "horizontal_grip",
    "name": "Horizontal Grip",
    "description": "Moderately reduces per-shot dispersion.",
    "rarity": "Epic",
    "value": 7000,
    "weightKg": 0.5,
    "imageFilename": "https://cdn.arctracker.io/items/horizontal_grip.png",
    "type": "Modification",
    "recipe": {
      "mod_components": 2,
      "duct_tape": 5
    },
    "effects": {
      "Reduced Horizontal Recoil": "Reduced Horizontal Recoil",
      "Reduced Vertical Recoil": "Reduced Vertical Recoil",
      "Reduced ADS Speed": "Reduced ADS Speed"
    },
    "compatibleWith": [
      "Ferro",
      "Kettle",
      "Rattler",
      "Stitcher",
      "Arpeggio",
      "Il Toro",
      "Venator",
      "Bettina",
      "Bobcat",
      "Tempest",
      "Vulcano"
    ],
    "recyclesInto": {
      "mod_components": 1,
      "duct_tape": 2
    },
    "salvagesInto": {
      "mechanical_components": 2
    }
  },
  "il_toro_i": {
    "id": "il_toro_i",
    "name": "Il Toro I",
    "description": "Pump-action shotgun with large bullet spread, sharp falloff, and high damage output.",
    "rarity": "Uncommon",
    "value": 5000,
    "weightKg": 8,
    "imageFilename": "https://cdn.arctracker.io/items/il_toro.png",
    "recipe": {
      "mechanical_components": 5,
      "simple_gun_parts": 6
    },
    "recyclesInto": {
      "mechanical_components": 2,
      "simple_gun_parts": 2
    },
    "type": "Shotgun"
  },
  "il_toro_ii": {
    "id": "il_toro_ii",
    "name": "Il Toro II",
    "description": "Pump-action shotgun with large bullet spread, sharp falloff, and high damage output.",
    "rarity": "Uncommon",
    "value": 7000,
    "weightKg": 8,
    "imageFilename": "https://cdn.arctracker.io/items/il_toro.png",
    "upgradeCost": {
      "mechanical_components": 3,
      "simple_gun_parts": 1
    },
    "type": "Shotgun"
  },
  "il_toro_iii": {
    "id": "il_toro_iii",
    "name": "Il Toro III",
    "description": "Pump-action shotgun with large bullet spread, sharp falloff, and high damage output.",
    "rarity": "Uncommon",
    "value": 10000,
    "weightKg": 8,
    "imageFilename": "https://cdn.arctracker.io/items/il_toro.png",
    "upgradeCost": {
      "mechanical_components": 4,
      "heavy_gun_parts": 1
    },
    "recyclesInto": {
      "mechanical_components": 4,
      "simple_gun_parts": 4
    },
    "type": "Shotgun"
  },
  "il_toro_iv": {
    "id": "il_toro_iv",
    "name": "Il Toro IV",
    "description": "Pump-action shotgun with large bullet spread, sharp falloff, and high damage output.",
    "rarity": "Uncommon",
    "value": 13000,
    "weightKg": 8,
    "imageFilename": "https://cdn.arctracker.io/items/il_toro.png",
    "upgradeCost": {
      "mechanical_components": 4,
      "heavy_gun_parts": 1
    },
    "recyclesInto": {
      "mechanical_components": 5,
      "simple_gun_parts": 5
    },
    "type": "Shotgun"
  },
  "jolt_mine": {
    "id": "jolt_mine",
    "name": "Jolt Mine",
    "description": "A proximity-triggered mine that pops up and stuns anything within its radius.",
    "rarity": "Rare",
    "value": 850,
    "weightKg": 0.2,
    "stackSize": 3,
    "imageFilename": "https://cdn.arctracker.io/items/jolt_mine.png",
    "type": "Quick Use",
    "effects": {
      "ARC Stun Duration": "ARC Stun Duration",
      "Raider Stun Duration": "Raider Stun Duration",
      "Radius": "Radius"
    },
    "recipe": {
      "electrical_components": 1,
      "battery": 1
    },
    "recyclesInto": {
      "battery": 1,
      "plastic_parts": 2
    }
  },
  "jupiter": {
    "id": "jupiter",
    "name": "Jupiter",
    "description": "A bolt-action sniper rifle with exceptional damage output and accuracy, but slow handling.",
    "rarity": "Legendary",
    "value": 27500,
    "weightKg": 9,
    "imageFilename": "https://cdn.arctracker.io/items/jupiter.png",
    "recipe": {
      "magnetic_accelerator": 3,
      "complex_gun_parts": 3,
      "queen_reactor": 1
    },
    "recyclesInto": {
      "magnetic_accelerator": 2,
      "complex_gun_parts": 1
    },
    "salvagesInto": {
      "advanced_mechanical_components": 3
    },
    "type": "Sniper Rifle"
  },
  "kettle_i": {
    "id": "kettle_i",
    "name": "Kettle I",
    "description": "Quick and accurate, but has low bullet velocity and takes a long time to reload.",
    "rarity": "Common",
    "value": 840,
    "weightKg": 7,
    "imageFilename": "https://cdn.arctracker.io/items/kettle.png",
    "recipe": {
      "metal_parts": 6,
      "rubber_parts": 8
    },
    "recyclesInto": {
      "plastic_parts": 3,
      "rubber_parts": 2
    },
    "type": "Assault Rifle"
  },
  "kettle_ii": {
    "id": "kettle_ii",
    "name": "Kettle II",
    "description": "Semi-automatic assault rifle. Quick and accurate, but has low bullet velocity and takes a long time reload.",
    "rarity": "Common",
    "value": 840,
    "weightKg": 7,
    "imageFilename": "https://cdn.arctracker.io/items/kettle.png",
    "recyclesInto": {
      "plastic_parts": 6,
      "rubber_parts": 6
    },
    "type": "Assault Rifle"
  },
  "kettle_iii": {
    "id": "kettle_iii",
    "name": "Kettle III",
    "description": "Quick and accurate, but has low bullet velocity and takes a long time to reload.",
    "rarity": "Common",
    "value": 3000,
    "weightKg": 7,
    "imageFilename": "https://cdn.arctracker.io/items/kettle.png",
    "type": "Assault Rifle"
  },
  "kettle_iv": {
    "id": "kettle_iv",
    "name": "Kettle IV",
    "description": "Quick and accurate, but has low bullet velocity and takes a long time to reload.",
    "rarity": "Common",
    "value": 5000,
    "weightKg": 7,
    "imageFilename": "https://cdn.arctracker.io/items/kettle.png",
    "type": "Assault Rifle"
  },
  "kinetic_converter": {
    "id": "kinetic_converter",
    "name": "Kinetic Converter",
    "description": "Moderately increases fire rate. Compatible with: Arpeggio, Rattler, Kettle, Ferro, Renegade",
    "rarity": "Legendary",
    "value": 7000,
    "weightKg": 0.75,
    "imageFilename": "https://cdn.arctracker.io/items/kinetic_converter.png",
    "type": "Modification",
    "effects": {
      "Increased Fire Rate": "Increased Fire Rate",
      "Increased Vertical Recoil": "Increased Vertical Recoil",
      "Increased Horizontal Recoil": "Increased Horizontal Recoil"
    },
    "recyclesInto": {
      "mod_components": 1,
      "duct_tape": 2
    }
  },
  "launcher_ammo": {
    "id": "launcher_ammo",
    "name": "Launcher Ammo",
    "description": "Anti-ARC payloads used mainly by the Hullcracker. Compatible with: Hullcracker",
    "rarity": "Rare",
    "value": 250,
    "weightKg": 0.1,
    "stackSize": 24,
    "imageFilename": "https://cdn.arctracker.io/items/launcher_ammo.png",
    "type": "Ammunition",
    "compatibleWith": [
      "Hullcracker"
    ]
  },
  "li_l_smoke_grenade": {
    "id": "li_l_smoke_grenade",
    "name": "Li'l Smoke Grenade",
    "description": "A grenade that pops a thick but small smoke cloud on impact, blocking visibility from ARC and other Raiders.",
    "rarity": "Common",
    "value": 1,
    "weightKg": 0.15,
    "stackSize": 5,
    "imageFilename": "https://cdn.arctracker.io/items/li_l_smoke_grenade.png",
    "type": "Quick Use",
    "effects": {
      "Duration": "Duration",
      "Radius": "Radius"
    }
  },
  "light_ammo": {
    "id": "light_ammo",
    "name": "Light Ammo",
    "description": "Light bullets used mainly with SMGs and light handguns. Compatible with: Burletta, Stitcher, Kettle, Hairpin, Bobcat",
    "rarity": "Common",
    "value": 0.76,
    "weightKg": 0.00323,
    "stackSize": 100,
    "imageFilename": "https://cdn.arctracker.io/items/light_ammo.png",
    "type": "Ammunition",
    "compatibleWith": [
      "Kettle",
      "Burletta",
      "Hairpin",
      "Bobcat",
      "Stitcher"
    ]
  },
  "light_impact_grenade": {
    "id": "light_impact_grenade",
    "name": "Light Impact Grenade",
    "description": "A grenade that detonates on impact, dealing explosive damage in a small radius.",
    "rarity": "Common",
    "value": 270,
    "weightKg": 0.1,
    "stackSize": 5,
    "imageFilename": "https://cdn.arctracker.io/items/light_impact_grenade.png",
    "type": "Quick Use",
    "effects": {
      "Damage": "Damage",
      "Radius": "Radius"
    },
    "recipe": {
      "chemicals": 3,
      "plastic_parts": 2
    },
    "recyclesInto": {
      "chemicals": 1,
      "plastic_parts": 1
    },
    "salvagesInto": {
      "chemicals": 1
    }
  },
  "light_shield": {
    "id": "light_shield",
    "name": "Light Shield",
    "description": "A lightweight shield that blocks a small portion of incoming damage without impacting mobility.",
    "rarity": "Uncommon",
    "value": 640,
    "weightKg": 5,
    "imageFilename": "https://cdn.arctracker.io/items/light_shield.png",
    "type": "Shield",
    "durability": 100,
    "shieldCharge": 40,
    "damageMitigation": 40,
    "movementSpeedModifier": 0
  },
  "lightweight_stock": {
    "id": "lightweight_stock",
    "name": "Lightweight Stock",
    "description": "Moderately improves ADS & draw speed. Compatible with: Arpeggio, Kettle, Ferro, Renegade, Hullcracker",
    "rarity": "Epic",
    "value": 5000,
    "weightKg": 0.25,
    "imageFilename": "https://cdn.arctracker.io/items/lightweight_stock.png",
    "type": "Modification",
    "recipe": {
      "mod_components": 2,
      "duct_tape": 5
    },
    "effects": {
      "Increased ADS Speed": "Increased ADS Speed",
      "Reduced Equip Time": "Reduced Equip Time",
      "Reduced Unequip Time": "Reduced Unequip Time",
      "Increased Vertical Recoil": "Increased Vertical Recoil",
      "Increased Recoil Recovery Time": "Increased Recoil Recovery Time"
    }
  },
  "lil_smoke_grenade": {
    "id": "lil_smoke_grenade",
    "name": "Li'l Smoke Grenade",
    "description": "A grenade that pops a thick but small smoke cloud on impact, blocking visibility from ARC and other Raiders.",
    "rarity": "Common",
    "value": 300,
    "weightKg": 0.15,
    "stackSize": 5,
    "imageFilename": "https://cdn.arctracker.io/items/lil_smoke_grenade.png",
    "type": "Quick Use",
    "effects": {
      "Duration": "Duration",
      "Radius": "Radius"
    },
    "recipe": {
      "chemicals": 5,
      "plastic_parts": 1
    },
    "recyclesInto": {
      "chemicals": 1,
      "plastic_parts": 1
    }
  },
  "looting_mk1": {
    "id": "looting_mk1",
    "name": "Looting Mk. 1",
    "description": "Basic looting augment. More backpack slots and weight capacity, but low defensive and tactical capability.",
    "rarity": "Uncommon",
    "value": 640,
    "weightKg": 1,
    "imageFilename": "https://cdn.arctracker.io/items/looting_mk1.png",
    "type": "Augment"
  },
  "looting_mk2": {
    "id": "looting_mk2",
    "name": "Looting Mk. 2",
    "description": "Significantly increases looting potential; adds slots for trinkets. Automatically throws off attached Ticks after 0.5s.",
    "rarity": "Rare",
    "value": 2000,
    "weightKg": 2,
    "imageFilename": "https://cdn.arctracker.io/items/looting_mk2.png",
    "type": "Augment"
  },
  "looting_mk3_cautious": {
    "id": "looting_mk3_cautious",
    "name": "Looting Mk. 3 (Cautious)",
    "description": "A looting augment that swaps some carry capacity to increase survivability. Upon Shield break, automatically administers a weak Adrenaline Shot. Has a fixed cooldown.",
    "rarity": "Epic",
    "value": 5000,
    "weightKg": 3,
    "imageFilename": "https://cdn.arctracker.io/items/looting_mk3_cautious.png",
    "type": "Augment"
  },
  "looting_mk3_survivor": {
    "id": "looting_mk3_survivor",
    "name": "Looting Mk. 3 (Survivor)",
    "description": "A heavy-duty pack mule augment. Large weight capacity and large backpack space. While downed and stationary, health regenerates up to 75% of max downed health.",
    "rarity": "Epic",
    "value": 5000,
    "weightKg": 4,
    "imageFilename": "https://cdn.arctracker.io/items/looting_mk3_survivor.png",
    "type": "Augment"
  },
  "lure_grenade": {
    "id": "lure_grenade",
    "name": "Lure Grenade",
    "description": "A noise device that sticks to surfaces, distracting nearby ARC machines and drawing their fire.",
    "rarity": "Uncommon",
    "value": 1000,
    "weightKg": 0.4,
    "imageFilename": "https://cdn.arctracker.io/items/lure_grenade.png",
    "type": "Quick Use",
    "recipe": {
      "speaker_component": 1,
      "electrical_components": 1
    },
    "recyclesInto": {
      "speaker_component": 1
    }
  },
  "lure_grenade_trap": {
    "id": "lure_grenade_trap",
    "name": "Lure Grenade Trap",
    "description": "A laser trip wire that detonates a Lure Grenade.",
    "rarity": "Uncommon",
    "value": 1000,
    "weightKg": 0.25,
    "stackSize": 3,
    "imageFilename": "https://cdn.arctracker.io/items/lure_grenade_trap.png",
    "type": "Quick Use",
    "effects": {
      "Duration": "Duration",
      "Radius": "Radius"
    }
  },
  "magnetic_accelerator": {
    "id": "magnetic_accelerator",
    "name": "Magnetic Accelerator",
    "description": "Used to craft advanced weapons. Used to craft: Tempest, Equalizer, Vulcano, Jupiter, Hullcracker",
    "rarity": "Epic",
    "value": 5500,
    "weightKg": 1,
    "stackSize": 3,
    "imageFilename": "https://cdn.arctracker.io/items/magnetic_accelerator.png",
    "recipe": {
      "advanced_mechanical_components": 2,
      "arc_motion_core": 2
    },
    "type": "Refined Material",
    "foundIn": "Exodus",
    "recyclesInto": {
      "advanced_mechanical_components": 1,
      "arc_motion_core": 1
    }
  },
  "matriarch_reactor": {
    "id": "matriarch_reactor",
    "name": "Matriarch Reactor",
    "description": "Can be recycled into crafting materials.",
    "rarity": "Legendary",
    "value": 13000,
    "weightKg": 10,
    "stackSize": 1,
    "imageFilename": "https://cdn.arctracker.io/items/matriarch_reactor.png",
    "type": "Material"
  },
  "mechanical_components": {
    "id": "mechanical_components",
    "name": "Mechanical Components",
    "description": "Used to craft a wide range of items. Can be recycled into crafting materials. Used to craft: Il Toro, Burletta, Anvil, Muzzle Brake II, Extended Medium Mag II",
    "rarity": "Uncommon",
    "value": 640,
    "weightKg": 0.5,
    "stackSize": 10,
    "imageFilename": "https://cdn.arctracker.io/items/mechanical_components.png",
    "recipe": {
      "metal_parts": 7,
      "rubber_parts": 3
    },
    "type": "Refined Material",
    "foundIn": "Mechanical",
    "recyclesInto": {
      "metal_parts": 3,
      "rubber_parts": 2
    }
  },
  "medium_ammo": {
    "id": "medium_ammo",
    "name": "Medium Ammo",
    "description": "Compatible with: Rattler, Tempest, Arpeggio, Renegade, Torrente",
    "rarity": "Common",
    "value": 6,
    "weightKg": 0.025,
    "stackSize": 80,
    "imageFilename": "https://cdn.arctracker.io/items/medium_ammo.png",
    "type": "Ammunition",
    "compatibleWith": [
      "Arpeggio",
      "Rattler",
      "Tempest",
      "Renegade",
      "Torrente"
    ]
  },
  "medium_shield": {
    "id": "medium_shield",
    "name": "Medium Shield",
    "description": "A standard shield that blocks a medium portion of incoming damage at a moderate cost to mobility.",
    "rarity": "Rare",
    "value": 2000,
    "weightKg": 7,
    "imageFilename": "https://cdn.arctracker.io/items/medium_shield.png",
    "type": "Shield",
    "durability": 100,
    "shieldCharge": 70,
    "damageMitigation": 42.5,
    "movementSpeedModifier": -5
  },
  "mod_components": {
    "id": "mod_components",
    "name": "Mod Components",
    "description": "Used to craft weapon mods. Can be recycled into crafting materials. Used to craft: Lightweight Stock, Shotgun Choke III, Extended Shotgun Mag III, Padded Stock, Compensator III",
    "rarity": "Rare",
    "value": 1750,
    "weightKg": 1,
    "stackSize": 5,
    "imageFilename": "https://cdn.arctracker.io/items/mod_components.png",
    "recipe": {
      "steel_spring": 2,
      "mechanical_components": 2
    },
    "type": "Refined Material",
    "foundIn": "Security",
    "recyclesInto": {
      "mechanical_components": 1,
      "steel_spring": 1
    }
  },
  "muzzle_brake_i": {
    "id": "muzzle_brake_i",
    "name": "Muzzle Brake I",
    "description": "Slightly reduces both vertical recoil & horizontal recoil. Compatible with: Rattler, Ferro, Burletta, Stitcher, Tempest",
    "rarity": "Common",
    "value": 640,
    "weightKg": 0.25,
    "imageFilename": "https://cdn.arctracker.io/items/muzzle_brake_i.png",
    "type": "Modification",
    "recipe": {
      "metal_parts": 6,
      "wires": 1
    },
    "effects": {
      "Reduced Vertical Recoil": "Reduced Vertical Recoil",
      "Reduced Horizontal Recoil": "Reduced Horizontal Recoil"
    },
    "recyclesInto": {
      "metal_parts": 5
    }
  },
  "muzzle_brake_ii": {
    "id": "muzzle_brake_ii",
    "name": "Muzzle Brake II",
    "description": "Moderately reduces both vertical recoil & horizontal recoil. Compatible with: Tempest, Arpeggio, Kettle, Ferro, Renegade",
    "rarity": "Uncommon",
    "value": 2000,
    "weightKg": 0.5,
    "imageFilename": "https://cdn.arctracker.io/items/muzzle_brake_ii.png",
    "type": "Modification",
    "recipe": {
      "mechanical_components": 2,
      "wires": 4
    },
    "effects": {
      "Reduced Vertical Recoil": "Reduced Vertical Recoil",
      "Reduced Horizontal Recoil": "Reduced Horizontal Recoil"
    },
    "compatibleWith": [
      "Arpeggio",
      "Rattler",
      "Kettle",
      "Burletta",
      "Stitcher"
    ],
    "recyclesInto": {
      "mechanical_components": 1,
      "wires": 1
    }
  },
  "muzzle_brake_iii": {
    "id": "muzzle_brake_iii",
    "name": "Muzzle Brake III",
    "description": "Significantly reduces both vertical recoil & horizontal recoil. Compatible with: Arpeggio, Ferro, Renegade, Anvil, Stitcher",
    "rarity": "Rare",
    "value": 5000,
    "weightKg": 0.75,
    "imageFilename": "https://cdn.arctracker.io/items/muzzle_brake_iii.png",
    "type": "Modification",
    "effects": {
      "Reduced Vertical Recoil": "Reduced Vertical Recoil",
      "Reduced Horizontal Recoil": "Reduced Horizontal Recoil",
      "Increased Durability Burn Rate": "Increased Durability Burn Rate"
    }
  },
  "noisemaker": {
    "id": "noisemaker",
    "name": "Noisemaker",
    "description": "A deployable proximity sensor that sounds an alarm when enemy raiders are detected.",
    "rarity": "Common",
    "value": 640,
    "weightKg": 0.3,
    "stackSize": 3,
    "imageFilename": "https://cdn.arctracker.io/items/noisemaker.png",
    "type": "Quick Use",
    "effects": {
      "Trigger Radius": "Trigger Radius",
      "Duration": "Duration"
    }
  },
  "osprey_i": {
    "id": "osprey_i",
    "name": "Osprey I",
    "description": "A scoped bolt-action sniper rifle with reliable damage output and accuracy.",
    "rarity": "Rare",
    "value": 7000,
    "weightKg": 7,
    "imageFilename": "https://cdn.arctracker.io/items/osprey.png",
    "recipe": {
      "advanced_mechanical_components": 2,
      "medium_gun_parts": 3,
      "wires": 7
    },
    "type": "Sniper Rifle"
  },
  "osprey_ii": {
    "id": "osprey_ii",
    "name": "Osprey II",
    "description": "A scoped bolt-action sniper rifle with reliable damage output and accuracy.",
    "rarity": "Rare",
    "value": 10000,
    "weightKg": 7,
    "imageFilename": "https://cdn.arctracker.io/items/osprey.png",
    "upgradeCost": {
      "advanced_mechanical_components": 1,
      "medium_gun_parts": 2
    },
    "recyclesInto": {
      "advanced_mechanical_components": 2,
      "medium_gun_parts": 2
    },
    "salvagesInto": {
      "medium_gun_parts": 2
    },
    "type": "Sniper Rifle"
  },
  "osprey_iii": {
    "id": "osprey_iii",
    "name": "Osprey III",
    "description": "A scoped bolt-action sniper rifle with reliable damage output and accuracy.",
    "rarity": "Rare",
    "value": 13000,
    "weightKg": 7,
    "imageFilename": "https://cdn.arctracker.io/items/osprey.png",
    "upgradeCost": {
      "advanced_mechanical_components": 1,
      "medium_gun_parts": 2
    },
    "recyclesInto": {
      "advanced_mechanical_components": 2,
      "medium_gun_parts": 3
    },
    "salvagesInto": {
      "medium_gun_parts": 3
    },
    "type": "Sniper Rifle"
  },
  "osprey_iv": {
    "id": "osprey_iv",
    "name": "Osprey IV",
    "description": "A scoped bolt-action sniper rifle with reliable damage output and accuracy.",
    "rarity": "Rare",
    "value": 17000,
    "weightKg": 7,
    "imageFilename": "https://cdn.arctracker.io/items/osprey.png",
    "upgradeCost": {
      "advanced_mechanical_components": 2,
      "medium_gun_parts": 2
    },
    "recyclesInto": {
      "advanced_mechanical_components": 3,
      "medium_gun_parts": 3
    },
    "salvagesInto": {
      "medium_gun_parts": 3
    },
    "type": "Sniper Rifle"
  },
  "padded_stock": {
    "id": "padded_stock",
    "name": "Padded Stock",
    "description": "Significantly improves stability. Compatible with: Arpeggio, Rattler, Ferro, Renegade, Torrente",
    "rarity": "Epic",
    "value": 5000,
    "weightKg": 0.5,
    "imageFilename": "https://cdn.arctracker.io/items/padded_stock.png",
    "type": "Modification",
    "effects": {
      "Reduced Vertical Recoil": "Reduced Vertical Recoil",
      "Reduced Horizontal Recoil": "Reduced Horizontal Recoil",
      "Reduced Per-Shot Dispersion": "Reduced Per-Shot Dispersion",
      "Increased Equip Time": "Increased Equip Time",
      "Increased Unequip Time": "Increased Unequip Time",
      "Reduced ADS Speed": "Reduced ADS Speed"
    }
  },
  "photoelectric_cloak": {
    "id": "photoelectric_cloak",
    "name": "Photoelectric Cloak",
    "description": "A gadget that allows the user to conceal themselves from ARC.",
    "rarity": "Epic",
    "value": 5000,
    "weightKg": 1,
    "imageFilename": "https://cdn.arctracker.io/items/photoelectric_cloak.png",
    "type": "Quick Use",
    "effects": {
      "Durability": "Durability"
    },
    "recipe": {
      "advanced_electrical_components": 2,
      "speaker_component": 4
    },
    "recyclesInto": {
      "advanced_electrical_components": 1,
      "speaker_component": 1
    },
    "salvagesInto": {
      "advanced_electrical_components": 1
    }
  },
  "power_rod": {
    "id": "power_rod",
    "name": "Power Rod",
    "description": "Used in crafting. Used to craft: Heavy Shield, Snap Hook",
    "rarity": "Epic",
    "value": 5500,
    "weightKg": 2,
    "imageFilename": "https://cdn.arctracker.io/items/power_rod.png",
    "recipe": {
      "advanced_electrical_components": 2,
      "arc_circuitry": 2
    },
    "type": "Refined Material",
    "foundIn": "Exodus",
    "recyclesInto": {
      "advanced_electrical_components": 1,
      "arc_circuitry": 1
    }
  },
  "pulse_mine": {
    "id": "pulse_mine",
    "name": "Pulse Mine",
    "description": "A proximity-triggered mine that pops up and knocks back anything within its radius.",
    "rarity": "Uncommon",
    "value": 470,
    "weightKg": 0.25,
    "stackSize": 3,
    "imageFilename": "https://cdn.arctracker.io/items/pulse_mine.png",
    "type": "Quick Use",
    "effects": {
      "Radius": "Radius"
    },
    "recyclesInto": {
      "chemicals": 6
    },
    "salvagesInto": {
      "chemicals": 3
    }
  },
  "rattler_i": {
    "id": "rattler_i",
    "name": "Rattler I",
    "description": "Fully automatic assault rifle. A cheap offensive option, but has to be reloaded 2 bullets at a time.",
    "rarity": "Common",
    "value": 1750,
    "weightKg": 6,
    "imageFilename": "https://cdn.arctracker.io/items/rattler.png",
    "recipe": {
      "metal_parts": 16,
      "rubber_parts": 12
    },
    "recyclesInto": {
      "metal_parts": 8
    },
    "type": "Assault Rifle"
  },
  "rattler_ii": {
    "id": "rattler_ii",
    "name": "Rattler II",
    "description": "Fully automatic assault rifle. A cheap offensive option, but has to be reloaded 2 bullets at a time.",
    "rarity": "Common",
    "value": 3000,
    "weightKg": 6,
    "imageFilename": "https://cdn.arctracker.io/items/rattler.png",
    "upgradeCost": {
      "mechanical_components": 2
    },
    "recyclesInto": {
      "metal_parts": 12
    },
    "salvagesInto": {
      "metal_parts": 8
    },
    "type": "Assault Rifle"
  },
  "rattler_iii": {
    "id": "rattler_iii",
    "name": "Rattler III",
    "description": "Fully automatic assault rifle. A cheap offensive option, but has to be reloaded 2 bullets at a time.",
    "rarity": "Common",
    "value": 5000,
    "weightKg": 6,
    "imageFilename": "https://cdn.arctracker.io/items/rattler.png",
    "upgradeCost": {
      "mechanical_components": 2,
      "simple_gun_parts": 1
    },
    "type": "Assault Rifle"
  },
  "rattler_iv": {
    "id": "rattler_iv",
    "name": "Rattler IV",
    "description": "Fully automatic assault rifle. A cheap offensive option, but has to be reloaded 2 bullets at a time.",
    "rarity": "Common",
    "value": 7000,
    "weightKg": 6,
    "imageFilename": "https://cdn.arctracker.io/items/rattler.png",
    "upgradeCost": {
      "mechanical_components": 3,
      "simple_gun_parts": 1
    },
    "recyclesInto": {
      "mechanical_components": 4,
      "simple_gun_parts": 2
    },
    "salvagesInto": {
      "metal_parts": 14
    },
    "type": "Assault Rifle"
  },
  "recorder": {
    "id": "recorder",
    "name": "Recorder",
    "description": "A playable recorder used to attract ARC's attention, and impress other Raiders.",
    "rarity": "Uncommon",
    "value": 1000,
    "weightKg": 0.2,
    "imageFilename": "https://cdn.arctracker.io/items/recorder.png",
    "type": "Quick Use",
    "effects": {
      "Durability": "Durability"
    },
    "recyclesInto": {
      "plastic_parts": 10
    }
  },
  "red_light_stick": {
    "id": "red_light_stick",
    "name": "Red Light Stick",
    "description": "A throwable chemical light that illuminates the area around it.",
    "rarity": "Common",
    "value": 150,
    "weightKg": 0.15,
    "stackSize": 5,
    "imageFilename": "https://cdn.arctracker.io/items/red_light_stick.png",
    "type": "Quick Use",
    "effects": {
      "Illumination Radius": "Illumination Radius",
      "Duration": "Duration"
    },
    "recyclesInto": {
      "chemicals": 1
    }
  },
  "remote_raider_flare": {
    "id": "remote_raider_flare",
    "name": "Remote Raider Flare",
    "description": "A deployable device that, when manually triggered, launches a Raider Distress Flare.",
    "rarity": "Common",
    "value": 270,
    "weightKg": 0.2,
    "stackSize": 3,
    "imageFilename": "https://cdn.arctracker.io/items/remote_raider_flare.png",
    "type": "Quick Use",
    "recipe": {
      "chemicals": 2,
      "rubber_parts": 4
    },
    "recyclesInto": {
      "chemicals": 1,
      "rubber_parts": 1
    }
  },
  "renegade_i": {
    "id": "renegade_i",
    "name": "Renegade I",
    "description": "Lever-action battle rifle with high damage output, accuracy, and headshot damage.",
    "rarity": "Rare",
    "value": 7000,
    "weightKg": 10,
    "imageFilename": "https://cdn.arctracker.io/items/renegade.png",
    "recipe": {
      "advanced_mechanical_components": 2,
      "medium_gun_parts": 3,
      "oil": 5
    },
    "recyclesInto": {
      "advanced_mechanical_components": 1,
      "medium_gun_parts": 2
    },
    "type": "Battle Rifle"
  },
  "renegade_ii": {
    "id": "renegade_ii",
    "name": "Renegade II",
    "description": "Lever-action battle rifle with high damage output, accuracy, and headshot damage.",
    "rarity": "Rare",
    "value": 10000,
    "weightKg": 10,
    "imageFilename": "https://cdn.arctracker.io/items/renegade.png",
    "upgradeCost": {
      "advanced_mechanical_components": 1,
      "medium_gun_parts": 2
    },
    "type": "Battle Rifle"
  },
  "renegade_iii": {
    "id": "renegade_iii",
    "name": "Renegade III",
    "description": "Lever-action battle rifle with high damage output, accuracy, and headshot damage.",
    "rarity": "Rare",
    "value": 13000,
    "weightKg": 10,
    "imageFilename": "https://cdn.arctracker.io/items/renegade.png",
    "upgradeCost": {
      "advanced_mechanical_components": 1,
      "medium_gun_parts": 2
    },
    "type": "Battle Rifle"
  },
  "renegade_iv": {
    "id": "renegade_iv",
    "name": "Renegade IV",
    "description": "Lever-action battle rifle with high damage output, accuracy, and headshot damage.",
    "rarity": "Rare",
    "value": 17000,
    "weightKg": 10,
    "imageFilename": "https://cdn.arctracker.io/items/renegade.png",
    "upgradeCost": {
      "advanced_mechanical_components": 2,
      "medium_gun_parts": 2
    },
    "type": "Battle Rifle"
  },
  "seeker_grenade": {
    "id": "seeker_grenade",
    "name": "Seeker Grenade",
    "description": "A homing grenade that targets a single nearby ARC dealing explosive damage on impact.",
    "rarity": "Uncommon",
    "value": 640,
    "weightKg": 0.2,
    "stackSize": 5,
    "imageFilename": "https://cdn.arctracker.io/items/seeker_grenade.png",
    "type": "Quick Use",
    "effects": {
      "Damage": "Damage",
      "Homing Range": "Homing Range"
    },
    "recyclesInto": {
      "chemicals": 1
    }
  },
  "shield_recharger": {
    "id": "shield_recharger",
    "name": "Shield Recharger",
    "description": "A handheld kit that gradually recharges shield over time.",
    "rarity": "Uncommon",
    "value": 520,
    "weightKg": 0.15,
    "stackSize": 5,
    "imageFilename": "https://cdn.arctracker.io/items/shield_recharger.png",
    "type": "Quick Use",
    "effects": {
      "Recharge": "Recharge",
      "Duration": "Duration",
      "Use Time": "Use Time"
    },
    "recipe": {
      "rubber_parts": 5,
      "arc_powercell": 1
    },
    "recyclesInto": {
      "rubber_parts": 4
    }
  },
  "shotgun_ammo": {
    "id": "shotgun_ammo",
    "name": "Shotgun Ammo",
    "description": "Compatible with: Il Toro, Vulcano",
    "rarity": "Common",
    "value": 20,
    "weightKg": 0.085,
    "stackSize": 20,
    "imageFilename": "https://cdn.arctracker.io/items/shotgun_ammo.png",
    "type": "Ammunition",
    "compatibleWith": [
      "Il Toro",
      "Vulcano"
    ]
  },
  "shotgun_choke_i": {
    "id": "shotgun_choke_i",
    "name": "Shotgun Choke I",
    "description": "Slightly reduces base dispersion. Compatible with: Il Toro, Vulcano",
    "rarity": "Common",
    "value": 640,
    "weightKg": 0.25,
    "imageFilename": "https://cdn.arctracker.io/items/shotgun_choke_i.png",
    "type": "Modification",
    "recipe": {
      "metal_parts": 6,
      "wires": 1
    },
    "effects": {
      "Reduced Base Dispersion": "Reduced Base Dispersion"
    }
  },
  "shotgun_choke_ii": {
    "id": "shotgun_choke_ii",
    "name": "Shotgun Choke II",
    "description": "Moderately reduces base dispersion. Compatible with: Il Toro, Vulcano",
    "rarity": "Uncommon",
    "value": 2000,
    "weightKg": 0.5,
    "imageFilename": "https://cdn.arctracker.io/items/shotgun_choke_ii.png",
    "type": "Modification",
    "effects": {
      "Reduced Base Dispersion": "Reduced Base Dispersion"
    },
    "compatibleWith": [
      "Il Toro",
      "Vulcano"
    ],
    "recyclesInto": {
      "mechanical_components": 1,
      "wires": 1
    }
  },
  "shotgun_choke_iii": {
    "id": "shotgun_choke_iii",
    "name": "Shotgun Choke III",
    "description": "Significantly reduces base dispersion.",
    "rarity": "Rare",
    "value": 5000,
    "weightKg": 0.75,
    "imageFilename": "https://cdn.arctracker.io/items/shotgun_choke_iii.png",
    "type": "Modification",
    "effects": {
      "Compatible With": "Compatible With",
      "Reduced Base Dispersion": "Reduced Base Dispersion",
      "Increased Durability Burn Rate": "Increased Durability Burn Rate"
    }
  },
  "shotgun_silencer": {
    "id": "shotgun_silencer",
    "name": "Shotgun Silencer",
    "description": "Moderately reduces the amount of noise produced when firing.",
    "rarity": "Epic",
    "value": 5000,
    "weightKg": 0.5,
    "imageFilename": "https://cdn.arctracker.io/items/shotgun_silencer.png",
    "type": "Modification",
    "effects": {
      "Reduced Noise": "Reduced Noise"
    }
  },
  "showstopper": {
    "id": "showstopper",
    "name": "Showstopper",
    "description": "A grenade that detonates after a delay, stunning enemies within its radius.",
    "rarity": "Rare",
    "value": 2200,
    "weightKg": 0.4,
    "stackSize": 5,
    "imageFilename": "https://cdn.arctracker.io/items/showstopper.png",
    "type": "Quick Use",
    "effects": {
      "ARC Stun Duration": "ARC Stun Duration",
      "Raider Stun Duration": "Raider Stun Duration",
      "Radius": "Radius"
    },
    "recyclesInto": {
      "electrical_components": 1,
      "battery": 2
    }
  },
  "shrapnel_grenade": {
    "id": "shrapnel_grenade",
    "name": "Shrapnel Grenade",
    "description": "A makeshift fuze grenade that bursts into razor-sharp fragments upon detonation. Weak against ARC armor plating",
    "rarity": "Uncommon",
    "value": 800,
    "weightKg": 0.15,
    "stackSize": 5,
    "imageFilename": "https://cdn.arctracker.io/items/shrapnel_grenade.png",
    "type": "Quick Use",
    "effects": {
      "Damage": "Damage",
      "Radius": "Radius"
    },
    "recipe": {
      "crude_explosives": 1,
      "steel_spring": 2
    },
    "recyclesInto": {
      "crude_explosives": 1,
      "metal_parts": 1
    }
  },
  "silencer_i": {
    "id": "silencer_i",
    "name": "Silencer I",
    "description": "Slightly reduces the amount of noise produced when firing.",
    "rarity": "Uncommon",
    "value": 2000,
    "weightKg": 0.25,
    "imageFilename": "https://cdn.arctracker.io/items/silencer_i.png",
    "type": "Modification",
    "effects": {
      "Noise Reduction": "Noise Reduction"
    }
  },
  "silencer_ii": {
    "id": "silencer_ii",
    "name": "Silencer II",
    "description": "Moderately reduces the amount of noise produced when firing. Compatible with: Arpeggio, Ferro, Renegade, Anvil, Stitcher",
    "rarity": "Rare",
    "value": 5000,
    "weightKg": 0.5,
    "imageFilename": "https://cdn.arctracker.io/items/silencer_ii.png",
    "type": "Modification",
    "effects": {
      "Reduced Noise": "Reduced Noise"
    }
  },
  "silencer_iii": {
    "id": "silencer_iii",
    "name": "Silencer III",
    "description": "Significantly reduces the amount of noise produced when firing. Compatible with: Tempest, Arpeggio, Kettle, Ferro, Renegade",
    "rarity": "Epic",
    "value": 7000,
    "weightKg": 0.75,
    "imageFilename": "https://cdn.arctracker.io/items/silencer_iii.png",
    "type": "Modification",
    "effects": {
      "Reduced Noise": "Reduced Noise",
      "Increased Durability Burn Rate": "Increased Durability Burn Rate"
    },
    "compatibleWith": [
      "Arpeggio",
      "Rattler",
      "Ferro",
      "Anvil",
      "Torrente"
    ],
    "recyclesInto": {
      "mod_components": 1,
      "wires": 3
    },
    "salvagesInto": {
      "mod_components": 1
    }
  },
  "smoke_grenade": {
    "id": "smoke_grenade",
    "name": "Smoke Grenade",
    "description": "A grenade that creates a lingering smoke cloud on impact, blocking visibility from ARC and other Raiders.",
    "rarity": "Rare",
    "value": 1000,
    "weightKg": 0.2,
    "stackSize": 3,
    "imageFilename": "https://cdn.arctracker.io/items/smoke_grenade.png",
    "type": "Quick Use",
    "effects": {
      "Duration": "Duration",
      "Radius": "Radius"
    },
    "recyclesInto": {
      "chemicals": 2,
      "canister": 1
    }
  },
  "smoke_grenade_trap": {
    "id": "smoke_grenade_trap",
    "name": "Smoke Grenade Trap",
    "description": "A laser trip wire that detonates a Smoke Grenade.",
    "rarity": "Rare",
    "weightKg": 0.3,
    "stackSize": 3,
    "imageFilename": "https://cdn.arctracker.io/items/smoke_grenade_trap.png",
    "type": "Quick Use",
    "effects": {
      "Duration": "Duration",
      "Radius": "Radius"
    }
  },
  "snap_blast_grenade": {
    "id": "snap_blast_grenade",
    "name": "Snap Blast Grenade",
    "description": "A grenade that sticks to surfaces, dealing explosive damage after a short delay.",
    "rarity": "Uncommon",
    "value": 800,
    "weightKg": 0.2,
    "stackSize": 3,
    "imageFilename": "https://cdn.arctracker.io/items/snap_blast_grenade.png",
    "type": "Quick Use",
    "effects": {
      "Damage": "Damage",
      "Radius": "Radius"
    },
    "recipe": {
      "crude_explosives": 2,
      "magnet": 1
    },
    "recyclesInto": {
      "chemicals": 1,
      "magnet": 1
    }
  },
  "snap_hook": {
    "id": "snap_hook",
    "name": "Snap Hook",
    "description": "A gadget that allows the user to scale structures and cover large distances.",
    "rarity": "Legendary",
    "value": 14000,
    "weightKg": 5,
    "imageFilename": "https://cdn.arctracker.io/items/snap_hook.png",
    "type": "Quick Use",
    "effects": {
      "Durability": "Durability",
      "Range": "Range"
    },
    "recipe": {
      "power_rod": 1,
      "exodus_modules": 1
    },
    "recyclesInto": {
      "power_rod": 1,
      "rope": 3
    }
  },
  "stable_stock_i": {
    "id": "stable_stock_i",
    "name": "Stable Stock I",
    "description": "Slightly improves dispersion & recoil recovery time.",
    "rarity": "Common",
    "value": 640,
    "weightKg": 0.25,
    "imageFilename": "https://cdn.arctracker.io/items/stable_stock_i.png",
    "type": "Modification",
    "recipe": {
      "rubber_parts": 6,
      "duct_tape": 1
    },
    "effects": {
      "Reduced Recoil Recovery Time": "Reduced Recoil Recovery Time",
      "Reduced Dispersion Recovery Time": "Reduced Dispersion Recovery Time"
    },
    "compatibleWith": [
      "Rattler",
      "Ferro",
      "Stitcher",
      "Arpeggio",
      "Bettina"
    ],
    "recyclesInto": {
      "rubber_parts": 6
    },
    "salvagesInto": {
      "rubber_parts": 3
    }
  },
  "stable_stock_ii": {
    "id": "stable_stock_ii",
    "name": "Stable Stock II",
    "description": "Moderately improves dispersion & recoil recovery time.",
    "rarity": "Uncommon",
    "value": 2000,
    "weightKg": 0.5,
    "imageFilename": "https://cdn.arctracker.io/items/stable_stock_ii.png",
    "type": "Modification",
    "effects": {
      "Compatible with": "Compatible with",
      "Reduced Recoil Recovery Time": "Reduced Recoil Recovery Time",
      "Reduced Dispersion Recovery Time": "Reduced Dispersion Recovery Time"
    },
    "compatibleWith": [
      "Arpeggio",
      "Rattler",
      "Kettle",
      "Il Toro",
      "Stitcher"
    ],
    "recyclesInto": {
      "mechanical_components": 1,
      "duct_tape": 1
    }
  },
  "stable_stock_iii": {
    "id": "stable_stock_iii",
    "name": "Stable Stock III",
    "description": "Significantly improves dispersion & recoil recovery time.",
    "rarity": "Rare",
    "value": 5000,
    "weightKg": 0.75,
    "imageFilename": "https://cdn.arctracker.io/items/stable_stock_iii.png",
    "type": "Modification",
    "effects": {
      "50% Reduced Recoil Recovery Time": "50% Reduced Recoil Recovery Time",
      "50% Reduced Dispersion Recovery Time": "50% Reduced Dispersion Recovery Time",
      "20% Increased Equip Time": "20% Increased Equip Time",
      "20% Increased Unequip Time": "20% Increased Unequip Time"
    }
  },
  "sterilized_bandage": {
    "id": "sterilized_bandage",
    "name": "Sterilized Bandage",
    "description": "A medical item that gradually restores a large amount of health over time.",
    "rarity": "Rare",
    "value": 2000,
    "weightKg": 0.2,
    "stackSize": 3,
    "imageFilename": "https://cdn.arctracker.io/items/sterilized_bandage.png",
    "type": "Quick Use",
    "effects": {
      "Healing": "Healing",
      "Duration": "Duration",
      "Use Time": "Use Time"
    },
    "recipe": {
      "antiseptic": 1,
      "durable_cloth": 2
    }
  },
  "stitcher_i": {
    "id": "stitcher_i",
    "name": "Stitcher I",
    "description": "Deals good damage, but has quite a low fire-rate and can be hard to control.",
    "rarity": "Common",
    "value": 800,
    "weightKg": 5,
    "imageFilename": "https://cdn.arctracker.io/items/stitcher.png",
    "recipe": {
      "metal_parts": 8,
      "rubber_parts": 4
    },
    "recyclesInto": {
      "metal_parts": 3,
      "rubber_parts": 2
    },
    "salvagesInto": {
      "metal_parts": 3
    },
    "type": "SMG"
  },
  "stitcher_ii": {
    "id": "stitcher_ii",
    "name": "Stitcher II",
    "description": "Deals good damage, but has quite a low fire-rate and can be hard to control.",
    "rarity": "Common",
    "value": 2000,
    "weightKg": 5,
    "imageFilename": "https://cdn.arctracker.io/items/stitcher.png",
    "upgradeCost": {
      "metal_parts": 8,
      "rubber_parts": 12
    },
    "recyclesInto": {
      "metal_parts": 6,
      "rubber_parts": 6
    },
    "salvagesInto": {
      "metal_parts": 6
    },
    "type": "SMG"
  },
  "stitcher_iii": {
    "id": "stitcher_iii",
    "name": "Stitcher III",
    "description": "Full automatic SMG. Deals good damage, but has quite a low fire-rate and can be hard to control.",
    "rarity": "Uncommon",
    "value": 3000,
    "weightKg": 5,
    "imageFilename": "https://cdn.arctracker.io/items/stitcher.png",
    "upgradeCost": {
      "metal_parts": 10,
      "simple_gun_parts": 1
    },
    "recyclesInto": {
      "metal_parts": 12,
      "simple_gun_parts": 1
    },
    "salvagesInto": {
      "simple_gun_parts": 1
    },
    "type": "SMG"
  },
  "stitcher_iv": {
    "id": "stitcher_iv",
    "name": "Stitcher IV",
    "description": "Full automatic SMG. Deals good damage, but has quite a low fire-rate and can be hard to control.",
    "rarity": "Uncommon",
    "value": 5000,
    "weightKg": 5,
    "imageFilename": "https://cdn.arctracker.io/items/stitcher.png",
    "upgradeCost": {
      "mechanical_components": 3,
      "simple_gun_parts": 1
    },
    "recyclesInto": {
      "mechanical_components": 2,
      "simple_gun_parts": 2
    },
    "salvagesInto": {
      "simple_gun_parts": 2
    },
    "type": "SMG"
  },
  "surge_shield_recharger": {
    "id": "surge_shield_recharger",
    "name": "Surge Shield Recharger",
    "description": "A handheld kit that recharges a shield on use.",
    "rarity": "Rare",
    "value": 1200,
    "weightKg": 0.2,
    "stackSize": 5,
    "imageFilename": "https://cdn.arctracker.io/items/surge_shield_recharger.png",
    "type": "Quick Use",
    "effects": {
      "Recharge": "Recharge",
      "Use Time": "Use Time"
    },
    "recipe": {
      "electrical_components": 1,
      "advanced_arc_powercell": 1
    },
    "recyclesInto": {
      "electrical_components": 1
    }
  },
  "tactical_mk1": {
    "id": "tactical_mk1",
    "name": "Tactical Mk. 1",
    "description": "Basic tactical augment. More Quick Use slots for more tactical choice, but limited survivability and slightly lower looting potential.",
    "rarity": "Uncommon",
    "value": 640,
    "weightKg": 2,
    "imageFilename": "https://cdn.arctracker.io/items/tactical_i.png",
    "type": "Augment"
  },
  "tactical_mk2": {
    "id": "tactical_mk2",
    "name": "Tactical Mk. 2",
    "description": "Adds more backpack space and an extra utility item slot.",
    "rarity": "Rare",
    "value": 2000,
    "weightKg": 2,
    "imageFilename": "https://cdn.arctracker.io/items/tactical_i.png",
    "type": "Augment"
  },
  "tactical_mk3_defensive": {
    "id": "tactical_mk3_defensive",
    "name": "Tactical Mk. 3 (Defensive)",
    "description": "A defensive-focused augment for keeping Shields topped up.",
    "rarity": "Epic",
    "value": 5000,
    "weightKg": 5,
    "imageFilename": "https://cdn.arctracker.io/items/tactical_iii_defensive.png",
    "type": "Augment"
  },
  "tactical_mk3_healing": {
    "id": "tactical_mk3_healing",
    "name": "Tactical Mk. 3 (Healing)",
    "description": "A healing-focused augment which adds extra slots for healing items. When revived from being downed, releases a healing cloud that restores 20 health over 10 seconds. Has a 30-second cooldown.",
    "rarity": "Epic",
    "value": 5000,
    "weightKg": 4,
    "imageFilename": "https://cdn.arctracker.io/items/tactical_mk3_healing.png",
    "type": "Augment"
  },
  "tagging_grenade": {
    "id": "tagging_grenade",
    "name": "Tagging Grenade",
    "description": "A grenade that detonates after a delay, tagging Raiders and ARC enemies in an area, allowing you to briefly track their location.",
    "rarity": "Rare",
    "value": 1000,
    "weightKg": 0.4,
    "stackSize": 3,
    "imageFilename": "https://cdn.arctracker.io/items/tagging_grenade.png",
    "type": "Quick Use",
    "effects": {
      "Duration": "Duration",
      "Radius": "Radius"
    },
    "recipe": {
      "electrical_components": 1,
      "sensors": 1
    },
    "recyclesInto": {
      "plastic_parts": 1,
      "sensors": 1
    },
    "salvagesInto": {
      "sensors": 1
    }
  },
  "tempest_i": {
    "id": "tempest_i",
    "name": "Tempest I",
    "description": "Fully automatic assault rifle with moderate fire rate and accuracy.",
    "rarity": "Epic",
    "value": 13000,
    "weightKg": 11,
    "imageFilename": "https://cdn.arctracker.io/items/tempest.png",
    "recipe": {
      "advanced_mechanical_components": 2,
      "medium_gun_parts": 1
    },
    "recyclesInto": {
      "advanced_mechanical_components": 2,
      "medium_gun_parts": 2
    },
    "type": "Assault Rifle"
  },
  "tempest_ii": {
    "id": "tempest_ii",
    "name": "Tempest II",
    "description": "Fully automatic assault rifle with moderate fire rate and accuracy.",
    "rarity": "Epic",
    "value": 17000,
    "weightKg": 11,
    "imageFilename": "https://cdn.arctracker.io/items/tempest.png",
    "upgradeCost": {
      "advanced_mechanical_components": 2,
      "medium_gun_parts": 3
    },
    "recyclesInto": {
      "advanced_mechanical_components": 3,
      "medium_gun_parts": 3
    },
    "type": "Assault Rifle"
  },
  "tempest_iii": {
    "id": "tempest_iii",
    "name": "Tempest III",
    "description": "Fully automatic assault rifle with moderate fire rate and accuracy.",
    "rarity": "Epic",
    "value": 22000,
    "weightKg": 11,
    "imageFilename": "https://cdn.arctracker.io/items/tempest.png",
    "upgradeCost": {
      "advanced_mechanical_components": 4,
      "medium_gun_parts": 4
    },
    "recyclesInto": {
      "advanced_mechanical_components": 4,
      "medium_gun_parts": 4
    },
    "type": "Assault Rifle"
  },
  "tempest_iv": {
    "id": "tempest_iv",
    "name": "Tempest IV",
    "description": "Fully automatic assault rifle with moderate fire rate and accuracy.",
    "rarity": "Epic",
    "value": 22000,
    "weightKg": 11,
    "imageFilename": "https://cdn.arctracker.io/items/tempest.png",
    "upgradeCost": {
      "advanced_mechanical_components": 2,
      "medium_gun_parts": 3
    },
    "recyclesInto": {
      "advanced_mechanical_components": 5,
      "medium_gun_parts": 4
    },
    "type": "Assault Rifle"
  },
  "torrente_i": {
    "id": "torrente_i",
    "name": "Torrente I",
    "description": "Has a large ammo capacity, but is only accurate while crouched",
    "rarity": "Rare",
    "value": 7000,
    "weightKg": 12,
    "imageFilename": "https://cdn.arctracker.io/items/torrente.png",
    "recipe": {
      "advanced_mechanical_components": 2,
      "medium_gun_parts": 3,
      "steel_spring": 6
    },
    "recyclesInto": {
      "advanced_mechanical_components": 1,
      "medium_gun_parts": 2
    },
    "type": "LMG"
  },
  "torrente_ii": {
    "id": "torrente_ii",
    "name": "Torrente II",
    "description": "Has a large ammo capacity, but is only accurate while crouched.",
    "rarity": "Rare",
    "value": 10000,
    "weightKg": 12,
    "imageFilename": "https://cdn.arctracker.io/items/torrente.png",
    "upgradeCost": {
      "advanced_mechanical_components": 1,
      "medium_gun_parts": 2
    },
    "recyclesInto": {
      "advanced_mechanical_components": 2,
      "medium_gun_parts": 2
    },
    "type": "LMG"
  },
  "torrente_iii": {
    "id": "torrente_iii",
    "name": "Torrente III",
    "description": "Has a large ammo capacity, but is only accurate while crouched.",
    "rarity": "Rare",
    "value": 13000,
    "weightKg": 12,
    "imageFilename": "https://cdn.arctracker.io/items/torrente.png",
    "upgradeCost": {
      "advanced_mechanical_components": 1,
      "medium_gun_parts": 2
    },
    "recyclesInto": {
      "advanced_mechanical_components": 2,
      "medium_gun_parts": 3
    },
    "type": "LMG"
  },
  "torrente_iv": {
    "id": "torrente_iv",
    "name": "Torrente IV",
    "description": "Has a large ammo capacity, but is only accurate while crouched.",
    "rarity": "Rare",
    "value": 16000,
    "weightKg": 12,
    "imageFilename": "https://cdn.arctracker.io/items/torrente.png",
    "upgradeCost": {
      "advanced_mechanical_components": 2,
      "medium_gun_parts": 2
    },
    "recyclesInto": {
      "advanced_mechanical_components": 3,
      "medium_gun_parts": 3
    },
    "type": "LMG"
  },
  "trailblazer": {
    "id": "trailblazer",
    "name": "Trailblazer",
    "description": "A grenade that emits a trail of flammable gas along its path, causing an explosive chain reaction when it ignites.",
    "rarity": "Rare",
    "value": 1600,
    "weightKg": 1,
    "stackSize": 3,
    "imageFilename": "https://cdn.arctracker.io/items/trailblazer.png",
    "type": "Quick Use",
    "effects": {
      "Damage": "Damage",
      "Radius": "Radius"
    },
    "recyclesInto": {
      "crude_explosives": 2
    }
  },
  "trigger_nade": {
    "id": "trigger_nade",
    "name": "Trigger 'Nade",
    "description": "A remote-detonated grenade that can stick to surfaces and ARC, dealing explosive damage when triggered.",
    "rarity": "Rare",
    "value": 1000,
    "weightKg": 0.4,
    "stackSize": 3,
    "imageFilename": "https://cdn.arctracker.io/items/trigger_nade.png",
    "type": "Quick Use",
    "effects": {
      "Damage": "Damage",
      "Radius": "Radius"
    },
    "recipe": {
      "crude_explosives": 2,
      "processor": 1
    },
    "recyclesInto": {
      "chemicals": 1,
      "processor": 1
    }
  },
  "venator_i": {
    "id": "venator_i",
    "name": "Venator I",
    "description": "Semi-automatic pistol. Fires two shots at a time.",
    "rarity": "Rare",
    "value": 7000,
    "weightKg": 5,
    "imageFilename": "https://cdn.arctracker.io/items/venator.png",
    "recipe": {
      "advanced_mechanical_components": 2,
      "medium_gun_parts": 3,
      "magnet": 5
    },
    "recyclesInto": {
      "advanced_mechanical_components": 1,
      "medium_gun_parts": 2
    },
    "type": "Pistol"
  },
  "venator_ii": {
    "id": "venator_ii",
    "name": "Venator II",
    "description": "Semi-automatic pistol. Fires two shots at a time.",
    "rarity": "Rare",
    "value": 10000,
    "weightKg": 5,
    "imageFilename": "https://cdn.arctracker.io/items/venator.png",
    "upgradeCost": {
      "advanced_mechanical_components": 1,
      "medium_gun_parts": 2
    },
    "recyclesInto": {
      "advanced_mechanical_components": 2,
      "medium_gun_parts": 2
    },
    "type": "Pistol"
  },
  "venator_iii": {
    "id": "venator_iii",
    "name": "Venator III",
    "description": "Semi-automatic pistol. Fires two shots at a time.",
    "rarity": "Rare",
    "value": 13000,
    "weightKg": 5,
    "imageFilename": "https://cdn.arctracker.io/items/venator.png",
    "upgradeCost": {
      "advanced_mechanical_components": 1,
      "medium_gun_parts": 2
    },
    "recyclesInto": {
      "advanced_mechanical_components": 2,
      "medium_gun_parts": 3
    },
    "type": "Pistol"
  },
  "venator_iv": {
    "id": "venator_iv",
    "name": "Venator IV",
    "description": "Semi-automatic pistol. Fires two shots at a time.",
    "rarity": "Rare",
    "value": 17000,
    "weightKg": 5,
    "imageFilename": "https://cdn.arctracker.io/items/venator.png",
    "upgradeCost": {
      "advanced_mechanical_components": 2,
      "medium_gun_parts": 2
    },
    "recyclesInto": {
      "advanced_mechanical_components": 3,
      "medium_gun_parts": 3
    },
    "type": "Pistol"
  },
  "vertical_grip_i": {
    "id": "vertical_grip_i",
    "name": "Vertical Grip I",
    "description": "Slightly reduces vertical recoil. Compatible with: Tempest, Arpeggio, Kettle, Ferro, Hullcracker",
    "rarity": "Common",
    "value": 640,
    "weightKg": 0.25,
    "imageFilename": "https://cdn.arctracker.io/items/vertical_grip_i.png",
    "type": "Modification",
    "recipe": {
      "plastic_parts": 6,
      "duct_tape": 1
    },
    "effects": {
      "Reduced Vertical Recoil": "Reduced Vertical Recoil"
    }
  },
  "vertical_grip_ii": {
    "id": "vertical_grip_ii",
    "name": "Vertical Grip II",
    "description": "Moderately reduces vertical recoil. Compatible with: Arpeggio, Ferro, Venator, Il Toro, Stitcher",
    "rarity": "Uncommon",
    "value": 2000,
    "weightKg": 0.5,
    "imageFilename": "https://cdn.arctracker.io/items/vertical_grip_ii.png",
    "type": "Modification",
    "effects": {
      "Reduced Vertical Recoil": "Reduced Vertical Recoil"
    },
    "compatibleWith": [
      "Arpeggio",
      "Rattler",
      "Kettle",
      "Il Toro",
      "Stitcher"
    ],
    "recyclesInto": {
      "mechanical_components": 1,
      "duct_tape": 1
    }
  },
  "vertical_grip_iii": {
    "id": "vertical_grip_iii",
    "name": "Vertical Grip III",
    "description": "Significantly reduces vertical recoil. Compatible with: Tempest, Kettle, Hullcracker, Venator, Il Toro",
    "rarity": "Rare",
    "value": 5000,
    "weightKg": 0.75,
    "imageFilename": "https://cdn.arctracker.io/items/vertical_grip_iii.png",
    "type": "Modification",
    "recipe": {
      "mod_components": 2,
      "duct_tape": 5
    },
    "effects": {
      "Reduced Vertical Recoil": "Reduced Vertical Recoil",
      "Reduced ADS Speed": "Reduced ADS Speed"
    }
  },
  "vita_shot": {
    "id": "vita_shot",
    "name": "Vita Shot",
    "description": "A medical item that restores a large amount of health.",
    "rarity": "Rare",
    "value": 2000,
    "weightKg": 0.4,
    "stackSize": 3,
    "imageFilename": "https://cdn.arctracker.io/items/vita_shot.png",
    "type": "Quick Use",
    "effects": {
      "Healing": "Heilen",
      "Use Time": "Use Time"
    },
    "recipe": {
      "antiseptic": 1,
      "syringe": 1
    },
    "recyclesInto": {
      "chemicals": 4,
      "syringe": 1
    }
  },
  "vita_spray": {
    "id": "vita_spray",
    "name": "Vita Spray",
    "description": "A medical item that continuously restores health during use. Can be used on yourself or your allies.",
    "rarity": "Epic",
    "value": 3000,
    "weightKg": 1,
    "stackSize": 1,
    "imageFilename": "https://cdn.arctracker.io/items/vita_spray.png",
    "type": "Quick Use",
    "effects": {
      "Durability": "Durability",
      "Healing": "Healing",
      "Heal Capacity": "Heal Capacity"
    },
    "recipe": {
      "antiseptic": 3,
      "canister": 1
    },
    "recyclesInto": {
      "antiseptic": 1,
      "canister": 2
    },
    "salvagesInto": {
      "antiseptic": 1
    }
  },
  "vulcano_i": {
    "id": "vulcano_i",
    "name": "Vulcano I",
    "description": "Semi-automatic shotgun with good bullet spread but sharp falloff",
    "rarity": "Epic",
    "value": 10000,
    "weightKg": 8,
    "imageFilename": "https://cdn.arctracker.io/items/vulcano.png",
    "recipe": {
      "magnetic_accelerator": 1,
      "heavy_gun_parts": 3,
      "exodus_modules": 1
    },
    "recyclesInto": {
      "advanced_mechanical_components": 2,
      "heavy_gun_parts": 2
    },
    "type": "Shotgun"
  },
  "vulcano_ii": {
    "id": "vulcano_ii",
    "name": "Vulcano II",
    "description": "Semi-automatic shotgun with good bullet spread but sharp falloff",
    "rarity": "Epic",
    "value": 13000,
    "weightKg": 9.25,
    "stackSize": 1,
    "imageFilename": "https://cdn.arctracker.io/items/vulcano.png",
    "upgradeCost": {
      "advanced_mechanical_components": 1,
      "heavy_gun_parts": 2
    },
    "recyclesInto": {
      "advanced_mechanical_components": 2,
      "heavy_gun_parts": 3
    },
    "type": "Shotgun"
  },
  "vulcano_iii": {
    "id": "vulcano_iii",
    "name": "Vulcano III",
    "description": "Semi-automatic shotgun with good bullet spread but sharp falloff",
    "rarity": "Epic",
    "value": 17000,
    "weightKg": 8,
    "imageFilename": "https://cdn.arctracker.io/items/vulcano.png",
    "upgradeCost": {
      "advanced_mechanical_components": 2,
      "heavy_gun_parts": 1
    },
    "recyclesInto": {
      "advanced_mechanical_components": 3,
      "heavy_gun_parts": 4
    },
    "type": "Shotgun"
  },
  "vulcano_iv": {
    "id": "vulcano_iv",
    "name": "Vulcano IV",
    "description": "Semi-automatic shotgun with good bullet spread but sharp falloff",
    "rarity": "Epic",
    "value": 22000,
    "weightKg": 8,
    "imageFilename": "https://cdn.arctracker.io/items/vulcano.png",
    "upgradeCost": {
      "advanced_mechanical_components": 2,
      "heavy_gun_parts": 3
    },
    "recyclesInto": {
      "advanced_mechanical_components": 4,
      "heavy_gun_parts": 5
    },
    "type": "Shotgun"
  },
  "wolfpack": {
    "id": "wolfpack",
    "name": "Wolfpack",
    "description": "A grenade that scatters into multiple homing missiles, each one targeting ARC and dealing explosive damage on impact.",
    "rarity": "Epic",
    "value": 5000,
    "weightKg": 1,
    "stackSize": 1,
    "imageFilename": "https://cdn.arctracker.io/items/wolfpack.png",
    "type": "Quick Use",
    "effects": {
      "Damage": "Damage",
      "Homing Range": "Homing Range"
    },
    "recipe": {
      "explosive_compound": 3,
      "arc_motion_core": 2
    },
    "recyclesInto": {
      "crude_explosives": 1,
      "arc_motion_core": 1
    }
  },
  "yellow_light_stick": {
    "id": "yellow_light_stick",
    "name": "Yellow Light Stick",
    "description": "A throwable chemical light that illuminates the area around it.",
    "rarity": "Common",
    "value": 150,
    "weightKg": 0.15,
    "stackSize": 5,
    "imageFilename": "https://cdn.arctracker.io/items/yellow_light_stick.png",
    "type": "Quick Use",
    "effects": {
      "Illumination Radius": "Illumination Radius",
      "Duration": "Duration"
    },
    "recyclesInto": {
      "chemicals": 1
    }
  },
  "zipline": {
    "id": "zipline",
    "name": "Zipline",
    "description": "A deployable zipline that allows you to quickly move between two locations.",
    "rarity": "Rare",
    "value": 1000,
    "weightKg": 0.4,
    "imageFilename": "https://cdn.arctracker.io/items/zipline.png",
    "type": "Quick Use",
    "recipe": {
      "rope": 1,
      "mechanical_components": 1
    },
    "recyclesInto": {
      "rope": 1,
      "metal_parts": 1
    }
  }
} as const;
  