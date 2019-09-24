import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import { Page, Button, Preloader } from 'framework7-react';
import Block from '@/components/Block';
import List from '@/components/List';
import ListItem from '@/components/List/item';
import detect from '@/utils/detect';
import imgCalendar from '@/assets/images/calendar.min.jpg';
import styles from './index.less';

const url = location.protocol + '//' + location.host + '/act/calendar/assets/images/calendar.jpg';

@autobind
class HomePage extends Component {

  componentDidMount() {
    if (detect.isWeChat()) {
      wx.config({
        debug: false
      });
    }

    this.$f7.toast.create({
      text: '掌上理工大服务即将下线，请通过“理工大指北”小程序查看校历',
      closeButton: true,
      closeButtonText: '详情'
    }).on('close', () => {
      location.assign('http://mp.weixin.qq.com/s?__biz=MjM5MjEwNDIwMA==&mid=502148909&idx=1&sn=7db79cec3547d272fd7d522ada7762c3&chksm=3eb1e54a09c66c5c0e04f14f17a91a9022b9c153542c65874c25939f609bcf125ced61be81d9#rd');
    }).open();
  }

  preview() {
    this.download();
  }

  download() {
    this.onListItemClick('https://m.q.qq.com/a/s/cadec3a0e963d9b06c486dc9be3a9a9e|/pages/biz/calendar/index');
  }

  onListItemClick(url) {
    const urlArray = url.split('|');

    if (detect.isMiniProgram()) {
      const global = detect.isWeChat() ? wx : qq;

      global.miniProgram.navigateTo({
        url: urlArray.length === 1 ? '/pages/index/index' : urlArray[1]
      });
    } else {
      this.$f7.dialog.create({
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
            onClick: () => {
              let schema = 'mqqapi://microapp/open?url=' + encodeURIComponent(urlArray[0]) + '&src_type=web';
              if (detect.isiWUTAndroid()) schema = 'newtab:' + schema;
              window.location.assign(schema);
            }
          }
        ],
      }).open();
    }
  }

  render() {
    const isWeApp = detect.isWeChat() && detect.isMiniProgram();

    return (
      <Page name="home">
        <Block title="校历">
          <div className={styles.calendar}>
            <Preloader size={30} />
            <img src={imgCalendar} onClick={this.preview} alt="校历" />
          </div>
          <Button fill onClick={this.download}>打开小程序查看原图</Button>
        </Block>

        <Block
          title="理工指北"
        >
          <List>
            <ListItem
              title="图书馆"
              icon="book"
              url="https://m.q.qq.com/a/s/4cb1870c36fd6f9e751cfd976c00b84e"
              onClick={this.onListItemClick}
            />
            <ListItem
              title="校车"
              icon="card"
              url="https://m.q.qq.com/a/s/4cb1870c36fd6f9e751cfd976c00b84e"
              onClick={this.onListItemClick}
            />
            <ListItem
              title="食堂"
              icon="tea"
              url="https://m.q.qq.com/a/s/d2e7c6251a5b9e015528cb78de386382|/pages/index/list?id=7"
              onClick={this.onListItemClick}
            />
            <ListItem
              title="校医院"
              icon="hospital"
              url="https://m.q.qq.com/a/s/f0f41c6319485590cfb80d955b7d18c9|/pages/biz/article/detail?id=37"
              onClick={this.onListItemClick}
            />
            <ListItem
              title="卡务中心"
              icon="card"
              url="https://m.q.qq.com/a/s/0a25cd954d25f3c06eada093f6ef35f8|/pages/biz/article/detail?id=6"
              onClick={this.onListItemClick}
            />
          </List>
        </Block>

        {!isWeApp && (
          <Block
            title="校歌"
            extra={<a href="//m.music.163.com/m/applink/?scheme=orpheus%3A%2F%2Fsong%2F449577766%3Fthirdfrom%3Diwut" className="external">打开网易云音乐</a>}
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
        )}
      </Page>
    )
  }
}

export default HomePage;
