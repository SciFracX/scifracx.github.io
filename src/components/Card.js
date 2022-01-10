import React from 'react';

import styles from './Card.module.css';

export default function Card({ sectionHead, items }){
  return (
    <div className={styles.card}>
      <h2 className={styles.header}>{sectionHead}</h2>
      <ul className={styles.content}>
        {items}
      </ul>
    </div>
  );
}