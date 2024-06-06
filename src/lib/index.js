/*
 * @Author: Wanko
 * @Date: 2024-05-31 17:31:51
 * @LastEditors: Wanko
 * @LastEditTime: 2024-06-06 15:27:39
 * @Description: 
 */
import time from 'dayjs'

function now() {
  return time().format('YYYY-MM-DD hh:mm:ss')
}

function today() {
  return time().format('YYYY-MM-DD')
}

export { today, now, time }
