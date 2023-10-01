// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

const ManHinh2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image
          source={require("../assets/img/lock-152879 1.png")}
          style={styles.img1}
        ></Image>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text1}>
          {" "}
          FORGET {"\n"}
          PASSWORD
        </Text>
      </View>

      <View style={styles.textContainer1}>
        <Text style={styles.text2}>
          Provide your account’s email for which you{"\n"} want to reset your
          password
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <Image
          style={styles.img2}
          source={require("../assets/img/mail-2935365 1.png")}
        ></Image>

        <View style={styles.input}>
          <Text style={styles.inputText}>Email</Text>
        </View>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity>
          <View style={styles.btn}>
            <Text style={styles.textBtn}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 100,
    height: "640px",
    width: "360px",
    backgroundImage: "linear-gradient(to bottom, #D4ECEF,#00CCF9)",
  },

  img: {
    flex: 20,
    marginTop: "76px",
    alignItems: "center",
  },

  img1: {
    height: "117px",
    width: "105px",
    justifyContent: "center",
  },

  textContainer: {
    flex: 10,
    marginTop: "94px",
  },

  text1: {
    fontFamily: "roboto",
    fontWeight: "bold",
    fontSize: "25px",
    lineHeight: "29.3px",
    textAlign: "center",
  },
  textContainer1: {
    flex: 10,
    marginTop: "40px",
  },

  btn: {},

  text2: {
    fontFamily: "roboto",
    fontWeight: "bold",
    fontSize: "15px",
    lineHeight: "17.58px",
    textAlign: "center",
  },

  inputContainer: {
    flex: 20,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "86px",
    marginTop: "5px",
  },

  input: {
    width: "257px",
    height: "45px",
    backgroundColor: "#C4C4C4",
    justifyContent: "center",
  },

  inputText: {
    fontFamily: "roboto",
    fontWeight: "400",
    lineHeight: "17.58px",
    fontSize: "18px",
  },
  img2: {
    justifyContent: "space-between",
    display: "flex",
    width: "48px",
    height: "45px",
  },

  btnContainer: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    flex: 20,
    marginBottom: "30px",
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E3C000",
    width: 305,
    height: 45,
  },

  textBtn: {
    fontFamily: "roboto",
    fontWeight: "bold",
    fontSize: "15px",
    lineHeight: "17.58px",
    textAlign: "center",
  },
});
export default ManHinh2;
