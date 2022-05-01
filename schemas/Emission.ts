import { integer, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Emission = list({
  fields: {
    year: integer({ isRequired: true }),
    category: text({ isRequired: true }),
    emission: text({ isRequired: true }),
  },
});
