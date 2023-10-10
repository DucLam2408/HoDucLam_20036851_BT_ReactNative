import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  container: {
    flex: 1,
  },
  container01: {
    backgroundColor: "#FFF",
    flex: 1.5,
  },
  container02: {
    flex: 4,
    backgroundColor: "#C4C4C4",
    alignItems: "center",
  },
  logo01: {
    width: 140,
    height: 180,
  },
  text01: {
    flex: 0.2,
    fontSize: 18,
    fontWeight: 400,
    fontFamily: "Roboto",
    marginTop: 10,
    marginRight: 180,
  },
  buttonSliver: {
    margin: 5,
    flex: 1,
    width: 85,
    height: 80,
    backgroundColor: "#C5F1FB",
  },
  buttonRed: {
    margin: 5,
    flex: 1,
    width: 85,
    height: 80,
    backgroundColor: "red",
  },
  buttonBlack: {
    margin: 5,
    flex: 1,
    width: 85,
    height: 80,
    backgroundColor: "black",
  },
  buttonBlue: {
    margin: 5,
    flex: 1,
    width: 85,
    height: 80,
    backgroundColor: "#234896",
  },
  buttonDone: {
    marginTop: 10,
    marginBottom: 10,
    flex: 0.6,
    width: 326,
    height: 44,
    backgroundColor: "rgba(25, 82, 226, 0.58)",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text02: {
    color: "#F9F2F2",
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: 700,
  },
});

export default Style;
