import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FstImage from '@app/components/FstImage/FstImage'
import R from '@app/assets/R'
import { colors } from '@app/theme'
import { StyleSheet } from 'react-native'
import { Product } from '../layout/interface/layoutHomeInterface'

interface State {
  item?: Product
}
const ProductFlashSaleComponent = (props: State) => {
  const { item } = props
  console.log(item)

  return (
    <TouchableOpacity style={styles.containerComponent}>
      <FstImage
        source={R.images.img_example_product}
        style={styles.imageProduct}
      />
      <View style={styles.containerInfo}>
        <View style={styles.containerSale}>
          <Text children={`888.0000đ`} style={styles.textPriceSale} />
          <Text children={`-30%`} style={styles.textDiscountSale} />
        </View>

        <Text children={`888.0000đ`} style={styles.textPrice} />

        <View style={styles.containerBought}>
          <View
            style={[
              {
                width: (10 / 20) * 100,
              },
              styles.containerBoughtInBought,
            ]}
          />
          <View style={styles.containerTextBought}>
            <Text children={'Đã bán 13'} style={styles.textBought} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}
export default ProductFlashSaleComponent
const styles = StyleSheet.create({
  containerComponent: {
    width: 140,
    height: 220,
    borderRadius: 16,
    backgroundColor: colors.white,
    marginRight: 19,
  },
  imageProduct: {
    width: 140,
    height: 140,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  containerInfo: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    paddingTop: 5,
    justifyContent: 'space-between',
  },
  containerSale: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textPriceSale: {
    textDecorationLine: 'line-through',
    fontSize: 12,
    lineHeight: 20,
    color: '#595959',
  },
  textDiscountSale: {
    color: '#FF4D4F',
    fontSize: 12,
    lineHeight: 20,
  },
  textPrice: {
    color: '#0077B6',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  containerBought: {
    width: '90%',
    height: 14,
    borderRadius: 10,
    backgroundColor: '#ACCFE2',
    marginTop: 5,
  },
  containerBoughtInBought: {
    height: 14,
    backgroundColor: '#0077B6',
    borderRadius: 10,
  },
  containerTextBought: {
    position: 'absolute',
    width: '100%',
    height: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBought: {
    alignItems: 'center',
    color: colors.white,
    fontSize: 12,
  },
})
