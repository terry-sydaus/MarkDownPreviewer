// Editor.js

import React from 'react';

let style = {
  //minHeight: '300px',
  //width: '600px'
}

const Editor = (props) => (
  <textarea
    style={style}
    id={props.id}
    onChange={props.onTxtChange}
    value={props.value}
  >
  </textarea>
  );

export default Editor;
