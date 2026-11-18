import {StyleSheet} from "react-native";
import {theme} from "@/shared/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 10,
        padding: 10,
    },
    mainLabel: {
        fontWeight: "bold",
        fontSize: 18,
    },
    subLabel: {
        fontSize: 14,
        color: "grey",
        fontWeight: "500"
    },
    labelContainer: {
        alignItems: "center",
        paddingLeft: 20,
        flexDirection: "row",

    },
    leftIcon: {
        width: "10%",
        alignItems: "center",
    },
    rightIcon: {
        width: "10%",
        alignItems: "center",
        marginLeft: "auto"
    },
    divider: {
        width: 1,
        height: 20,
        marginHorizontal: 12,
        backgroundColor: theme.colors.primary
    },
    innerContentContainer: {
        flexDirection: "column",
        width: "55%",
    },
    tagContainer: {
        flexDirection: "row",
        paddingTop: 5,
        justifyContent: "space-around",
        paddingHorizontal: 10,
    },
    tagContainerSolo: {
        justifyContent: "flex-start",
    }
})