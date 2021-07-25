import React from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'

const Navigation = () => (
  <nav role="navigation" className={styles.container}>
    <span className={styles.navigationItem}>
      <Link to="/">Gatsby Starter Contentful</Link>
    </span>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="active">Blog</Link>
      </li>
    </ul>
  </nav>
)

export default Navigation