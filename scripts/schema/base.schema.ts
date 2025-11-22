import { Schema } from 'effect';

export const localisedField = Schema.Struct({ en: Schema.String });
export const ingredientsField = Schema.Record({
  key: Schema.String,
  value: Schema.Number,
});
export const optionalIngredientsField = Schema.optional(ingredientsField);

export const effectsField = Schema.optional(
  Schema.Record({ key: Schema.String, value: localisedField }),
);

export const BaseItemSchema = Schema.Struct({
  id: Schema.String,
  name: localisedField,
  description: localisedField,
  rarity: Schema.Literal('Common', 'Uncommon', 'Rare', 'Legendary', 'Epic'),
  value: Schema.optional(Schema.Number),
  weightKg: Schema.optional(Schema.Number),
  stackSize: Schema.optional(Schema.Number),
  imageFilename: Schema.optional(Schema.URL),
});
