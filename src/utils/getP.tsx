'use server';
export default async function getP() {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=19';
    const res = await fetch(url, {
        cache: 'no-cache',
        next: {
            tags: ['pokemons'],
        },
    });
    return res.json();
}
