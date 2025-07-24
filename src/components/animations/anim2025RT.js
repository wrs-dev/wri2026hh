import React from 'react';
import Rive, { Layout, Fit, Alignment } from '@rive-app/react-canvas';

const AnimationRT = () => {
  return (
    <div className="w-full max-w-[1000px] h-auto">
      <div className="relative pb-[20%]"> {/* This maintains the aspect ratio */}
        <Rive
          src="/wri2025RT_header.riv"
          className="absolute inset-0 w-full h-full"
          layout={new Layout({ fit: Fit.Contain, alignment: Alignment.Center })}
          autoplay={true}
          onLoad={(event) => console.log('Rive component loaded:', event)}
          onError={(error) => console.log('Rive component error:', error)}
        />
      </div>
    </div>
  );
};

export default AnimationRT;
