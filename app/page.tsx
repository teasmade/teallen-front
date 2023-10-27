export default function Home() {
  return (
    <main className="pt-12 h-screen flex flex-col items-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
      <div className="w-full flex-grow flex flex-col group">
        <section className="grid grid-cols-3 justify-items-center transition-all duration-1000 ease-in-out hover:opacity-100">
          <span className="justify-self-end text-4xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
            {"hello I'm"}
          </span>

          <h1 className="justify-self-center relative text-7xl font-extrabold text-white">
            <span className="absolute left-0 opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out">
              {'.teallen'}
            </span>

            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              Thomas
            </span>
          </h1>

          <span className="justify-self-start self-end text-4xl font-bold ml-1 pb-1 text-white opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
            {"and I'm a :"}
          </span>
        </section>

        <nav className="w-full flex-grow grid grid-cols-18 justify-items-center items-center text-white font-bold">
          <div className="col-span-9 text-6xl relative">
            <span className="pl-56 absolute opacity-100 group-hover:opacity-0 transition-all duration-500 ease-in-out">
              {'</>'}
            </span>
            <span className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out text-4xl pr-4 font-mono">
              {'software developer'}
            </span>
          </div>

          <div className="col-span-9 text-6xl relative">
            <span className="absolute opacity-100 group-hover:opacity-0 transition-all duration-500 ease-in-out">
              <span className="text-5xl mx-1">en</span>
              <span>/</span>
              <span className="text-5xl mx-1">fr</span>
            </span>
            <span className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out text-4xl font-serif font-semibold">
              {'language teacher'}
            </span>
          </div>
        </nav>
      </div>

      <div className="w-full flex-grow flex flex-col">
        <nav className="w-full flex-grow grid grid-cols-18 justify-items-center items-center text-white font-bold">
          <div className="col-span-4 text-2xl self-end pb-16">blog 📜</div>
          <div className="col-span-3"></div>
          <div className="col-span-4 text-3xl self-end pb-16">contact 📡</div>
          <div className="col-span-3"></div>
          <div className="col-span-4 text-2xl self-end pb-16 -ml-1">
            hiring managers 👋
          </div>
        </nav>
      </div>
    </main>
  );
}
