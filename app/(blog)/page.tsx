import Image from 'next/image';

export default async function Page() {
  // const [settings, heroPost] = await Promise.all([
  //   sanityFetch({
  //     query: settingsQuery,
  //   }),
  //   sanityFetch({ query: heroQuery }),
  // ]);

  return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="mx-auto flex flex-col items-center text-center px-4 py-8" style={{ maxWidth: 600 }}>
          {/* Avatar - First Row */}
          <div className="avatar mb-6">
            <Image src="/avatars/avatar02.png" alt="" width="150" height="150" />
          </div>
          <div className="flex flex-col items-center gap-6">
            <div>
              <div className="text-3xl font-bold">Hi, <h1 className="inline">I'm Peter Foeng</h1></div>
            </div>
            <p className="text-sm">
              I'm a Melbourne-based front-end web developer, juggling freelance projects alongside my full-time role. My passion lies in working with local Australian businesses to build a strong online presence.
            </p>
            <p className="text-sm">
              With over a decade of experience, I’ve crafted dynamic web experiences for some of Melbourne's leading digital agencies. Now, I’m pushing the boundaries of front-end development at carsales, blending innovation with expertise.
            </p>
            <p className="text-sm">
              If you need to contact me, please send me an email at <a href="mailto:peter@peterfoeng.com">peter@peterfoeng.com</a>
            </p>
          </div>
         
        </div>
      </div>
  );
}
