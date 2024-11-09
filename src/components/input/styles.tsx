import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window"); 

export const styles = StyleSheet.create({
  inputContainer: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
    justifyContent: "center",
    width: width * 0.7,
    height: height * 0.07,
    margin: '3%'
  },
  input: {
    margin: '3%',
    textAlign: "left",
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black'
  },
});