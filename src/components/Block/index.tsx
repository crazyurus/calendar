import React, { memo } from 'react';
import styles from './index.less';

interface BlockProps {
  title: string;
  extra?: React.ReactNode;
}

function Block(props: React.PropsWithChildren<BlockProps>) {
 return (
    <div className={styles.block}>
      <div className={styles.title}>
        <span>{props.title}</span>
        {props.extra}
      </div>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}

export default memo(Block);
