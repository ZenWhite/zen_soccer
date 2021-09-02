import ky from 'ky'

const baseUrl = process.env.BASE_URL
const auth = process.env.TOKEN

export const request = ({ method = 'get', endpoint, params = {} }) =>
  ky[method](baseUrl + endpoint + (params.path || ''), {
    headers: {
      'X-Auth-Token': auth
    },
    searchParams: params.search
    //add body
  })
