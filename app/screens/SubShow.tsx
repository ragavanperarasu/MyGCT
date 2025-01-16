import React,{ useEffect, useState } from 'react'
import { View, StyleSheet, ScrollView,ActivityIndicator , Alert, Linking} from 'react-native'
import StudentTitle from './StudentTitle'
import { Avatar, Card, Text, Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from './RootParam';

import axios from "axios";

type SubShowScreenProp = StackNavigationProp<RootStackParamList, "SubShow">;


export default function SubShow({route}:{route: SubShowScreenProp}) {
    const navigation = useNavigation<SubShowScreenProp>();
    const {reqType, regType, depType, semType} = route.params;


    const f = reqType+regType+depType+semType


    const [data, setData] = useState('');
    const [loading, setLoading] = useState(true);
    const [ava, setAva] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
        try {
        const url = `https://api.github.com/repos/ragavanperarasu/MyGCTConfig/contents/${reqType}/${regType}/${depType}/${semType}/${f}.json`;
        
        const token = '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';

          const response = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const content = atob(response.data.content)
        
          setData(JSON.parse(content)); 
          setLoading(false);
        } catch (error) {
          setLoading(false);
          setAva(true);
        }
      };
  
      fetchData();
    }, []);
  
    if (loading) {
      return (
        <View style={{flex:1}}>
        <StudentTitle/>
        <Card.Title
    title="Download Page" titleStyle={{fontSize:20, color:"white"}}
    left={(props) => <Avatar.Icon {...props} icon="cloud-download" style={{}}/>}
    style={{backgroundColor:"#353839"}} />
          <ActivityIndicator size={60} color="black" style={{flex:1}}/>
        </View>
      );
    }

    if (ava) {
      return (
        <View style={{flex:1}}>
        <StudentTitle/>
        <Card.Title
    title="Download Page" titleStyle={{fontSize:20, color:"white"}}
    left={(props) => <Avatar.Icon {...props} icon="cloud-download" style={{}}/>}
    style={{backgroundColor:"#353839"}} />
    <View style={{display:"flex", justifyContent:"center", alignItems:"center", height:"50%"}}>
    <Text style={{fontSize:20}}>Resource Not Available</Text>
    </View>
          
          </View>
        
      );
    }
    

  return (
    <View style={{flex:1}}>
        <StudentTitle/>
  
    <Card.Title
    title="Download Page" titleStyle={{fontSize:20, color:"white"}}
    left={(props) => <Avatar.Icon {...props} icon="cloud-download" style={{}}/>}
    style={{backgroundColor:"#353839"}} />

    <ScrollView style={{padding:10}}>
      {data.length > 0 &&
        (() => {
          const items = [];
          data.forEach((item) => {
            items.push(
              <Card key={item.id}
                  style={styles.cardm}>
                  <Card.Title
                  title={item.subname}
                  titleNumberOfLines={3}
                  titleStyle={styles.cardts}
                  subtitle={"Regulation - "+item.reg}
                  subtitleStyle={styles.cards}
                  left={(props) => <Avatar.Icon {...props} icon="cloud-download" size={45} style={styles.cardi}/>}
                  style={styles.cardt} />
                  
                  {item.ques.length > 0 &&
        (() => {
          const aitems = [];
          item.ques.forEach((aitem) => {
            aitems.push(
                 <Card.Actions key={item.subname+aitem.aid}>
                    <Button icon="cloud-check" onPress={()=>{Alert.alert("Document Publisher",aitem.publish)}}>{aitem.year}</Button>
                    <Button icon="arrow-down-bold" onPress={()=>{Linking.openURL(aitem.link)}}>Download</Button>
                  </Card.Actions>  
            );
          });
          return aitems;
        })()}

                  </Card>
            );
          });
          return items;
        })()}
    

    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
    cardm: {
      boxShadow:"5 5 5 gray", 
      margin:10,
    },
    cardt: {
      backgroundColor:"#32174D",
      borderRadius:10,
      padding:30,
    },
    cardi: {
      backgroundColor: '#DE3163',
    },
    cards:{
        color:"white",
        
    },
    cardts:{
        fontSize:20,
        color:"white",
        fontWeight:700,
    }
  });

