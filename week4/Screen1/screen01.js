import { View, Text } from "react-native";
import { Image, SafeAreaView } from "react-native-web";
import Style from "./style";

const Screen01 = () => {
  return (
    <SafeAreaView>
      <View style={Style.container}>
        <Image
          style={Style.logoSanPham}
          source={require("../img/phonered.png")}
        />
      </View>
      <View>
        <Text style={Style.text01}>
          Điện thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
      </View>
      <View style={Style.star5}>
        <Image style={Style.star} source={require("../img/star.png")} />
        <Image style={Style.star} source={require("../img/star.png")} />
        <Image style={Style.star} source={require("../img/star.png")} />
        <Image style={Style.star} source={require("../img/star.png")} />
        <Image style={Style.star} source={require("../img/star.png")} />
        <Text style={Style.text02}>(Xem 828 đánh giá)</Text>
      </View>

      <View style={Style.cost}>
        <Text style={Style.text03}>1.790.000đ</Text>
        <Text style={Style.text04}>1.790.000đ</Text>
        <Text style={Style.text05}></Text>
      </View>

      <View>
        <Text style={Style.text06}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Image style={Style.group} source={require("../img/Group 1.png")} />
      </View>

      <View style={Style.border}>
        <Text style={Style.text07}>4 MÀU-CHỌN MÀU</Text>
        <Image style={Style.vector} source={require("../img/Vector.png")} />
      </View>

      <View style={Style.button1}>
        <Text style={Style.text08}>CHỌN MUA</Text>
      </View>
    </SafeAreaView>
  );
};

export default Screen01;
