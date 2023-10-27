export default function BlogHome() {
  return (
    <main className="pt-12 h-screen flex flex-col items-center bg-gradient-to-r from-green-400 via-green-500 to-green-600">
      <div className="grid grid-cols-3 justify-items-center group transition-all duration-1000 ease-in-out hover:opacity-100">
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
          and I'm a :
        </span>
      </div>
    </main>
  );
}
