export default function FullWidthImage() {
  return (
    <div className="relative bg-gray-800 px-6 py-24 sm:px-12 sm:py-24 lg:px-16">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/infinity_pool.jpeg"
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gray-900 bg-opacity-50"
      />
      <div className="relative mx-auto flex max-w-2xl flex-col items-center">
        <h2 className="text-3xl font-bold tracking-tight uppercase tracking-widest text-white sm:text-4xl text-center">
          Long-term thinking
        </h2>
        <p className="mt-10 text-lg text-white">
          This is the place West Coasters come to feel West Coast, to be
          surrounded by the things that define us – things we carry deep inside.
          Wilderness runs in our veins. In peak season you can book your West
          Coast excursions right on-site. Go Whale Watching or book a Fishing
          Charter to experience our wild coast. Wild Renfrew is yours to
          discover.
        </p>
        <button
          type="button"
          className="mt-10 rounded-md  px-8 py-4 text-md tracking-widest uppercase font-bold text-white shadow-sm ring-2 ring-inset ring-gray-300 hover:text-gray-700 hover:bg-gray-50"
        >
          Button text
        </button>
      </div>
    </div>
  );
}
