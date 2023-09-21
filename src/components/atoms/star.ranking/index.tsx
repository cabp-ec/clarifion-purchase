import React, { ReactNode } from 'react';

interface StarRankingProps {
  value: number;
  className?: string;
}

export const StarRanking: React.FC<StarRankingProps> = ({ value, className }: StarRankingProps) => {
  const renderItems = (): ReactNode[] => {
    const items: ReactNode[] = [];

    for (let i = 1; i <= 5; i++) {
      const style = value >= i ? '-fill' : '';
      items.push(<i key={ `icon-star-${ i }` } className={ `bi bi-star${ style } text-warning` }/>);
    }

    return items;
  };

  return <div className={ `star-ranking ${ className || '' }` }>
    { renderItems() }
  </div>;
};
