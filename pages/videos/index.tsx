import type { NextPage } from 'next';
import Head from 'next/head';

const Videos: NextPage = () => {
  return (
    <>
      <Head>
        <title>Videos - Bear Cabin</title>
        <meta name="description" content="Watch videos from Bear Cabin" />
      </Head>
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-thin text-gray-900 mb-8">Videos</h1>
          <p className="text-lg text-gray-600 mb-8">
            Watch our collection of videos showcasing Bear Cabin and the surrounding area.
          </p>
          <div className="bg-gray-100 rounded-lg p-8">
            <p className="text-gray-500">Video content coming soon...</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Videos;
