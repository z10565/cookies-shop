import React from 'react';
import ProductImage from "../../UI/ProductImage/ProductImage";
import AppButton from '../AppButton/AppButton';

type ProductItemProps = {
  src: string;
  title: string;
  text: string;
  price: string;
  weight: string;
  basePrice: number;
};

const ProductItem: React.FC<ProductItemProps> = ({ src, title, text, price, weight, basePrice }) => {
  return (
    <div className="products-item">
      <ProductImage src={src} alt={title} />
      <div className="products-item-details">
        <div className="products-item-title">{title}</div>
        <div className="products-item-text">{text}</div>
        <div className="products-item-extra">
          <div className="products-item-info">
            <div className="products-item-price" data-base-price={basePrice}>
              {price}
            </div>
            <div className="products-item-weight">{weight}</div>
          </div>
          <AppButton className="button violet-button" buttonText="Заказать" buttonType="button"/>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
