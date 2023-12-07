'use client';

import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type Props = {
    children: ReactNode;
};

const ReloadWrapper = ({ children }: Props) => {
    const router = useRouter();
    const [state, setState] = useState(0);
    // 페이지 라우터을 변경할 때마다 클라이언트 RSC 패이로드를 최신화 해야 한다.
    useEffect(() => {
        router.refresh();
        return () => {
            // router.refresh();
        };
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
