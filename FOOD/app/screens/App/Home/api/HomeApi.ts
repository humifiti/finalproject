import { ApiClient } from '@app/service/Network/ApiService'
export default {
  getCategory: () => ApiClient.get(`/api/v1/category`, { params: {} }),
}
