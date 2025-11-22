import { Schema } from 'effect';
import { BaseItemSchema, optionalIngredientsField } from './base.schema';

const WeaponSchema = Schema.Struct({
  ...BaseItemSchema.fields,
  // Only first weapon is craftable
  recipe: optionalIngredientsField,
  // Only subsequent weapons have upgradeCost
  upgradeCost: optionalIngredientsField,
  // FIXME: missing recyclesInto/salvagesInto data
  // recyclesInto: ingredientsField,
  // salvagesInto: ingredientsField,
  recyclesInto: optionalIngredientsField,
  salvagesInto: optionalIngredientsField,
});

const createWeaponSchema = (typeLiteral: string) =>
  WeaponSchema.pipe(
    Schema.extend(Schema.Struct({ type: Schema.Literal(typeLiteral) })),
  );

const HandCannonSchema = createWeaponSchema('Hand Cannon');
const AssaultRifleSchema = createWeaponSchema('Assault Rifle');
const PistolSchema = createWeaponSchema('Pistol');
const LMGSchema = createWeaponSchema('LMG');
const BattleRifleSchema = createWeaponSchema('Battle Rifle');
const SpecialSchema = createWeaponSchema('Special');
const ShotgunSchema = createWeaponSchema('Shotgun');
const SniperRifleSchema = createWeaponSchema('Sniper Rifle');

export const WeaponSchemas = [
  HandCannonSchema,
  AssaultRifleSchema,
  PistolSchema,
  LMGSchema,
  BattleRifleSchema,
  SpecialSchema,
  ShotgunSchema,
  SniperRifleSchema,
];
