import {useState} from 'react'
import {View, StyleSheet, TextInput, Text, TouchableOpacity} from 'react-native'

import RNPickerSelect from 'react-native-picker-select'

const RegisterScreen = ({navigation}) => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [university, setUniversity] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const universities = [
    {
      label: 'University of Jos',
      value: 'university of jos',
    },
    {
      label: 'Havard University',
      value: 'havard university',
    },
    {
      label: 'Covenant University',
      value: 'covenant university',
    },
  ]

  const handleRegister = () => {
    console.log('Email:', email)
    console.log('Password:', password)
  }

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Sign Up</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        inputMode="text"
        onChangeText={text => setFirstname(text)}
        value={firstname}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        inputMode="text"
        onChangeText={text => setLastname(text)}
        value={lastname}
      />
      <TextInput
        style={styles.input}
        placeholder="Student Email"
        inputMode="email"
        onChangeText={text => setEmail(text)}
        value={email}
        autoCapitalize="none"
      />

      <RNPickerSelect
        style={pickerSelectStyles}
        value={university}
        onValueChange={value => {
          setUniversity(value)
        }}
        items={universities}
        placeholder={{label: 'University', value: ''}}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />

      <TouchableOpacity style={{width: '100%'}} onPress={handleRegister}>
        <View style={styles.registerButton}>
          <Text style={styles.registerText}>Continue</Text>
        </View>
      </TouchableOpacity>

      <View style={{paddingVertical: 24}}>
        <Text style={{color: '#2E3E5C'}}>
          Already have an account?{' '}
          <Text
            style={{color: '#6B4EFF'}}
            onPress={() => navigation.navigate('Login')}
          >
            Login
          </Text>
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 23,
    marginTop: 50,
  },
  input: {
    width: '100%',
    height: 48,
    borderColor: '#E3E5E5',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  headingContainer: {
    justifyContent: 'flex-start',
    width: '100%',
    paddingVertical: 50,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#090A0A',
  },
  registerButton: {
    width: '100%',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#6B4EFF',
    borderRadius: 48,
  },
  registerText: {
    color: 'white',
  },
})

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    //   fontSize: 16,
    height: 48,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E3E5E5',
    borderRadius: 8,
    color: 'black',
    marginBottom: 16,
    paddingHorizontal: 8,
    paddingRight: 30, // to ensure the text is not obscured by the arrow icon
  },
})

export default RegisterScreen
