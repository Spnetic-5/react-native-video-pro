import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "./Icons";
const { width, height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.greyBorder,
    width: width,
    height: width * (9 / 16) + 60,
  },
  iosContainer: {
    width: height * 0.9,
    height: width,
  },
  androidContainer: {
    width: height * 0.9,
    height: width,
  },
  errorContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.F6F6F6,
    height: width * (9 / 16) + 60,
  },
  video: {
    width: width,
    height: width * (9 / 16),
    backgroundColor: COLORS.white,
  },
  androidfullScreenVideo: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.white,
  },
  iosfullScreenVideo: {
    width: height * 0.9,
    height: height * (9 / 16) - 25,
    backgroundColor: COLORS.white,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  stripContainer: { position: "absolute", bottom: 0, left: 0, right: 0 },
  iosStrip: {
    bottom: 20,
  },
  videoStrip: {
    width: "100%",
    height: 60,
    backgroundColor: COLORS.F6F6F6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  videoStripFullScreen: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  timelineContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 5,
    height: 60,
  },
  playButton: {
    flex: 1,
    alignItems: "center",
    width: 50,
  },
  trackContainer: {
    justifyContent: "center",
    width: "100%",
    zIndex: 5,
  },
  track: {
    height: 4,
    position: "relative",
  },
  dot: {
    position: "absolute",
    top: -5,
    width: 14,
    height: 14,
    marginLeft: -8,
    borderRadius: 7,
    borderWidth: 1,
  },
  errorText: { fontSize: 16, fontWeight: "700", color: COLORS.textFieldGrey },
  fullWidth: {
    width: "100%",
  },
  fullScreenIcon: {
    flex: 1,
    alignItems: "flex-end",
    top: -1,
  },
  loaderContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30%",
    width: width,
    zIndex: 99,
  },
  timeStamp: {
    color: COLORS.C353840,
    fontSize: 14,
    fontWeight: "600",
  },
});
