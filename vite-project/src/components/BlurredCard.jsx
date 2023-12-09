import React from 'react';
import { Box } from '@chakra-ui/react';

const BlurredCard = ({ children, floatDirection }) => {
  const floatStyle = floatDirection === 'left' ? { marginRight: '10 rem' } : { marginLeft: '10rem' } ;
  const cardStyle = {
    position: 'relative',
    width: '298px',
    height: '273px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '25px',
    ...floatStyle,
  };
  const backgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '#5E5E5E82',
    boxShadow: 'inset 0px 4px 0px #00000040, 0px 4px 4px #00000040',
    mixBlendMode: 'normal',
    opacity: 0.4,
    filter: 'blur(3px)',
    borderRadius: '5px',
  };

  return (
    <Box style={cardStyle} className='empBox'>
      {children}
      <div style={backgroundStyle}></div>
    </Box>
  );
};

export default BlurredCard;
