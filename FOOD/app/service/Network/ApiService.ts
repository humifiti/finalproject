import R from '@app/assets/R'
// import NavigationUtil from '@app/navigation/NavigationUtil';
const BASE_URL_DEV = 'http://3.1.13.10:8700'
import { showMessages } from '@app/utils/AlertHelper'
import AsyncStorage from '@react-native-community/async-storage'
import { ResponseType } from '@app/service/Network/model/ApiResponse'
import AsyncStoreService from '../AsyncStorage/AsyncStorageService'

const createAPI = () => {
  const APIInstant = require('axios').default.create()
  APIInstant.defaults.baseURL = BASE_URL_DEV
  APIInstant.defaults.timeout = 20000
  APIInstant.defaults.headers = { 'Content-Type': 'application/json' }
  APIInstant.interceptors.request.use(async (config: any) => {
    config.headers.token = await AsyncStoreService.getToken()
    return config
  }, Promise.reject)

  APIInstant.interceptors.response.use((response: ResponseType<any>) => {
    const data = response.data
    if (data && data.code === 403) {
      showMessages(R.strings().notification, R.strings().re_login)
      AsyncStorage.setItem('token', '').then(() => {
        // NavigationUtil.navigate('Auth');
      })
    } else if (data && data.status !== 1)
      showMessages(R.strings().notification, data.message)
    return response
  })
  return APIInstant
}

const axiosClient = createAPI()

/* Support function */
function handleResult<T>(api: any) {
  // if (NetworkHelper.isInternetReachable) {
  return api.then((res: any) => {
    return handleResponse<T>(res.data)
  })
  // } else Promise.reject(new Error('Network offline'));
}

function handleResponse<T>(data: ResponseType<T>) {
  if (data.status !== 1)
    return Promise.reject(new Error(data?.message || 'Co loi xay ra'))
  return Promise.resolve(data)
}

export const ApiClient = {
  get: (url: string, payload: any) =>
    handleResult(axiosClient.get(url, payload)),
  post: (url: string, payload: any) =>
    handleResult(axiosClient.post(url, payload)),
  put: (url: string, payload: any) =>
    handleResult(axiosClient.put(url, payload)),
  path: (url: string, payload: any) =>
    handleResult(axiosClient.patch(url, payload)),
  delete: (url: string, payload: any) =>
    handleResult(axiosClient.delete(url, payload)),
}
