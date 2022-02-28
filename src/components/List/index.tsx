import React from 'react';

function List(props: React.PropsWithChildren<{}>) {
  return <section>{props.children}</section>;
};

export default List;
