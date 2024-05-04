const { db } = require('@vercel/postgres')
const { pokemonData } = require('../src/app/lib/pokemon')

async function seedPokemon(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS pokemon_likes (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        likes_count INT DEFAULT 0
      );
    `

    const insertedPokemon = await Promise.all(
      pokemonData.map(async pokemon => {
        return client.sql`
        INSERT INTO pokemon_likes (name)
        VALUES (${pokemon.name})
        ON CONFLICT (id) DO NOTHING;
      `
      })
    )

    console.log(`Seeded ${insertedPokemon.length} users`)

    return {
      createTable,
      pokemon: insertedPokemon,
    }
  } catch (error) {
    console.error('Error seeding users:', error)
    throw error
  }
}

async function main() {
  const client = await db.connect()
  await seedPokemon(client)
  await client.end()
}

main().catch(err => {
  console.error('An error occurred while attempting to seed the database:', err)
})
