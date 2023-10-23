'use client';
import { useRouter } from 'next/navigation';
import revalidate from '@/utils/revalidate';
import { useCallback } from 'react';

const useRefetch = () => {
    const router = useRouter();

    return useCallback(
        async (tag: string) => {
            const res = await revalidate(tag);
            if (res.status !== 200) throw new Error('재검증에 실패했습니다.');
            router.refresh();
        },
        [router]
    );
};
export default useRefetch;
