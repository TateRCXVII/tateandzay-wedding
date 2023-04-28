// create 404 page
// create a 404 page in the pages directory

import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div >
      <div >
        <h1 >404</h1>
        <h2 >Page Not Found</h2>
        <Link href="/" passHref>
          <button>Go Home</button>
        </Link>
      </div>
    </div>
  );
}