import React, { Component,useState ,useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, ImageBackground, StyleSheet, Text, View ,Animated} from 'react-native'; 


const Logo =({navigation})=> {
    //const navigation = useNavigation();
    useEffect(() => {
        let timer = setTimeout(() => {
           navigation.navigate('LogIn');
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigation]);
    return(
        <SafeAreaView style={styles.container} >
            <View >
                <ImageBackground
                    source = {require("../../assets/instagramLogo.png")}
                    style={styles.image} 
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>from</Text>
                <Text style={styles.title}>HARSH</Text>
            </View>
            
        </SafeAreaView>

    );
}
const styles = StyleSheet.create({
    container:{   
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems:'center',
        
    },
    textContainer:{
        alignItems:'center',
        marginTop:250
    },
    image: {
        width:100,
        height:100,
        marginTop:180
    },
    text:{
        color:'#DDDDD',
        fontSize:20,

    },
    title:{
        color:'black',
        fontSize:25,
        fontWeight: 'bold',

    }
})

export default Logo;

