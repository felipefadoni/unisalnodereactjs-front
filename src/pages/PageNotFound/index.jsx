import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import PageNotFound from '../../assets/lottie/404.json';

import { PageNotFoundStyle } from './style';

export default () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }

    window.addEventListener('resize', handleResize);

    return (_) => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <PageNotFoundStyle>
      <div className='center-info'>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: PageNotFound,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          }}
          width={dimensions.width}
          height={(dimensions.height - 20)}
        />
        <h2>404</h2>
        <h3>Page Not Found.</h3>
      </div>
    </PageNotFoundStyle>
  );
};
