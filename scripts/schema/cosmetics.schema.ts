import { Schema } from 'effect';
import { BaseItemSchema } from './base.schema';

const CosmeticSchema = Schema.Struct({
  ...BaseItemSchema.fields,
  type: Schema.Literal('Cosmetic'),
});

const OutfitSchema = Schema.Struct({
  ...BaseItemSchema.fields,
  type: Schema.Literal('Outfit'),
});

const BackpackCharmSchema = Schema.Struct({
  ...BaseItemSchema.fields,
  type: Schema.Literal('Backpack Charm'),
});

export const CosmeticsSchemas = [
  CosmeticSchema,
  OutfitSchema,
  BackpackCharmSchema,
];
