import React from 'react';
const styles = require('./styles.css.json');

export default function(props) {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="assets/styles.css" />
      </head>
      <body className={ styles.body }>
        <div className="decoration">
          <div className={ styles.exhaust } />
          <div className={ styles.mask } />
          <div className={ styles.gradient } />
          <div className={ styles.shuttle } />
        </div>
        <div className={ styles.content } >
          <h1>Katie Fenn</h1>
          <div dangerouslySetInnerHTML={{ __html: props.children }} />
        </div>
      </body>
    </html>
  );
};
