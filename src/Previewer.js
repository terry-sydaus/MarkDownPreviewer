// Previewer.js

import React from 'react';

let style = {
  //minHeight: '300px',
  //width: '600px',
  border: 'solid 1px lightgrey'
}


const Previewer = (props) => (
  <div
    style={style}
    id={props.id}
    dangerouslySetInnerHTML={props.htmlObject}
  />
  );

export default Previewer;
