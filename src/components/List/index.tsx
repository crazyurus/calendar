import React, { type PropsWithChildren } from 'react';
import ListItem from './item';

function List(props: PropsWithChildren): JSX.Element {
  return <section>{props.children}</section>;
}

List.Item = ListItem;

export default List;
