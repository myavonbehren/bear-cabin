import type { NextPage } from 'next';
import Head from 'next/head';

const Videos: NextPage = () => {
  return (
    <>
      <Head>
        <title>Videos - Bear Cabin</title>
        <meta name="description" content="Watch videos from Bear Cabin" />
      </Head>
      <main className="mx-auto max-w-[1960px] p-4 md:p-10">
        <div className="text-left">
          <h1 className="text-4xl font-thin text-gray-900 mb-8">Videos</h1>
          <div className="bg-gray-200 p-8">
            <p className="text-gray-500">Video content coming soon...</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Videos;
