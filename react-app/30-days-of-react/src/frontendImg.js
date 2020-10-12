import React from 'react';
import html from './images/html_logo.png'
import css from './images/css_logo.png'
import js from './images/js_logo.png'

function frontendImg(type) {

  let image
  if (type.name === 'css') {
    image = css
  } else if (type.name === 'html') {
    image = html
  } else if (type.name === 'js') {
    image = js
  }

  return (
    <img src={image} />
  );
}

export default frontendImg;
