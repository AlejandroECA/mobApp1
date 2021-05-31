import React,{useState} from 'react';
import { View, Text, StyleSheet, Button , ImageBackground , TouchableOpacity} from 'react-native';

const background = {uri:'https://media.giphy.com/media/gNHoB0hz4OzRe/giphy.gif'}


const CounterScreen = () => {
    const [counter,setCounter] = useState(0)

    return (
        <ImageBackground source={background} style={styles.image}>
            <View>
                <Text style={styles.title}>🐑 Counter Screen 🐑 </Text>

                <TouchableOpacity  style={styles.Add}                
                onPress={(e)=> setCounter(counter+1) }>
                    <Text style={[styles.actions,styles.addText]}>Add</Text>
                </TouchableOpacity>

                <TouchableOpacity  style={styles.Substract}                
                onPress={(e)=> setCounter(counter-1) }>
                    <Text style={[styles.actions,styles.SubstractText]}>Substract</Text>
                </TouchableOpacity>

                <Text style={styles.result}>{counter}</Text>

                <TouchableOpacity  style={styles.Reset}                
                onPress={(e)=> setCounter(0) }>
                    <Text style={[styles.actions,styles.ResetText]}>Reset</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image:{
        flex: 1,
        // resizeMode: "cover",
        height:'140%'
        
    },
    title:{
        fontSize: 35,
        paddingLeft: '12%',
        paddingTop:25
    },
    result:{
        fontSize: 50,
        paddingLeft: '47%',
        paddingTop:100,
        marginBottom:60
    },
    Add: {
        margin:30,
        justifyContent:'center',
        elevation:20,
        backgroundColor:'#9FF781',
        borderRadius:20
    },
    addText:{
        paddingLeft:'35%',
        
    },
    Substract: {
        margin:30,
        justifyContent:'center',
        elevation:20,
        backgroundColor:'#ffd700',
        borderRadius:20

    },
    SubstractText:{
        paddingLeft:'27%',
    },
    Reset: {
        margin:30,
        justifyContent:'center',
        elevation:20,
        backgroundColor:'#FA5858',
        borderRadius:20

    },
    ResetText:{
        paddingLeft:'33%',
    },
    actions:{
        margin:30,
        justifyContent:'center',
        elevation:20,
        fontSize: 25,

    },
    

})

export default CounterScreen