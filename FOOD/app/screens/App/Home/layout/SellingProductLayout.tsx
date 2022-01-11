import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native'
import { colors } from '@app/theme'
import R from '@app/assets/R'
import FstImage from '@app/components/FstImage/FstImage'
import ProductSellingComponent from '../componnents/ProductSellingComponents'
import { TouchableOpacity } from 'react-native'
import NavigationUtil from '@app/navigation/NavigationUtil'
import { SCREEN_ROUTER_APP } from '@app/constant/Constant'
// import { productSellingState } from './interface/layoutHomeInterface'

const SellingProductLayout = () => {
  // const { listProductSelling } = props
  const renderHeader = () => {
    return (
      <View style={styles.containerHeader}>
        <Text children={'Sản phẩm bán chạy'} style={styles.textHeader} />

        <TouchableOpacity
          style={styles.containerHeaderRight}
          onPress={() => {
            NavigationUtil.navigate(SCREEN_ROUTER_APP.PRODUCT_SELLING)
          }}
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
        data={[{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]}
        keyExtractor={(item, index) => `${item.id} ${index}`}
        horizontal
        renderItem={item => {
          return <ProductSellingComponent item={item} />
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}
export default SellingProductLayout
const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingVertical: 10,
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
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
  iconStyle: {
    width: 24,
    height: 24,
  },
  textReadMore: {
    color: '#425369',
    fontSize: 16,
    lineHeight: 24,
  },
  imageStyle: {
    width: 104,
    height: 78,
    borderRadius: 12,
  },
  containerItem: {
    width: 104,
    height: 88,
    justifyContent: 'center',
    marginRight: 16,
  },
  containerNameItem: {
    width: '100%',
    height: 20,
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerInfoItem: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 20,
    paddingHorizontal: 4,
  },
  textNameItem: {
    fontSize: 14,
    lineHeight: 18,
    color: '#262626',
  },
  iconItem: {
    width: 16,
    height: 16,
  },
})
