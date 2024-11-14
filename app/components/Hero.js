export default function Hero({ content }) {
  return (
    <div className="bg-black">
      {/* Container for the hero section with a black background */}
      <div className="relative isolate overflow-hidden">
        
        {/* ----- BACKGROUND IMAGE FROM CONTENTSTACK ----- */}
        {/* Background image that covers the entire hero section */}
        <img src={content?.background_image?.url} className="absolute inset-0 -z-10 h-full w-full object-cover object-center"/>
        
        {/* Main content container with responsive padding */}
        <div className="mr-auto max-w-3xl py-32 sm:py-48 lg:py-56 pl-32">
          <div className="text-left">

            {/* ----- LIMITED TIME ONLY BANNER ----- */}
            <div className="border border-black rounded-full px-6 py-1 mb-5 inline-block">
              <p className="text-black text-lg font-bold tracking-widest text-transform: uppercase">Limited Time Only</p>
            </div>
            {/* ----- HEADER & TEXT FROM CONTENTSTACK ----- */}
            {/* Title of the hero section */}
            <h5 className="text-5xl font-black tracking-widest text-black leading-none" {...content?.$?.title}>
              {content.title}
            </h5>
            
            {/* Description text of the hero section */}
            <p className="mt-8 font-normal text-lg leading-6 text-left text-black tracking-wide" {...content?.$?.text}>
              {content.text}
            </p>

            {/* Call-to-action button */}
            <div className="mt-10 flex items-center justify-start gap-x-6">
              <button
                type="button"
                className="rounded-md px-8 py-4 text-md tracking-widest uppercase font-extrabold shadow-sm ring-1 ring-inset text-white bg-black hover:text-white hover:bg-gray-700 hover:ring-0"
                {...content?.cta.$?.title}
              >
                {content.cta.title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
