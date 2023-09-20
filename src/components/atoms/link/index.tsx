import React, { ReactNode } from 'react';
import { LinkItemInterface } from '../../../app/models/link.item/link.item.interface';

interface LinkProps {
  item: LinkItemInterface;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ item, className }: LinkProps) => {
  const renderIcon = (): ReactNode => {
    if (!item.icon) {
      return null;
    }

    return <i className={ `${ item.icon } me-1` }/>;
  };

  return <a
    href={ item.url }
    target={ item.blank ? '_blank' : '_self' }
    className={ className }
  >
    { renderIcon() }{ item.label }
  </a>;
};
