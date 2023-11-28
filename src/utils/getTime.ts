import { cookies } from 'next/headers';

export type Response = {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    seconds: number;
    milliSeconds: number;
    dateTime: string;
    date: string;
    time: string;
    timeZone: string;
    dayOfWeek: string;
    dstActive: boolean;
};

export const getTime = async (
    isCached: boolean = true,
    timeZone: string = 'UTC'
): Promise<Response> => {
    const res = await fetch(
        `https://timeapi.io/api/Time/current/zone?timeZone=${timeZone}`,
        {
            next: { tags: [`time - ${isCached}`] },
            cache: isCached ? undefined : 'no-cache',
        }
    );
    if (!res.ok) throw new Error('시간 정보를 가져올 수 없습니다.');
    return res.json();
};
