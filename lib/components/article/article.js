import React from 'react';

export default function(props) {
  return (
    <article dangerouslySetInnerHTML={{ __html: props.children }} />
  );
};
