import React from 'react';
import { View, Text, StyleSheet, Button , ImageBackground , TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'

const background = {uri:'https://i.pinimg.com/564x/7d/0a/a0/7d0aa035650791020e54dfbf5868c22b.jpg'}

const ColorScreen = () =>{

    return(
        <ImageBackground source={background} style={styles.image}>
            <View>
                <Text style={styles.title}> 🎨 Color Screen 🎨 </Text>
            </View>
            <TouchableOpacity style={styles.actions} onPress={e => console.log('pressed')}>
                <LinearGradient
                colors={['#5882FA','#BE81F7','#DA81F5','#FAAC58']}
                // style={styles.linearGradient}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 1}}
                style={styles.button}
                >
                    <Text style={styles.textActions} >ADD A COLOR</Text>

                </LinearGradient>
            </TouchableOpacity>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image:{
        flex: 1,
        resizeMode: "cover",
    },
    title:{
        fontSize: 35,
        paddingLeft: '15%',
        paddingTop:25,
        color: '#E0E6F8'
    },
    actions:{
        flexDirection:'row',
        margin:30,
        justifyContent:'center',
        // backgroundColor:'#9FF781',     
    },
    textActions:{
        fontSize:20,
        margin:15,
    },
    button:{
        borderRadius:10,
        elevation:20

    }

})

export default ColorScreen