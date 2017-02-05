import React from 'react';
import appleIcon57x57 from './apple-icon-57x57.png';
import appleIcon60x60 from './apple-icon-60x60.png';
import appleIcon72x72 from './apple-icon-72x72.png';
import appleIcon76x76 from './apple-icon-76x76.png';
import appleIcon114x114 from './apple-icon-114x114.png';
import appleIcon120x120 from './apple-icon-120x120.png';
import appleIcon144x144 from './apple-icon-144x144.png';
import appleIcon152x152 from './apple-icon-152x152.png';
import appleIcon180x180 from './apple-icon-180x180.png';
import androidIcon192x192  from './android-icon-192x192.png';
import favicon32x32  from './favicon-32x32.png';
import favicon96x96  from './favicon-96x96.png';
import favicon16x16  from './favicon-16x16.png';
import msIcon144x144  from './ms-icon-144x144.png';

const styles = require('./styles.css.json');

export default function(props) {
  return (
    <html>
      <head>
        <link href="https://fonts.googleapis.com/css?family=Lato:300,300i" rel="stylesheet" />
        <link rel="stylesheet" href="/assets/styles.css" />
        <link rel="apple-touch-icon" sizes="57x57" href={ appleIcon57x57 } />
        <link rel="apple-touch-icon" sizes="60x60" href={ appleIcon60x60 } />
        <link rel="apple-touch-icon" sizes="72x72" href={ appleIcon72x72 } />
        <link rel="apple-touch-icon" sizes="76x76" href={ appleIcon76x76 } />
        <link rel="apple-touch-icon" sizes="114x114" href={ appleIcon114x114 } />
        <link rel="apple-touch-icon" sizes="120x120" href={ appleIcon120x120 } />
        <link rel="apple-touch-icon" sizes="144x144" href={ appleIcon144x144 } />
        <link rel="apple-touch-icon" sizes="152x152" href={ appleIcon152x152 } />
        <link rel="apple-touch-icon" sizes="180x180" href={ appleIcon180x180 } />
        <link rel="icon" type="image/png" sizes="192x192"  href={ androidIcon192x192 } />
        <link rel="icon" type="image/png" sizes="32x32" href={ favicon32x32 } />
        <link rel="icon" type="image/png" sizes="96x96" href={ favicon96x96 } />
        <link rel="icon" type="image/png" sizes="16x16" href={ favicon16x16 } />
        <link rel="manifest" href="/assets/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content={ msIcon144x144 } />
        <meta name="theme-color" content="#ffffff" />
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
