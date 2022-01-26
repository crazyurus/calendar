import React from 'react';
import { f7, Page, Button, Preloader } from 'framework7-react';
import Block from '@/components/Block';
import List from '@/components/List';
import ListItem from '@/components/List/item';
import imageCalendar from '@/assets/images/calendar.jpg';
import styles from './index.module.less';

function preview() {
  f7.photoBrowser.create({
    photos: [imageCalendar],
    navbar: false,
    toolbar: false,
    theme: 'dark'
  }).open();
}

function download() {
  const $a = document.createElement('a');
  $a.setAttribute('href', imageCalendar);
  $a.setAttribute('download', '校历.jpg');
  const evObj = document.createEvent('MouseEvents');
  evObj.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, true, false, 0, null);
  $a.dispatchEvent(evObj);
}

function openMiniProgram() {
  f7.dialog.create({
    title: null,
    text: '即将打开“理工大指北”小程序',
    buttons: [
      {
        text: '取消',
        color: 'black',
      },
      {
        text: '允许',
        bold: true,
        onClick() {
          window.location.assign('weixin://dl/business/?t=ZRbQSWuBmBo');
        }
      }
    ],
  }).open();
}

function onListItemClick(url) {
  window.open(url);
}

function HomePage() {
  return (
    <Page name="home">
      <Block title="校历">
        <div className={styles.calendar}>
          <Preloader size={30} color="white" />
          <img src={imageCalendar} onClick={preview} alt="校历" />
        </div>
        <Button fill onClick={download}>保存原图到相册</Button>
      </Block>

      <Block
        title="理工指北"
        extra={<a onClick={openMiniProgram}>打开小程序</a>}
      >
        <List>
          <ListItem
            title="图书馆"
            icon="book"
            url="https://mp.weixin.qq.com/s/tJPE98kpUcB4ZoacUcmWvw"
            onClick={onListItemClick}
          />
          <ListItem
            title="校车"
            icon="bus"
            url="https://mp.weixin.qq.com/s/tJPE98kpUcB4ZoacUcmWvw"
            onClick={onListItemClick}
          />
          <ListItem
            title="食堂"
            icon="tea"
            url="https://mp.weixin.qq.com/s/tJPE98kpUcB4ZoacUcmWvw"
            onClick={onListItemClick}
          />
          <ListItem
            title="校医院"
            icon="hospital"
            url="https://mp.weixin.qq.com/s/tJPE98kpUcB4ZoacUcmWvw"
            onClick={onListItemClick}
          />
          <ListItem
            title="卡务中心"
            icon="card"
            url="https://mp.weixin.qq.com/s/tJPE98kpUcB4ZoacUcmWvw"
            onClick={onListItemClick}
          />
          <ListItem
            title="快递"
            icon="express"
            url="https://mp.weixin.qq.com/s/tJPE98kpUcB4ZoacUcmWvw"
            onClick={onListItemClick}
          />
        </List>
      </Block>

      <Block
        title="校歌"
        extra={<a href="orpheus://song/449577766" className="external">打开网易云音乐</a>}
      >
        {navigator.onLine ? <iframe
          className={styles.iframe}
          frameBorder="no"
          border="0"
          marginWidth="0"
          marginHeight="0"
          src="//music.163.com/outchain/player?type=2&id=449577766&auto=0&height=66"
        >暂不支持</iframe> : <p>离线状态下无法加载校歌</p>}
      </Block>
    </Page>
  );
}

export default HomePage;
