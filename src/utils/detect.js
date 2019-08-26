export function isWeChat() {
  return navigator.userAgent.includes('MicroMessenger');
}

export function isMQQ() {
  return navigator.userAgent.includes('QQ');
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

export function isMiniProgram() {
  return navigator.userAgent.includes('miniProgram');
}

export default {
  isWeChat,
  isiWUTiPhone,
  isiWUTAndroid,
  isNewiWUTAndroid,
  isMiniProgram,
  isMQQ
};

