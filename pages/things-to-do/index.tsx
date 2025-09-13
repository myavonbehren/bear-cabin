import type { NextPage } from "next";
import Head from "next/head";
import { thingsToDo } from "../../utils/things-to-do";

const ThingsToDo: NextPage = () => {
  return (
    <>
      <Head>
        <title>Things to Do - Bear Cabin</title>
        <meta name="description" content="Discover activities and attractions near Bear Cabin" />
      </Head>
      <main className="mx-auto max-w-[1960px] p-4 md:p-10">
        <div className="text-left">
          <h1 className="text-4xl font-thin text-gray-900 mb-8">Things to Do</h1>
          
          {/* Things to Do Activities */}
          <div className="mb-12">
            <h2 className="text-2xl font-thin text-gray-800 mb-6">Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(thingsToDo["Things to Do"]).map(([activity, data]) => {
                // Function to embed links within text
                const embedLinksInText = (text: string, links?: Record<string, string>) => {
                  if (!links) return text;
                  
                  let processedText = text;
                  Object.entries(links).forEach(([name, url]) => {
                    const regex = new RegExp(`\\b${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'g');
                    processedText = processedText.replace(regex, `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">${name}</a>`);
                  });
                  return processedText;
                };

                return (
                  <div key={activity} className="bg-white shadow-md p-6 rounded-lg">
                    <h3 className="text-xl font-thin text-gray-900 mb-4">{activity}</h3>
                    <p 
                      className="text-gray-600 mb-4 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: embedLinksInText(data.text, 'links' in data ? data.links : undefined)
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Restaurants/Groceries Section */}
          <div>
            <h2 className="text-2xl font-thin text-gray-800 mb-6">Restaurants & Groceries</h2>
            <div className="bg-white shadow-md p-6 rounded-lg">
              {(() => {
                // Function to embed links within text
                const embedLinksInText = (text: string, links?: Record<string, string>) => {
                  if (!links) return text;
                  
                  let processedText = text;
                  Object.entries(links).forEach(([name, url]) => {
                    const regex = new RegExp(`\\b${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'g');
                    processedText = processedText.replace(regex, `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">${name}</a>`);
                  });
                  return processedText;
                };

                return (
                  <p 
                    className="text-gray-600 mb-6 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: embedLinksInText(thingsToDo["Restaurants/Groceries"].text, thingsToDo["Restaurants/Groceries"].links)
                    }}
                  />
                );
              })()}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ThingsToDo;
