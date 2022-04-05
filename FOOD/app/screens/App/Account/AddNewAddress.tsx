import R from '@app/assets/R'
import RNButton from '@app/components/RNButton'
import RNTextInput from '@app/components/RNTextInput'
import ScreenWrapper from '@app/components/Screen/ScreenWrapper'
import { colors } from '@app/theme'
import React, { memo, useRef, useState } from 'react'
import isEqual from 'react-fast-compare'
import {
  KeyboardAvoidingView,
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

            <RNButton
              style={styles.txt_save}
              onPress={handleAddAddress}
              title={'Save'}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      }
    />
  )
}

const styles = StyleSheet.create({
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
    marginTop: 40,
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
