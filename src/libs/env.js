/**
 * 获取浏览器平台信息
 */
const userAgent = navigator.userAgent

function formatVersion(v) {
  return String(v).replace(/_/g, '.')
}

function getOSInfo(ua) {
  let os = {
    name: 'unknown',
    version: '0.0.0',
  }

  if (/Windows\sPhone\s(?:OS\s)?([\d.]+)/.test(ua)) {
    os = {
      name: 'Windows Phone',
      isWindowsPhone: true,
      version: RegExp.$1,
    }
  } else if (/Safari/.test(ua) && /Android[\s/]([\d.]+)/.test(ua)) {
    os.version = RegExp.$1
    if (/Mobile\s+Safari/.test(ua)) {
      os.name = 'Android'
      os.isAndroid = true
    } else {
      os.isAndroid = true
      os.name = 'AndroidPad'
      os.isAndroidPad = true
    }
  } else if (/(iPhone|iPad|iPod)/.test(ua)) {
    const name = RegExp.$1
    if (/OS ([\d_.]+) like Mac OS X/.test(ua)) {
      os = {
        name,
        isIPhone: name !== 'iPad',
        isIPad: name === 'iPad',
        isIOS: true,
        version: RegExp.$1,
      }
    }
  }
  os.version = formatVersion(os.version)
  return os
}

function getBrowserInfo(ua) {
  const browser = {
    name: 'unknown',
    version: '0.0.0',
  }
  const browserList = [{
    name: 'QQ',
    reg: /MQQBrowser\/([\d.]+)/,
  }, {
    name: 'UC',
    reg: /(?:UCWEB|UCBrowser\/)([\d.]+)/,
  }, {
    name: 'Firefox',
    reg: /(?:Firefox|FxiOS)\/([\d.]+)/,
  }, {
    name: 'IE',
    reg: /MSIE\s([\d.]+)/,
  }, {
    name: 'IEMobile',
    reg: /IEMobile\/([\d.]+)/,
  }, {
    name: 'Chrome',
    reg: /(?:Chrome|CriOS)\/([\d.]+)/,
    /* eslint-disable  no-param-reassign */
    fn(brs) {
      if (/Version\/[\d+.]+\s*Chrome/.test(ua)) {
        brs.name = 'Chrome Webview'
        brs.isWebview = true
      }
    },
  }, {
    name: 'Android',
    reg: /Android[\s/]([\d.]+)/,
  }, {
    name: 'ios',
    reg: /iPhone|iPad|iPod/,
    /* eslint-disable  no-param-reassign */
    fn(brs) {
      if (/Safari/.test(ua) && /Version\/([\d.]+)/.test(ua)) {
        brs.name = 'Safari'
        brs.version = RegExp.$1
        brs.isSafari = true
      } else if (/OS ([\d_.]+) like Mac OS X/.test(ua)) {
        brs.name = 'iOS Webview'
        brs.version = RegExp.$1
        brs.isWebview = true
      }
    },
  }]

  for (let i = 0; i < browserList.length; i += 1) {
    if (browserList[i].reg.test(ua)) {
      browser.version = RegExp.$1
      if (browser.version) {
        browser.name = browserList[i].name
        browser[`is${browserList[i].name}`] = true
      }
      if (browserList[i].fn) {
        browserList[i].fn(browser)
      }
      break
    }
  }

  browser.version = formatVersion(browser.version)
  return browser
}
export default {
  browser: getBrowserInfo(userAgent),
  os: getOSInfo(userAgent),
  platform: navigator.platform,
  vendor: navigator.vendor,
}
