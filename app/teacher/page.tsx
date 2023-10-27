export default function DeveloperHome() {
  return (
    <main className="pl-2 lg:pl-0 lg:pt-12 h-screen flex flex-col lg:items-center bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800">
      <div className="lg:grid lg:grid-cols-3 lg:justify-items-center group transition-all duration-1000 ease-in-out hover:opacity-100">
        <span className="justify-self-end self-end text-white text-5xl font-extrabold opacity-0 -mr-3 pb-1">
          {''}
        </span>
        <h1 className="justify-self-center relative text-white text-7xl font-extrabold">
          <span className="opacity-100 absolute left-0 ">
            .teallen
            <span className="text-4xl font-serif font-semibold">/teacher</span>
          </span>
          <span className="opacity-0 ">Thomas</span>
        </h1>
        <span className="justify-self-start self-end ml-4 text-white text-4xl opacity-0 ">
          {''}
        </span>
      </div>
    </main>
  );
}
