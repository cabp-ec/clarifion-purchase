import React, { ReactNode } from 'react';
import { ProductInterface } from '../../../app/models/product/product.interface';
import { StarRanking } from '../../atoms/star.ranking';

interface ProductRowProps {
  product: ProductInterface;
  overriddenPrice?: number;
}

export const ProductRow: React.FC<ProductRowProps> = ({ product, overriddenPrice }: ProductRowProps) => {
  const renderPrice = (): ReactNode => {
    if (!overriddenPrice) {
      return null;
    }

    return <div className="d-inline-block float-end">
      <span className="text-strike text-secondary-emphasis">$100</span>
      <span className="text-primary ps-2">${ overriddenPrice }</span>
    </div>;
  };

  return <div className="mt-3 border-round-10">
    <div className="float-start d-flex justify-content-center align-items-center bg-primary border-round-10 square-100 mt-1 me-3">
      <img src={ product.images.small } alt={ product.name } className="img-fluid"/>
    </div>
    <div className="ms-5 ps-5">
      { product.name }{ renderPrice() }
      <StarRanking value={ product.ranking } className=""/>
      <i className="bi bi-record2-fill me-1"/><small>{ product.stock } left in stock</small>
      <p className="m-0 p-0 mt-1"><small>{ product.description.short }</small></p>
    </div>
  </div>;
};
