import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FstImage from '@app/components/FstImage/FstImage'
import R from '@app/assets/R'
import { colors } from '@app/theme'
import { StyleSheet } from 'react-native'
interface State {
  styleContainer?: any
  item?: any
  styleImage?: any
}
const ProductSellingComponent = (props: State) => {
  console.log(props)
  const renderName = (name: string) => {
    if (name.length >= 29) {
      return name.slice(0, 31) + '...'
    } else {
      return name
    }
  }
  return (
    <TouchableOpacity style={[styles.containerComponent, props.styleContainer]}>
      <FstImage
        source={R.images.img_example_product}
        style={[styles.imageProduct, props.styleImage]}
      />
      <View style={styles.containerInfo}>
        <Text
          children={`${renderName('Ống thép cao cấp')}`}
          style={styles.textName}
        />
        <View style={{ justifyContent: 'space-between' }}>
          <Text children={`888.0000đ`} style={styles.textPrice} />
          <View style={styles.containerTextBought}>
            <Text children={'Đã bán 13'} style={styles.textBought} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}
export default ProductSellingComponent
const styles = StyleSheet.create({
  containerComponent: {
    width: 165,
    height: 285,
    borderRadius: 16,
    backgroundColor: colors.white,
    marginRight: 16,
  },
  imageProduct: {
    width: 165,
    height: 165,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  containerInfo: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    justifyContent: 'space-between',
    height: 285 - 165,
  },
  textName: {
    fontSize: 16,
    lineHeight: 24,
    color: '#262626',
  },
  textPrice: {
    color: '#0077B6',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  containerTextBought: {
    width: '100%',
    height: 14,
  },
  textBought: {
    alignItems: 'center',
    color: '#8C8C8C',
    fontSize: 12,
    lineHeight: 20,
  },
})
