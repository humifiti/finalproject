import { ApiClient } from '@app/service/Network/ApiService'
export default {
  getCart: () => ApiClient.get(`/api/v1/cart`, { params: {} }),
  updateCart: (payload: { food_id: number; quantity: number }) =>
    ApiClient.put(`/api/v1/cart`, payload),
  deleteCart: (payload: { food_id: number }) =>
    ApiClient.delete(`/api/v1/cart`, { params: payload }),
}
