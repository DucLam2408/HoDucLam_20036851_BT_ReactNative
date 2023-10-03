import { SafeAreaView, TextInput } from "react-native";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native-web";
import Style from "./style";
import data from "./data";
import { useState } from "react";

const Screen = () => {
  const [errorCheckLogin, setErrorCheckLogin] = useState("");
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [eyeClick, setEyeClick] = useState(true);
  const checkLogin = (account, password) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].userName === account && data[i].passWord === password) {
        return true;
      }
    }
    return false;
  };
  return (
    <View style={Style.container}>
      {/* header LOGIN */}
      <View style={Style.login}>
        <Text style={Style.textLogin}>LOGIN</Text>
      </View>

      {/*input user name  */}
      <SafeAreaView>
        <View style={Style.loginUserName}>
          <TextInput
            style={Style.inputUserName}
            onChangeText={(txt) => setUserName(txt)}
            value={userName}
            placeholder="Name"
          ></TextInput>
          <Image style={Style.logoUser} source={require("./img/user.png")} />
        </View>
      </SafeAreaView>

      {/*input password  */}
      <SafeAreaView>
        <View style={Style.loginPassWord}>
          <Image style={Style.logoLock} source={require("./img/lock.png")} />
          <TouchableOpacity
            onPress={() => {
              setEyeClick(!eyeClick);
            }}
          >
            <Image style={Style.logoEye} source={require("./img/eye.png")} />
          </TouchableOpacity>
          <TextInput
            style={Style.inputPassWord}
            secureTextEntry={eyeClick}
            onChangeText={(txt) => setPassWord(txt)}
            value={passWord}
            placeholder="PassWord"
          ></TextInput>
        </View>
      </SafeAreaView>

      {/*button LOGIN  */}
      <View>
        <TouchableOpacity
          style={Style.btnLogin}
          onPress={() => {
            checkLogin(userName, passWord)
              ? setErrorCheckLogin("login successful")
              : setErrorCheckLogin("Login fail");
          }}
        >
          <Text style={Style.text2}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={{ color: "red", fontSize: 20 }}>{errorCheckLogin}</Text>
      </View>

      {/*footer */}
      <View>
        <TouchableOpacity style={Style.btnForget}>
          <Text style={Style.text3}>Forgot Your passWord</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Screen;
