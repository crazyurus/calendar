import React, { memo } from 'react';
import className from 'classnames';
import styles from './item.module.less';

export default memo(props => {
  const icon = require(`@/assets/icons/${props.icon}.png`);

  return (
    <a
      className={props.isExternal ? className(styles.item, 'external') : styles.item}
      href={props.isExternal ? props.url : null}
      onClick={props.onClick ? () => props.onClick(props.url) : void 0}
    >
      <img className={styles.icon} src={icon} alt="icon" />
      <div className={styles.title}>{props.title}</div>
    </a>
  );
});
