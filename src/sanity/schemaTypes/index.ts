import { type SchemaTypeDefinition } from 'sanity'
import { hero } from '../hero'
import { product } from '../product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, product],
}
