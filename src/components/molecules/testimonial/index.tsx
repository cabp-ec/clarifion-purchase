import React, { ReactNode } from 'react';
import { StarRanking } from '../../atoms/star.ranking';
import { TestimonialInterface } from '../../../app/models/testimonial/testimonial.interface';

interface TestimonialProps {
  testimonial: TestimonialInterface;
}

export const Testimonial: React.FC<TestimonialProps> = ({ testimonial }: TestimonialProps) => {
  const renderBadge = (): ReactNode => {
    if (!testimonial.verifiedCustomer) {
      return null;
    }

    return <span className="text-success text-tiny">
      <i className="bi bi-patch-check-fill px-1"/>Verified Customer
    </span>;
  };

  return <div className="person-testimonial d-flex flex-column bg-white mt-3 p-3 border-round-10">
    <div className="mb-1">
      <img src={ testimonial.author.thumbnail } alt="" className="img-fluid float-start thumbnail-circle me-2"/>
      <StarRanking value={ testimonial.ranking }/>
      <label>{ testimonial.author.name }{ renderBadge() }</label>
    </div>
    <p className="m-0 p-0 mt-2">&#8220;{ testimonial.text }&#8221;</p>
  </div>;
};
