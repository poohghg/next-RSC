import HomeButton from '@/components/HomeButton';
import CurrentTime from '@/components/CurrentTime';

type Props = {
    params: {
        loc: string;
    };
};

const DetailPage = ({ params: { loc } }: Props) => {
    return (
        <>
            <h1>Detail Page</h1>
            <p>loc : {loc}</p>
            <HomeButton />
            <CurrentTime isCached={false} />
        </>
    );
};

export default DetailPage;
