import { Schema } from 'effect';
import {
  BaseItemSchema,
  ingredientsField,
  optionalIngredientsField,
} from './base.schema';

const BasicMaterialSchema = Schema.Struct({
  ...BaseItemSchema.fields,
  type: Schema.Literal('Basic Material'),
  foundIn: Schema.String,
});

// Only Matriarch Reactor right now...
const MaterialSchema = Schema.Struct({
  ...BaseItemSchema.fields,
  type: Schema.Literal('Material'),
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

const RefinedMaterialSchema = Schema.Struct({
  ...BaseItemSchema.fields,
  recipe: ingredientsField,
  type: Schema.Literal('Refined Material'),
  foundIn: Schema.String,
  // FIXME: missing recyclesInto/salvagesInto data
  // recyclesInto: ingredientsField,
  // salvagesInto: ingredientsField,
  recyclesInto: optionalIngredientsField,
  salvagesInto: optionalIngredientsField,
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

export const MaterialSchemas = [
  BasicMaterialSchema,
  TopsideMaterialSchema,
  RefinedMaterialSchema,
  MaterialSchema,
  RecyclableSchema,
];
