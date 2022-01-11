import { FlatList, View } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import FstImage from '@app/components/FstImage/FstImage'
import R from '@app/assets/R'
import { Text } from 'react-native-elements'
import { TouchableOpacity } from 'react-native'
import { categoryState } from './interface/layoutHomeInterface'
// const window = Dimensions.get('window')
// const { width, height } = window
const listCategory = [
  {
    id: 0,
    imageUrl: R.images.ic_example_category,
    name: 'Điện nước',
  },
  {
    id: 1,
    imageUrl: R.images.ic_example_category,
    name: 'Thiết bị vệ sinh',
  },
  {
    id: 2,
    imageUrl: R.images.img_example_product,
    name: 'Thiết bị hoàn thiện',
  },
  {
    id: 3,
    imageUrl: R.images.ic_example_category,
    name: 'Xây thô',
  },
]

const CategoryHomeLayout = (props: categoryState) => {
  // const { listCategory } = props
  console.log(props)

  const renderItemCategory = ({ item }) => {
    return (
      <TouchableOpacity style={styles.containerItem}>
        <View>
          <FstImage source={item.imageUrl} style={styles.imgStyle} />
        </View>
        <Text children={`${item.name}`} style={styles.textName} />
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
        style={{ marginTop: 8 }}
        contentContainerStyle={{ flexGrow: 1 }}
        data={listCategory}
        keyExtractor={(item, index) => `${item.id} ${index}`}
        horizontal
        renderItem={renderItemCategory}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}
export default CategoryHomeLayout
const styles = StyleSheet.create({
  container: {
    paddingLeft: 23,
    paddingVertical: 10,
  },
  containerItem: {
    maxWidth: 75,
    marginRight: 36,
    alignItems: 'center',
  },
  imgStyle: {
    width: 50,
    height: 50,
    borderRadius: 12,
  },
  textName: {
    marginTop: 10,
    color: '#262626',
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
  },
})
