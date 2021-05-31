import React from 'react';
import { View, Button, Text, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen = (props) =>{ 

    const {navigation} = props
    const background = {uri:'https://i.stack.imgur.com/yLOOp.jpg'}

    return(
        <ImageBackground source={background} style={styles.image}>
            <Text style={styles.text} >🔥  Mob App 1  🔥</Text>
            <View style={styles.buttonContainer}>
                <Button 
                    color='green'
                    title='Go to Component Demo'
                    onPress={(e)=> navigation.navigate('Components') }
                />
                <Text> </Text>
                <Button 
                    title='Go to List' 
                    onPress={(e)=> navigation.navigate('List') }
                />
                <Text> </Text>
                <Button 
                    color = 'orange'
                    title='Go to Image Screen' 
                    onPress={(e)=> navigation.navigate('ImgScreen') }
                />
                <Text> </Text>
                <Button 
                    color = "#f194ff"
                    title='Go to Counter' 
                    onPress={(e)=> navigation.navigate('Counter') }
                />
                <Text> </Text>
                <Button 
                    color = "#2E64FE"
                    title='Go to Colors' 
                    onPress={(e)=> navigation.navigate('ColorScreen') }
                />
            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    paddingLeft: '23%',
    paddingTop:10
  },
  buttonContainer: {
    margin:30,
    justifyContent:'center',
    elevation:20,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
    },
});

export default HomeScreen;