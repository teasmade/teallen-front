import HomeCollapse from "@/components/HomeCollapse";

export default function Home() {
  return (
    <main className="pt-12 h-screen flex flex-col items-center bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
      <div className="w-full flex-grow flex flex-col group">
        <section className="grid grid-rows-4 lg:grid-cols-3 justify-items-center pl-2 lg:pl-0 transition-all duration-1000 ease-in-out hover:opacity-100">
          <span className="justify-self-start lg:justify-self-end text-2xl lg:text-4xl font-bold text-white lg:opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out lg:-mr-12">
            {"hello I'm"}
          </span>

          <h1 className="justify-self-start lg:justify-self-center relative text-5xl lg:text-7xl font-extrabold text-white">
            <span className="absolute left-0 opacity-0 lg:opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out">
              {'.teallen'}
            </span>

            <span className="justify-self-start lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              {'Thomas'}
            </span>
          </h1>

          <span className="justify-self-start self-end text-2xl lg:text-4xl font-bold lg:-ml-5 pb-1 text-white lg:opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
            {"and I'm a :"}
          </span>
        </section>

        <nav className="w-full flex-grow flex flex-col lg:grid lg:grid-cols-18 justify-between lg:justify-items-center items-start text-white font-bold">
          <div className="col-span-9 text-4xl lg:text-6xl self-start lg:self-auto lg:relative pl-2 lg:pl-0 group/dev">
            <span className="lg:pl-56 lg:absolute opacity-100 lg:group-hover:opacity-0 transition-all duration-500 ease-in-out">
              {'</>'}
            </span>
            <span className="lg:opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out text-4xl pr-4 font-mono pl-6 lg:pl-0">
              {'software developer...'}
            </span>
            <div className="lg:absolute mt-4 text-base lg:opacity-0 lg:group-hover/dev:opacity-100 transition-all duration-700 ease-in-out font-mono">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
                quae iusto, aliquid ea omnis reiciendis non earum nemo ipsum nostrum
                quod, adipisci officiis veritatis ducimus porro maiores tempora
                perferendis a? Commodi, atque aspernatur quae dolorum expedita fugiat
                non et sit alias?
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
                quae iusto, aliquid ea omnis reiciendis non earum nemo ipsum nostrum
                quod, adipisci officiis veritatis ducimus porro maiores tempora
                perferendis a? Commodi, atque aspernatur quae dolorum expedita fugiat
                non et sit alias?
              </p>
            </div>
          </div>


          <div className="col-span-9 text-4xl lg:text-6xl self-end lg:self-auto lg:relative pr-2 lg:pr-0 pb-16 lg:pb-0 lg:block group/teach">
            <span className="lg:absolute opacity-100 lg:group-hover:opacity-0 transition-all duration-500 ease-in-out">
              <span className="text-4xl lg:text-5xl mx-1">en</span>
              <span>/</span>
              <span className="text-4xl lg:text-5xl mx-1">fr</span>
            </span>
            <span className="lg:opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out text-4xl font-serif font-semibold pl-6 lg:pl-0">
              {'language teacher ...'}
            </span>
            <div className="lg:absolute mt-4 text-base lg:opacity-0 lg:group-hover/teach:opacity-100 transition-all duration-700 ease-in-out font-serif font-medium">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
                quae iusto, aliquid ea omnis reiciendis non earum nemo ipsum nostrum
                quod, adipisci officiis veritatis ducimus porro maiores tempora
                perferendis a? Commodi, atque aspernatur quae dolorum expedita fugiat
                non et sit alias?
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
                quae iusto, aliquid ea omnis reiciendis non earum nemo ipsum nostrum
                quod, adipisci officiis veritatis ducimus porro maiores tempora
                perferendis a? Commodi, atque aspernatur quae dolorum expedita fugiat
                non et sit alias?
              </p>
            </div>
          </div>
        </nav>
      </div>

      <div className="w-full lg:flex-grow flex flex-col">
        <nav className="w-full flex-grow flex flex-col lg:grid lg:grid-cols-18 pr-2 lg:pr-0 items-end justify-items-end lg:justify-items-center lg:items-center text-white font-bold">
          <div className="lg:col-start-1 lg:col-end-5 order-3 lg:order-none text-xl lg:self-end pb-4 lg:pb-16">
            blog 📜
          </div>
          <div className="lg:col-start-8 lg:col-end-12 text-xl lg:text-3xl lg:self-end pb-4 lg:pb-16">
            contact 📡
          </div>
          <div className="lg:col-start-15 lg:col-end-18 text-xl lg:self-end pb-4 lg:pb-16 -ml-5">
            hiring managers 👋
          </div>
        </nav>
      </div>
    </main>
  );
}
