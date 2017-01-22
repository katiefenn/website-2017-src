import React from 'react';
const styles = require('./styles.css.json');

export default function(props) {
  return (
    <html>
      <head>
        <link href="https://fonts.googleapis.com/css?family=Lato:300,300i" rel="stylesheet" />
        <link rel="stylesheet" href="assets/styles.css" />
      </head>
      <body className={ styles.body }>
        <header>
          <h1 className={ styles['main-heading'] }>
            Katie Fenn
          </h1>
        </header>
        <div className={ styles.decoration }>
          <div className={ styles.exhaust } />
          <div className={ styles.mask } />
          <div className={ styles.gradient } />
          <div className={ styles.vapour } />
          <div className={ styles.shuttle } />
          <div className={ styles['large-plume'] } />
          <div className={ styles['small-plume'] } />
        </div>
        <div className={ styles.content } >
          <div dangerouslySetInnerHTML={{ __html: props.children }} />
        </div>
      </body>
    </html>
  );
};
