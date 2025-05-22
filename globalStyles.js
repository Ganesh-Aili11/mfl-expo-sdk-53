import { StyleSheet } from "react-native";

export const useGlobalStyles = () => {
  const main_style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF",
      padding: 16,
      justifyContent: "center",
      alignItems: "center",
    },
    textBlack: {
      color: "black",
    },
    textWhite: {
      color: "white",
    },
    textLight: {
      fontFamily: "Hero-Light",
    },
    textRegular: {
      fontFamily: "Hero-Regular",
    },
    textBold: {
      fontFamily: "Hero-Bold",
    },
    line_gap: {
      marginTop: "10%",
    },
    small_line_gap: {
      marginBottom: 8,
    },
    gotItButton: {
      // backgroundColor: "#1fb5e4",
      // padding: 5,
      // borderRadius: 5,
      alignItems: "flex-end",
      marginTop: 5,
    },
    gotItButtonText: {
      color: "#FA4B87",
      fontSize: 14,
    },
  });

  return { main_style };
};

export const container = {
  flex: 1,
  backgroundColor: "#FAFAFA",
  padding: 16,
  justifyContent: "center",
  alignItems: "center",
};

/* fonts */
export const FontFamily = {
  sFProText: "SF Pro Text",
  m3LabelLarge: "Roboto-Medium",
  interRegular: "Inter-Regular",
  interBold: "Inter-Bold",
  montserratSemiBold: "Montserrat-SemiBold",
};
/* font sizes */
export const FontSize = {
  size_3xs: 10,
  m3LabelLarge_size: 14,
  size_base: 16,
  size_xs: 12,
  size_13xl: 32,
};
/* Colors */
export const Color = {
  colorMediumblue_100: "#3b3bff",
  colorMediumblue_200: "rgba(59, 59, 255, 0.6)",
  colorGray_100: "#fafafa",
  colorGray_200: "rgba(27, 27, 27, 0.15)",
  m3SysLightPrimary: "#6750a4",
  colorBlack: "#000",
  colorWhite: "#fff",
  colorDarkslategray_100: "rgba(60, 60, 67, 0.5)",
  colorHotpink_100: "#fa4b87",
  colorDimgray: "#5f5f5f",
  colorGainsboro_100: "#dcdcdc",
  colorGainsboro_200: "#d9d9d9",
};
/* Paddings */
export const Padding = {
  p_5xl: 24,
  p_3xs: 10,
  p_5xs: 8,
  p_11xs: 2,
  p_xs: 12,
};
/* border radiuses */
export const Border = {
  br_81xl: 100,
  br_101xl: 120,
  br_3xs: 10,
  br_mini: 15,
  br_11xl: 30,
};
