import { FlatList, View } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { colors } from '@app/theme'
import { Text } from 'react-native-elements'
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
const HeaderTimeFlashSale = () => {
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
              <Text
                children={'09:00'}
                style={[
                  styles.textTime,
                  item.isSelected && styles.fontWeight600,
                ]}
              />
              <Text
                children={'Đang diễn ra'}
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
export default HeaderTimeFlashSale
const styles = StyleSheet.create({
  container: {
    marginTop: 2,
  },
  containerItem: {
    width: 96,
    height: 50,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStatus: {
    color: '#595959',
    lineHeight: 20,
    fontSize: 12,
    fontWeight: '300',
  },
  textTime: {
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
    borderBottomColor: '#0077B6',
    borderBottomWidth: 1,
  },
})
