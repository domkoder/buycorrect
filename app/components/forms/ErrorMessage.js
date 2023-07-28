import {StyleSheet} from 'react-native'

import AppText from '../AppText'

function ErrorMessage({error, visible}) {
  if (!visible || !error) return null

  return (
    <AppText size="small" style={styles.error}>
      {error}
    </AppText>
  )
}

const styles = StyleSheet.create({
  error: {color: '#FF5247'},
})

export default ErrorMessage
