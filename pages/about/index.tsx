import type { NextPage } from "next";
import Head from "next/head";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About - Bear Cabin</title>
        <meta name="description" content="Learn about Bear Cabin and our story" />
      </Head>
      <main className="mx-auto max-w-[1960px] p-4 md:p-10">
        <div className="text-left">
          <h1 className="text-4xl font-thin text-gray-900 mb-8">About</h1>
          <p className="text-gray-600">
            About content coming soon...
          </p>
        </div>
      </main>
    </>
  );
};

export default About;
