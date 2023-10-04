import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import { icons } from '../../../constants'
import { checkImageUrl } from '../../../utils'


const Company = (companyLogo, jobTitle, companyName, Location) => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Image
        source={{
          uri: checkImageUrl(companyLogo)
          ? companyLogo
          : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmgxjFMicpy9eXHKV4sqzOSH.jpg'
        }}
        style={styles.logoImage}
        />

      </View>
    </View>
  )
}

export default Company