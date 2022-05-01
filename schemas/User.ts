import { list } from '@keystone-next/keystone/schema';
import { text, password, checkbox } from '@keystone-next/fields';

export const User = list({
  fields: {
    name: text({ isRequired: true }),
    email: text({
      isRequired: true,
      isUnique: true,
    }),
    password: password({
      isRequired: true,
    }),
    isAdmin: checkbox({
      isRequired: true,
      label: 'Admin',
      defaultValue: false,
    }),
  },
});
