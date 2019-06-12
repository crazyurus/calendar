import React, { memo } from 'react';
import styles from './item.less';

export default memo(props => {
  const icon = require(`@/assets/icons/${props.icon}.png`);

  return (
    <a className={styles.item} href={props.url}>
      <img className={styles.icon} src={icon} alt="icon" />
      <div className={styles.title}>{props.title}</div>
    </a>
  );
});
