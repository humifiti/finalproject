import { FlatList, View } from 'react-native'
import React from 'react'
import { colors } from '@app/theme'
import ScreenWrapper from '@app/components/Screen/ScreenWrapper'
import FstImage from '@app/components/FstImage/FstImage'
import R from '@app/assets/R'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'
import ProductSellingComponent from '../Home/componnents/ProductSellingComponents'
const ProductSellingScreen = () => {
  const renderContent = () => {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.flatListStyle}
          data={[{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]}
          keyExtractor={(item, index) => `${item.id} ${index}`}
          numColumns={2}
          renderItem={item => {
            return (
              <ProductSellingComponent
                item={item}
                styleContainer={styles.containerItem}
                styleImage={styles.imageStyle}
              />
            )
          }}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    )
  }
  return (
    <ScreenWrapper
      backgroundColor="#F5F5F5"
      titleHeader={'Sản phẩm bán chạy'}
      backgroundHeader={colors.white}
      color={'black'}
      back
      rightComponent={
        <>
          <TouchableOpacity style={styles.buttonIconStyle}>
            <FstImage source={R.images.ic_cart_blue} style={styles.icon} />
          </TouchableOpacity>
        </>
      }
      children={<>{renderContent()}</>}
    />
  )
}
export default ProductSellingScreen
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  buttonIconStyle: {
    // padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 5,
  },
  containerItem: { marginTop: 15, width: '47%' },
  imageStyle: {
    width: '100%',
  },
  flatListStyle: {
    alignItems: 'center',
    paddingHorizontal: 15,
  },
})
