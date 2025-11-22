import { Schema } from 'effect';
import { CosmeticsSchemas } from './schema/cosmetics.schema';
import { WeaponSchemas } from './schema/weapons.schema';
import {
  BaseItemSchema,
  localisedField,
  ingredientsField,
  optionalIngredientsField,
  effectsField,
} from './schema/base.schema';

const KeySchema = Schema.Struct({
  ...BaseItemSchema.fields,
  type: Schema.Literal('Key'),
});

const CraftableSchema = Schema.Struct({
  recipe: ingredientsField,
});

const QuickUseSchema = Schema.Struct({
  ...BaseItemSchema.fields,
  type: Schema.Literal('Quick Use'),
  // Not every QU has an effect ("Door Blocker")
  effects: effectsField,
  // FIXME: missing recipe data
  // ...CraftableSchema.fields,
  recipe: optionalIngredientsField,
  // FIXME: missing recyclesInto/salvagesInto data
  // recyclesInto: ingredientsField,
  // salvagesInto: ingredientsField,
  recyclesInto: optionalIngredientsField,
  salvagesInto: optionalIngredientsField,
});

const TopsideMaterialSchema = Schema.Struct({
  ...BaseItemSchema.fields,
  type: Schema.Literal('Topside Material'),
  foundIn: Schema.String,
  // FIXME: missing recyclesInto/salvagesInto data
  // recyclesInto: ingredientsField,
  // salvagesInto: ingredientsField,
  recyclesInto: optionalIngredientsField,
  salvagesInto: optionalIngredientsField,
});

const BasicMaterialSchema = Schema.Struct({
  ...BaseItemSchema.fields,
  type: Schema.Literal('Basic Material'),
  foundIn: Schema.String,
});

const RefinedMaterialSchema = Schema.Struct({
  ...BaseItemSchema.fields,
  ...CraftableSchema.fields,
  type: Schema.Literal('Refined Material'),
  foundIn: Schema.String,
  // FIXME: missing recyclesInto/salvagesInto data
  // recyclesInto: ingredientsField,
  // salvagesInto: ingredientsField,
  recyclesInto: optionalIngredientsField,
  salvagesInto: optionalIngredientsField,
});

const NatureSchema = Schema.Struct({
  ...BaseItemSchema.fields,
  type: Schema.Literal('Nature'),
  foundIn: Schema.String,
  // Not all natural items have an in-game effect
  effects: effectsField,
});

const TrinketSchema = Schema.Struct({
  ...BaseItemSchema.fields,
  type: Schema.Literal('Trinket'),
  // Quest items are considered Trinkets ("Celeste's Journal")
  // and do not have value/foundIn
  value: Schema.optional(Schema.Number),
  foundIn: Schema.optional(Schema.String),
});

const RecyclableSchema = Schema.Struct({
  ...BaseItemSchema.fields,
  type: Schema.Literal('Recyclable'),
  foundIn: Schema.String,
  // FIXME: missing recyclesInto/salvagesInto data
  // recyclesInto: ingredientsField,
  // salvagesInto: ingredientsField,
  recyclesInto: optionalIngredientsField,
  salvagesInto: optionalIngredientsField,
});

const ModificationSchema = Schema.Struct({
  ...BaseItemSchema.fields,
  type: Schema.Literal('Modification'),
  //   FIXME: Not all recipes known yet?
  recipe: optionalIngredientsField,
  effects: effectsField,
  // FIXME: not all compatibility known yet
  compatibleWith: Schema.optional(Schema.Array(Schema.String)),
  // FIXME: missing recyclesInto/salvagesInto data
  // recyclesInto: ingredientsField,
  // salvagesInto: ingredientsField,
  recyclesInto: optionalIngredientsField,
  salvagesInto: optionalIngredientsField,
});

const BlueprintSchema = Schema.Struct({
  ...BaseItemSchema.fields,
  type: Schema.Literal('Blueprint'),
  value: Schema.optional(Schema.Number),
});

const AmmunitionSchema = Schema.Struct({
  ...BaseItemSchema.fields,
  type: Schema.Literal('Ammunition'),
  compatibleWith: Schema.Array(Schema.String),
});

const ShieldSchema = Schema.Struct({
  ...BaseItemSchema.fields,
  type: Schema.Literal('Shield'),
  durability: Schema.Number,
  shieldCharge: Schema.Number,
  damageMitigation: Schema.Number,
  movementSpeedModifier: Schema.Number,
});

const MaterialSchema = Schema.Struct({
  ...BaseItemSchema.fields,
  type: Schema.Literal('Material'),
});

const AugmentSchema = Schema.Struct({
  ...BaseItemSchema.omit('stackSize').fields,
  type: Schema.Literal('Augment'),
});

const ItemSchema = Schema.Union(
  QuickUseSchema,
  BasicMaterialSchema,
  TopsideMaterialSchema,
  RefinedMaterialSchema,
  MaterialSchema,
  NatureSchema,
  TrinketSchema,
  RecyclableSchema,
  ModificationSchema,
  BlueprintSchema,
  ...CosmeticsSchemas,
  KeySchema,
  ...WeaponSchemas,
  AugmentSchema,
  AmmunitionSchema,
  ShieldSchema,
);
const ItemJsonSchema = Schema.parseJson(ItemSchema);
export const ItemDecoder = Schema.decodeUnknown(ItemJsonSchema);
