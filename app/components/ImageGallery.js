import PropTypes from 'prop-types';

export default function ImageGallery({ content }) {
  return (
    <div className="max-w-7xl mx-auto mt-8 mb-8 px-8">
      <div className="flex flex-col grid grid-cols-2 lg:grid-cols-5 gap-8 auto-rows-fr">

        {/* ----- ITTERATING OVER ARRAY OF IMAGES COMING FROM CONTENTSTACK ----- */}
        {content.gallery_item.map((item, index) => (
          <div key={index} className="relative">
            <a href={item.page.length > 0 ? item.page[0].url : "#"}>
            <div className="bg-cover bg-bottomflex items-center justify-center h-[220px] w-[220px]" {...item?.$?.image}>
              <img src={item.image.url} className="object-cover" />
            </div>
            </a>
            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900" {...item?.$?.header}>
              {item.header}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Define PropTypes for the ImageGallery component to enforce type checking
ImageGallery.propTypes = {
  content: PropTypes.shape({
    gallery_item: PropTypes.arrayOf(
      PropTypes.shape({
        page: PropTypes.arrayOf(
          PropTypes.shape({
            url: PropTypes.string.isRequired,
          })
        ),
        image: PropTypes.shape({
          url: PropTypes.string.isRequired,
        }).isRequired,
        header: PropTypes.string.isRequired,
        $: PropTypes.shape({
          image: PropTypes.object,
          header: PropTypes.object,
        }),
      })
    ).isRequired,
  }).isRequired,
};