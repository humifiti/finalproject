const SCREEN_ROUTER_APP = {
  PRODUCT: 'PRODUCT',
  NOTIFICATION: 'NOTIFICATION',
  CART: 'CART_SCREEN',
  HOME: 'HOME',
  ORDER: 'ORDER',
  USER: 'USER',
  SEARCH: 'SEARCH',
  FOOD_DETAIL: 'FOOD_DETAIL',
  RESTAURANT_DETAIL: 'RESTAURANT_DETAIL',
  UPDATE_USER_INFO: 'UPDATE_USER_INFO',
  DELIVERY_ADDRESS: 'DELIVERY_ADDRESS',
  ADD_ADDRESS: 'ADD_ADDRESS',
  CHANGE_PASS: 'CHANGE_PASS',
}

const MAIN_TAB_CUSTOMER = {
  HOME: 'HOME',
  PRODUCT: 'PRODUCT',
  CART: 'CART',
  USER: 'USER',
}

export const GOONG_HOST = 'https://rsapi.goong.io/'

export const api_key = '3yJu457TLe2c9bvAuzohv7ms6ds65uPRUnG587bi'

const API_STATUS = {
  SUCCESS: 200,
  CREATED: 201,
  NOTFOUND: 404,
  BAD_REQUEST: 400,
  SERVER: 500,
  UNAUTHORIZED: 401,
  CONFLICT: 409,
  FORBIDDEN: 403,
  BAD_GATEWAY: 502,
  NOT_EXISTED: 405,
}

const SCREEN_ROUTER_APP_ADMIN = {
  PRODUCT: 'PRODUCT',
  NOTIFICATION: 'NOTIFICATION',
  CART: 'CART',
}

const SCREEN_ROUTER_AUTH = {
  SPLASH: 'SPLASH',
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER',
  FORGOT_PASSWORD: 'FORGOT_PASSWORD',
  CHANGE_PASSWORD: 'CHANGE_PASSWORD',
  OTP: 'OTP',
}

const SCREEN_ROUTER = {
  SPLASH: 'SPLASH',
  AUTH: 'AUTH',
  MAIN: 'MAIN',
  MAIN_ADMIN: 'MAIN_ADMIN',
}

export const ROOT_STACK = {
  MAIN_APP: 'MAIN_APP',
}

export const APP_SLICE = {
  SWITCH: 'switchNavigatorReducer',
}

const DEFAULT_PARAMS = {
  PAGE: 1,
  LIMIT: 24,
}

// const REG_EMAIL =
//   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export {
  DEFAULT_PARAMS,
  SCREEN_ROUTER,
  SCREEN_ROUTER_APP,
  SCREEN_ROUTER_APP_ADMIN,
  SCREEN_ROUTER_AUTH,
  API_STATUS,
  MAIN_TAB_CUSTOMER,
  // REG_EMAIL,
}
