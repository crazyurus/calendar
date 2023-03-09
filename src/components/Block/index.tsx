import React, { memo, type PropsWithChildren } from 'react';
import styles from './index.less';

interface BlockProps {
  title: string;
  extra?: JSX.Element;
}

function Block(props: PropsWithChildren<BlockProps>): JSX.Element {
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
