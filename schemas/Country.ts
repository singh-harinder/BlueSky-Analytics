import { integer, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Country = list({
  fields: {
    country_name: text({ isRequired: true }),
    year: integer({ isRequired: true }),
    category: text({ isRequired: true }),
    emission: text({ isRequired: true }),
  },
});
