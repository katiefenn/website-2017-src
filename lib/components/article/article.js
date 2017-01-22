import React from 'react';
const styles = require('./styles.css.json');

export default function(props) {
  return (
    <article className={ styles.article } dangerouslySetInnerHTML={{ __html: props.children }} />
  );
};
