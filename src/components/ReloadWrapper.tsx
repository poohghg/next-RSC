'use client';

import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type Props = {
    children: ReactNode;
};

const ReloadWrapper = ({ children }: Props) => {
    const router = useRouter();
    const [state, setState] = useState(0);

    useEffect(() => {
        // return () => {
        //     router.refresh();
        // };
    }, []);

    return (
        <>
            <p>state = {state}</p>
            <button onClick={() => setState((prev) => prev + 1)}>
                state 변경시키기
            </button>
            {children}
        </>
    );
};

export default ReloadWrapper;
