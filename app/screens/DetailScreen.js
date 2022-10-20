import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Button from "../components/Button";
import color from "../config/colors";
import Screen from "../components/Screen";
import Text from "../components/Text";
import routes from "../navigation/routes";

const buttonHeight = 70;
const buttonWidth = 80;
const buttonColor = "mediumLight";
const buttonColorPushed = "medium";

function DetailScreen({ navigation, route }) {
  const [btn1Pushed, setbtn1Pushed] = useState(false);
  const [btn2Pushed, setbtn2Pushed] = useState(false);
  const [btn3Pushed, setbtn3Pushed] = useState(false);
  const [btn4Pushed, setbtn4Pushed] = useState(false);
  const [btn5Pushed, setbtn5Pushed] = useState(false);
  const [btn6Pushed, setbtn6Pushed] = useState(false);
  const [btn7Pushed, setbtn7Pushed] = useState(false);
  const [btn8Pushed, setbtn8Pushed] = useState(false);
  const [btn9Pushed, setbtn9Pushed] = useState(false);
  const [btn10Pushed, setbtn10Pushed] = useState(false);
  const [btn11Pushed, setbtn11Pushed] = useState(false);
  const [btn12Pushed, setbtn12Pushed] = useState(false);
  const [btn13Pushed, setbtn13Pushed] = useState(false);
  const [btn14Pushed, setbtn14Pushed] = useState(false);
  const [btn15Pushed, setbtn15Pushed] = useState(false);
  const [btn16Pushed, setbtn16Pushed] = useState(false);
  const [btn17Pushed, setbtn17Pushed] = useState(false);
  const [btn18Pushed, setbtn18Pushed] = useState(false);
  const [btn19Pushed, setbtn19Pushed] = useState(false);
  const [btn20Pushed, setbtn20Pushed] = useState(false);

  const [progressBar, setProgressBar] = useState(0);
  const [count, setCount] = useState(0);

  const image = route.params.image;
  const teamID = route.params.teamID;
  let title = route.params.title;
  const numBtn = route.params.numBtn;
  const counter = route.params.counter ? route.params.counter : "0";

  // COUNTER
  async function saveCount() {
    try {
      await AsyncStorage.setItem(teamID, count.toString());
    } catch (error) {
      console.log(error);
    }
  }
  async function getCount() {
    try {
      const valueCount = await AsyncStorage.getItem(teamID);
      setCount(Number(valueCount));
    } catch (error) {
      console.log(error);
    }
  }

  // SAVE BUTTONS
  async function saveBtn1() {
    try {
      await AsyncStorage.setItem(
        teamID + (parseInt("1") + parseInt(counter)),
        btn1Pushed ? "1" : "0"
      );
    } catch (error) {
      console.log(error);
    }
  }
  async function saveBtn2() {
    try {
      await AsyncStorage.setItem(
        teamID + (parseInt("2") + parseInt(counter)),
        btn2Pushed ? "1" : "0"
      );
    } catch (error) {
      console.log(error);
    }
  }
  async function saveBtn3() {
    try {
      await AsyncStorage.setItem(
        teamID + (parseInt("3") + parseInt(counter)),
        btn3Pushed ? "1" : "0"
      );
    } catch (error) {
      console.log(error);
    }
  }
  async function saveBtn4() {
    try {
      await AsyncStorage.setItem(
        teamID + (parseInt("4") + parseInt(counter)),
        btn4Pushed ? "1" : "0"
      );
    } catch (error) {
      console.log(error);
    }
  }
  async function saveBtn5() {
    try {
      await AsyncStorage.setItem(
        teamID + (parseInt("5") + parseInt(counter)),
        btn5Pushed ? "1" : "0"
      );
    } catch (error) {
      console.log(error);
    }
  }
  async function saveBtn6() {
    try {
      await AsyncStorage.setItem(
        teamID + (parseInt("6") + parseInt(counter)),
        btn6Pushed ? "1" : "0"
      );
    } catch (error) {
      console.log(error);
    }
  }
  async function saveBtn7() {
    try {
      await AsyncStorage.setItem(
        teamID + (parseInt("7") + parseInt(counter)),
        btn7Pushed ? "1" : "0"
      );
    } catch (error) {
      console.log(error);
    }
  }
  async function saveBtn8() {
    let key =
      numBtn === 7 ? "00" : teamID + (parseInt("8") + parseInt(counter));
    try {
      await AsyncStorage.setItem(key, btn8Pushed ? "1" : "0");
    } catch (error) {
      console.log(error);
    }
  }
  async function saveBtn9() {
    try {
      await AsyncStorage.setItem(
        teamID + (parseInt("9") + parseInt(counter)),
        btn9Pushed ? "1" : "0"
      );
    } catch (error) {
      console.log(error);
    }
  }
  async function saveBtn10() {
    try {
      await AsyncStorage.setItem(
        teamID + (parseInt("10") + parseInt(counter)),
        btn10Pushed ? "1" : "0"
      );
    } catch (error) {
      console.log(error);
    }
  }
  async function saveBtn11() {
    try {
      await AsyncStorage.setItem(
        teamID + (parseInt("11") + parseInt(counter)),
        btn11Pushed ? "1" : "0"
      );
    } catch (error) {
      console.log(error);
    }
  }
  async function saveBtn12() {
    try {
      await AsyncStorage.setItem(teamID + "12", btn12Pushed ? "1" : "0");
    } catch (error) {
      console.log(error);
    }
  }
  async function saveBtn13() {
    try {
      await AsyncStorage.setItem(teamID + "13", btn13Pushed ? "1" : "0");
    } catch (error) {
      console.log(error);
    }
  }
  async function saveBtn14() {
    try {
      await AsyncStorage.setItem(teamID + "14", btn14Pushed ? "1" : "0");
    } catch (error) {
      console.log(error);
    }
  }
  async function saveBtn15() {
    try {
      await AsyncStorage.setItem(teamID + "15", btn15Pushed ? "1" : "0");
    } catch (error) {
      console.log(error);
    }
  }
  async function saveBtn16() {
    try {
      await AsyncStorage.setItem(teamID + "16", btn16Pushed ? "1" : "0");
    } catch (error) {
      console.log(error);
    }
  }
  async function saveBtn17() {
    try {
      await AsyncStorage.setItem(teamID + "17", btn17Pushed ? "1" : "0");
    } catch (error) {
      console.log(error);
    }
  }
  async function saveBtn18() {
    try {
      await AsyncStorage.setItem(teamID + "18", btn18Pushed ? "1" : "0");
    } catch (error) {
      console.log(error);
    }
  }
  async function saveBtn19() {
    try {
      await AsyncStorage.setItem(teamID + "19", btn19Pushed ? "1" : "0");
    } catch (error) {
      console.log(error);
    }
  }
  async function saveBtn20() {
    try {
      await AsyncStorage.setItem(teamID + "20", btn20Pushed ? "1" : "0");
    } catch (error) {
      console.log(error);
    }
  }

  // GET BUTTONS
  async function getBtn1() {
    try {
      const value = await AsyncStorage.getItem(
        teamID + (parseInt("1") + parseInt(counter))
      );
      setbtn1Pushed(value === "1" ? true : false);
    } catch (error) {
      console.log(error);
    }
  }
  async function getBtn2() {
    try {
      const value = await AsyncStorage.getItem(
        teamID + (parseInt("2") + parseInt(counter))
      );
      setbtn2Pushed(value === "1" ? true : false);
    } catch (error) {
      console.log(error);
    }
  }
  async function getBtn3() {
    try {
      const value = await AsyncStorage.getItem(
        teamID + (parseInt("3") + parseInt(counter))
      );
      setbtn3Pushed(value === "1" ? true : false);
    } catch (error) {
      console.log(error);
    }
  }
  async function getBtn4() {
    try {
      const value = await AsyncStorage.getItem(
        teamID + (parseInt("4") + parseInt(counter))
      );
      setbtn4Pushed(value === "1" ? true : false);
    } catch (error) {
      console.log(error);
    }
  }
  async function getBtn5() {
    try {
      const value = await AsyncStorage.getItem(
        teamID + (parseInt("5") + parseInt(counter))
      );
      setbtn5Pushed(value === "1" ? true : false);
    } catch (error) {
      console.log(error);
    }
  }
  async function getBtn6() {
    try {
      const value = await AsyncStorage.getItem(
        teamID + (parseInt("6") + parseInt(counter))
      );
      setbtn6Pushed(value === "1" ? true : false);
    } catch (error) {
      console.log(error);
    }
  }
  async function getBtn7() {
    try {
      const value = await AsyncStorage.getItem(
        teamID + (parseInt("7") + parseInt(counter))
      );
      setbtn7Pushed(value === "1" ? true : false);
    } catch (error) {
      console.log(error);
    }
  }
  async function getBtn8() {
    let key =
      numBtn === 7 ? "00" : teamID + (parseInt("8") + parseInt(counter));
    try {
      const value = await AsyncStorage.getItem(key);
      setbtn8Pushed(value === "1" ? true : false);
    } catch (error) {
      console.log(error);
    }
  }
  async function getBtn9() {
    try {
      const value = await AsyncStorage.getItem(
        teamID + (parseInt("9") + parseInt(counter))
      );
      setbtn9Pushed(value === "1" ? true : false);
    } catch (error) {
      console.log(error);
    }
  }
  async function getBtn10() {
    try {
      const value = await AsyncStorage.getItem(
        teamID + (parseInt("10") + parseInt(counter))
      );
      setbtn10Pushed(value === "1" ? true : false);
    } catch (error) {
      console.log(error);
    }
  }
  async function getBtn11() {
    try {
      const value = await AsyncStorage.getItem(
        teamID + (parseInt("11") + parseInt(counter))
      );
      setbtn11Pushed(value === "1" ? true : false);
    } catch (error) {
      console.log(error);
    }
  }
  async function getBtn12() {
    try {
      const value = await AsyncStorage.getItem(teamID + "12");
      setbtn12Pushed(value === "1" ? true : false);
    } catch (error) {
      console.log(error);
    }
  }
  async function getBtn13() {
    try {
      const value = await AsyncStorage.getItem(teamID + "13");
      setbtn13Pushed(value === "1" ? true : false);
    } catch (error) {
      console.log(error);
    }
  }
  async function getBtn14() {
    try {
      const value = await AsyncStorage.getItem(teamID + "14");
      setbtn14Pushed(value === "1" ? true : false);
    } catch (error) {
      console.log(error);
    }
  }
  async function getBtn15() {
    try {
      const value = await AsyncStorage.getItem(teamID + "15");
      setbtn15Pushed(value === "1" ? true : false);
    } catch (error) {
      console.log(error);
    }
  }
  async function getBtn16() {
    try {
      const value = await AsyncStorage.getItem(teamID + "16");
      setbtn16Pushed(value === "1" ? true : false);
    } catch (error) {
      console.log(error);
    }
  }
  async function getBtn17() {
    try {
      const value = await AsyncStorage.getItem(teamID + "17");
      setbtn17Pushed(value === "1" ? true : false);
    } catch (error) {
      console.log(error);
    }
  }
  async function getBtn18() {
    try {
      const value = await AsyncStorage.getItem(teamID + "18");
      setbtn18Pushed(value === "1" ? true : false);
    } catch (error) {
      console.log(error);
    }
  }
  async function getBtn19() {
    try {
      const value = await AsyncStorage.getItem(teamID + "19");
      setbtn19Pushed(value === "1" ? true : false);
    } catch (error) {
      console.log(error);
    }
  }
  async function getBtn20() {
    try {
      const value = await AsyncStorage.getItem(teamID + "20");
      setbtn20Pushed(value === "1" ? true : false);
    } catch (error) {
      console.log(error);
    }
  }

  //USEEFFECT GET BUTTONS
  useEffect(() => {
    getCount();
    getBtn1();
    getBtn2();
    getBtn3();
    getBtn4();
    getBtn5();
    getBtn6();
    getBtn7();
    getBtn8();
    getBtn9();
    getBtn10();
    getBtn11();
    getBtn12();
    getBtn13();
    getBtn14();
    getBtn15();
    getBtn16();
    getBtn17();
    getBtn18();
    getBtn19();
    getBtn20();
  }, []);

  //USEEFFECT SAVE BUTTONS
  useEffect(() => {
    saveBtn1();
  }, [btn1Pushed]);
  useEffect(() => {
    saveBtn2();
  }, [btn2Pushed]);
  useEffect(() => {
    saveBtn3();
  }, [btn3Pushed]);
  useEffect(() => {
    saveBtn4();
  }, [btn4Pushed]);
  useEffect(() => {
    saveBtn5();
  }, [btn5Pushed]);
  useEffect(() => {
    saveBtn6();
  }, [btn6Pushed]);
  useEffect(() => {
    saveBtn7();
  }, [btn7Pushed]);
  useEffect(() => {
    saveBtn8();
  }, [btn8Pushed]);
  useEffect(() => {
    saveBtn9();
  }, [btn9Pushed]);
  useEffect(() => {
    saveBtn10();
  }, [btn10Pushed]);
  useEffect(() => {
    saveBtn11();
  }, [btn11Pushed]);
  useEffect(() => {
    saveBtn12();
  }, [btn12Pushed]);
  useEffect(() => {
    saveBtn13();
  }, [btn13Pushed]);
  useEffect(() => {
    saveBtn14();
  }, [btn14Pushed]);
  useEffect(() => {
    saveBtn15();
  }, [btn15Pushed]);
  useEffect(() => {
    saveBtn16();
  }, [btn16Pushed]);
  useEffect(() => {
    saveBtn17();
  }, [btn17Pushed]);
  useEffect(() => {
    saveBtn18();
  }, [btn18Pushed]);
  useEffect(() => {
    saveBtn19();
  }, [btn19Pushed]);
  useEffect(() => {
    saveBtn20();
  }, [btn20Pushed]);

  //USEEFFECT COUNTER AND PROGRESS BAR
  useEffect(() => {
    setProgressBar(count / numBtn);
    saveCount();
  }, [count]);

  return (
    <Screen style={styles.logoContainer}>
      <Text style={styles.textTitle}>{"MEU ÁLBUM"}</Text>
      <Image style={styles.logo} source={image} />
      <Text style={styles.textLogo}>{title}</Text>
      <View style={styles.progressBar}>
        <Progress.Bar progress={progressBar} width={250} />
        <Text style={styles.textProgressBar}>
          {count}/{numBtn}
        </Text>
      </View>
      <View
        style={[
          styles.buttonsContainer,
          numBtn > 10 ? styles.ml35 : styles.ml0,
        ]}
      >
        {numBtn === 7 ? (
          <Button
            title={"00"}
            height={buttonHeight}
            width={buttonWidth}
            color={btn8Pushed ? buttonColorPushed : buttonColor}
            onPress={() => {
              {
                setCount(
                  btn8Pushed
                    ? (current) => current - 1
                    : (current) => current + 1
                );
                setbtn8Pushed(!btn8Pushed);
              }
            }}
          />
        ) : null}
        <Button
          title={teamID + (parseInt("1") + parseInt(counter))}
          height={buttonHeight}
          width={buttonWidth}
          color={btn1Pushed ? buttonColorPushed : buttonColor}
          onPress={() => {
            {
              setCount(
                btn1Pushed ? (current) => current - 1 : (current) => current + 1
              );
              setbtn1Pushed(!btn1Pushed);
            }
          }}
        />
        <Button
          title={teamID + (parseInt("2") + parseInt(counter))}
          height={buttonHeight}
          width={buttonWidth}
          color={btn2Pushed ? buttonColorPushed : buttonColor}
          onPress={() => {
            {
              setCount(
                btn2Pushed ? (current) => current - 1 : (current) => current + 1
              );
              setbtn2Pushed(!btn2Pushed);
            }
          }}
        />
        <Button
          title={teamID + (parseInt("3") + parseInt(counter))}
          height={buttonHeight}
          width={buttonWidth}
          color={btn3Pushed ? buttonColorPushed : buttonColor}
          onPress={() => {
            {
              setCount(
                btn3Pushed ? (current) => current - 1 : (current) => current + 1
              );
              setbtn3Pushed(!btn3Pushed);
            }
          }}
        />
        <Button
          title={teamID + (parseInt("4") + parseInt(counter))}
          height={buttonHeight}
          width={buttonWidth}
          color={btn4Pushed ? buttonColorPushed : buttonColor}
          onPress={() => {
            {
              setCount(
                btn4Pushed ? (current) => current - 1 : (current) => current + 1
              );
              setbtn4Pushed(!btn4Pushed);
            }
          }}
        />
        <Button
          title={teamID + (parseInt("5") + parseInt(counter))}
          height={buttonHeight}
          width={buttonWidth}
          color={btn5Pushed ? buttonColorPushed : buttonColor}
          onPress={() => {
            {
              setCount(
                btn5Pushed ? (current) => current - 1 : (current) => current + 1
              );
              setbtn5Pushed(!btn5Pushed);
            }
          }}
        />
        <Button
          title={teamID + (parseInt("6") + parseInt(counter))}
          height={buttonHeight}
          width={buttonWidth}
          color={btn6Pushed ? buttonColorPushed : buttonColor}
          onPress={() => {
            {
              setCount(
                btn6Pushed ? (current) => current - 1 : (current) => current + 1
              );
              setbtn6Pushed(!btn6Pushed);
            }
          }}
        />
        <Button
          title={teamID + (parseInt("7") + parseInt(counter))}
          height={buttonHeight}
          width={buttonWidth}
          color={btn7Pushed ? buttonColorPushed : buttonColor}
          onPress={() => {
            {
              setCount(
                btn7Pushed ? (current) => current - 1 : (current) => current + 1
              );
              setbtn7Pushed(!btn7Pushed);
            }
          }}
        />
        {numBtn > 7 ? (
          <Button
            title={teamID + (parseInt("8") + parseInt(counter))}
            height={buttonHeight}
            width={buttonWidth}
            color={btn8Pushed ? buttonColorPushed : buttonColor}
            onPress={() => {
              {
                setCount(
                  btn8Pushed
                    ? (current) => current - 1
                    : (current) => current + 1
                );
                setbtn8Pushed(!btn8Pushed);
              }
            }}
          />
        ) : null}
        {numBtn > 11 ? (
          <View style={styles.buttonsContainerAux}>
            <Button
              title={teamID + (parseInt("9") + parseInt(counter))}
              height={buttonHeight}
              width={buttonWidth}
              color={btn9Pushed ? buttonColorPushed : buttonColor}
              onPress={() => {
                {
                  setCount(
                    btn9Pushed
                      ? (current) => current - 1
                      : (current) => current + 1
                  );
                  setbtn9Pushed(!btn9Pushed);
                }
              }}
            />
            <Button
              title={teamID + (parseInt("10") + parseInt(counter))}
              height={buttonHeight}
              width={buttonWidth}
              color={btn10Pushed ? buttonColorPushed : buttonColor}
              onPress={() => {
                {
                  setCount(
                    btn10Pushed
                      ? (current) => current - 1
                      : (current) => current + 1
                  );
                  setbtn10Pushed(!btn10Pushed);
                }
              }}
            />
            <Button
              title={teamID + (parseInt("11") + parseInt(counter))}
              height={buttonHeight}
              width={buttonWidth}
              color={btn11Pushed ? buttonColorPushed : buttonColor}
              onPress={() => {
                {
                  setCount(
                    btn11Pushed
                      ? (current) => current - 1
                      : (current) => current + 1
                  );
                  setbtn11Pushed(!btn11Pushed);
                }
              }}
            />
            <Button
              title={teamID + "12"}
              height={buttonHeight}
              width={buttonWidth}
              color={btn12Pushed ? buttonColorPushed : buttonColor}
              onPress={() => {
                {
                  setCount(
                    btn12Pushed
                      ? (current) => current - 1
                      : (current) => current + 1
                  );
                  setbtn12Pushed(!btn12Pushed);
                }
              }}
            />
          </View>
        ) : numBtn > 8 ? (
          <View style={styles.buttonsContainerAux}>
            <Button
              title={teamID + (parseInt("9") + parseInt(counter))}
              height={buttonHeight}
              width={buttonWidth}
              color={btn9Pushed ? buttonColorPushed : buttonColor}
              onPress={() => {
                {
                  setCount(
                    btn9Pushed
                      ? (current) => current - 1
                      : (current) => current + 1
                  );
                  setbtn9Pushed(!btn9Pushed);
                }
              }}
            />
            <Button
              title={teamID + (parseInt("10") + parseInt(counter))}
              height={buttonHeight}
              width={buttonWidth}
              color={btn10Pushed ? buttonColorPushed : buttonColor}
              onPress={() => {
                {
                  setCount(
                    btn10Pushed
                      ? (current) => current - 1
                      : (current) => current + 1
                  );
                  setbtn10Pushed(!btn10Pushed);
                }
              }}
            />
            <Button
              title={teamID + (parseInt("11") + parseInt(counter))}
              height={buttonHeight}
              width={buttonWidth}
              color={btn11Pushed ? buttonColorPushed : buttonColor}
              onPress={() => {
                {
                  setCount(
                    btn11Pushed
                      ? (current) => current - 1
                      : (current) => current + 1
                  );
                  setbtn11Pushed(!btn11Pushed);
                }
              }}
            />
          </View>
        ) : null}
        {numBtn > 11 ? (
          <View style={styles.buttonsContainerAux}>
            <Button
              title={teamID + "13"}
              height={buttonHeight}
              width={buttonWidth}
              color={btn13Pushed ? buttonColorPushed : buttonColor}
              onPress={() => {
                {
                  setCount(
                    btn13Pushed
                      ? (current) => current - 1
                      : (current) => current + 1
                  );
                  setbtn13Pushed(!btn13Pushed);
                }
              }}
            />
            <Button
              title={teamID + "14"}
              height={buttonHeight}
              width={buttonWidth}
              color={btn14Pushed ? buttonColorPushed : buttonColor}
              onPress={() => {
                {
                  setCount(
                    btn14Pushed
                      ? (current) => current - 1
                      : (current) => current + 1
                  );
                  setbtn14Pushed(!btn14Pushed);
                }
              }}
            />
            <Button
              title={teamID + "15"}
              height={buttonHeight}
              width={buttonWidth}
              color={btn15Pushed ? buttonColorPushed : buttonColor}
              onPress={() => {
                {
                  setCount(
                    btn15Pushed
                      ? (current) => current - 1
                      : (current) => current + 1
                  );
                  setbtn15Pushed(!btn15Pushed);
                }
              }}
            />
            <Button
              title={teamID + "16"}
              height={buttonHeight}
              width={buttonWidth}
              color={btn16Pushed ? buttonColorPushed : buttonColor}
              onPress={() => {
                {
                  setCount(
                    btn16Pushed
                      ? (current) => current - 1
                      : (current) => current + 1
                  );
                  setbtn16Pushed(!btn16Pushed);
                }
              }}
            />
            <Button
              title={teamID + "17"}
              height={buttonHeight}
              width={buttonWidth}
              color={btn17Pushed ? buttonColorPushed : buttonColor}
              onPress={() => {
                {
                  setCount(
                    btn17Pushed
                      ? (current) => current - 1
                      : (current) => current + 1
                  );
                  setbtn17Pushed(!btn17Pushed);
                }
              }}
            />
            <Button
              title={teamID + "18"}
              height={buttonHeight}
              width={buttonWidth}
              color={btn18Pushed ? buttonColorPushed : buttonColor}
              onPress={() => {
                {
                  setCount(
                    btn18Pushed
                      ? (current) => current - 1
                      : (current) => current + 1
                  );
                  setbtn18Pushed(!btn18Pushed);
                }
              }}
            />
            <Button
              title={teamID + "19"}
              height={buttonHeight}
              width={buttonWidth}
              color={btn19Pushed ? buttonColorPushed : buttonColor}
              onPress={() => {
                {
                  setCount(
                    btn19Pushed
                      ? (current) => current - 1
                      : (current) => current + 1
                  );
                  setbtn19Pushed(!btn19Pushed);
                }
              }}
            />
            <Button
              title={teamID + "20"}
              height={buttonHeight}
              width={buttonWidth}
              color={btn20Pushed ? buttonColorPushed : buttonColor}
              onPress={() => {
                {
                  setCount(
                    btn20Pushed
                      ? (current) => current - 1
                      : (current) => current + 1
                  );
                  setbtn20Pushed(!btn20Pushed);
                }
              }}
            />
          </View>
        ) : null}
      </View>
      <Button
        title={"Repetidas"}
        height={30}
        width={250}
        color={"danger"}
        onPress={() => {
          navigation.navigate(routes.SWAPSCREEN, {
            teamID: teamID,
            image: image,
            title: title,
            numBtn: numBtn,
          });
        }}
      />
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
  buttonsContainerAux: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  logo: {
    borderRadius: 25,
    marginBottom: 5,
    marginTop: 20,
    height: 80,
    width: 160,
  },
  logoContainer: {
    alignItems: "center",
    backgroundColor: color.primary,
  },
  ml0: { marginLeft: 0 },
  ml35: { marginLeft: 35 },
  progressBar: {
    alignItems: "center",
    marginTop: 5,
  },
  textLogo: {
    color: color.white,
    fontSize: 30,
    marginBottom: 5,
  },
  textProgressBar: {
    color: color.white,
    marginTop: 5,
  },
  textTitle: {
    color: color.white,
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
  },
});

export default DetailScreen;
