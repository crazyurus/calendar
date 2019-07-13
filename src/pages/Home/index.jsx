import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import { Page, Button, Preloader } from 'framework7-react';
import Block from '@/components/Block';
import List from '@/components/List';
import ListItem from '@/components/List/item';
import detect from '@/utils/detect';
import imgCalendar from '@/assets/images/calendar.min.jpg';
import styles from './index.less';

const url = location.protocol + '//' + location.host + '/act/calendar/images/calendar.jpg';

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
      token.shareImageFromUrl('校历.jpg', url);
    }
    else if (detect.isiWUTAndroid()) {
      const $a = document.createElement('a');
      $a.setAttribute('href', 'newtab:' + url);
      $a.setAttribute('download', '校历.jpg');

      const evObj = document.createEvent('MouseEvents');
      evObj.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, true, false, 0, null);
      $a.dispatchEvent(evObj);
    }
    else this.$f7.dialog.alert('请长按上方图片保存到手机');
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

        <Block title="时间表">
          <List>
            <ListItem
              title="图书馆（暑期）"
              icon="book"
              url="https://mp.weixin.qq.com/s/_tR5VnVRYJcIFIr0-EZFdw"
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
          extra={<a href="//m.music.163.com/m/applink/?scheme=orpheus%3A%2F%2Fsong%2F449577766%3Fthirdfrom%3Diwut" className="external">打开网易云音乐</a>}
        >
          {navigator.onLine ? <iframe
            className={styles.iframe}
            frameBorder="no"
            border="0"
            marginWidth="0"
            marginHeight="0"
            src="//music.163.com/outchain/player?type=2&amp;id=449577766&amp;auto=0&amp;height=66"
          >暂不支持</iframe> : <p>离线状态下无法加载校歌</p>}
        </Block>
      </Page>
    )
  }
}

export default HomePage;
