import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const aboutText = 
`In 2021, we purchased the Bear Cabin 4-acre adjacent lot (#16) with the hopes of building a second home for visiting family and friends. In 2023, we cleared the land and began construction in 2024, with completion in early 2025. The secluded Bear Cabin sits at 2,500 feet above sea level with a partial view of the Nantahala National Forest. It sits next to a creek that is sourced from a natural spring that eventually becomes Long Branch Creek and is the primary water source for the water wheel at the main entrance. 
\n
The Cabin has two king bedrooms with their own bathroom and a loft that also serves as a third bedroom with a queen Murphy bed and an office area. The bathrooms feature custom tile showers and heated floors. The cabin is meticulously finished to match the main house and includes custom closets, premium appliances, and furniture. There are two fire pits and a 2-car garage. 
\n
We hope you enjoy staying at the Bear Cabin as much as we enjoyed building it.
`

const AboutDesktop: NextPage = () => {
  return (
    <>
      <Head>
        <title>About - Bear Cabin</title>
        <meta name="description" content="Learn about Bear Cabin and our story" />
      </Head>
      <main className="h-[calc(100vh-56px)] overflow-hidden">
        <div className="grid grid-cols-2 h-full">
          {/* Left Side - Text */}
          <div className="flex flex-col p-8 lg:p-12 overflow-y-auto">
            <h1 className="text-4xl font-thin text-gray-900 mb-6">About</h1>
            <div className="text-gray-600 text-base lg:text-lg leading-relaxed">
              {aboutText.split('\n').map((line, index) => (
                <p key={index} className="mb-4 last:mb-0">
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* Right Side - Full Screen Image */}
          <div className="relative overflow-hidden">
            <Image 
              src="/lot-1.jpg" 
              alt="Lot 1" 
              width={3024} 
              height={4032} 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutDesktop;
