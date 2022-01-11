import ScreenWrapper from '@app/components/Screen/ScreenWrapper'
import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import CategoryHomeLayout from './layout/CategoryHomeLayout'
import FlashSaleLayout from './layout/FlashSaleLayout'
import HeaderHomeLayout from './layout/HeaderHomeLayout'
import KeyLayout from './layout/KeyLayout'
import ProjectIntroductionLayout from './layout/ProjectIntroduction'
import SlideBarHomeLayout from './layout/SlideBarHomeLayout'
import SellingProductLayout from './layout/SellingProductLayout'
const HomeScreen = () => {
  useEffect(() => {
    return () => {}
  }, [])

  return (
    <ScreenWrapper
      backgroundColor="#F5F5F5"
      children={
        <>
          
        </>
      }
    />
  )
}

export default HomeScreen
