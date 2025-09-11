import type { NextPage } from "next";
import Head from "next/head";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About - Bear Cabin</title>
        <meta name="description" content="Learn about Bear Cabin and our story" />
      </Head>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-thin text-gray-900 mb-8">About Bear Cabin</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              Bear Cabin is a beautiful retreat nestled in nature, offering a perfect escape from the hustle and bustle of everyday life.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our cabin provides a unique opportunity to experience the great outdoors while enjoying modern comforts and amenities.
            </p>
            <p className="text-lg text-gray-600">
              Whether you're looking for adventure, relaxation, or simply a change of scenery, Bear Cabin has something special to offer every visitor.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
