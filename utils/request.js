// 发送ajax 
import config from './config'
/**
 * 功能函数封装
 */
const request = function (url, data = {}, method = 'GET') {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.host + url,
      data: data,
      method: method,
      success: (res) => {
        resolve(res.data);
      },
      fail: (err) => {
        reject(err);
      }
    })
  });
}

export default request;