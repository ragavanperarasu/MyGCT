import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  ActivityIndicator,
} from "react-native";
import StudentTitle from "../StudentTitle";
import { Avatar, Card, Text, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../RootParam";

import axios from "axios";

type StaffProfileShowScreenProp = StackNavigationProp<
  RootStackParamList,
  "StaffProfileShow"
>;

export default function StaffProfileShow({
  route,
}: {
  route: StaffProfileShowScreenProp;
}) {
  const navigation = useNavigation<StaffProfileShowScreenProp>();
  const { reqType, depType } = route.params;

  const f = reqType + depType;

  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [ava, setAva] = useState(false);

  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api.github.com/repos/ragavanperarasu/MyGCTConfig/contents/${reqType}/${depType}/${f}.json`;

        const token = "";

        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const content = atob(response.data.content);
        setData(JSON.parse(content));

        setLoading(false);
      } catch (error) {
        console.log(error)
        setLoading(false);
        setAva(true);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1 }}>
        <StudentTitle />
        <Card.Title
          title="Staffs Profile"
          titleStyle={{ fontSize: 20, color: "white" }}
          left={(props) => (
            <Avatar.Icon {...props} icon="account-tie" style={{}} />
          )}
          style={{ backgroundColor: "#353839" }}
        />
        <ActivityIndicator size={60} color="black" style={{ flex: 1 }} />
      </View>
    );
  }

  if (ava) {
    return (
      <View style={{ flex: 1 }}>
        <StudentTitle />
        <Card.Title
          title="Staffs Profile"
          titleStyle={{ fontSize: 20, color: "white" }}
          left={(props) => (
            <Avatar.Icon {...props} icon="account-tie" style={{}} />
          )}
          style={{ backgroundColor: "#353839" }}
        />
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50%",
          }}
        >
          <Text style={{ fontSize: 20 }}>Resource Not Available</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <StudentTitle />

      <Card.Title
        title="Staffs Profile"
        titleStyle={{ fontSize: 20, color: "white" }}
        left={(props) => (
          <Avatar.Icon {...props} icon="account-tie" style={{}} />
        )}
        style={{ backgroundColor: "#353839" }}
      />

      <ScrollView style={{ padding: 10 }}>
        {data.length > 0 &&
          (() => {
            const items = [];
            data.forEach((item) => {
              items.push(

                <Card style={styles.cardm} key={item.id}>
                  <Card.Title
                    title={item.name}
                    titleStyle={styles.cardts}
                    titleNumberOfLines={3}
                    subtitle="M.E. Ph.D."
                    subtitleStyle={styles.cards}
                    left={(props) => (
                      <Image
                        source={{
                          uri:item.imgurl,
                        }}
                        style={{
                          width: 100,
                          height: 100,
                          borderRadius: 10,
                        }}
                      />
                    )}
                    style={styles.cardt}
                  />
                  <Card.Actions>
                  
                    <Button icon="bank" style={{backgroundColor:"#DE3163", borderColor:"#DE3163", margin:5}} textColor="white">View Complete Profile</Button>
                  </Card.Actions> 
                </Card>
              );
            });
            return items;
          })()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  cardm: {
    boxShadow: "0 0 20 gray",
    margin: 10,
  },
  cardt: {
    backgroundColor: "#32174D",
    borderRadius: 10,
    paddingVertical:50,
  },
  cardi: {
    backgroundColor: "#DE3163",
  },
  cards: {
    color: "white",
  
    margin:"30%"
  },
  cardts: {
    fontSize: 18,
    color: "white",
    marginLeft: "30%",
    fontWeight:"800"
  },
});
