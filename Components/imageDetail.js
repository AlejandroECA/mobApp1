import React from 'react'
import { View,Text,StyleSheet,Image ,TouchableOpacity} from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler'

const ImageDetail = (props) => {
    const {title , to , url, score, navigation} = props
    return(
        <View style={styles.imageDetailComponent}>
            <TouchableOpacity onPress={ (e) => navigation(to)}>
                <Text>{title}</Text>
                <Image 
                source={{uri:url}}
                style={{ width: 50, height: 50 }}
                />
            </TouchableOpacity>
            <Text>The Score is: {score}</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    imageDetailComponent: {
        margin: 20
    }
})

export default ImageDetail