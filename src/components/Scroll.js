import React from 'react';

const Scroll = props => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        background:
          'linear-gradient(to right, rgba(56, 152, 255,1) 0%, rgba(26, 25, 25,1) 100%)',
        borderTop: '3px solid black',
        height: '750px',
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
