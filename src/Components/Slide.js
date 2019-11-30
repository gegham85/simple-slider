import React from 'react';

const Slide = ({ image }) => {
  const styles = {
    backgroundPosition: '50% 60%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: `url(${image})`
  };

  return <div className="slide" style={styles}></div>
};

export default Slide;