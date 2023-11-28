'use client';

import { getTime } from '@/utils/getTime';
import { useEffect } from 'react';
import { getDate } from '@/utils/getDate';

const TestClient = () => {
    const handleGetTime = async () => {
        // const res = await getTime(false);
        const res = getDate();
        console.log(res);
    };

    useEffect(() => {
        (async () => await handleGetTime())();
    }, []);

    return <div>TestClient</div>;
};

export default TestClient;
