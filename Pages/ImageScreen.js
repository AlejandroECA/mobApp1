import React from 'react'
import {View, Text,StyleSheet} from 'react-native'

import ImageDetail from '../Components/imageDetail'

const ImageScreen = (props) =>{
    const {navigate} = props.navigation
    return(
        <View>
            <Text style={styles.text}>Images Screen 📷 </Text>
            <ImageDetail 
                title = '1'
                to='Home'
                url='https://media.giphy.com/media/xUOwG1F5XtDbZrgy6Q/giphy.gif'
                score= '9'
                navigation={navigate}
            />
            <ImageDetail 
                title = '2'
                to='Home'
                url='https://media.giphy.com/media/26DN81TqLPIzBlksw/giphy.gif'
                score= '10'
                navigation={navigate}

            />
            <ImageDetail 
                title = '3'
                to='Home'
                url='https://media.giphy.com/media/xThtaoFef8EOe2J5XG/giphy.gif'
                score= '5'
                navigation={navigate}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        paddingLeft: '25%',
        paddingTop:10
      },

})

export default ImageScreen