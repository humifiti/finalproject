export interface Category {}
export interface Product {
  id?: any
  price?: number
  name?: string
  status?: any
}
export interface categoryState {
  listCategory?: Category[]
}
export interface productSellingState {
  listProductSelling?: Product[]
}
export interface productFlashSaleState {
  listProductFlashSale?: Product[]
  time?: any
}
export interface KeyState {
  listKey?: any[]
}
