/*
 * @Author: Wanko
 * @Date: 2023-02-15 18:43:50
 * @LastEditors: Wanko
 * @LastEditTime: 2024-06-06 15:50:53
 * @Description: 入口文件
 */

// import request from '../dist/index.es'
// import word from '../src/main'

import {
  time,
  now,
  today,
  dayOfYear,
  weekOfYear,
  isLeapYear,
  toArray,
  toObject,
  isBetween,
  updateLocale,
  relativeTime
} from '../src/index.js'


console.log(time())
console.log(now())
console.log(today())
console.log(time().year())
console.log(time().month())
console.log(time().day())
console.log('月天数：', time().daysInMonth())
console.log('毫秒时间戳', time().valueOf())
console.log('秒时间戳', time().unix())

console.log('-----格式化-----')
console.log(time().format('YYYY-MM-DD'))
console.log(time().format('YYYY/MM/DD'))
console.log(time('2019-01-25').format('DD/MM/YYYY'))

console.log('-----比较日期差异-----')

const date1 = time('2024-01-25')
const date2 = time('2022-06-05')

console.log(date1.diff(date2))
console.log(date1.diff(date2, 'day'))
console.log(date1.diff(date2, 'month'))
console.log(date1.diff(date2, 'year'))
console.log(date1.diff(date2, 'week'))

console.log('-----更改日期-----')

console.log(time('2019-01-25').add(7, 'day').format('YYYY-MM-DD'))
console.log(time().subtract(7, 'day').format('YYYY-MM-DD'))

console.log('------高级操作---------')
time
  .extend(dayOfYear)
  .extend(weekOfYear)
  .extend(isLeapYear)
  .extend(toArray)
  .extend(toObject)
  .extend(isBetween)
  .extend(updateLocale)
  .extend(relativeTime)
console.log('今年的第几天：', time().dayOfYear())
console.log('该年的第几周', time().week())
console.log('转数组', time().toArray())
console.log('转数组', time().toObject())

console.log('------查询方法---------')
console.log('是否是day.JS', time.isDayjs(time()))
console.log('是否是day.JS', time.isDayjs(new Date()))
console.log('是否是闰年', time().isLeapYear())
console.log(
  '是否两者之间',
  time('2024-06-06').isBetween('2024-06-05', '2024-06-07')
)
console.log(
  '是否两者之间',
  time('2024-06-06').isBetween('2024-06-04', '2024-06-05')
)
console.log('是否之前', time().isBefore('2024-06-07'))
console.log('是否之后', time().isAfter('2024-06-07'))
console.log('是否相同', time().isSame('2024-06-06', 'day'))

console.log('------距今过去多久---------')

time.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s前',
    s: 'a few seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a 天',
    dd: '%d 天',
    M: 'a month',
    MM: '%d months',
    y: '1 年', // 18个月以内返回 一年前
    yy: '%d年' // xx年前
  }
})

console.log(time('1999-08-01').fromNow(true))
