import HomeButton from '@/components/HomeButton';

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
        </>
    );
};

export default DetailPage;
