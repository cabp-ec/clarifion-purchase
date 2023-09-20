import React from 'react';
import { KeyStringPairInterface } from '../../../app/interfaces/value.pairs/key.string.pair.interface';

interface TopBarProps {
  contactEmails: KeyStringPairInterface;
}

export const Footer: React.FC<TopBarProps> = ({ contactEmails }: TopBarProps) => {
  return <footer
    className="d-flex flex-wrap justify-content-center align-items-center py-3 my-4 border-top text-bg-dark"
  >
    <div className="col-md-4 d-flex align-items-center">
      <span className="mb-3 mb-md-0 me-1 text-white">Copyright &copy; 2023 |</span>
      <a href="mailto:c@c.com" className="mb-3 me-2 mb-md-0 text-white text-decoration-none lh-1">
        { contactEmails.webSupport }
      </a>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3">
        <a className="text-white" href="#">
          <i className="bi bi-lock me-1"/>Secure 256-Bit SSL Encryption.
        </a>
      </li>
    </ul>
  </footer>;
};
