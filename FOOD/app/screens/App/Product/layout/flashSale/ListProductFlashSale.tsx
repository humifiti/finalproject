import { Product } from '@app/screens/App/Home/layout/interface/layoutHomeInterface'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '@app/theme'
import { TouchableOpacity } from 'react-native'
import FstImage from '@app/components/FstImage/FstImage'
import R from '@app/assets/R'

interface StateItem {
  item?: Product
}

const listFlashSale = [
  {
    id: 0,
    status: true,
  },
  {
    id: 1,
    status: false,
  },
  {
    id: 2,
    status: false,
  },
  {
    id: 3,
    status: true,
  },
  {
    id: 4,
    status: false,
  },
  {
    id: 5,
    status: true,
  },
]
const ListProductFlashSale = () => {
  const renderItem = (propsItem: StateItem) => {
    const { item } = propsItem
    return (
      <TouchableOpacity style={styles.containerItem}>
        <View style={styles.containerImage}>
          <FstImage
            source={R.images.img_example_product}
            style={styles.imageItemProduct}
          />
          {item?.status && (
            <View style={styles.containerNon}>
              <Text children={'Bán hết'} style={styles.textNon} />
            </View>
          )}
        </View>
        <View style={styles.containerRight}>
          <Text children={'Gạch bê tông đặc - AAC  '} style={styles.textName} />
          <View>
            <View style={styles.containerPrice}>
              <Text children={`880.000đ`} style={styles.textPriceSale} />
              <Text children={`880.000đ`} style={styles.textPrice} />
            </View>
            <View style={styles.containerBought}>
              <View
                style={[
                  {
                    width: `${(15 / 20) * 100}%`,
                  },
                  styles.containerBoughtInBought,
                ]}
              />
              <View style={styles.containerTextBought}>
                <Text children={'Đã bán 13'} style={styles.textBought} />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: '100%' }}
        contentContainerStyle={{ flexGrow: 1 }}
        data={listFlashSale}
        keyExtractor={(item, index) => `${item?.id} ${index}`}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}
export default ListProductFlashSale

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
    width: '100%',
  },
  containerItem: {
    width: '100%',
    minHeight: 114,
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: 'row',
    marginTop: 2,
  },
  imageItemProduct: {
    width: 90,
    height: 90,
    borderRadius: 8,
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
  containerRight: {
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    width: '90%',
  },
  textPriceSale: {
    textDecorationLine: 'line-through',
    fontSize: 12,
    lineHeight: 20,
    color: '#595959',
  },
  containerPrice: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textPrice: {
    lineHeight: 24,
    color: '#0077B6',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
  },
  textName: {
    fontSize: 16,
    color: '#262626',
    lineHeight: 20,
    width: '80%',
  },
  containerImage: {
    width: 90,
    height: 90,
    borderRadius: 8,
  },
  containerNon: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  textNon: {
    color: colors.white,
    lineHeight: 24,
    fontSize: 16,
  },
})
