import SwitchNavigatorSlice from '@app/navigation/switchNavigatorSlice'

// import StoreReducer from './store/store_list/StoreSlice'
// import AuthReducer from './auth/AuthSlice'
import RootReducer from './rootSlice'
const rootReducer = {
  rootReducer: RootReducer,
  switchNavigatorReducer: SwitchNavigatorSlice,
  // authReducer: AuthReducer,
  // storeReducer: StoreReducer,
}

export default rootReducer
