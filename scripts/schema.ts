import { Schema } from 'effect';

const localisedField = Schema.Struct({ en: Schema.String });
const ingredientsField = Schema.Record({
  key: Schema.String,
  value: Schema.Number,
});
const optionalIngredientsField = Schema.optional(ingredientsField);

const BaseItemSchema = Schema.Struct({
  id: Schema.String,
  name: localisedField,
  description: localisedField,
  rarity: Schema.Literal('Common', 'Uncommon', 'Rare', 'Legendary', 'Epic'),
  value: Schema.Number,
  weightKg: Schema.optional(Schema.Number),
  stackSize: Schema.Number,
  imageFilename: Schema.optional(Schema.URL),
});

const CosmeticSchema = BaseItemSchema.pick(
  'id',
  'name',
  'description',
  'rarity',
).pipe(Schema.extend(Schema.Struct({ type: Schema.Literal('Cosmetic') })));

const BackpackCharmSchema = BaseItemSchema.pick(
  'id',
  'name',
  'description',
  'rarity',
  'imageFilename',
).pipe(
  Schema.extend(Schema.Struct({ type: Schema.Literal('Backpack Charm') })),
);

const KeySchema = BaseItemSchema.omit('stackSize').pipe(
  Schema.extend(
    Schema.Struct({
      type: Schema.Literal('Key'),
    }),
  ),
);

const CraftableSchema = Schema.Struct({
  recipe: ingredientsField,
});

const QuickUseSchema = Schema.Struct({
  ...BaseItemSchema.omit('stackSize').fields,
  // Not every QU is stackable
  stackSize: Schema.optional(Schema.Number),
  // FIXME: missing recipe data
  // ...CraftableSchema.fields,
  recipe: optionalIngredientsField,
  type: Schema.Literal('Quick Use'),
  // FIXME: missing recyclesInto/salvagesInto data
  // recyclesInto: ingredientsField,
  // salvagesInto: ingredientsField,
  recyclesInto: optionalIngredientsField,
  salvagesInto: optionalIngredientsField,
  effects: Schema.Record({ key: Schema.String, value: localisedField }),
});

const TopsideMaterialSchema = Schema.Struct({
  ...BaseItemSchema.fields,
  type: Schema.Literal('Topside Material'),
  // FIXME: missing recyclesInto/salvagesInto data
  // recyclesInto: ingredientsField,
  // salvagesInto: ingredientsField,
  recyclesInto: optionalIngredientsField,
  salvagesInto: optionalIngredientsField,
  foundIn: Schema.String,
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
  // FIXME: missing recyclesInto/salvagesInto data
  // recyclesInto: ingredientsField,
  // salvagesInto: ingredientsField,
  recyclesInto: optionalIngredientsField,
  salvagesInto: optionalIngredientsField,
  foundIn: Schema.String,
});

const NatureSchema = Schema.Struct({
  ...BaseItemSchema.fields,
  type: Schema.Literal('Nature'),
  foundIn: Schema.String,
  // Not all natural items have an in-game effect
  effects: Schema.optional(
    Schema.Record({ key: Schema.String, value: localisedField }),
  ),
});

const TrinketSchema = Schema.Struct({
  ...BaseItemSchema.fields,
  type: Schema.Literal('Trinket'),
  // Quest items are considered Trinkets ("Celeste's Journal")
  // and do not have value/stackSize/foundIn
  value: Schema.optional(Schema.Number),
  stackSize: Schema.optional(Schema.Number),
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
  ...BaseItemSchema.omit('stackSize').fields,
  //   FIXME: Not all recipes known yet?
  recipe: optionalIngredientsField,
  type: Schema.Literal('Modification'),
  effects: Schema.Record({ key: Schema.String, value: localisedField }),
  // FIXME: missing recyclesInto/salvagesInto data
  // recyclesInto: ingredientsField,
  // salvagesInto: ingredientsField,
  recyclesInto: optionalIngredientsField,
  salvagesInto: optionalIngredientsField,
});

const BlueprintSchema = Schema.Struct({
  ...BaseItemSchema.omit('stackSize').fields,
  value: Schema.optional(Schema.Number),
  type: Schema.Literal('Blueprint'),
});

const WeaponSchema = Schema.Struct({
  ...BaseItemSchema.omit('stackSize').fields,
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
const WeaponSchemas = [HandCannonSchema, AssaultRifleSchema, PistolSchema];

const ItemSchema = Schema.Union(
  QuickUseSchema,
  BasicMaterialSchema,
  TopsideMaterialSchema,
  RefinedMaterialSchema,
  NatureSchema,
  TrinketSchema,
  RecyclableSchema,
  ModificationSchema,
  BlueprintSchema,
  CosmeticSchema,
  BackpackCharmSchema,
  KeySchema,
  ...WeaponSchemas,
);
const ItemJsonSchema = Schema.parseJson(ItemSchema);
export const ItemDecoder = Schema.decodeUnknown(ItemJsonSchema);
