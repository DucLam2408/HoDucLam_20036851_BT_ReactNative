import { View, Text } from "react-native";
import Styles1 from "./styles1";
import { TextInput, Image, TouchableOpacity } from "react-native-web";
const Screen1 = () => {
  return (
    <View style={Styles1.container}>
      <View style={Styles1.container1}>
        <View style={Styles1.container1_1}>
          <Text style={Styles1.textPassword}> PASSWORD{"\n"}GENERATOR</Text>
        </View>

        <View style={Styles1.container1_2}>
          <TextInput></TextInput>
        </View>

        <View style={Styles1.container1_3}>
          <Text style={Styles1.text2}>Password length</Text>
          <TextInput style={Styles1.input1}></TextInput>
        </View>

        <View style={Styles1.container1_4}>
          <Text style={Styles1.text3}>Include lower case letters</Text>
          <Image style={Styles1.imageTick} source={require("./img/tick.png")} />
        </View>

        <View style={Styles1.container1_4}>
          <Text style={Styles1.text3}>Include upcase letters</Text>
          <TextInput style={Styles1.input2}></TextInput>
        </View>

        <View style={Styles1.container1_4}>
          <Text style={Styles1.text3}>Include number</Text>
          <Image style={Styles1.imageTick} source={require("./img/tick.png")} />
        </View>

        <View style={Styles1.container1_4}>
          <Text style={Styles1.text3}>Include special letters</Text>
          <TextInput style={Styles1.input2}></TextInput>
        </View>

        <View style={Styles1.container1_5}>
          <TouchableOpacity>
            <Text style={Styles1.text4}>GENERATE PASSWORD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Screen1;
