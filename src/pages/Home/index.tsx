import React from 'react';
import { f7, Page, Button, Preloader } from 'framework7-react';
import { saveAs } from 'file-saver';
import { Block, List } from '@/components';
import imageCalendar from '@/assets/images/calendar.jpg';
import styles from './index.less';

function preview(): void {
  f7.photoBrowser
    .create({
      photos: [imageCalendar],
      navbar: false,
      toolbar: false,
      theme: 'dark',
    })
    .open();
}

function download(): void {
  saveAs(imageCalendar, '校历.jpg');
}

function openMiniProgram(): void {
  f7.dialog
    .create({
      title: undefined,
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
          },
        },
      ],
    })
    .open();
}

function onListItemClick(url: string): void {
  window.open(url);
}

function Home(): JSX.Element {
  return (
    <Page name="home">
      <Block title="校历">
        <div className={styles.calendar}>
          <Preloader size={30} />
          <img src={imageCalendar} onClick={preview} alt="校历" />
        </div>
        <Button fill onClick={download}>
          保存原图到相册
        </Button>
      </Block>

      <Block title="理工指北" extra={<a onClick={openMiniProgram}>打开小程序</a>}>
        <List>
          <List.Item
            title="图书馆"
            icon="book"
            url="https://mp.weixin.qq.com/s/tJPE98kpUcB4ZoacUcmWvw"
            onClick={onListItemClick}
          />
          <List.Item
            title="校车"
            icon="bus"
            url="https://mp.weixin.qq.com/s/tJPE98kpUcB4ZoacUcmWvw"
            onClick={onListItemClick}
          />
          <List.Item
            title="食堂"
            icon="tea"
            url="https://mp.weixin.qq.com/s/tJPE98kpUcB4ZoacUcmWvw"
            onClick={onListItemClick}
          />
          <List.Item
            title="校医院"
            icon="hospital"
            url="https://mp.weixin.qq.com/s/tJPE98kpUcB4ZoacUcmWvw"
            onClick={onListItemClick}
          />
          <List.Item
            title="卡务中心"
            icon="card"
            url="https://mp.weixin.qq.com/s/tJPE98kpUcB4ZoacUcmWvw"
            onClick={onListItemClick}
          />
          <List.Item
            title="快递"
            icon="express"
            url="https://mp.weixin.qq.com/s/tJPE98kpUcB4ZoacUcmWvw"
            onClick={onListItemClick}
          />
        </List>
      </Block>

      <Block
        title="校歌"
        extra={
          <a href="orpheus://song/449577766" className="external">
            打开网易云音乐
          </a>
        }
      >
        {navigator.onLine ? (
          <iframe
            title="music"
            className={styles.iframe}
            frameBorder="no"
            marginWidth={0}
            marginHeight={0}
            src="//music.163.com/outchain/player?type=2&id=449577766&auto=0&height=66"
          >
            暂不支持
          </iframe>
        ) : (
          <p>离线状态下无法加载校歌</p>
        )}
      </Block>
    </Page>
  );
}

export default Home;
