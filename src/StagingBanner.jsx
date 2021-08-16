
import React from 'react';
import './stagingBanner.css';

const StagingBanner = () => {

  let [path, setPath]= React.useState();
  let [offset, setOffset] = React.useState(0);
  
  React.useEffect(function mount() {
    setPath(window.location.host);
    window.onscroll = () => {
      setOffset(window.pageYOffset);

    }
  }, []);

  const demoIdentifiers = ['dev', 'demo', 'staging', 'localhost'];

  if (path !== undefined && (demoIdentifiers.reduce((acc, identifier) => acc || path.includes(identifier), false))) {
    return (
      <div>
      <div className="stagingBanner" style={{ position: offset > 0 ? "fixed" : "relative" }}>
        <p> <i className="exclamation circle icon"></i> This is a demo/test instance. Do not use it for operational purposes. All changes will be regularly overwritten. </p>
      </div>
      </div>
    );
  }

  return null;
};

export default StagingBanner;