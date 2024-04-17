export default function HalfSquares() {
  return (
    <div className="md:flex md:flex-row-reverse ">
      <div
        className="md:w-1/2 aspect-square bg-cover"
        style={{
          backgroundImage: `url(https://se-starter.contentstackapps.com/images/suites.jpeg)`,
        }}
      ></div>
      <div className="md:w-1/2 flex ">
        <div className="mx-auto md:my-auto max-w-80 my-24">
          <p className="text-2xl text-neutral-600 font-bold tracking-widest">
            CABANAS
          </p>
          <p className="mt-7 text-neutral-600 leading-7 tracking-wider">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>

          <button
            type="button"
            className="mt-10 rounded-md  px-8 py-4 text-md tracking-widest uppercase font-bold text-cyan-600 shadow-sm ring-2 ring-inset ring-cyan-600 hover:text-white hover:bg-cyan-600"
          >
            Button text
          </button>
        </div>
      </div>
    </div>
  );
}
