import React, { memo } from 'react';
import styles from './index.less';

export default memo(props => {
  return (
    <div className={styles.block}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
});
