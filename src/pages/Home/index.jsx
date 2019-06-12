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
          url="https://mp.weixin.qq.com/s/DNagKucWjdh7guYfNZdqxg"
        />
        <ListItem
          title="食堂"
          icon="tea"
          url="https://mp.weixin.qq.com/s?__biz=MjM5MjEwNDIwMA==&mid=502148076&idx=1&sn=c0bbbf8e0af8efb40b3b3fa33cedbabb&chksm=3eb1e18b09c6689dfb87be6de903010170d7126fd499aaf8554377ea1596d6d12df4d3a3d04d#rd"
        />
        <ListItem
          title="校车"
          icon="hospital"
          url="https://mp.weixin.qq.com/s/8LjI4dJVtnxzdSLvitvgjg"
        />
        <ListItem
          title="快递/超市/卡务中心/医院"
          icon="card"
          url="https://mp.weixin.qq.com/s?__biz=MjM5MjEwNDIwMA==&mid=502148076&idx=1&sn=c0bbbf8e0af8efb40b3b3fa33cedbabb&chksm=3eb1e18b09c6689dfb87be6de903010170d7126fd499aaf8554377ea1596d6d12df4d3a3d04d#rd"
        />
      </List>
    </Block>

    <Block
      title="校歌"
      extra={<a href="//m.music.163.com/m/applink/?scheme=orpheus%3A%2F%2Fsong%2F449577766%3Fthirdfrom%3Diwut">打开网易云音乐</a>}
    >
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
