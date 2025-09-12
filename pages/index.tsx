import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bear Cabin - Home</title>
        <meta name="description" content="Welcome to Bear Cabin - Your perfect nature retreat" />
      </Head>

      {/* Desktop Collage */}
      <div className="hidden md:block w-full overflow-hidden" style={{height: 'calc(100vh - 56px)'}}>
        <div className="grid grid-cols-10 grid-rows-3 h-full">
          {/* Main Cabin Image - Large center piece */}
          <div className="row-span-3 col-span-6 col-start-3 relative">
            <Image 
              src="/cabin.jpg" 
              alt="Bear Cabin" 
              fill
              className="object-cover object-center"
            />
          </div>
        

          {/* Top Left Quadrant - Train */}
          <div className="col-span-1 row-span-1 col-start-1 row-start-1 relative">
            <Image 
              src="/train.jpg" 
              alt="Train" 
              fill
              className="object-cover"
            />
          </div>

          {/* Top Left Quadrant - Tubing */}
          <div className="col-span-1 row-span-1 col-start-2 row-start-1 relative">
            <Image 
              src="/tubing.jpg" 
              alt="Tubing" 
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Top Left Quadrant - Rafting */}
          <div className="col-span-2 row-span-1 col-start-1 row-start-2 relative">
            <Image 
              src="/rafting.jpeg" 
              alt="Rafting" 
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom Left - Biltmore */}
          <div className="col-span-2 row-span-1 col-start-1 row-start-3 relative z-10 overlapping-top">
            <Image 
              src="/biltmore.jpg" 
              alt="Biltmore" 
              fill
              className="object-cover"
            />
          </div>

          {/* Top Right - NOC */}
          <div className="col-span-2 row-span-1 col-start-9 row-start-1 relative z-10 overlapping-left">
            <Image 
              src="/noc.jpg" 
              alt="Nantahala Outdoor Center" 
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom Right - Fishing */}
          <div className="col-span-1 row-span-1 relative">
            <Image 
              src="/fishing.jpg" 
              alt="Fishing" 
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom Right - Kayaking */}
          <div className="col-span-1 row-span-1 relative">
            <Image 
              src="/kayaking.jpeg" 
              alt="Kayaking" 
              fill
              className="object-cover"
            />
          </div>


          {/* Bottom Right - Boating */}
          <div className="col-span-2 row-span-1 relative">
            <Image 
              src="/boating.webp" 
              alt="Boating" 
              fill
              className="object-cover object-left"
            />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden block w-full overflow-hidden" style={{height: 'calc(100vh - 56px)'}}>
        <div className="grid grid-cols-4 grid-rows-10 h-full">
          <div className="col-span-4 row-span-5 col-start-1 row-start-1 relative">
            <Image 
              src="/cabin.jpg" 
              alt="Cabin" 
              fill
              className="object-cover"
            />
          </div>

          <div className="col-span-1 row-span-1 col-start-1 row-start-6 relative">
            <Image 
              src="/train.jpg" 
              alt="Train" 
              fill
              className="object-cover"
            />
          </div>

          {/* Top Left Quadrant - Tubing */}
          <div className="col-span-1 row-span-1 col-start-2 row-start-6 relative">
            <Image 
              src="/tubing.jpg" 
              alt="Tubing" 
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Top Left Quadrant - Rafting */}
          <div className="col-span-2 row-span-2 col-start-1 row-start-7 relative">
            <Image 
              src="/rafting.jpeg" 
              alt="Rafting" 
              fill
              className="object-cover"
            />
          </div>
          
          {/* Bottom Left - Biltmore */}
          <div className="col-span-2 row-span-2 col-start-1 row-start-9 relative z-10 overlapping-top">
            <Image 
              src="/biltmore.jpg" 
              alt="Biltmore" 
              fill
              className="object-cover"
            />
          </div>

          {/* Top Right - NOC */}
          <div className="col-span-2 row-span-1 col-start-3 row-start-6 relative relative z-10 overlapping-left">
            <Image 
              src="/noc.jpg" 
              alt="Nantahala Outdoor Center" 
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom Right - Fishing */}
          <div className="col-span-1 row-span-2 col-start-3 row-start-7 relative">
            <Image 
              src="/fishing.jpg" 
              alt="Fishing" 
              fill
              className="object-cover"
            />
          </div>
          

          {/* Bottom Right - Kayaking */}
          <div className="col-span-1 row-span-2 col-start-4 row-start-7 relative">
            <Image 
              src="/kayaking.jpeg" 
              alt="Kayaking" 
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom Right - Boating */}
          <div className="col-span-2 row-span-2 col-start-3 row-start-9 relative">
            <Image 
              src="/boating.webp" 
              alt="Boating" 
              fill
              className="object-cover object-left"
            />
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;
