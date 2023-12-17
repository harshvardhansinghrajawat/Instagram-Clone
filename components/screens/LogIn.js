import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import Home from './Home';

const LogIn = ({navigation}) => {
  const [username,setUserName] = useState();
  const [password,setPassword] = useState();
  const [error,setError] = useState({});
  const validateForm = () =>{
    let error = {}
    if(!username)error.username = "*Username is required."
    
    if(!password)error.password = "*Password is required."
    

    setError(error);
    return Object.keys(error).length===0;
  }
  const submit = ()=> {
    if(validateForm()){
      console.log("Submitted",username,password);
      setUserName('');
      setPassword('');
      setError({});
    }
  }
  const gotoHome = ()=> {
    navigation.navigate('BottomTabScreen');
  }
  // const passwordHideIcon: ({focused, size, colour}) => {
  //   let iconName;
  //   if (route.name === 'password') {
  //     iconName = focused ? 'eye-outline' : 'eye-off-outline';
  //     size = focused ? size + 8 : size + 2;
  //   } 

  //   return <Ionic name={iconName} size={size} color={colour} />;
  // },
  return (
    <SafeAreaView style={styles.container}>

      <Image
        source = {require("../../assets/instagram.png")}
        style={styles.image}
      />

      {/* <Text style={styles.title}>Instagram</Text> */}

      <View style={styles.form} >
        
      
        <TextInput placeholder='Phone number,username or email'
            value={username}
            onChangeText={setUserName}
            style={styles.input}
            autoCapitalize='none'
            autoCorrect={false}
        />
        {
          error.username ?(
            <Text style={styles.error}>{error.username}</Text>
          ):null
        }
        
        <TextInput placeholder='Password'
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            secureTextEntry
        />
        {
          error.password?(
            <Text style={styles.error}>{error.password}</Text>
          ):null
        }
        
        <TouchableOpacity style={styles.button} onPress={gotoHome} >
          <Text style={styles.textContainer}>Log In</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.textContainer}>Log In</Text>
        </TouchableOpacity> */}
        
      </View>  

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems:'center'
  },
  form:{
    width:380,
    backgroundColor:'#fff',
    padding:10,
    borderRadius:10,
    marginBottom:300,
  },
  lable:{
    fontSize:25,
    marginBottom:50,
    fontWeight:'bold',
    paddingLeft:110,
  },
  input:{
    height:40,
    backgroundColor:'#EEEEEE',
    borderColor:'#DDDDDD',
    borderWidth:1,
    marginTop:10,
    marginBottom:10,
    padding:10,
    borderRadius:5,
    minHeight:40
  },
  button: {
    alignItems: 'center',
    backgroundColor:'#39A7FF',
    padding: 10,
    borderRadius:5,
    marginTop:20
  },
  textContainer:{
    color:'#fff',
  },
  error:{
    color:'red',
    marginBottom:20,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode:'center',
    marginTop:150,
    
  },
  title:{
    fontFamily: 'Lobster-Regular',
    fontSize: 50,
    fontWeight: '500',
    color:'black',
    marginTop:200,
  }

});

export default LogIn;
