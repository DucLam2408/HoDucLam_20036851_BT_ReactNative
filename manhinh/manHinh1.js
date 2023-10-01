import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const ManHinh1 = () =>{
    return(
      <View style={styles.container}>
      <View style={styles.img}>
        <Image
          source={require("../assets/img/Ellipse8.png")}
          style={styles.img1}
        ></Image>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text1}>GROW{"\n"} YOUR BUSINESS</Text>
      </View>

      <View style={styles.textContainer1}>
        <Text style={styles.text2}>
          We will help you to grow your business using {"\n"}online server
        </Text>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity><View style={styles.btn}>
          <Text style={styles.btnText}>LOGIN</Text>
        </View></TouchableOpacity>
        
        <TouchableOpacity>
        <View style={styles.btn}>
          <Text style={styles.btnText}>SIGN UP</Text>
        </View></TouchableOpacity>
      </View>

      <View style={styles.textContainer2}>
        <Text style={styles.text3}>HOW WE WORK?</Text>
      </View>
    </View>

    )
}

const styles = StyleSheet.create({
  container: {
    flex: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "640px",
    width: "360px",
    backgroundImage: "linear-gradient(to bottom, #D4ECEF,#00CCF9)",
  },

  img: {
    flex: 20,

    marginTop: "69px",
  },

  img1: {
    height: "142px",
    width: "142px",
  },

  textContainer: {
    flex: 10,
    marginTop: "208px",
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
    marginTop: "108px",
  },
  textContainer2: {
    marginTop: "-125px",
  },
  text2: {
    fontFamily: "roboto",
    fontWeight: "bold",
    fontSize: "15px",
    lineHeight: "17.58px",
    textAlign: "center",
  },

  btnContainer: {
    flex: 20,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",

    marginTop: "86px",
  },

  btn: {
    width: "125px",
    height: "45px",
    backgroundColor: "#E3C000",
    justifyContent: "center",
  },

  btnText: {
    fontFamily: "roboto",
    fontWeight: "bold",
    lineHeight: "21.09px",
    textAlign: "center",
    fontSize: "18px",
  },

  text3: {
    fontFamily: "roboto",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "21.09",
    textAlign: "center",
  },
})

export default ManHinh1;