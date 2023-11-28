import { getTime } from '@/utils/getTime';
import { cookies } from 'next/headers';

type Props = {
    isCached: boolean;
};

export default async function CurrentTime({ isCached }: Props) {
    const time = await getTime(isCached);
    const timeText = `${time.hour}시 ${time.minute}분 ${time.seconds}초`;
    return <h2>{timeText}</h2>;
}
