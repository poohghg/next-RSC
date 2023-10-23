import { Inter } from 'next/font/google';
import Link from 'next/link';
import CurrentTime from '@/components/CurrentTime';
import ReloadWrapper from '@/components/ReloadWrapper';
import RevalidateButton from '@/components/RevalidateButton';
import style from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <ReloadWrapper>
            <h1>main</h1>
            <ul>
                <li>
                    <Link href="/seoul">seoul</Link>
                </li>
                <li>
                    <Link href="/newyork">newyork</Link>
                </li>
                <li>
                    <Link href="/london">london</Link>
                </li>
            </ul>
            <RevalidateButton tag="time" />
            <p className={style.description}>no-cache</p>
            <CurrentTime isCached={false} />
            <p>cache</p>
            <CurrentTime isCached={true} />
        </ReloadWrapper>
    );
}
