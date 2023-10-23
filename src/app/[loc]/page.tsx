import { string } from 'prop-types';
import { useRouter, useSearchParams } from 'next/navigation';
import HomeButton from '@/components/HomeButton';

type Props = {
    params: {
        loc: string;
    };
};

const DetailPage = ({ params: { loc } }: Props) => {
    // const router = useRouter();
    // const searchParams = useSearchParams();
    // const isReload = searchParams.get('isReload');
    return (
        <>
            <h1>Detail Page</h1>
            <p>loc : {loc}</p>
            <HomeButton />
        </>
    );
};

export default DetailPage;
