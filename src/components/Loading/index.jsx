import React from 'react';
import Lottie from 'react-lottie';
import LoadingAnimate from '../../assets/lottie/load.json';

import { LoadingUi } from './style';

export default () => {
  return (
    <LoadingUi>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: LoadingAnimate,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        }}
        width={250}
        height={200}
      />
    </LoadingUi>
  );
};
