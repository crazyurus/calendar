import React, { Component } from 'react';
import { Page, Button } from 'framework7-react';
import Block from '@/components/Block';
import List from '@/components/List';
import ListItem from '@/components/List/item';
import detect from '@/utils/detect';
import styles from './index.less';

const url = location.host + '/act/calendar/images/calendar.jpg';

class HomePage extends Component {
  constructor(props) {
    super(props);

    if (detect.isWeChat()) {
      wx.config({
        debug: false
      });
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
    else alert('长按上方图片保存到手机');
  }

  render() {
    return (
      <Page name="home">
        <Block title="校历">
          <div className={styles.calendar} onClick={this.preview} />
          <Button fill onClick={this.download}>保存到手机</Button>
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
          extra={<a href="//m.music.163.com/m/applink/?scheme=orpheus%3A%2F%2Fsong%2F449577766%3Fthirdfrom%3Diwut" className="external">打开网易云音乐</a>}
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
    )
  }
}

export default HomePage;
