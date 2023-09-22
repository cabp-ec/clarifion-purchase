import React  from 'react';

interface SatisfactionBadgeProps {
  text?: string;
}

export const SatisfactionBadge: React.FC<SatisfactionBadgeProps> = ({ text }: SatisfactionBadgeProps) => {
  return <div className="">
    <img src="/img/satisfaction-badge.png" alt="Satisfaction Guarantee" className="float-start me-3" width={ 64 }/>
    { text ? <p className="d-block my-0 fs-07"><small>{ text }</small></p> : null }
  </div>;
};
