import React, { ReactNode } from 'react';
import { Link } from '../../atoms/link';
import { LinkItemInterface } from '../../../app/models/link.item/link.item.interface';

interface TopBarProps {
  links: LinkItemInterface[];
}

export const TopBar: React.FC<TopBarProps> = ({ links }: TopBarProps) => {
  const renderItems = (): ReactNode[] => {
    const items: ReactNode[] = [];

    links.forEach(link => {
      items.push(<li className="nav-item">
        <Link item={ link } className="nav-link text-white"/>
      </li>);
    });

    return items;
  };

  return <header className="d-flex justify-content-center py-3 text-bg-dark">
    <ul className="nav nav-pills">
      { renderItems() }
    </ul>
  </header>;
};
