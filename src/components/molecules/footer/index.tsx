import React from 'react';
import { KeyStringPairInterface } from '../../../app/interfaces/value.pairs/key.string.pair.interface';

interface TopBarProps {
  contactEmails: KeyStringPairInterface;
}

export const Footer: React.FC<TopBarProps> = ({ contactEmails }: TopBarProps) => {
  return <footer className="text-bg-dark py-3 fs-07">
    <div className="container d-sm-flex">
      <div className="col-sm-1 col-md-6 text-center text-md-start">
        <span className="mb-3 mb-md-0 me-1 text-white">Copyright &copy; 2023 |</span>
        <a href="mailto:c@c.com" className="mb-3 me-2 mb-md-0 text-white text-decoration-none lh-1">
          { contactEmails.webSupport }
        </a>
      </div>

      <div className="col-sm-1 col-md-6 text-center text-md-end">
        <a className="text-white" href="#">
          <i className="bi bi-lock me-1"/>Secure 256-Bit SSL Encryption.
        </a>
      </div>
    </div>
  </footer>;
};
