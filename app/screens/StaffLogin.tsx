import React from 'react';
import {View, StyleSheet} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import StudentTitle from './TileBar/StaffTitle';


export default function StaffLogin() {
    const [text, setText] = React.useState('');

  return (
    <View style={styles.container}>
        <StudentTitle/>
        <View style={styles.logincon}>
            <View style={styles.logincon2}>
            <TextInput
      mode="outlined"
      label="User Name"
      placeholder="User Name"
      
    />

<TextInput
      mode="outlined"
      label="Password"
      placeholder="Password"
      
    />

<Button
            mode="contained"
            onPress={() => navigation.navigate("StudentHome")}
            style={styles.but}
            labelStyle={styles.butlab}
          >
            Login
          </Button>

    

            </View>
        

        </View>
        

        
    </View>
  );
}

const styles = StyleSheet.create({

  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  bottomBar: {
    backgroundColor: '#6200ee',
  },
  logincon:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:"60%",
    margin:20
  },
  logincon2:{
    backgroundColor:"red",
    padding:20,
    width:"100%",
    
  },
  but: {
    backgroundColor: "#007FFF",
    borderRadius: 5,
    marginTop:30,
    width: "100%",
  },
  butlab: {
    color: "white",
    fontSize: 20,
    padding: 5,
  },
});

