import Link from 'next/link';

export default function Home() {
  return (
    <main className="pt-12 h-screen flex flex-col items-center bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
      <div className="w-full flex-grow flex flex-col group">
        <section className="grid grid-rows-4 lg:grid-rows-none lg:grid-cols-7 justify-items-center pl-2 lg:pl-0 transition-all duration-600 ease-in-out hover:opacity-100">
          <span className="justify-self-start text-2xl lg:text-4xl font-bold text-white lg:opacity-0 group-hover:opacity-100 duration-1000 ease-in-out 2xl:pl-8 lg:col-start-2 2xl:col-start-3">
            {"hello I'm"}
          </span>

          <h1 className="justify-self-start lg:justify-self-center relative text-5xl lg:text-7xl lg:col-start-4 font-extrabold text-white">
            <span className="absolute left-4 opacity-0 lg:opacity-100 group-hover:opacity-0 duration-300 ease-out">
              {'.teallen'}
            </span>

            <span className="justify-self-start lg:opacity-0 group-hover:opacity-100 duration-300 ease-out">
              {'Thomas'}
            </span>
          </h1>

          <span className="justify-self-start self-end 2xl:justify-self-end text-2xl lg:text-4xl font-bold 2xl:-ml-5 pb-1 text-white lg:opacity-0 group-hover:opacity-100 duration-1000 ease-in-out lg:col-start-6 2xl:col-start-5 lg:col-span-2 2xl:col-auto">
            {"and I'm a :"}
          </span>
        </section>

        <nav className="w-full flex-grow flex flex-col lg:grid lg:grid-cols-home justify-between lg:justify-items-center lg:mt-36 items-start text-white font-bold transition-all duration-700 ease-in-out">
          <div className="hidden lg:block py-2 w-full text-6xl bg-blue-700 duration-700 text-center lg:opacity-0 group-hover:opacity-100">
            <span className="opacity-0">*</span>
          </div>
          <div className="text-4xl lg:text-6xl self-start lg:self-auto lg:relative pl-2 lg:px-6 lg:py-2 group/dev lg:group-hover:bg-blue-700 duration-700">
            <div className="lg:flex lg:flex-row-reverse">
              <span className="opacity-100 lg:group-hover:opacity-100 duration-1000 ease-in-out lg:group-hover:bg-blue-600 lg:px-4 rounded">
                <span className="lg:relative lg:bottom-[2px]">{'</>'}</span>
              </span>
              <span className="lg:opacity-0 group-hover:opacity-100 duration-1000 ease-in-out lg:text-3xl xl:text-4xl pr-4 font-mono pl-6 lg:pl-0">
                {'software developer'}
              </span>
            </div>
            <div className="lg:absolute mt-4 lg:mt-0 lg:left-0 pr-2 lg:px-8 lg:py-4 lg:rounded text-base lg:opacity-0 lg:group-hover/dev:opacity-100 lg:group-hover/dev:bg-blue-700 duration-700 ease-in-out font-mono text-justify">
              <div className="mb-4">
                {
                  "I'm a devloper with a passion for building things that live on the web. I enjoy working with JavaScript and have a soft spot for React. I also have experience working with Node.js, Express, and MongoDB. Copilot ftw cos it wrote this. I can :"
                }
              </div>
              <div className="flex flex-row justify-between">
                <div className="grow grid grid-rows-2 grid-cols-3 lg:grid-rows-3 lg:grid-cols-2 place-items-stretch">
                  <div>JS Frameworks</div>
                  <div>Databases</div>
                  <div>API Technology</div>
                  <div>Server Admin</div>
                  <div>Research</div>
                  <div>Learning</div>
                </div>
                <div className="flex flex-row items-center pr-4">
                  <span className="bg-blue-600 p-4 rounded">. . .</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block py-2 w-full text-6xl bg-blue-700 text-center lg:opacity-0 group-hover:opacity-100 duration-700">
            <span className="opacity-0">*</span>
          </div>
          <div className="text-4xl lg:text-6xl self-end lg:self-auto lg:relative pr-2 lg:px-6 lg:py-2 pb-16 lg:block group/teach lg:group-hover:bg-blue-700 duration-700">
            <div className="lg:flex lg:flex-row">
              <span className="opacity-100 lg:group-hover:opacity-100 transition-all duration-1000 ease-in-out lg:group-hover:bg-blue-600 lg:px-4 rounded">
                <span className="lg:relative lg:bottom-[2px]">
                  <span className="text-4xl lg:text-5xl mx-1">en</span>
                  <span>/</span>
                  <span className="text-4xl lg:text-5xl mx-1">fr</span>
                </span>
              </span>
              <span className="lg:opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out lg:text-3xl xl:text-4xl text-4xl font-serif font-semibold pl-6 lg:pl-0 lg:ml-4">
                {'language teacher'}
              </span>
            </div>
            <div className="lg:absolute mt-4 lg:mt-0 lg:left-0 pr-2 lg:px-8 lg:py-4 lg:rounded text-base lg:opacity-0 lg:group-hover/teach:opacity-100 lg:group-hover/teach:bg-blue-700 duration-700 ease-in-out font-serif font-medium text-justify">
              <div className="mb-4">
                {
                  "I'm a devloper with a passion for building things that live on the web. I enjoy working with JavaScript and have a soft spot for React. I also have experience working with Node.js, Express, and MongoDB. Copilot ftw cos it wrote this. I can :"
                }
              </div>
              <div className="flex flex-row justify-between">
                <div className="grow grid grid-rows-2 grid-cols-3 lg:grid-rows-3 lg:grid-cols-2 place-items-stretch">
                  <div>JS Frameworks</div>
                  <div>Databases</div>
                  <div>API Technology</div>
                  <div>Server Admin</div>
                  <div>Research</div>
                  <div>Learning</div>
                </div>
                <div className="flex flex-row items-center pr-4">
                  <span className="bg-blue-600 p-4 rounded">. . .</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block py-2 w-full text-6xl bg-blue-700 duration-700 text-center lg:opacity-0 group-hover:opacity-100">
            <span className="opacity-0">*</span>
          </div>
        </nav>
      </div>

      <div className="w-full lg:flex-grow flex flex-col">
        <nav className="w-full flex-grow flex flex-col lg:grid lg:grid-cols-18 pr-2 lg:pr-0 items-end justify-items-end lg:justify-items-center lg:items-center text-white font-bold">
          <div className="lg:col-start-1 lg:col-end-5 order-3 lg:order-none text-xl lg:self-end pb-4 lg:pb-16">
            <Link
              className=""
              href="/blog"
            >
              <span className="underline lg:no-underline lg:hover:underline">
                blog
              </span>
              <span> 📜</span>
            </Link>
          </div>
          <div className="lg:col-start-8 lg:col-end-12 text-xl lg:text-3xl lg:self-end pb-4 lg:pb-16">
            <Link
              className=""
              href="/contact"
            >
              <span className="underline lg:no-underline lg:hover:underline">
                contact
              </span>
              <span> 📡</span>
            </Link>
          </div>
          <div className="lg:col-start-15 lg:col-end-18 text-xl lg:self-end pb-4 lg:pb-16 -ml-5">
            <Link
              className=""
              href="/essentials"
            >
              <span className="underline lg:no-underline lg:hover:underline">
                hiring managers
              </span>
              <span> 👋</span>
            </Link>
          </div>
        </nav>
      </div>
    </main>
  );
}
