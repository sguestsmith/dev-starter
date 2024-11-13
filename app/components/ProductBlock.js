import React from 'react';
import PropTypes from 'prop-types';

// Define a functional component named ProductBlock
const ProductBlock = ({ content }) => {
  // Log the content prop to the console for debugging
  console.log('ProductBlock content:', content);

  // Check if content is valid and is an array, otherwise log a warning and return null
  if (!content || !Array.isArray(content)) {
    console.warn('ProductBlock: Invalid or missing content');
    return null;
  }

  // Render the product block
  return (
    <div className="product-block container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.map((product) => {
          // Check if the product has a URL, otherwise log a warning and return null
          if (!product?.url) {
            console.warn('ProductBlock: Product missing required URL');
            return null;
          }

          // Render each product card
          return (
            <div 
              key={product.url} 
              className="product-card border rounded-lg overflow-hidden shadow-lg"
            >
              {/* Conditionally render the product image if it exists */}
              {product.image?.url && (
                <img 
                  src={product.image.url} 
                  alt={product.image.filename || product.title || 'Product image'} 
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                {/* Render the product title */}
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                {/* Conditionally render the product description if it exists */}
                {product.description && (
                  <p className="text-gray-600 mb-4">{product.description}</p>
                )}
                {/* Render a link to view the product */}
                <a 
                  href={product.url} 
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Product
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Define PropTypes for the ProductBlock component to enforce type checking
ProductBlock.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      image: PropTypes.shape({
        url: PropTypes.string.isRequired,
        filename: PropTypes.string
      })
    })
  )
};

// Export the ProductBlock component as the default export
export default ProductBlock; 