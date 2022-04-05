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
} from 'react-native'
import Avatar from './components/Avatar'

const UpdateInfoUserComponent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [profileImage, setProfileImage] = useState<string>('')
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const firstNameRef = useRef<RNTextInput>(null)
  const firstNameInputRef = useRef<TextInput>(null)
  const lastNameRef = useRef<RNTextInput>(null)
  const lastNameInputRef = useRef<TextInput>(null)
  const phoneRef = useRef<RNTextInput>(null)
  const phoneInputRef = useRef<TextInput>(null)

  const handleRegister = async () => {
    let isValid = true
    let inputRef = null

    if (!firstName || firstName?.trim() === '') {
      firstNameRef.current?.onValidate()
      isValid = false
      if (!inputRef) inputRef = firstNameInputRef
    }

    if (!lastName || lastName?.trim() === '') {
      lastNameRef.current?.onValidate()
      isValid = false
      if (!inputRef) inputRef = lastNameInputRef
    }

    if (!phone || phone?.trim() === '' || phone.length < 10) {
      phoneRef.current?.onValidate()
      isValid = false
      if (!inputRef) inputRef = phoneInputRef
    }

    if (!isValid) {
      if (inputRef) inputRef.current?.focus()
      return
    }

    // const payload = {
    //   first_name: firstName,
    //   last_name: lastName,
    //   phone: phone,
    //   password: password,
    // }

    // try {
    //   setIsLoading(true)
    //   await AuthApi.register(payload)
    //   setIsLoading(false)
    //   NavigationUtil.navigate(SCREEN_ROUTER_AUTH.OTP, { phone: phone })
    // } catch (error: any) {
    //   setIsLoading(false)
    //   if (error?.response?.data.message === 'Phone number was not activated') {
    //     await AuthApi.resendOtp({
    //       phone: phone,
    //     })
    //     NavigationUtil.navigate(SCREEN_ROUTER_AUTH.OTP, { phone: phone })
    //   }
    //   reactotron.log!(error?.response?.data.message)
    // }
  }

  return (
    <ScreenWrapper
      unsafe
      color="black"
      backgroundHeader="white"
      back
      dialogLoading={isLoading}
      forceInset={['left']}
      titleHeader={'My profile'}
      children={
        <KeyboardAvoidingView
          enabled
          behavior={'padding'}
          keyboardVerticalOffset={-1000}
          style={styles.v_keyboard}
        >
          <ScrollView
            keyboardShouldPersistTaps="handled"
            style={styles.v_scroll}
            showsVerticalScrollIndicator={false}
          >
            <Avatar
              onPress={(url: string) => {
                setProfileImage(url)
              }}
              url={profileImage}
            />
            <RNTextInput
              autoCapitalize="none"
              ref={firstNameRef}
              refs={firstNameInputRef}
              title={R.strings().first_name}
              value={firstName}
              placeholder={R.strings().input_first_name}
              keyboardType="default"
              onChangeText={setFirstName}
              maxLength={45}
              placeholderTextColor={colors.colorDefault.placeHolder}
              valueType="name"
              isRequire
            />
            <RNTextInput
              autoCapitalize="none"
              ref={lastNameRef}
              refs={lastNameInputRef}
              title={R.strings().last_name}
              value={lastName}
              placeholder={R.strings().input_last_name}
              keyboardType="default"
              onChangeText={setLastName}
              maxLength={45}
              placeholderTextColor={colors.colorDefault.placeHolder}
              valueType="name"
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
            />

            <RNButton onPress={handleRegister} title={'Update'} />
          </ScrollView>
        </KeyboardAvoidingView>
      }
    />
  )
}

const styles = StyleSheet.create({
  v_keyboard: {
    flex: 1,
    backgroundColor: 'white',
  },
  v_scroll: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  ic_check: {
    width: 18,
    height: 18,
  },
  text: {
    fontSize: 16,
    fontFamily: R.fonts.san_regular,
    fontWeight: '400',
    color: colors.label,
  },
  containerChk: {
    backgroundColor: 'white',
    borderWidth: 0,
    marginLeft: 0,
    padding: 0,
    paddingBottom: 15,
  },
})

const UpdateInfoUser = memo(UpdateInfoUserComponent, isEqual)

export default UpdateInfoUser
