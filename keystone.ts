import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { createAuth } from '@keystone-next/auth';
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session';
import { User } from './schemas/User';
import { Country } from './schemas/Country';
import { CountryList } from './schemas/CountryList';

const databaseURL = process.env.DATABASE_URL;

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 30,
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
  },
});

export default withAuth(
  config({
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: 'mongoose',
      url: databaseURL,
      // Initial Data Seeding
      // async onConnect(keystone) {
      //   console.log('Connected to the database');
      //   if (process.argv.includes('--seed-data')) {
      //     await insertSeedData(keystone);
      //   }
      // },
    },
    lists: createSchema({
      User,
      Country,
      CountryList,
    }),
    ui: {
      isAccessAllowed: ({ session }) => {
        if (session?.data?.isAdmin) {
          return true;
        }
      },
    },
    session: withItemData(statelessSessions(sessionConfig), {
      User: 'id name email isAdmin',
    }),
  })
);
