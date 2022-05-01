import { relationship, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Country = list({
  fields: {
    country_name: text({ isRequired: true, isUnique: true }),
    country_data: relationship({
      ref: 'Emission',
      many: true,
      defaultValue: null,
    }),
  },
});
