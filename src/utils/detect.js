export function isWeChat() {
  return navigator.userAgent.includes('MicroMessenger');
}

export function isiWUTiPhone() {
  return !!window.tokenNative;
}

export function isNewiWUTAndroid() {
  return window.token && token.shareImageFromUrl;
}

export function isiWUTAndroid() {
  return window.token && navigator.userAgent.toLocaleLowerCase().includes('android');
}

export default {
  isWeChat,
  isiWUTiPhone,
  isiWUTAndroid,
  isNewiWUTAndroid
};

