export default function BlogHome() {
  return (
    <main className="pl-2 lg:pl-0 pt-12 h-screen flex flex-col lg:items-center bg-gradient-to-r from-green-600 via-green-700 to-green-800">
      <div className="flex lg:grid lg:grid-cols-3 lg:justify-items-center group transition-all duration-1000 ease-in-out hover:opacity-100">
        <span className="justify-self-end self-end text-white text-4xl font-extrabold opacity-100 pr-1 pb-1">
          blog
        </span>
        <h1 className="justify-self-center relative text-white text-7xl font-extrabold">
          <span className="opacity-100 absolute left-0 ">.teallen</span>
          <span className="opacity-0 ">Thomas</span>
        </h1>
        {/* <h1>
          <span className="absolute">teallen</span>
          <span className="absolute">Tom</span>
        </h1> */}
        <span className="justify-self-start self-end ml-4 text-white text-4xl opacity-0 ">
          {''}
        </span>
      </div>
    </main>
  );
}
