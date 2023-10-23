'use client';
import { useRouter } from 'next/navigation';

const HomeButton = () => {
    const router = useRouter();
    const handleToHome = () => {
        router.push('/');
    };

    return (
        <div>
            <button onClick={handleToHome}>Home 으로</button>
        </div>
    );
};

export default HomeButton;
