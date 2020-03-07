import request from '@/utils/request'


/**
 * 查询用户的会员状态
 * @param username
 */
export function rtaStatus() {
  return request({
    url: '/app/rta/rtaStatus.api',
    method: 'post'
  })
}

/**
 * 发起会员申请，锁定CCASH
 * @param username
 */
export function rtalock(obj) {
  return request({
    url: '/app/rta/rtalock.api',
    method: 'post',
    data:obj
  })
}
