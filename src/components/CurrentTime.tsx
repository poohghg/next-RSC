import { getTime } from '@/utils/getTime';

export default async function CurrentTime() {
    const time = await getTime();
    const timeText = `${time.hour}시 ${time.minute}분 ${time.seconds}초`;

    return <h2>{timeText}</h2>;
}
