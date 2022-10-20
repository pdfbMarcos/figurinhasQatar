import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import * as Progress from "react-native-progress";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";

import Button from "../components/Button";
import color from "../config/colors";
import Screen from "../components/Screen";
import routes from "../navigation/routes";

const buttonHeight = 80;
//const counter = "0/20";
const numBtn = 20;

const xxx = [
  "00",
  "FWC",
  "C",
  "QAT",
  "ECU",
  "SEN",
  "NED",
  "ENG",
  "IRN",
  "USA",
  "WAL",
  "ARG",
  "KSA",
  "MEX",
  "POL",
  "FRA",
  "AUS",
  "DEN",
  "TUN",
  "ESP",
  "GER",
  "JPN",
  "CRC",
  "BEL",
  "CAN",
  "MAR",
  "CRO",
  "BRA",
  "SRB",
  "SUI",
  "CMR",
  "POR",
  "GHA",
  "URU",
  "KOR",
];

function MainScreen({ navigation }) {
  const [progressBar, setProgressBar] = useState(0);
  const [count, setCount] = useState(0);

  const getMultiple = async () => {
    try {
      setCount(0);
      await AsyncStorage.multiGet(xxx, (err, store) => {
        store.map((result, i, store) => {
          if (store[i][1] === null) {
          } else {
            setCount((current) => current + parseInt(store[i][1]));
          }
        });
      });
    } catch (e) {
      console.log(e);
    }
  };

  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      // clear error
    }

    console.log("Done.");
  };

  //USEEFFECT COUNTER
  useEffect(() => {
    //console.log(list);
    //clearAll();
  }, []);

  //USEEFFECT PROGRESS BAR
  useEffect(() => {
    setProgressBar(count / 678);
  }, [count]);

  const isFocused = useIsFocused();
  useEffect(() => {
    {
      isFocused ? getMultiple() : "";
    }
  }, [isFocused]);

  return (
    <Screen style={styles.logoContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={styles.logo}
          source={require("../assets/logoWelcome.jpg")}
        />
        <View style={styles.progressBar}>
          <Progress.Bar progress={progressBar} width={250} height={10} />
          <Text style={styles.textProgressBar}>{count}/678</Text>
        </View>

        <Text style={{ color: color.white }}>OUTRAS</Text>
        <View style={styles.buttonsContainer}>
          <Button
            title="Especiais"
            //subTitle={counter}
            image={require("../assets/flags/star_icon.png")}
            height={buttonHeight}
            onPress={() => {
              navigation.navigate(routes.DETAILSCREEN, {
                teamID: "FWC",
                image: require("../assets/flags/star_icon.png"),
                title: "Especiais",
                numBtn: 7,
              });
            }}
          />
          <Button
            title="Estádios"
            //subTitle={counter}
            image={require("../assets/flags/soccer_icon.png")}
            height={buttonHeight}
            onPress={() => {
              navigation.navigate(routes.DETAILSCREEN, {
                teamID: "FWC",
                image: require("../assets/flags/soccer_icon.png"),
                title: "Estádios",
                numBtn: 11,
                counter: 7,
              });
            }}
          />
          <Button
            title="Seleções Especiais"
            //subTitle={counter}
            image={require("../assets/flags/premium_icon.png")}
            height={buttonHeight}
            onPress={() => {
              navigation.navigate(routes.DETAILSCREEN, {
                teamID: "FWC",
                image: require("../assets/flags/premium_icon.png"),
                title: "Seleções Especiais",
                numBtn: 11,
                counter: 18,
              });
            }}
          />
          <Button
            title="Coca-Cola"
            //subTitle={counter}
            image={require("../assets/flags/coca_cola_icon.png")}
            height={buttonHeight}
            onPress={() => {
              navigation.navigate(routes.DETAILSCREEN, {
                teamID: "C",
                image: require("../assets/flags/coca_cola_icon.png"),
                title: "Coca-Cola",
                numBtn: 8,
              });
            }}
          />
        </View>

        <Text style={{ color: color.white }}>GRUPO A</Text>
        <View style={styles.buttonsContainer}>
          <Button
            title="Catar"
            //subTitle={counter}
            image={require("../assets/flags/QAT.webp")}
            height={buttonHeight}
            onPress={() => {
              navigation.navigate(routes.DETAILSCREEN, {
                teamID: "QAT",
                image: require("../assets/flags/QAT.webp"),
                title: "Catar",
                numBtn: numBtn,
              });
            }}
          />
          <Button
            title="Equador"
            //subTitle={counter}
            image={require("../assets/flags/ECU.webp")}
            height={buttonHeight}
            onPress={() => {
              navigation.navigate(routes.DETAILSCREEN, {
                teamID: "ECU",
                image: require("../assets/flags/ECU.webp"),
                title: "Equador",
                numBtn: numBtn,
              });
            }}
          />
          <Button
            title="Senegal"
            //subTitle={counter}
            image={require("../assets/flags/SEN.webp")}
            height={buttonHeight}
            onPress={() => {
              navigation.navigate(routes.DETAILSCREEN, {
                teamID: "SEN",
                image: require("../assets/flags/SEN.webp"),
                title: "Senegal",
                numBtn: numBtn,
              });
            }}
          />
          <Button
            title="Holanda"
            //subTitle={counter}
            image={require("../assets/flags/NED.webp")}
            height={buttonHeight}
            onPress={() => {
              navigation.navigate(routes.DETAILSCREEN, {
                teamID: "NED",
                image: require("../assets/flags/NED.webp"),
                title: "Holanda",
                numBtn: numBtn,
              });
            }}
          />
        </View>
        <Text style={{ color: color.white }}>GRUPO B</Text>
        <View style={styles.buttonsContainer}>
          <Button
            title="Inglaterra"
            //subTitle={counter}
            image={require("../assets/flags/ENG.webp")}
            height={buttonHeight}
            onPress={() => {
              navigation.navigate(routes.DETAILSCREEN, {
                teamID: "ENG",
                image: require("../assets/flags/ENG.webp"),
                title: "Inglaterra",
                numBtn: numBtn,
              });
            }}
          />
          <Button
            title="Irã"
            //subTitle={counter}
            image={require("../assets/flags/IRN.webp")}
            height={buttonHeight}
            onPress={() => {
              navigation.navigate(routes.DETAILSCREEN, {
                teamID: "IRN",
                image: require("../assets/flags/IRN.webp"),
                title: "Irã",
                numBtn: numBtn,
              });
            }}
          />
          <Button
            title="Estados Unidos"
            //subTitle={counter}
            image={require("../assets/flags/USA.webp")}
            height={buttonHeight}
            onPress={() => {
              navigation.navigate(routes.DETAILSCREEN, {
                teamID: "USA",
                image: require("../assets/flags/USA.webp"),
                title: "Estados Unidos",
                numBtn: numBtn,
              });
            }}
          />
          <Button
            title="País de Gales"
            //subTitle={counter}
            image={require("../assets/flags/WAL.webp")}
            height={buttonHeight}
            onPress={() => {
              navigation.navigate(routes.DETAILSCREEN, {
                teamID: "WAL",
                image: require("../assets/flags/WAL.webp"),
                title: "País de Gales",
                numBtn: numBtn,
              });
            }}
          />
        </View>
        <Text style={{ color: color.white }}>GRUPO C</Text>
        <View style={styles.buttonsContainer}>
          <Button
            title="Argentina"
            //subTitle={counter}
            image={require("../assets/flags/ARG.webp")}
            height={buttonHeight}
            onPress={() => {
              navigation.navigate(routes.DETAILSCREEN, {
                teamID: "ARG",
                image: require("../assets/flags/ARG.webp"),
                title: "Argentina",
                numBtn: numBtn,
              });
            }}
          />
          <Button
            title="Arábia Saudita"
            //subTitle={counter}
            image={require("../assets/flags/KSA.webp")}
            height={buttonHeight}
            onPress={() => {
              navigation.navigate(routes.DETAILSCREEN, {
                teamID: "KSA",
                image: require("../assets/flags/KSA.webp"),
                title: "Arábia Saudita",
                numBtn: numBtn,
              });
            }}
          />
          <Button
            title="México"
            //subTitle={counter}
            image={require("../assets/flags/MEX.webp")}
            height={buttonHeight}
            onPress={() => {
              navigation.navigate(routes.DETAILSCREEN, {
                teamID: "MEX",
                image: require("../assets/flags/MEX.webp"),
                title: "México",
                numBtn: numBtn,
              });
            }}
          />
          <Button
            title="Polônia"
            //subTitle={counter}
            image={require("../assets/flags/POL.webp")}
            height={buttonHeight}
            onPress={() => {
              navigation.navigate(routes.DETAILSCREEN, {
                teamID: "POL",
                image: require("../assets/flags/POL.webp"),
                title: "Polônia",
                numBtn: numBtn,
              });
            }}
          />
        </View>
        <Text style={{ color: color.white }}>GRUPO D</Text>
        <View style={styles.buttonsContainer}>
          <Button
            title="França"
            //subTitle={counter}
            image={require("../assets/flags/FRA.webp")}
            height={buttonHeight}
            onPress={() => {
              navigation.navigate(routes.DETAILSCREEN, {
                teamID: "FRA",
                image: require("../assets/flags/FRA.webp"),
                title: "França",
                numBtn: numBtn,
              });
            }}
          />
          <Button
            title="Austrália"
            //subTitle={counter}
            image={require("../assets/flags/AUS.webp")}
            height={buttonHeight}
            onPress={() => {
              navigation.navigate(routes.DETAILSCREEN, {
                teamID: "AUS",
                image: require("../assets/flags/AUS.webp"),
                title: "Austrália",
                numBtn: numBtn,
              });
            }}
          />
          <Button
            title="Dinamarca"
            //subTitle={counter}
            image={require("../assets/flags/DEN.webp")}
            height={buttonHeight}
            onPress={() => {
              navigation.navigate(routes.DETAILSCREEN, {
                teamID: "DEN",
                image: require("../assets/flags/DEN.webp"),
                title: "Dinamarca",
                numBtn: numBtn,
              });
            }}
          />
          <Button
            title="Tunísia"
            //subTitle={counter}
            image={require("../assets/flags/TUN.webp")}
            height={buttonHeight}
            onPress={() => {
              navigation.navigate(routes.DETAILSCREEN, {
                teamID: "TUN",
                image: require("../assets/flags/TUN.webp"),
                title: "Tunísia",
                numBtn: numBtn,
              });
            }}
          />
        </View>
        <Text style={{ color: color.white }}>GRUPO E</Text>
        <View style={styles.buttonsContainer}>
          <Button
            title="Espanha"
            //subTitle={counter}
            image={require("../assets/flags/ESP.webp")}
            height={buttonHeight}
            onPress={() => {
              navigation.navigate(routes.DETAILSCREEN, {
                teamID: "ESP",
                image: require("../assets/flags/ESP.webp"),
                title: "Espanha",
                numBtn: numBtn,
              });
            }}
          />
          <Button
            title="Alemanha"
            //subTitle={counter}
            image={require("../assets/flags/GER.webp")}
            height={buttonHeight}
            onPress={() => {
              navigation.navigate(routes.DETAILSCREEN, {
                teamID: "GER",
                image: require("../assets/flags/GER.webp"),
                title: "Alemanha",
                numBtn: numBtn,
              });
            }}
          />
          <Button
            title="Japão"
            //subTitle={counter}
            image={require("../assets/flags/JPN.webp")}
            height={buttonHeight}
            onPress={() => {
              navigation.navigate(routes.DETAILSCREEN, {
                teamID: "JPN",
                image: require("../assets/flags/JPN.webp"),
                title: "Japão",
                numBtn: numBtn,
              });
            }}
          />
          <Button
            title="Costa Rica"
            //subTitle={counter}
            image={require("../assets/flags/CRC.webp")}
            height={buttonHeight}
            onPress={() => {
              navigation.navigate(routes.DETAILSCREEN, {
                teamID: "CRC",
                image: require("../assets/flags/CRC.webp"),
                title: "Costa Rica",
                numBtn: numBtn,
              });
            }}
          />
        </View>
        <Text style={{ color: color.white }}>GRUPO F</Text>
        <View style={styles.buttonsContainer}>
          <Button
            title="Bélgica"
            //subTitle={counter}
            image={require("../assets/flags/BEL.webp")}
            height={buttonHeight}
            onPress={() => {
              navigation.navigate(routes.DETAILSCREEN, {
                teamID: "BEL",
                image: require("../assets/flags/BEL.webp"),
                title: "Bélgica",
                numBtn: numBtn,
              });
            }}
          />
          <Button
            title="Canadá"
            //subTitle={counter}
            image={require("../assets/flags/CAN.webp")}
            height={buttonHeight}
            onPress={() => {
              navigation.navigate(routes.DETAILSCREEN, {
                teamID: "CAN",
                image: require("../assets/flags/CAN.webp"),
                title: "Canadá",
                numBtn: numBtn,
              });
            }}
          />
          <Button
            title="Marrocos"
            //subTitle={counter}
            image={require("../assets/flags/MAR.webp")}
            height={buttonHeight}
            onPress={() => {
              navigation.navigate(routes.DETAILSCREEN, {
                teamID: "MAR",
                image: require("../assets/flags/MAR.webp"),
                title: "Marrocos",
                numBtn: numBtn,
              });
            }}
          />
          <Button
            title="Croácia"
            //subTitle={counter}
            image={require("../assets/flags/CRO.webp")}
            height={buttonHeight}
            onPress={() => {
              navigation.navigate(routes.DETAILSCREEN, {
                teamID: "CRO",
                image: require("../assets/flags/CRO.webp"),
                title: "Croácia",
                numBtn: numBtn,
              });
            }}
          />
        </View>
        <Text style={{ color: color.white }}>GRUPO G</Text>
        <View style={styles.buttonsContainer}>
          <Button
            title="Brasil"
            //subTitle={counter}
            image={require("../assets/flags/BRA.webp")}
            height={buttonHeight}
            onPress={() => {
              navigation.navigate(routes.DETAILSCREEN, {
                teamID: "BRA",
                image: require("../assets/flags/BRA.webp"),
                title: "Brasil",
                numBtn: numBtn,
              });
            }}
          />
          <Button
            title="Sérvia"
            //subTitle={counter}
            image={require("../assets/flags/SRB.webp")}
            height={buttonHeight}
            onPress={() => {
              navigation.navigate(routes.DETAILSCREEN, {
                teamID: "SRB",
                image: require("../assets/flags/SRB.webp"),
                title: "Sérvia",
                numBtn: numBtn,
              });
            }}
          />
          <Button
            title="Suíça"
            //subTitle={counter}
            image={require("../assets/flags/SUI.webp")}
            height={buttonHeight}
            onPress={() => {
              navigation.navigate(routes.DETAILSCREEN, {
                teamID: "SUI",
                image: require("../assets/flags/SUI.webp"),
                title: "Suíça",
                numBtn: numBtn,
              });
            }}
          />
          <Button
            title="Camarões"
            //subTitle={counter}
            image={require("../assets/flags/CMR.webp")}
            height={buttonHeight}
            onPress={() => {
              navigation.navigate(routes.DETAILSCREEN, {
                teamID: "CMR",
                image: require("../assets/flags/CMR.webp"),
                title: "Camarões",
                numBtn: numBtn,
              });
            }}
          />
        </View>
        <Text style={{ color: color.white }}>GRUPO H</Text>
        <View style={styles.buttonsContainer}>
          <Button
            title="Portugal"
            //subTitle={counter}
            image={require("../assets/flags/POR.webp")}
            height={buttonHeight}
            onPress={() => {
              navigation.navigate(routes.DETAILSCREEN, {
                teamID: "POR",
                image: require("../assets/flags/POR.webp"),
                title: "Portugal",
                numBtn: numBtn,
              });
            }}
          />
          <Button
            title="Gana"
            //subTitle={counter}
            image={require("../assets/flags/GHA.webp")}
            height={buttonHeight}
            onPress={() => {
              navigation.navigate(routes.DETAILSCREEN, {
                teamID: "GHA",
                image: require("../assets/flags/GHA.webp"),
                title: "Gana",
                numBtn: numBtn,
              });
            }}
          />
          <Button
            title="Uruguai"
            //subTitle={counter}
            image={require("../assets/flags/URU.webp")}
            height={buttonHeight}
            onPress={() => {
              navigation.navigate(routes.DETAILSCREEN, {
                teamID: "URU",
                image: require("../assets/flags/URU.webp"),
                title: "Uruguai",
                numBtn: numBtn,
              });
            }}
          />
          <Button
            title="Córiea do Sul"
            //subTitle={counter}
            image={require("../assets/flags/KOR.webp")}
            height={buttonHeight}
            onPress={() => {
              navigation.navigate(routes.DETAILSCREEN, {
                teamID: "KOR",
                image: require("../assets/flags/KOR.webp"),
                title: "Córiea do Sul",
                numBtn: numBtn,
              });
            }}
          />
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    padding: 10,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  logo: {
    borderRadius: 25,
    marginBottom: 20,
    marginTop: 15,
    height: 180,
    width: 330,
  },
  logoContainer: {
    alignItems: "center",
    backgroundColor: color.primary,
  },
  progressBar: {
    alignItems: "center",
    marginBottom: 15,
    marginTop: 15,
  },
  textProgressBar: {
    color: color.white,
    marginTop: 5,
  },
});

export default MainScreen;
