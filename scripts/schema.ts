import { Schema } from 'effect';

const localisedField = Schema.Struct({ en: Schema.String });

const BaseItemSchema = Schema.Struct({
  id: Schema.String,
  name: localisedField,
  description: localisedField,
  rarity: Schema.Literal('Common', 'Uncommon', 'Rare', 'Legendary'),
  value: Schema.Number,
  weightKg: Schema.Number,
  stackSize: Schema.Number,
  imageFilename: Schema.URL,
});

const CraftableSchema = Schema.Struct({
  recipe: Schema.Record({ key: Schema.String, value: Schema.Number }),
});

export const QuickUseSchema = Schema.Struct({
  ...BaseItemSchema.fields,
  ...CraftableSchema.fields,
  type: Schema.Literal('Quick Use'),
  recyclesInto: Schema.Record({ key: Schema.String, value: Schema.Number }),
  salvagesInto: Schema.Record({ key: Schema.String, value: Schema.Number }),
  effects: Schema.Record({ key: Schema.String, value: localisedField }),
});

// FIXME : should also have salvage? some item data appears missing?
export const TopsideMaterialSchema = Schema.Struct({
  ...BaseItemSchema.fields,
  type: Schema.Literal('Topside Material'),
  recyclesInto: Schema.Record({ key: Schema.String, value: Schema.Number }),
  foundIn: Schema.String,
});

// FIXME : should also have salvage? some item data appears missing
export const RefinedMaterialSchema = Schema.Struct({
  ...BaseItemSchema.fields,
  ...CraftableSchema.fields,
  type: Schema.Literal('Refined Material'),
  recyclesInto: Schema.Record({ key: Schema.String, value: Schema.Number }),
  foundIn: Schema.String,
});

export const NatureSchema = Schema.Struct({
  ...BaseItemSchema.fields,
  type: Schema.Literal('Nature'),
  foundIn: Schema.String,
  effects: Schema.Record({ key: Schema.String, value: localisedField }),
});

export const TrinketSchema = Schema.Struct({
  ...BaseItemSchema.fields,
  type: Schema.Literal('Trinket'),
  foundIn: Schema.String,
});

export const RecyclableSchema = Schema.Struct({
  ...BaseItemSchema.fields,
  type: Schema.Literal('Recyclable'),
  foundIn: Schema.String,
  recyclesInto: Schema.Record({ key: Schema.String, value: Schema.Number }),
  salvagesInto: Schema.Record({ key: Schema.String, value: Schema.Number }),
});

// FIXME: surely these should have recyclesInto/salvagesInto values too?
export const ModificationSchema = Schema.Struct({
  ...BaseItemSchema.omit('stackSize').fields,
  //   FIXME: Not all recipes known yet?
  recipe: Schema.optional(
    Schema.Record({ key: Schema.String, value: Schema.Number }),
  ),
  type: Schema.Literal('Modification'),
  effects: Schema.Record({ key: Schema.String, value: localisedField }),
  recyclesInto: Schema.optional(
    Schema.Record({ key: Schema.String, value: Schema.Number }),
  ),
  salvagesInto: Schema.optional(
    Schema.Record({ key: Schema.String, value: Schema.Number }),
  ),
});

export const BlueprintSchema = Schema.Struct({
  ...BaseItemSchema.omit('stackSize').fields,
  type: Schema.Literal('Blueprint'),
});

const ItemSchema = Schema.Union(
  QuickUseSchema,
  TopsideMaterialSchema,
  RefinedMaterialSchema,
  NatureSchema,
  TrinketSchema,
  RecyclableSchema,
  ModificationSchema,
  BlueprintSchema,
);
const ItemJsonSchema = Schema.parseJson(ItemSchema);
export const ItemDecoder = Schema.decodeUnknown(ItemJsonSchema);
