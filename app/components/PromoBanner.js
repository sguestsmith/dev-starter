export default function PromoBanner({ content }) {
  return (
    <div className=" m-8 lg:m-23">
      {/* Container for the hero section with a black background */}
      <div className={"flex " +
        (content?.text_align === "Left"
          ? "place-content-start"
          : (content?.text_align === "Right"
              ? "place-content-end"
              : "place-content-center"
            )
        )}>
        
        {/* ----- BACKGROUND IMAGE FROM CONTENTSTACK ----- */}
        {/* Background image that covers the entire hero section */}
        <img src={content?.background_image?.url} className="mx-auto"/>
        
        {/* Main content container with responsive padding */}
        <div className=" absolute m-auto m-4 md:my-8 xl:my-12 2xl:my-16 3xl:my-24 max-w-sm md:max-w-md xl:max-w-xl">
          <div className={(content?.text_align === "Left"
          ? "text-left"
          : (content?.text_align === "Right"
              ? "text-right"
              : "text-center"
            )
          )}>

            {/* ----- HEADER & TEXT FROM CONTENTSTACK ----- */}
            {/* Title of the hero section */}
            <h5 className={"text-lg lg:text-4xl xl:text-3xl tracking-widest font-black leading-none text-transform: capitalize pt-9 " +
              (content?.font_color === "Black"
                ? "text-black"
                : "text-white")} {...content?.$?.title}>
              {content.title}
            </h5>
            
            {/* Description text of the hero section */}
            <p className={"mt-2 xl:mt-4 font-light text-sm lg:text-sm xl:text-1xl leading-6 text-center tracking-wide " +
              (content?.font_color === "Black"
                ? "text-black"
                : "text-white")} {...content?.$?.text}>
              {content.text}
            </p>

            {/* Call-to-action button */}
            <div className={"mt-2 xl:mt-4 flex items-center gap-x-6 " +
              (content?.text_align === "Left"
                ? "justify-start"
                : (content?.text_align === "Right"
                    ? "justify-end"
                    : "justify-center"
                  )
                )}>
              <button
                type="button"
                className="rounded-md px-8 py-4 text-md tracking-widest uppercase font-extrabold shadow-sm text-black bg-white hover:text-white hover:bg-gray-700"
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
