import request from '@/utils/request'

/**
 * 币币交易界面初始化信息
 * @param username
 */
export function marketTrade(obj) {
  return request({
    url: '/app/trade/marketTrade.api',
    method: 'post',
    data:obj
  })
}

/**
 * 提交交易信息
 * @param username
 */
export function tradeCoin(obj) {
  return request({
    url: '/app/trade/tradeCoin.api',
    method: 'post',
    data:obj
  })
}

/**
 * 撤销委托挂单
 * @param username
 */
export function orderCancel(orderId) {
  return request({
    url: '/app/trade/orderCancel.api',
    method: 'post',
    params:{orderId}
  })
}

/**
 * 委托成交历史记录查询
 * @param username
 */
export function hisRecords(obj) {
  return request({
    url: '/app/trade/hisRecords.api',
    method: 'post',
    data:obj
  })
}

/**
 * 当前委托记录查询
 * @param username
 */
export function curRecords(symbol) {
  return request({
    url: '/app/trade/curRecords.api',
    method: 'post',
    params:{symbol}
  })
}
