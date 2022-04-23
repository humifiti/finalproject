import { ApiClient } from '@app/service/Network/ApiService'
export default {
  getListOrderCurrent: () =>
    ApiClient.get(`/api/v1/order/current`, { params: {} }),
  getListOrder: (payload: { page: number; limit: number }) =>
    ApiClient.get(`/api/v1/order`, { params: payload }),
}
