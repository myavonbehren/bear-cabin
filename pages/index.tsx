import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bear Cabin - Home</title>
        <meta name="description" content="Welcome to Bear Cabin - Your perfect nature retreat" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-thin text-center">Welcome to Bear Cabin</h1>
        <p className="text-center mt-4 text-gray-600">
          Your perfect escape into nature
        </p>
      </div>
    </>
  );
};

export default Home;
