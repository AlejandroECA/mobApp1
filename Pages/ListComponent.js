import React from 'react'
import {View, Text, StyleSheet, FlatList, ImageBackground, Image} from 'react-native'

const ListScreen = () => {
    const list1 = [
        {id:'1',name:'aasaas',desc:'a1'},
        {id:'2',name:'qweqw',desc:'a2'},
        {id:'3',name:'ads',desc:'a3'},
        {id:'4',name:'sdfsd',desc:'a4'},
        {id:'5',name:'asda',desc:'a5'},
        {id:'6',name:'asda',desc:'a6'}
    ]
    const background = {uri:'https://i.insider.com/57912602dd0895884d8b4c0d?width=1200&format=jpeg&auto=webp'}

    return(
        <ImageBackground source={background} style={styles.image}>
            <FlatList
                horizontal ={ false }
                showsHorizontalScrollIndicator={false}
                // keyExtractor={friends => friends.name}
                data={list1}
                renderItem={({item}) => {
                    return <Text style={styles.textStyle}>{item.name} - {item.desc}</Text>
                }}
            />

        </ImageBackground>
    )

}

const styles = StyleSheet.create({
    textStyle:{
        marginVertical:20,
        marginLeft:10
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
})

export default ListScreen