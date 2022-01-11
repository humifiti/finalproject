import React, { Component, useRef, useState, memo } from 'react'
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ScreenWrapper from '@app/components/Screen/ScreenWrapper'
import { colors } from '@app/theme'
import R from '@app/assets/R'
import RNTextInput from '@app/components/RNTextInput'
import { CheckBox } from 'react-native-elements'
import FstImage from '@app/components/FstImage/FstImage'
import RNButton from '@app/components/RNButton'
import isEqual from 'react-fast-compare'
import NavigationUtil from '@app/navigation/NavigationUtil'
import { SCREEN_ROUTER_AUTH } from '@app/constant/Constant'

const RegisterScreenComponent = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [taxCode, setTaxCode] = useState('')
  const [addressTaxCode, setAddressTaxCode] = useState('')
  const [isCheck, setIsCheck] = useState(false)
  const nameRef = useRef<RNTextInput>(null)
  const nameInputRef = useRef<TextInput>(null)
  const phoneRef = useRef<RNTextInput>(null)
  const phoneInputRef = useRef<TextInput>(null)
  const emailRef = useRef<RNTextInput>(null)
  const emailInputRef = useRef<TextInput>(null)
  const passRef = useRef<RNTextInput>(null)
  const passInputRef = useRef<TextInput>(null)
  const confirmPassRef = useRef<RNTextInput>(null)
  const confirmPassInputRef = useRef<TextInput>(null)
  const companyNameRef = useRef<RNTextInput>(null)
  const companyNameInputRef = useRef<TextInput>(null)
  const taxCodeRef = useRef<RNTextInput>(null)
  const taxCodeInputRef = useRef<TextInput>(null)
  const addressTaxCodeRef = useRef<RNTextInput>(null)
  const addressTaxCodeInputRef = useRef<TextInput>(null)
  return (
    <ScreenWrapper
      unsafe
      color="black"
      backgroundHeader="white"
      back
      forceInset={['left']}
      titleHeader={R.strings().register}
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
            <RNTextInput
              autoCapitalize="none"
              ref={nameRef}
              refs={nameInputRef}
              title={R.strings().full_name}
              value={name}
              placeholder={R.strings().input_full_name}
              keyboardType="default"
              onChangeText={setName}
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
            <RNTextInput
              ref={emailRef}
              refs={emailInputRef}
              title={R.strings().email}
              value={email}
              placeholder={R.strings().input_email}
              keyboardType="email-address"
              onChangeText={setEmail}
              maxLength={225}
              placeholderTextColor={colors.colorDefault.placeHolder}
              valueType="email"
              isRequire
            />

            <RNTextInput
              autoCapitalize="none"
              maxLength={16}
              ref={passRef}
              refs={passInputRef}
              title={R.strings().password}
              secureTextEntry
              value={password}
              placeholder={R.strings().input_password}
              keyboardType="default"
              onChangeText={setPassword}
              placeholderTextColor={colors.colorDefault.placeHolder}
              isRequire
              valueType="password"
            />
            <RNTextInput
              autoCapitalize="none"
              maxLength={16}
              ref={confirmPassRef}
              refs={confirmPassInputRef}
              title={R.strings().confirm_password}
              secureTextEntry
              value={confirmPassword}
              placeholder={R.strings().input_confirm_password}
              keyboardType="default"
              onChangeText={confirmPassword => {
                setConfirmPassword(confirmPassword)
              }}
              placeholderTextColor={colors.colorDefault.placeHolder}
              isRequire
              valueType="password"
            />

            <RNButton onPress={() => {}} title={R.strings().register} />
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

const RegisterScreen = memo(RegisterScreenComponent, isEqual)

const mapStateToProps = (state: any) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)
