'use client';

import { getTime } from '@/utils/getTime';
import { useEffect, useState } from 'react';
import { getDate } from '@/utils/getDate';
import { getDateC } from '@/utils/getDateC';
import getP from '@/utils/getP';
import { revalidateTag } from 'next/cache';
import revalidate from '@/utils/revalidate';
import useRefetch from '@/utils/useRefetch';
// import revalidate from '@/utils/revalidate';

const TestClient = () => {
    const [p, setP] = useState(null);
    const t = useRefetch();
    const handleGet = async () => {
        const res = await getP();
        setP(res);
    };

    useEffect(() => {
        (async () => await handleGet())();
    }, []);

    return (
        <div>
            <p>client</p>
            <div>
                <button onClick={handleGet}>get</button>
                <button
                    onClick={async () => {
                        await t('pokemons');
                    }}
                >
                    revaliodate
                </button>
                <p>{JSON.stringify(p)}</p>
            </div>
        </div>
    );
};

export default TestClient;
