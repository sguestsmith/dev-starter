import PropTypes from 'prop-types';

// Define the ImageRow component
export default function ImageRow({ content }) {
  return (
    // Container for the entire row of images
    <div className="max-w-7xl mx-auto mt-8 mb-8 px-8">
      {/* Grid layout for images, limited to 2 columns on medium screens and above */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Iterate over the array of images, limited to 2 items */}
        {content.row_items.slice(0, 2).map((item) => (
          // Container for each image item
          <div key={item.image.url} className="relative flex flex-col">
            {/* Image container with background properties */}
            <div 
              className="bg-cover bg-bottom aspect-h-1 aspect-w-1 flex items-center justify-center" 
              {...item?.$?.image}
            >
              {/* Image element with URL and alt text */}
              <img 
                src={item.image.url} 
                alt={item.image_alt || item.header} 
                className="object-cover w-full h-full" 
              />
            </div>
            {/* Header for the image item */}
            <h3 
              className="mt-4 text-xl font-semibold text-gray-900" 
              {...item?.$?.header}
            >
              {item.header}
            </h3>
            {/* Button link for the image item */}
            <a
              href={item.button_link || '#'}
              className="mt-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
              {...item?.$?.button_text}
            >
              {item.button_text}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

// Define PropTypes for the ImageRow component to enforce type checking
ImageRow.propTypes = {
  content: PropTypes.shape({
    row_items: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.shape({
          url: PropTypes.string.isRequired,
        }).isRequired,
        image_alt: PropTypes.string,
        header: PropTypes.string.isRequired,
        button_text: PropTypes.string.isRequired,
        button_link: PropTypes.string,
        $: PropTypes.shape({
          image: PropTypes.object,
          header: PropTypes.object,
          button_text: PropTypes.object,
        }),
      })
    ).isRequired,
  }).isRequired,
}; 