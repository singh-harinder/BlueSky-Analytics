import { text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const CountryList = list({
  fields: {
    name: text({ isRequired: true, isUnique: true }),
  },
});
