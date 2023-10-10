import { View, Text } from "react-native";
import { Image, SafeAreaView, TouchableOpacity } from "react-native-web";
import Style from "./style";
import { useState } from "react";
const Screen02 = ({ navigation }) => {
  const [colorPhone, setColorPhone] = useState(require("../img/vs_blue.png"));
  return (
    <SafeAreaView style={Style.container}>
      <View style={Style.container01}>
        <Image style={Style.logo01} source={colorPhone} />
      </View>
      <View style={Style.container02}>
        <Text style={Style.text01}>Chọn một màu bên dưới:</Text>

        <TouchableOpacity
          style={Style.buttonSliver}
          onPress={() => {
            setColorPhone(require("../img/vs_silver.png"));
          }}
        ></TouchableOpacity>
        <TouchableOpacity
          style={Style.buttonRed}
          onPress={() => {
            setColorPhone(require("../img/vs_red.png"));
          }}
        ></TouchableOpacity>
        <TouchableOpacity
          style={Style.buttonBlack}
          onPress={() => {
            setColorPhone(require("../img/vs_black.png"));
          }}
        ></TouchableOpacity>
        <TouchableOpacity
          style={Style.buttonBlue}
          onPress={() => {
            setColorPhone(require("../img/vs_blue.png"));
          }}
        ></TouchableOpacity>
        <TouchableOpacity
          style={Style.buttonDone}
          onPress={() => {
            navigation.navigate("Screen01", colorPhone);
          }}
        >
          <Text style={Style.text02}>XONG</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Screen02;
