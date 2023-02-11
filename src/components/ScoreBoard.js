import { View, Text } from 'react-native'
import React from 'react'

export default function ScoreBoard({UserScore, ComputerScore}) {
  return (
    <View style={{marginVertical: "5%", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Text>Man vs Machine</Text>
      <Text>{UserScore} {ComputerScore}</Text>
    </View>
  )
}