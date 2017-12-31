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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
        <div style={{ display: "none" }}>
          <svg xmlns="http://www.w3.org/2000/svg">
            <symbol id="bubblea" viewBox="0 0 134.88 145">
              <path className={ styles.cls1 } d="M75,144.5A43.35,43.35,0,0,1,35.23,84l.28-.65-.71,0A36.8,36.8,0,1,1,61.24,18.63l.44.37.31-.48a39.33,39.33,0,1,1,48.93,57.31l-.55.24.34.5A43.33,43.33,0,0,1,75,144.5Z"/>
              <path className={ styles.cls2 } d="M95.05,1a38.84,38.84,0,0,1,15.67,74.37l-1.1.49.68,1a42.83,42.83,0,1,1-74.61,7.34l.56-1.3-1.41-.09A36.31,36.31,0,1,1,60.92,19l.87.74.62-1A38.73,38.73,0,0,1,95.05,1m0-1A39.8,39.8,0,0,0,61.57,18.25a37.3,37.3,0,1,0-26.8,65.54,43.85,43.85,0,1,0,76.36-7.5A39.84,39.84,0,0,0,95.05,0Z"/>
              <path className={ styles.cls3 } d="M66.15,62.75,63,65.09c1.33-.13,2.67-.19,4-.19a43.12,43.12,0,0,1,13.61,2.19L68.31,62.32C67.59,62.44,66.86,62.58,66.15,62.75Z"/>
              <path className={ styles.cls3 } d="M104.43,76.33,84.5,68.6A43.06,43.06,0,0,1,110.07,108a43.61,43.61,0,0,1-.39,5.75l0,0a37.86,37.86,0,0,0-5.27-37.39Z"/>
              <path className={ styles.cls2 } d="M37.68,102.41a53.11,53.11,0,0,0,38.93,36.34c-.55,0-1.09,0-1.64,0a37.35,37.35,0,0,1-37.29-36.37m-.45-3c0,.68-.06,1.35-.06,2a37.86,37.86,0,0,0,43.07,37.44c-20.76-3.12-37.55-18.8-42.83-39.3l-.18-.17Z"/>
              <path className={ styles.cls2 } d="M5.62,48A45.58,45.58,0,0,0,35.53,77.69l-.77.59A31.76,31.76,0,0,1,5.62,48m-.48-3c0,.57,0,1.14,0,1.72A32.17,32.17,0,0,0,34.92,78.8l1.7-1.32A45.11,45.11,0,0,1,5.29,45.14L5.14,45Z"/>
              <path className={ styles.cls2 } d="M37,13.44A31.56,31.56,0,0,1,58.63,22l.89,7.06A37.22,37.22,0,0,0,26.13,15.34,31.41,31.41,0,0,1,37,13.44m0-.5a32.07,32.07,0,0,0-14.77,3.59,37.16,37.16,0,0,1,8.29-.94A36.59,36.59,0,0,1,60.25,30.87L59.1,21.78A32.08,32.08,0,0,0,37,12.94Z"/>
              <path className={ styles.cls2 } d="M94.69,4.48a33.87,33.87,0,0,1,32.68,42.7c0-.42,0-.84,0-1.26A39.67,39.67,0,0,0,87.77,6.3a38.62,38.62,0,0,0-4.93.31A33.42,33.42,0,0,1,94.69,4.48m0-.5A34.12,34.12,0,0,0,78.92,7.81a39.13,39.13,0,0,1,47.62,43.34h0A34.36,34.36,0,0,0,94.69,4Z"/>
            </symbol>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg">
            <symbol id="bubbleb" viewBox="0 0 163 149.04">
              <path className={ styles.cls1 } d="M116,148.54a46.46,46.46,0,0,1-38.74-20.76l-.36-.54-.43.48a43.43,43.43,0,1,1-36.86-72l.69-.07L40,55a38.71,38.71,0,1,1,70.67,0l-.36.79.86-.09c1.59-.16,3.21-.24,4.82-.24a46.51,46.51,0,1,1,0,93Z"/>
              <path className={ styles.cls2 } d="M75.34,1a38.23,38.23,0,0,1,34.87,53.86l-.71,1.58,1.73-.18A47.12,47.12,0,0,1,116,56,46,46,0,1,1,77.67,127.5L77,126.42l-.86,1A42.93,42.93,0,1,1,39.64,56.23L41,56.09l-.57-1.26A38.23,38.23,0,0,1,75.34,1m0-1A39.22,39.22,0,0,0,39.55,55.24a43.93,43.93,0,1,0,37.29,72.81A47,47,0,1,0,116,55a46.16,46.16,0,0,0-4.87.25A39.23,39.23,0,0,0,75.34,0Z"/>
              <path className={ styles.cls2 } d="M7.74,100.62a53.17,53.17,0,0,0,39,36.43c-.55,0-1.1,0-1.64,0A37.43,37.43,0,0,1,7.74,100.62m-.46-3c0,.67,0,1.35,0,2a37.89,37.89,0,0,0,37.88,37.89,38.38,38.38,0,0,0,5.28-.37c-20.81-3.13-37.63-18.84-42.92-39.38l-.19-.17Z"/>
              <path className={ styles.cls3 } d="M73,72.58,45.72,59.94m0,0-1,0a37.68,37.68,0,0,0-17.39,4.23A43.21,43.21,0,0,1,78.09,92.58l.81-11.22A38,38,0,0,0,73,72.58"/>
              <path className={ styles.cls2 } d="M82.67,116.12a57,57,0,0,0,36.53,26.73c-.68,0-1.36.05-2,.05a40,40,0,0,1-35-20.67l.55-6.11m-.36-1.62-.7,7.84A40.6,40.6,0,0,0,122.81,143a56,56,0,0,1-40.5-28.51Z"/>
              <path className={ styles.cls2 } d="M116.79,60.8A40.07,40.07,0,0,1,155.24,112c0-.75.06-1.49.06-2.24a46.73,46.73,0,0,0-46.68-46.67c-1.09,0-2.18,0-3.27.11l2-1.33a40.16,40.16,0,0,1,9.41-1.11m0-.5a40.59,40.59,0,0,0-9.61,1.15l-3.78,2.47a47.51,47.51,0,0,1,5.22-.29A46.13,46.13,0,0,1,154.38,116l0,0A40.56,40.56,0,0,0,116.79,60.3Z"/>
              <path className={ styles.cls2 } d="M43.23,41A49.41,49.41,0,0,0,51,55.88l-4.8-2.23a33.19,33.19,0,0,1-3-12.62m-.47-3c0,.6,0,1.2,0,1.81A33.82,33.82,0,0,0,45.83,54l6.91,3.2a48.41,48.41,0,0,1-9.81-19L42.76,38Z"/>
              <path className={ styles.cls2 } d="M76.22,4.83a33.35,33.35,0,0,1,32.18,42c0-.39,0-.78,0-1.17a39.05,39.05,0,0,0-39-39,38.1,38.1,0,0,0-4.78.3,33,33,0,0,1,11.6-2.08m0-.5A33.77,33.77,0,0,0,60.69,8.1a39.09,39.09,0,0,1,8.71-1,38.51,38.51,0,0,1,38.51,38.51,39.66,39.66,0,0,1-.34,5.15h0A33.83,33.83,0,0,0,76.22,4.33Z"/>
            </symbol>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg">
            <symbol id="bubblec" viewBox="0 0 134.67 123">
              <path className={ styles.cls1 } d="M101.45,122.5A32.57,32.57,0,0,1,75.71,110l-.3-.39-.39.3A46.41,46.41,0,1,1,46.91,26.54a48.05,48.05,0,0,1,6,.38l.47.06.08-.47a31.15,31.15,0,1,1,49.82,29.73l-1,.81,1.32.09a32.71,32.71,0,0,1-2.1,65.36Z"/>
              <path className={ styles.cls2 } d="M84.17,1A30.64,30.64,0,0,1,103,55.85l-2.08,1.62,2.63.16a32.22,32.22,0,1,1-27.4,52l-.61-.78-.79.6a45.44,45.44,0,0,1-27.8,9.38,45.91,45.91,0,0,1,0-91.82,44.93,44.93,0,0,1,5.92.38l1,.12.16-.95A30.52,30.52,0,0,1,84.17,1m0-1A31.65,31.65,0,0,0,53,26.42,48.29,48.29,0,0,0,46.91,26a46.91,46.91,0,1,0,28.41,84.24,33.21,33.21,0,1,0,28.26-53.64A31.64,31.64,0,0,0,84.17,0Z"/>
              <path className={ styles.cls2 } d="M80.09,57.51l1.1.4-.71.13-.39-.53m-1.43-1.13,1.6,2.21,3-.56a36,36,0,0,1-4.57-1.65Z"/>
              <path className={ styles.cls2 } d="M79.05,102.92a40.23,40.23,0,0,0,22.68,15.44h-.32a28.25,28.25,0,0,1-22.64-11.44l.28-4m-.4-1.44-.4,5.59a28.62,28.62,0,0,0,23.16,11.79,29.05,29.05,0,0,0,4-.28,39.44,39.44,0,0,1-26.75-17.1Z"/>
              <path className={ styles.cls2 } d="M101.15,60.63A28.16,28.16,0,0,1,128.5,95.45v-.34A33.16,33.16,0,0,0,95.38,62c-1.14,0-2.28.06-3.41.17a28,28,0,0,1,9.18-1.53m0-.5A28.52,28.52,0,0,0,88,63.33a32.64,32.64,0,0,1,39.71,36.14h0a28.66,28.66,0,0,0-26.58-39.35Z"/>
              <path className={ styles.cls2 } d="M6.91,74.48a56.74,56.74,0,0,0,42,39.16c-.67,0-1.34,0-2,0A40,40,0,0,1,6.91,74.48m-.45-2.91c0,.72-.06,1.44-.06,2.17A40.48,40.48,0,0,0,52.49,113.8c-22.22-3.34-40.18-20.12-45.83-42l-.2-.18Z"/>
              <path className={ styles.cls2 } d="M46.48,31.76a39.75,39.75,0,0,1,7.38.69l4.51,6.16a46.87,46.87,0,0,0-26.56-4.07,39.64,39.64,0,0,1,14.67-2.78m0-.5a40.28,40.28,0,0,0-18.57,4.51,46.49,46.49,0,0,1,10.42-1.18A45.88,45.88,0,0,1,60,40l-5.85-8a41.21,41.21,0,0,0-7.67-.73Z"/>
              <path className={ styles.cls2 } d="M83.88,3.88a26.82,26.82,0,0,1,26.79,26.79,26.32,26.32,0,0,1-.71,6.15v-.11A31.62,31.62,0,0,0,78.38,5.12c-1,0-2,0-3,.15a26.73,26.73,0,0,1,8.55-1.39m0-.5a27.19,27.19,0,0,0-12.53,3,31.14,31.14,0,0,1,37.84,34.44h0A27.31,27.31,0,0,0,83.88,3.38Z"/>
            </symbol>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg">
            <symbol id="bubbled" viewBox="0 0 103.83 106">
              <path className={ styles.cls1 } d="M67.12,105.5a36,36,0,0,1-36-32.65l0-.38-.38-.06A36.21,36.21,0,1,1,72.74,33.15l0,.38.38.06a36.21,36.21,0,0,1-6,71.91Z"/>
              <path className={ styles.cls2 } d="M36.71,1A35.69,35.69,0,0,1,72.24,33.2l.08.76.75.13A35.7,35.7,0,1,1,31.58,72.8L31.51,72l-.76-.13A35.71,35.71,0,0,1,36.71,1m0-1a36.71,36.71,0,0,0-6.12,72.9A36.71,36.71,0,1,0,73.24,33.1,36.71,36.71,0,0,0,36.71,0Z"/>
              <path className={ styles.cls2 } d="M6.84,37.74A44.84,44.84,0,0,0,33.27,65.83L32.07,67A31.13,31.13,0,0,1,6.84,37.74m-.48-3.06c0,.56-.05,1.13-.05,1.7A31.66,31.66,0,0,0,32.23,67.5l2-1.86A44.55,44.55,0,0,1,6.51,34.82l-.15-.14Z"/>
              <path className={ styles.cls2 } d="M37.68,3.64a31.27,31.27,0,0,1,31,28.58L67,33.86A36.58,36.58,0,0,0,27.09,5.48,31,31,0,0,1,37.68,3.64m0-.5A31.49,31.49,0,0,0,23.14,6.67,36.08,36.08,0,0,1,66.68,34.84l2.56-2.42A31.66,31.66,0,0,0,37.68,3.14Z"/>
              <path className={ styles.cls2 } d="M37.34,70.57a45,45,0,0,0,31.8,29.54h-.76A31.09,31.09,0,0,1,37.27,70.64l.07-.07m.23-.91-.81.77a31.65,31.65,0,0,0,31.62,30.18,32.13,32.13,0,0,0,4.41-.3A44.1,44.1,0,0,1,37.57,69.66Z"/>
              <path className={ styles.cls2 } d="M73.14,36.63A31.19,31.19,0,0,1,98.25,75.2c0-.28,0-.55,0-.82A36.55,36.55,0,0,0,70.69,39l2.45-2.32M73,36.1l-3.3,3.12a36.07,36.07,0,0,1,27.76,40l0,0A31.69,31.69,0,0,0,73,36.1Z"/>
            </symbol>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg">
            <symbol id="bubblee" viewBox="0 0 109 115">
              <path className={ styles.cls1 } d="M35.86,114.5a35.36,35.36,0,0,1,0-70.72l.66,0,.95,0-.13-.62a35.36,35.36,0,1,1,34.59,28l-.67,0-.94,0,.13.62A35.37,35.37,0,0,1,35.86,114.5Z"/>
              <path className={ styles.cls2 } d="M71.93,1a34.86,34.86,0,1,1,0,69.72l-.66,0H71l-1.27,0L70,71.9a35.32,35.32,0,0,1,.76,7.24A34.86,34.86,0,1,1,35.86,44.28l.65,0h.31l1.27,0-.26-1.24a35.32,35.32,0,0,1-.76-7.24A34.9,34.9,0,0,1,71.93,1m0-1A35.87,35.87,0,0,0,36.85,43.31l-1,0A35.86,35.86,0,1,0,71.72,79.14a36.63,36.63,0,0,0-.78-7.45c.33,0,.66,0,1,0A35.86,35.86,0,1,0,71.93,0Z"/>
              <path className={ styles.cls2 } d="M41.92,38.22a44.53,44.53,0,0,0,4.67,9.92l-3.54-3a30.76,30.76,0,0,1-1.13-6.94m-.49-3.07c0,.55,0,1.1,0,1.66a30.84,30.84,0,0,0,1.23,8.64l6.51,5.48a44.22,44.22,0,0,1-7.55-15.64l-.15-.14Z"/>
              <path className={ styles.cls2 } d="M5.85,81.51a43.55,43.55,0,0,0,31,29h-.63a30.45,30.45,0,0,1-30.39-29m-.49-3.08c0,.55,0,1.11,0,1.66a30.93,30.93,0,0,0,35.23,30.62c-17-2.55-30.72-15.38-35-32.14l-.15-.14Z"/>
              <path className={ styles.cls2 } d="M36,48.12c.5,0,1,0,1.62.05l4.3,3.62a36.11,36.11,0,0,0-16.17-1.9A30.22,30.22,0,0,1,36,48.12m0-.5a30.81,30.81,0,0,0-14.2,3.45,35.38,35.38,0,0,1,8-.9,35,35,0,0,1,15,3.33l-6.91-5.82c-.6,0-1.2-.06-1.81-.06Z"/>
              <path className={ styles.cls2 } d="M60.74,67.68l4.87,4.1a30.41,30.41,0,0,1,.77,6.76,30.74,30.74,0,0,1-.94,7.55v-.71a35.4,35.4,0,0,0-4.7-17.7M58.58,65.2a35.09,35.09,0,0,1,6.36,20.18,36.53,36.53,0,0,1-.31,4.71h0a30.83,30.83,0,0,0,1.42-18.6l-7.48-6.3Z"/>
              <path className={ styles.cls2 } d="M67,65.28a41.14,41.14,0,0,0,6,1.94h-.64a30,30,0,0,1-3.26-.18L67,65.28m-3.15-2,5,4.24a30.33,30.33,0,0,0,3.46.2,32.27,32.27,0,0,0,4.31-.3A41.54,41.54,0,0,1,63.8,63.29Z"/>
              <path className={ styles.cls2 } d="M72,4.84a30.45,30.45,0,0,1,29.48,38v-.7A35.68,35.68,0,0,0,61.78,6.61,30,30,0,0,1,72,4.84m0-.5a30.69,30.69,0,0,0-14.2,3.45,34.84,34.84,0,0,1,8-.91A35.21,35.21,0,0,1,101,42.1a36.49,36.49,0,0,1-.31,4.7v0A30.92,30.92,0,0,0,72,4.34Z"/>
            </symbol>
          </svg>
        </div>
      </head>
      <body className={ styles.body }>
        <header>
          <a href="/">
            <h1 className={ styles['main-heading'] }>
              Katie Fenn
            </h1>
          </a>
        </header>
        <div className={ styles.decoration }>
          <div className={ styles.redesignDecoration }>
            <div className={ styles.bubbles } />
            <div className={ styles.bubbles2 } />
            <div className={ styles.bubbles3 } />
            <div className={ styles.plume1 } />
            <div className={ styles.plume2 } />
            <div className={ styles.mask } />
            <div className={ styles.gradient } />
            <div className={ styles.vapour1 } />
            <div className={ styles.shuttle } />
            <div className={ styles.vapour2 } />
          </div>
        </div>
        <main className={ styles.content } >
          <div dangerouslySetInnerHTML={{ __html: props.children }} />
        </main>
        <aside className={ styles.profile }>
          <h2>Profile</h2>
          <p>
            <div className={ styles.profilePhotoContainer }>
              <img
                src={require('./profile-photo.jpg')}
                alt="Katie Fenn"
                className={ styles.profilePhoto } />
              <div className={ styles.overlay } />
            </div>
          </p>
          <h3>Work</h3>
          <p>
            Software Engineer at <a href='https://www.npmjs.com/'>npm, inc</a>
          </p>
          <h4>
            Formerly:
          </h4>
          <ul className={ styles.cv }>
            <li><a href="https://inviqa.com/">Inviqa</a></li>
            <li><a href="https://skybetcareers.com/our-locations/sheffield">SkyBet</a></li>
            <li><a href="https://www.canonical.com/">Canonical</a></li>
          </ul>
          <h3>
            Upcoming talks
          </h3>
          <ul className={ styles.talks }>
            <li><a href="http://scotlandjs.com">Scotland JS</a> July 2018</li>
          </ul>
        </aside>
      </body>
    </html>
  );
};
