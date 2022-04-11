import { ApiClient } from '@app/service/Network/ApiService'
import _ from 'lodash'
export default {
  getRestaurantDetail: (payload: { id: number }) =>
    ApiClient.get(`/api/v1/restaurant/${payload.id}`, { params: {} }),
}
