import React from 'react';
type ProductImageProps = {
  src: string;
  alt: string;
};

const ProductImage: React.FC<ProductImageProps> = ({ src, alt }) => {
  return (
    <div className="product-item-image">
      <img src={src} alt={alt} />
    </div>
  );
};

export default ProductImage;
