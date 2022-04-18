import R from '@app/assets/R'
import { AutocompleteDropdown } from '@app/components/AutocompleteDropdown'
import RNButton from '@app/components/RNButton'
import RNTextInput from '@app/components/RNTextInput'
import ScreenWrapper from '@app/components/Screen/ScreenWrapper'
import reactotron from '@app/config/ReactotronConfig'
import { api_key, GOONG_HOST } from '@app/constant/Constant'
import { colors, fonts } from '@app/theme'
import axios from 'axios'
import React, { memo, useCallback, useRef, useState } from 'react'
import isEqual from 'react-fast-compare'
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native'

const AddNewAddressComponent = (props: any) => {
  const [name, setName] = useState<string>(props.route.params?.name || '')
  const [phone, setPhone] = useState<string>(props.route.params?.phone || '')
  const [addressDetail, setAddressDetail] = useState<string>(
    props.route.params?.address || ''
  )

  const nameRef = useRef<RNTextInput>(null)
  const nameInputRef = useRef<TextInput>(null)
  const phoneRef = useRef<RNTextInput>(null)
  const phoneInputRef = useRef<TextInput>(null)
  const addressRef = useRef<RNTextInput>(null)
  const addressInputRef = useRef<TextInput>(null)
  const [suggestionsList, setSuggestionsList] = useState([])

  const getSuggestions = useCallback(async text => {
    console.log('getSuggestions', text)
    try {
      const res = (
        await axios.get(`${GOONG_HOST}Place/AutoComplete`, {
          params: {
            api_key: api_key,
            input: text,
            limit: 20,
            radius: 1000,
          },
        })
      ).data
      reactotron.log!(res.predictions)
      if (res.predictions) {
        const suggestions = res.predictions.map((item: any, index: number) => ({
          id: index,
          title: item.description,
          place_id: item.place_id,
        }))
        setSuggestionsList(suggestions)
      } else {
        setSuggestionsList([])
      }
    } catch (error) {
    } finally {
    }
  }, [])

  const handleAddAddress = async () => {
    let isValid = true
    let inputRef = null

    if (name.trim() === '' || !name) {
      nameRef.current?.onValidate()
      isValid = false
      if (!inputRef) inputRef = nameInputRef
    }

    if (phone.trim() === '') {
      phoneRef.current?.onValidate()
      isValid = false
      if (!inputRef) inputRef = phoneInputRef
    }

    if (addressDetail.trim() === '' || !addressDetail) {
      addressRef.current?.onValidate()
      isValid = false
      if (!inputRef) inputRef = addressInputRef
    }

    if (!isValid) {
      if (inputRef) inputRef.current?.focus()
      return
    }
  }

  return (
    <ScreenWrapper
      unsafe
      color="black"
      backgroundHeader="white"
      back
      forceInset={['left']}
      titleHeader={'Add new address'}
      children={
        <KeyboardAvoidingView
          enabled
          behavior={'padding'}
          keyboardVerticalOffset={-1000}
          style={styles.v_keyboard}
        >
          <View style={styles.line} />
          <ScrollView
            keyboardShouldPersistTaps="handled"
            style={styles.v_scroll}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.v_input}>
              <RNTextInput
                autoCapitalize="none"
                ref={nameRef}
                refs={nameInputRef}
                title={R.strings().full_name}
                value={name}
                placeholder={R.strings().input_full_name}
                keyboardType="default"
                onChangeText={setName}
                maxLength={55}
                placeholderTextColor={colors.colorDefault.placeHolder}
                isRequire
              />
              <RNTextInput
                ref={phoneRef}
                refs={phoneInputRef}
                title={R.strings().phone}
                value={phone}
                placeholder={R.strings().input_phone}
                keyboardType="number-pad"
                onChangeText={setPhone}
                placeholderTextColor={colors.colorDefault.placeHolder}
                valueType="phone"
                isRequire
                maxLength={10}
              />

              <RNTextInput
                ref={addressRef}
                refs={addressInputRef}
                title={'Address'}
                value={addressDetail}
                placeholder={'Enter your address'}
                keyboardType="default"
                onChangeText={setAddressDetail}
                placeholderTextColor={colors.colorDefault.placeHolder}
                isRequire
              />
              <AutocompleteDropdown
                controller={(controller: any) => {
                  //dropdownController.current = controller
                }}
                onClear={() => {
                  //setSuggestionsList([])
                }}
                direction={Platform.select({ ios: 'down' })}
                debounce={600}
                textInputProps={{
                  placeholder: 'Tìm kiếm địa chỉ ...',
                  style: {
                    borderRadius: 12,
                    backgroundColor: '#fff',
                    color: colors.text,
                    paddingLeft: 18,
                    ...fonts.regular16,
                  },
                }}
                suggestionsListMaxHeight={400}
                rightButtonsContainerStyle={styles.rightButtonsContainer}
                suggestionsListContainerStyle={styles.suggestionsListContainer}
                inputContainerStyle={styles.inputContainerStyle}
                containerStyle={styles.containerStyle}
                useFilter={false}
                clearOnFocus={true}
                closeOnBlur={true}
                onSelectItem={(item: any) => {
                  //onSelectItem(item)
                }}
                onChangeText={getSuggestions}
                dataSet={suggestionsList}
                emptyResultText="Danh sách trống"
              />
            </View>

            {/* {id && (
              <>
                <TouchableOpacity
                  onPress={handleRemoveAddress}
                  style={styles.v_row}
                >
                  <Text
                    style={styles.txt_delete}
                    children={R.strings().remove_address}
                  />
                  <FastImage
                    tintColor={colors.primary}
                    resizeMode="contain"
                    style={styles.icon}
                    source={R.images.ic_trash}
                  />
                </TouchableOpacity>
                <View style={styles.line} />
              </>
            )} */}
          </ScrollView>
          <RNButton
            style={styles.txt_save}
            onPress={handleAddAddress}
            title={'Save'}
          />
        </KeyboardAvoidingView>
      }
    />
  )
}

const styles = StyleSheet.create({
  containerStyle: { flexGrow: 1, flexShrink: 1 },

  inputContainerStyle: {
    backgroundColor: 'transparent',
    shadowColor: '#00000099',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8.46,
    elevation: 13,
  },
  suggestionsListContainer: {
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  rightButtonsContainer: {
    right: 8,
    height: 30,
    top: 6,
    backgroundColor: '#fff',
  },
  line: { backgroundColor: colors.backgroundColor, height: 2 },
  container_bottom_sheet: {
    marginBottom: 16,
  },
  v_keyboard: {
    flex: 1,
    backgroundColor: 'white',
  },
  dropdown: {
    paddingHorizontal: 10,
    paddingTop: 12,
    paddingBottom: 7,
  },
  v_scroll: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 20,
  },
  ic_check: {
    width: 18,
    height: 18,
  },

  containerChk: {
    backgroundColor: 'white',
    borderWidth: 0,
    marginLeft: 0,
    padding: 0,
    paddingBottom: 15,
  },
  v_input: {
    paddingHorizontal: 15,
  },
  v_row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },

  text: {
    fontFamily: R.fonts.san_regular,
    fontSize: 16,
    color: colors.colorDefault.text,
    flex: 1,
  },
  txt_save: {
    marginHorizontal: 15,
    height: 45,
  },
  icon: {
    width: 24,
    height: 24,
  },
  txt_delete: {
    fontFamily: R.fonts.san_regular,
    fontSize: 16,
    color: colors.primary,
    flex: 1,
  },
})

const AddNewAddress = memo(AddNewAddressComponent, isEqual)

export default AddNewAddress
