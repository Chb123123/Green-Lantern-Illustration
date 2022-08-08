import axios from '@/util/defaultUrl'

export const getImgList = function (type, page, size) {
  return axios({
    method: 'get',
    url: 'getImages',
    params: {
      responseType: 'blob',
      type: type || '',
      page: page || 0,
      size: size || 18
    }
  })
}
