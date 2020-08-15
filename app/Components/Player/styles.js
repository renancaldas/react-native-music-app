import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAEAEC",
  },
  textLight: {
    color: "#B6B7BF",
  },
  text: {
    color: "#8E97A6",
  },
  textDark: {
    color: "#3D425C",
  },
  coverContainer: {
    width: "80%",
    height: "70%",
    shadowColor: "#5D3F6A",
    shadowOffset: { height: 5 },
    shadowRadius: 2,
    shadowOpacity: 0.3,
    marginTop: 5,
    marginBottom: 10,
    elevation: 1,
    backgroundColor: "#0000",
  },
  cover: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  track: {
    height: 2,
    borderRadius: 1,
    backgroundColor: "#FFF",
  },
  thumb: {
    width: 8,
    height: 8,
    backgroundColor: "#3D425C",
  },
  timeStamp: {
    fontSize: 11,
    fontWeight: "500",
  },
  playButtonContainer: {
    backgroundColor: "#FFF",
    borderColor: "rgba(93, 63, 106, 0.2)",
    borderWidth: 16,
    width: "40%",
    height: "100%",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 32,
    shadowColor: "#5D3F6A",
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
});
