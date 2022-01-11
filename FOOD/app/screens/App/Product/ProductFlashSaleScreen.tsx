import ScreenWrapper from '@app/components/Screen/ScreenWrapper'
import { colors } from '@app/theme'
import React, { useEffect } from 'react'
import HeaderCategoryFlashSale from './layout/flashSale/HeaderCategoryFlashSale'
import HeaderTimeFlashSale from './layout/flashSale/HeaderTimeFlashSale'
import ListProductFlashSale from './layout/flashSale/ListProductFlashSale'

const ProductFlashSaleScreen = () => {
  useEffect(() => {
    return () => {}
  }, [])

  const renderContent = () => {
    return (
      <>
        <HeaderTimeFlashSale />
        <HeaderCategoryFlashSale />
        <ListProductFlashSale />
      </>
    )
  }
  return (
    <ScreenWrapper
      backgroundColor="#F5F5F5"
      titleHeader={'Flash Sale'}
      backgroundHeader={colors.white}
      color={'black'}
      back
      children={<>{renderContent()}</>}
    />
  )
}

export default ProductFlashSaleScreen
