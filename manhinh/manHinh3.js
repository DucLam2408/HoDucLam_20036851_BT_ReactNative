// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from "react-native";

const ManHinh3 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text3}>CODE</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text1}>VERIFICATION</Text>
      </View>

      <View style={styles.textContainer1}>
        <Text style={styles.text2}>
          Enter ontime password sent on{"\n"}
          ++849092605798
        </Text>
      </View>

      <View style={styles.inputContainer}>
     <View style={styles.input}></View>
     <View style={styles.input}></View>
     <View style={styles.input}></View>
     <View style={styles.input}></View>
     <View style={styles.input}></View>
     <View style={styles.input}></View>
      </View>

      <View style={styles.btnContainer}>
        <View style={styles.btn}>
          <Text style={styles.textBtn}>VERIFY CODE</Text>
        </View>
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

  textContainer: {
    flex: 20,
    marginTop: "76px",
    alignItems: "center",
  },

  textContainer: {
    flex: 10,
    marginTop: "94px",
  },

  text3: {
    fontFamily: "roboto",
    fontWeight: "bold",
    fontSize: "60px",
    lineHeight: "70.31px",
    textAlign: "center",
  },
  text1: {
    fontFamily: "roboto",
    fontWeight: "bold",
    fontSize: "20px",
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
    width: "50px",
    height: "45px",
    justifyContent: "center",
    borderWidth: 1
  },
  input2: {
    width: "50px",
    height: "45px",
    justifyContent: "center",
    borderWidth: 1
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
    fontSize: "18px",
    lineHeight: "21.09px",
    textAlign: "center",
  },
});
export default ManHinh3;
