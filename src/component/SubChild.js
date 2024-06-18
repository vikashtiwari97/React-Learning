import React from 'react';

const SubChild = (props) => {
  function getobject() {
    let obj = {
      title: 'MNC',
      yr: 2004
    };
    props.onB(obj);
    console.log(obj);
  }

  return (
    <div>
      <button onClick={getobject}>Click to send data to parent</button>
    </div>
  );
};

export default SubChild;
