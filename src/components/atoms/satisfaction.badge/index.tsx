import React  from 'react';

interface SatisfactionBadgeProps {
  text?: string;
}

export const SatisfactionBadge: React.FC<SatisfactionBadgeProps> = ({ text }: SatisfactionBadgeProps) => {
  return <div className="">
    <img src="/img/satisfaction-badge.png" alt="Satisfaction Guarantee" className="float-start me-3" width={ 64 }/>
    { text ? <p className="my-0 ms-5"><small>{ text }</small></p> : null }
  </div>;
};
