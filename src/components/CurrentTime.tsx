import { getTime } from '@/utils/getTime';
import { cookies } from 'next/headers';
import getP from '@/utils/getP';

type Props = {
    isCached: boolean;
};

export default async function CurrentTime({ isCached }: Props) {
    const time = await getTime(isCached);
    // const p = await getP();
    const timeText = `${time.hour}시 ${time.minute}분 ${time.seconds}초`;
    return (
        <div>
            <h2>{timeText}</h2>
            {/*<p>{JSON.stringify(p)}</p>*/}
        </div>
    );
}
