/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '@app/components/Screen/ScreenWrapper'
import { SearchBar } from 'react-native-elements'
import FstImage from '@app/components/FstImage/FstImage'
import { colors, fonts } from '@app/theme'
import R from '@app/assets/R'
const SearchScreen = () => {
  const [search, setSearch] = useState<string>('')
  return (
    <ScreenWrapper
      unsafe
      color="black"
      backgroundHeader="white"
      back
      //dialogLoading={isLoading}
      forceInset={['left']}
      titleHeader={'Search Food'}
      children={
        <View
          style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 25 }}
        >
          <SearchBar
            placeholder={'Find for food or restaurant...'}
            onChangeText={setSearch}
            value={search}
            containerStyle={styles.v_container_search}
            inputContainerStyle={styles.input_container}
            inputStyle={styles.input}
            platform={'default'}
            searchIcon={() => (
              <FstImage
                resizeMode="contain"
                style={styles.ic_search}
                source={R.images.ic_search}
              />
            )}
          />
        </View>
      }
    />
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  v_container_search: {
    backgroundColor: 'white',
    borderWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderColor: 'white',
    padding: 0,
  },
  input_container: {
    backgroundColor: '#F3F3F3',
    borderRadius: 12,
    paddingVertical: 6,
    paddingLeft: 10,
    borderColor: '#E7E7E7',
    borderWidth: 1,
  },
  input: {
    ...fonts.regular16,
    color: colors.colorDefault.text,
  },
  ic_search: {
    width: 24,
    height: 24,
  },
})
