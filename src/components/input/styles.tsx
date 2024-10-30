import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window"); 


export const styles = StyleSheet.create({
  inputContainer: {
    borderColor: "black",
    borderWidth: 2,
    justifyContent: "center",
    width: width * 0.70,
    height: height * 0.08,
  },
  input: {
    margin: 5,
    textAlign: "left",
    fontSize: 32
  },
});