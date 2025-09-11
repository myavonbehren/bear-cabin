import type { NextPage } from "next";
import Head from "next/head";

const ThingsToDo: NextPage = () => {
  return (
    <>
      <Head>
        <title>Things to Do - Bear Cabin</title>
        <meta name="description" content="Discover activities and attractions near Bear Cabin" />
      </Head>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-thin text-gray-900 mb-8">Things to Do</h1>
          <p className="text-lg text-gray-600 mb-8">
            Explore all the amazing activities and attractions in the Bear Cabin area.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-thin mb-3">Hiking</h3>
              <p className="text-gray-600">Explore scenic trails and enjoy the natural beauty of the area.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-thin mb-3">Fishing</h3>
              <p className="text-gray-600">Cast your line in nearby lakes and streams.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-thin mb-3">Wildlife Viewing</h3>
              <p className="text-gray-600">Spot local wildlife in their natural habitat.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ThingsToDo;
