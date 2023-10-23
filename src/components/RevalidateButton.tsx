'use client';

import revalidate from '@/utils/revalidate';
import { useRouter } from 'next/navigation';

type Props = {
    tag: string;
};

export default function RevalidateButton({ tag }: Props) {
    const router = useRouter();
    const handleClick = async () => {
        const res = await revalidate(tag);
        router.refresh();
    };

    return <button onClick={handleClick}>캐시 비우기</button>;
}
