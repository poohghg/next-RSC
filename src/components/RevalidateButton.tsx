'use client';

import revalidate from '@/utils/revalidate';
import { useRouter } from 'next/navigation';
import useRefetch from '@/utils/useRefetch';

type Props = {
    tag: string;
};

export default function RevalidateButton({ tag }: Props) {
    const refetch = useRefetch();
    const handleClick = async () => {
        await refetch('time - false');
    };

    return <button onClick={handleClick}>캐시 비우기</button>;
}
