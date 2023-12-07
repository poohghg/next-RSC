'use client';

export async function getDateC() {
    const res = await fetch('https://external-service.com/data', {
        headers: {
            authorization: 'API_KEY',
            // authorization: process.env.API_KEY,
        },
    });
    return res.json();
}
