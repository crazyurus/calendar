import React, { memo } from 'react';
import className from 'classnames';
import styles from './item.less';

interface ListItemProps {
  title: string;
  url: string;
  icon: string;
  isExternal?: boolean;
  onClick(url: string): void;
}

function ListItem(props: React.PropsWithChildren<ListItemProps>) {
  const icon = require(`@/assets/icons/${props.icon}.png`);

  return (
    <a
      className={props.isExternal ? className(styles.item, 'external') : styles.item}
      href={props.isExternal ? props.url : undefined}
      onClick={props.onClick ? () => props.onClick(props.url) : void 0}
    >
      <img className={styles.icon} src={icon} alt="icon" />
      <div className={styles.title}>{props.title}</div>
    </a>
  );
}

export default memo(ListItem);
