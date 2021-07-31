import React from 'react'
import { Link } from 'gatsby'
import { navigation, navigationItem } from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <ul className={navigation}>
      <li className={navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li>
    </ul>
  </nav>
)
