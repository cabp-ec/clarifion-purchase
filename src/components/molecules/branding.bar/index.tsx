import React from 'react';

interface BrandingBarProps {
}

export const BrandingBar: React.FC<BrandingBarProps> = (props: BrandingBarProps) => {
  return <div className="branding-bar container my-4">
    <div className="d-flex justify-content-between">
      <a href="#" title="Clarifion"><img alt="Clarifion" src="/img/site-logo.png" className="img-fluid site-logo"/></a>
      <div>
        <a href="#" title="McAffe Secure" target="_blank" className="me-1 me-md-5">
          <img alt="McAffe Secure" src="/img/logos/mcaffe.png" className="img-fluid"/>
        </a>
        <a href="#" title="Norton by Symantec" target="_blank">
          <img alt="Norton by Symantec" src="/img/logos/norton.png" className="img-fluid"/>
        </a>
      </div>
    </div>
  </div>;
};
