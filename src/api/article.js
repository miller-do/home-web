import request from '@/utils/request'

export const getList = (data) => {
  return request({
    url: '/article/index',
    method: 'post',
    data: data,
  })
}

export const detail = (data) => {
  return request({
    url: '/article/detail',
    method: 'get',
    params: data,
  })
}

export const recommendList = (data) => {
  return request({
    url: '/article/recommendList',
    method: 'get',
    params: data,
  })
}

export const latestList = (data) => {
  return request({
    url: '/article/latestList',
    method: 'get',
    params: data,
  })
}

export const hotList = (data) => {
  return request({
    url: '/article/hotList',
    method: 'get',
    params: data,
  })
}
