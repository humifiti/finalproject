import { FlatList, View } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { colors } from '@app/theme'
import { Text } from 'react-native-elements'
import FstImage from '@app/components/FstImage/FstImage'
import R from '@app/assets/R'
const listItem = [
  {
    id: 0,
    isSelected: true,
  },
  {
    id: 1,
    isSelected: false,
  },
  {
    id: 2,
    isSelected: false,
  },
  {
    id: 3,
    isSelected: false,
  },
  {
    id: 4,
    isSelected: false,
  },
  {
    id: 5,
    isSelected: false,
  },
]
const HeaderCategoryFlashSale = () => {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        data={listItem}
        keyExtractor={(item, index) => `${item.id} ${index}`}
        horizontal
        renderItem={items => {
          let { item } = items
          return (
            <TouchableOpacity
              style={[
                styles.containerItem,
                item.isSelected && styles.borderSelected,
              ]}
            >
              <View style={styles.containerImage}>
                <FstImage
                  source={R.images.ic_example_category}
                  style={styles.imageIcon}
                />
              </View>
              <Text
                children={'Đá xây dựng'}
                style={[
                  styles.textStatus,
                  item.isSelected && styles.color0077B6,
                ]}
              />
            </TouchableOpacity>
          )
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}
export default HeaderCategoryFlashSale
const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    paddingLeft: 4,
  },
  containerItem: {
    width: 65,
    height: 65,
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingVertical: 4,
    marginRight: 4,
    borderRadius: 5,
  },
  textStatus: {
    color: '#595959',
    lineHeight: 12,
    fontSize: 12,
    fontWeight: '300',
    marginTop: 3,
    textAlign: 'center',
  },
  textCategory: {
    fontSize: 18,
    lineHeight: 26,
  },
  color0077B6: {
    color: '#0077B6',
  },
  fontWeight600: {
    fontWeight: '600',
    color: '#0077B6',
  },
  borderSelected: {
    borderColor: '#0077B6',
    borderWidth: 1,
    borderRadius: 5,
  },
  imageIcon: {
    width: 24,
    height: 24,
  },
  containerImage: {
    width: 32,
    height: 32,
    borderRadius: 20,
    backgroundColor: '#F1F3F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
