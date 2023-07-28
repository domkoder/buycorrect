import {View, StyleSheet} from 'react-native'
import Screen from '../components/Screen'
import colors from '../config/colors'
import Heading from '../components/Heading'
import AppText from '../components/AppText'
import * as Yup from 'yup'
import {AppForm, AppFormField, SubmitButton} from '../components/forms'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
})

const LoginScreen = ({navigation}) => {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Heading>Login</Heading>
        </View>

        <AppForm
          initialValues={{email: '', password: ''}}
          onSubmit={values => console.log(values)}
          validationSchema={validationSchema}
        >
          <>
            <AppFormField
              name="email"
              placeholder="Email"
              icon="mail"
              inputMode="email"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="emailAddress"
            />

            <AppFormField
              name="password"
              placeholder="Password"
              icon="lock"
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="password"
            />

            <AppText
              size="small"
              style={{color: colors.primaryBase, marginTop: 10}}
            >
              Forgot password?
            </AppText>

            <SubmitButton title="Login" />
          </>
        </AppForm>

        <View style={{paddingVertical: 24, alignItems: 'center'}}>
          <AppText size="small">
            Do you have an account?{' '}
            <AppText
              style={{color: colors.primaryBase}}
              onPress={() => navigation.navigate('Register')}
            >
              Sign Up
            </AppText>
          </AppText>
        </View>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  headingContainer: {
    justifyContent: 'flex-start',
    width: '100%',
    paddingVertical: 50,
  },
})

export default LoginScreen
