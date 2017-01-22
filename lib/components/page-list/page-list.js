import React from 'react';
import ReactDOM from 'react-dom/server';
import styles from './styles.css.json';

export default function(props) {
  let pageLinks = new Array(props.pageCount)
                    .fill()               // Fill empty items
                    .map((x,i)=> i + 1)   // Change items to page numbers
                    .map(pageLink);       // Add links

  return (
    <div className={ styles.container }>
      <div className={ styles.label }>
        Pages:
      </div>
      <ul className={ styles.list }>{ pageLinks }</ul>
    </div>
  );
};

function pageLink(item, index) {
  let path = index ? index + '.html' : 'index.html';
  return (
    <li key={ index } className={ styles.item }>
      <a href={ `${path}` }>{ `${item}` }</a>
    </li>
  );
}
