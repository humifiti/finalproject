import R from '@app/assets/R'
import FstImage from '@app/components/FstImage/FstImage'
import { SCREEN_ROUTER_APP } from '@app/constant/Constant'
import NavigationUtil from '@app/navigation/NavigationUtil'
import React from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import ProductFlashSaleComponent from '../componnents/ProductFlashSaleComponent'
import { productFlashSaleState } from './interface/layoutHomeInterface'

const listFlashSale = [
  {
    id: 0,
  },
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
]
const FlashSaleLayout = (props: productFlashSaleState) => {
  const { listProductFlashSale, time } = props
  console.log(listProductFlashSale, time)

  const onReadMore = () => {
    NavigationUtil.navigate(SCREEN_ROUTER_APP.PRODUCT_FLASH_SALE)
  }
  const renderHeader = () => {
    return (
      <View style={styles.containerHeader}>
        <View style={styles.containerHeaderLeft}>
          <Text children={'Flash sale'} style={styles.textHeader} />
          <View style={styles.viewTime}>
            <View style={styles.viewItemTime}>
              <Text children={'08'} style={styles.textItemTime} />
            </View>
            <Text children={':'} style={[styles.textHeader, styles.dotStyle]} />
            <View style={styles.viewItemTime}>
              <Text children={'20'} style={styles.textItemTime} />
            </View>
            <Text children={':'} style={[styles.textHeader, styles.dotStyle]} />
            <View style={styles.viewItemTime}>
              <Text children={'10'} style={styles.textItemTime} />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.containerHeaderRight}
          onPress={onReadMore}
        >
          <Text children={'Xem thêm'} style={styles.textReadMore} />
          <FstImage
            source={R.images.ic_chevron_right}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      {renderHeader()}
      <FlatList
        style={{ marginTop: 20 }}
        contentContainerStyle={{ flexGrow: 1 }}
        data={listFlashSale}
        keyExtractor={(item, index) => `${item.id} ${index}`}
        horizontal
        renderItem={item => {
          return <ProductFlashSaleComponent item={item} />
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}
export default FlashSaleLayout
const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  containerHeaderLeft: {
    flexDirection: 'row',
  },
  containerHeaderRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textHeader: {
    color: '#073B4C',
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
  },
  viewItemTime: {
    width: 24,
    height: 24,
    backgroundColor: '#073B4C',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 6,
  },
  viewTime: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  textItemTime: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '500',
  },
  iconStyle: {
    width: 24,
    height: 24,
  },
  textReadMore: {
    color: '#425369',
    fontSize: 16,
    lineHeight: 24,
  },
  dotStyle: {
    marginLeft: 6,
  },
})
