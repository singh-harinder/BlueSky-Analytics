import { countries } from './data';

export async function insertSeedData(ks: any) {
  const keystone = ks.keystone || ks;
  const adapter = keystone.adapters?.MongooseAdapter || keystone.adapter;

  console.log(`🌱 Inserting Seed Data: ${countries.length} Products`);
  const { mongoose } = adapter;
  for (const country of countries) {
    console.log(`  🛍️ Updating Country: ${country.country_name}`);

    const { _id } = await mongoose.model('Emission').create({
      year: country.year,
      category: country.category,
      emission: country.emission_value,
    });

    await mongoose.model('Country').updateMany(
      {
        country_name: 'Australia',
      },
      {
        $set: {
          year: country.year,
          category: country.category,
          emission: country.emission_value,
        },
      }
    );
  }
  console.log(`✅ Seed Data Inserted: ${countries.length} Products`);
  console.log('👋 Please start the process with `yarn dev` or `npm run dev`');
  process.exit();
}
