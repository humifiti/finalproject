import { ApiClient } from '@app/service/Network/ApiService'

export const getAccounts = (payload: any) => ApiClient.get('/users', payload)
