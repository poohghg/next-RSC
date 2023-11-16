'use client';

import { getTime } from '@/utils/getTime';
import { useEffect } from 'react';

const TestClient = () => {
    const handleGetTime = async () => {
        const res = await getTime(false);
        console.log(res);
    };

    useEffect(() => {
        (async () => await handleGetTime())();
    }, []);

    return <div>TestClinent</div>;
};

export default TestClient;
