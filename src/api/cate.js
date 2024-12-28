import request from '@/utils/request'

export const cateList = (data) => {
  return request({
    url: '/cate/getCateList',
    method: 'post',
    data: data,
  })
}
