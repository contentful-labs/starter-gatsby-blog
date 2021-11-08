import React from 'react'
import { Link } from 'gatsby'

import * as styles from './button.module.css'

const Button = (props) => {
  const { to = '', title = '' } = props
  return (
    <Link className={styles.button} to={to}>
      {title}
    </Link>
  )
}

export default Button
