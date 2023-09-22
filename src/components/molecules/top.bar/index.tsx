import React, { ReactNode } from 'react';
import { Link } from '../../atoms/link';
import { LinkItemInterface } from '../../../app/models/link.item/link.item.interface';

interface TopBarProps {
  links: LinkItemInterface[];
}

export const TopBar: React.FC<TopBarProps> = ({ links }: TopBarProps) => {
  const renderItems = (forMobile: boolean = false): ReactNode[] => {
    const items: ReactNode[] = [];

    if (forMobile) {
      links.forEach((link, index) => {
        items.push(<div key={ `link-top-${ index }` } className={ `carousel-item${ index === 0 ? ' active' : '' }` }>
          <div className="d-flex justify-content-center w-100">
            <Link item={ link } className="text-white text-no-decoration-underline"/>
          </div>
        </div>);
      });
    } else {
      links.forEach((link, index) => {
        items.push(<Link
          key={ `link-top-${ index }` }
          item={ link }
          className="text-white text-no-decoration-underline m-0 p-0 fs-07"
        />);
      });
    }

    return items;
  };

  const renderControl = (prev: boolean = false) => {
    const ctrl = prev ? 'prev' : 'next';
    const className = `carousel-control-${ ctrl } m-0 p-0 w-auto`;
    const label = prev ? 'Previous' : 'Next';

    return <button type="button" className={ className } data-bs-target="#carouselTopBar" data-bs-slide="prev">
      <span className={ `carousel-control-${ ctrl }-icon` } aria-hidden="true"></span>
      <span className="visually-hidden">{ label }</span>
    </button>;
  };

  return <header className="top-bar py-2 text-bg-dark">
    <div className="container d-none d-lg-block">
      <div className="d-none d-md-flex justify-content-between">
        { renderItems() }
      </div>
    </div>

    <div id="carouselTopBar" className="carousel slide d-sm-block d-md-block d-lg-none">
      <div className="carousel-inner">
        { renderItems(true) }
      </div>

      { renderControl() }
      { renderControl(true) }
    </div>
  </header>;

  /*return <div id="carouselTopBar" className="carousel slide text-bg-dark">
    <div className="carousel-inner">
      { renderItems() }
    </div>

    <button className="carousel-control-prev" type="button" data-bs-target="#carouselTopBar" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>

    <button className="carousel-control-next" type="button" data-bs-target="#carouselTopBar" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>;*/

  /*return <header className="d-flex justify-content-center py-0 text-bg-dark">
    <ul className="nav nav-pills">
      { renderItems() }
    </ul>
  </header>;*/
};
