import { StyleSheet, Text, View } from "react-native";

const Shadow = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default Shadow;

const styles = StyleSheet.create({
  container: {
    // Android
    // elevation: 10,

    //iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});
