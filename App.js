import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const App = () => {
  return (
    <View>
      <Text styles={styles.txt}>Working</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  txt :{
    fontSize:30,
    alignSelf:"center",
    justifyContent:"center"

  }
})
