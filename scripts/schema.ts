import { Schema } from 'effect';
import { BaseItemSchema, effectsField } from './schema/base.schema';
import { CosmeticsSchemas } from './schema/cosmetics.schema';
import { EquipmentSchemas } from './schema/equipment.schema';
import { MaterialSchemas } from './schema/materials.schema';
import { WeaponSchemas } from './schema/weapons.schema';

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

const BlueprintSchema = Schema.Struct({
  ...BaseItemSchema.fields,
  type: Schema.Literal('Blueprint'),
  value: Schema.optional(Schema.Number),
});

const ItemSchema = Schema.Union(
  NatureSchema,
  TrinketSchema,
  BlueprintSchema,
  ...CosmeticsSchemas,
  ...EquipmentSchemas,
  ...MaterialSchemas,
  ...WeaponSchemas,
);

const ItemJsonSchema = Schema.parseJson(ItemSchema);
export type Item = Schema.Schema.Type<typeof ItemSchema>;
export const ItemJSONDecoder = Schema.decodeUnknown(ItemJsonSchema);
