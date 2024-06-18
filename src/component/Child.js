import React from 'react';
import SubChild from './SubChild';

const Child = (props) => {
  function getDataChild(obj) {
    console.log("Received data in Child:", obj);


    console.log('for the parent component');

    props.printChild(obj);
  }

  return (
    <div>
      <SubChild onB={getDataChild} />
    </div>
  );
};

export default Child;
