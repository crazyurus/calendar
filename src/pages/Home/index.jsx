import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import { Page, Button, Preloader } from 'framework7-react';
import Block from '@/components/Block';
import List from '@/components/List';
import ListItem from '@/components/List/item';
import detect from '@/utils/detect';
import imgCalendar from '@/assets/images/calendar.min.jpg';
import styles from './index.less';

const url = location.protocol + '//' + location.host + '/act/calendar/images/calendar-' + process.env.TERM + '.jpg';

@autobind
class HomePage extends Component {

  componentDidMount() {
    if (detect.isWeChat()) {
      wx.config({
        debug: false
      });
    }

    if (!navigator.onLine) {
      this.$f7.toast.create({
        text: '当前处于离线状态，无法加载校歌',
        closeButton: true,
        closeButtonText: '好的'
      }).open();
    }
  }

  preview() {
    if (detect.isWeChat()) {
      wx.previewImage({
        current: url,
        urls: [url]
      });
    }
    else if (detect.isiWUTiPhone()) {
      tokenNative.previewImages({
        images: [url]
      });
    }
    else {
      this.$f7.photoBrowser.create({
        photos: [url],
        navbar: false,
        toolbar: false,
        theme: 'dark'
      }).open();
    }
  }

  download() {
    const fileName = '校历' + process.env.TERM + '.jpg';

    if (detect.isiWUTiPhone()) {
      tokenNative.alertTitles({
        title: '提示',
        msg: '确定要保存本学期校历到手机相册吗？',
        actionTitles: ['保存'],
        feedBack(index) {
          if (index === 0) {
            tokenNative.saveImage({
              url,
              success() {
                tokenNative.showSuccessHUD('保存成功');
              },
              failure() {
                token.showNativeToast('保存失败，未开启相册访问权限', 3);
              }
            });
          }
        }
      });
    }
    else if (detect.isNewiWUTAndroid()) {
      token.shareImageFromUrl(fileName, url);
    }
    else if (detect.isiWUTAndroid()) {
      const $a = document.createElement('a');
      $a.setAttribute('href', 'newtab:' + url);
      $a.setAttribute('download', fileName);

      const evObj = document.createEvent('MouseEvents');
      evObj.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, true, false, 0, null);
      $a.dispatchEvent(evObj);
    }
    else this.$f7.dialog.alert('请长按上方图片保存到手机');
  }

  onListItemClick(url) {
    window.location.assign(`mqqapi://microapp/open?mini_appid=1109701341&fakeUrl=https://m.q.qq.com/a/s/1af6003e65ad67d72245fa85&xcxPath=${url}&xcxSourceType=0`);
  }

  render() {
    return (
      <Page name="home">
        <Block title="校历">
          <div className={styles.calendar}>
            <Preloader size={30} />
            <img src={imgCalendar} onClick={this.preview} alt="校历" />
          </div>
          <Button fill onClick={this.download}>保存到手机</Button>
        </Block>

        <Block 
          title="理工指北"
          extra={<a href="https://m.q.qq.com/a/s/1af6003e65ad67d72245fa85" className="external">打开小程序</a>}
        >
          <List>
            <ListItem
              title="图书馆"
              icon="book"
              url="pages/index/index.html"
              onClick={this.onListItemClick}
            />
            <ListItem
              title="校车"
              icon="card"
              url="pages/index/index.html"
              onClick={this.onListItemClick}
            />
            <ListItem
              title="食堂"
              icon="tea"
              url="pages/index/list.html?id=7"
              onClick={this.onListItemClick}
            />
            <ListItem
              title="校医院"
              icon="hospital"
              url="pages/index/detail.html?id=37"
              onClick={this.onListItemClick}
            />
            <ListItem
              title="卡务中心"
              icon="card"
              url="pages/index/detail.html?id=6"
              onClick={this.onListItemClick}
            />
          </List>
        </Block>

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
      </Page>
    )
  }
}

export default HomePage;
