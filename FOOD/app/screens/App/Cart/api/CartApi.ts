import { ApiClient } from '@app/service/Network/ApiService'
export default {
  getCart: () => ApiClient.get(`/api/v1/cart`, { params: {} }),
}
