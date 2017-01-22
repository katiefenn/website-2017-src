import React from 'react';
import { PageList } from '../page-list';

export default function(props) {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: props.children }} />
      <PageList pageCount={ props.pageCount } />
    </div>
  );
};
