import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View, Button,ImageBackground,TextInput } from 'react-native';


const ComponentsScreen = () => {

  const [outputText, setOutputText] = useState('')

  const image = { uri:'https://media.giphy.com/media/l3yVY3vdy9vceW4DXL/giphy.gif'}


  return (
    <View style={styles.container}>
      <View style={styles.content}>
      <ImageBackground source={image} style={styles.image}>

        <Text style={styles.text}>{outputText}</Text>
        <TextInput textContentType='text' ></TextInput>
        <View style={styles.but1}>
          <Button color='green' title='change text' onPress={(e) => setOutputText('The text changed!')}/>
        </View>
        <Button color='red'  title='Reset' onPress={(e) => setOutputText('')}/>
        <StatusBar style="auto" />
        
      </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  content: {
    flexDirection: "column",
    flex: 1,
    paddingHorizontal:10,
    paddingBottom:5
  },
  text:{
    paddingTop:'50%',
    fontSize: 20,
    paddingLeft:'30%',
    fontWeight:'bold',  
  },
  but1:{
    marginTop:'auto',
    marginBottom:10
  }

});

export default ComponentsScreen

