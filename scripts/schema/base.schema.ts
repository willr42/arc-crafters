import { Schema } from 'effect';

export const ingredientsField = Schema.Record({
  key: Schema.String,
  value: Schema.Number,
});
export const optionalIngredientsField = Schema.optional(ingredientsField);

export const localisedField = Schema.Struct({ en: Schema.String });

const EnglishString = Schema.transform(localisedField, Schema.String, {
  strict: true,
  decode: (inp) => inp.en,
  encode: (str) => ({ en: str }),
});

export const effectsField = Schema.optional(
  Schema.Record({ key: Schema.String, value: EnglishString }),
);

export const BaseItemSchema = Schema.Struct({
  id: Schema.String,
  name: EnglishString,
  description: EnglishString,
  rarity: Schema.Literal('Common', 'Uncommon', 'Rare', 'Legendary', 'Epic'),
  value: Schema.optional(Schema.Number),
  weightKg: Schema.optional(Schema.Number),
  stackSize: Schema.optional(Schema.Number),
  imageFilename: Schema.optional(Schema.URL),
});
