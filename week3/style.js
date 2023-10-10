import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: "linear-gradient(180deg, #FBCB00 0%, #BF9A00 100%)",
    weight: "360px",
    height: "640px",
  },
  login: {
    marginTop: "75px",
  },
  textLogin: {
    fontWeight: "700",
    fontSize: "30px",
  },
  inputUserName: {
    border: "1px solid var(--Gray-6, #F2F2F2)",
    width: "330px",
    height: "54px",
    paddingLeft: 60,
  },
  inputPassWord: {
    border: "1px solid var(--Gray-6, #F2F2F2)",
    width: "330px",
    height: "54px",
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
    paddingLeft: 60,
  },
  logoUser: {
    width: 40,
    height: 40,
    position: "absolute",
    top: 9,
    left: 9,
  },
  logoLock: {
    width: 40,
    height: 40,
    position: "absolute",
    top: 25,
    left: 8,
  },
  logoEye: {
    width: 40,
    height: 40,
    position: "absolute",
    top: 25,
    left: 280,
  },
  loginUserName: {
    flexDirection: "row",
    // justifyContent: "center",
    marginLeft: 15,
    marginTop: 117,
    width: "330px",
    height: "54px",
  },
  loginPassWord: {
    flexDirection: "row",
    // justifyContent: "center",
    marginLeft: 15,
  },
  btnLogin: {
    backgroundColor: "black",
    width: "330px",
    height: "45px",
    marginLeft: 25,
    marginTop: 30,
    justifyContent: "center",
  },
  btnForget: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  text3: {
    color: "black",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: 800,
  },
  text2: {
    color: "#FFF",
    textAlign: "center",
    fontSize: "20px",
  },
});
export default Style;
