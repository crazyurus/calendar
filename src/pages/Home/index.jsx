import React from 'react';
import { Page, Button } from 'framework7-react';
import Block from '@/components/Block';
import List from '@/components/List';
import ListItem from '@/components/List/item';
import styles from './index.less';

export default () => (
  <Page name="home">
    <Block title="校历">
      <div className={styles.calendar} />
      <Button fill>保存到手机</Button>
    </Block>

    <Block title="时间表">
      <List>
        <ListItem
          title="图书馆"
          icon="book"
        />
        <ListItem
          title="食堂"
          icon="tea"
        />
        <ListItem
          title="校车"
          icon="hospital"
        />
        <ListItem
          title="快递/超市/卡务中心/医院"
          icon="card"
        />
      </List>
    </Block>

    <Block title="校歌">
      <iframe
        className={styles.iframe}
        frameBorder="no"
        border="0"
        marginWidth="0"
        marginHeight="0"
        src="//music.163.com/outchain/player?type=2&amp;id=449577766&amp;auto=0&amp;height=66">暂不支持</iframe>
    </Block>

  </Page>
);
