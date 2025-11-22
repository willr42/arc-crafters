import { Schema } from 'effect';
import {
  BaseItemSchema,
  effectsField,
  optionalIngredientsField,
} from './base.schema';

const KeySchema = Schema.Struct({
  ...BaseItemSchema.fields,
  type: Schema.Literal('Key'),
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

const ShieldSchema = Schema.Struct({
  ...BaseItemSchema.fields,
  type: Schema.Literal('Shield'),
  durability: Schema.Number,
  shieldCharge: Schema.Number,
  damageMitigation: Schema.Number,
  movementSpeedModifier: Schema.Number,
});

const AugmentSchema = Schema.Struct({
  ...BaseItemSchema.omit('stackSize').fields,
  type: Schema.Literal('Augment'),
});

const MiscSchema = Schema.Struct({
  ...BaseItemSchema.fields,
  type: Schema.Literal('Misc'),
});

export const EquipmentSchemas = [
  KeySchema,
  QuickUseSchema,
  ShieldSchema,
  AugmentSchema,
  MiscSchema,
];
