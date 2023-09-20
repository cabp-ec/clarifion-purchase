import React from 'react';
import { LoaderGlobalProps } from './loader.global.props';

export const LoaderGlobal: React.FC<LoaderGlobalProps> = ({ on, value }: LoaderGlobalProps) => {
  return on
    ? <div className="loader-global d-flex flex-column align-items-center justify-content-center z-100">
      <div className="wrapper d-flex flex-column align-items-start">
        <p className="mb-1 text-shadow">Loading</p>
        <div className="progress-bar">
          <div className="progress" style={ { width: `${ value }%` } }/>
        </div>
      </div>
    </div>
    : null;
};
