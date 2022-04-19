import SwitchNavigatorSlice from '@app/navigation/switchNavigatorSlice'
import ListAddressSlice from './App/Account/slice/ListAddressSlice'
import CartSlice from './App/Cart/slice/CartSlice'
import locationReducer from './locationReducer'

// import StoreReducer from './store/store_list/StoreSlice'
// import AuthReducer from './auth/AuthSlice'
import RootReducer from './rootSlice'
const rootReducer = {
  rootReducer: RootReducer,
  switchNavigatorReducer: SwitchNavigatorSlice,
  locationReducer: locationReducer,
  cartReducer: CartSlice,
  listAddressReducer: ListAddressSlice,
  // authReducer: AuthReducer,
  // storeReducer: StoreReducer,
}

export default rootReducer
