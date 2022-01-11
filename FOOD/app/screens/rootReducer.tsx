import SwitchNavigatorSlice from '@app/navigation/switchNavigatorSlice'
import AccountReducer from './App/Account/AccountSlice'
// import StoreReducer from './store/store_list/StoreSlice'
// import AuthReducer from './auth/AuthSlice'
import RootReducer from './rootSlice'
const rootReducer = {
  accountReducer: AccountReducer,
  rootReducer: RootReducer,
  switchNavigatorReducer: SwitchNavigatorSlice
  // authReducer: AuthReducer,
  // storeReducer: StoreReducer,
}

export default rootReducer
