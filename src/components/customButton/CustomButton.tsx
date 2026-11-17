import { Button } from 'react-native-paper'
import {StyleProp, StyleSheet, ViewStyle} from 'react-native'
import {theme} from "@/shared/theme";
import {ComponentProps} from "react";

type buttonProps = {
    label: string;
    onPress?: () => void;
    mode?: "sm" | "md" | "lg"
    icon?: ComponentProps<typeof Button>["icon"];
    textColor?: string;
    overrideStyles?: StyleProp<ViewStyle>;
}

export const CustomButton = ({ label, onPress, mode = 'md', icon, textColor = "white", overrideStyles }: buttonProps) => {
    const currentButtonStyle = [styles[mode], overrideStyles];
    const currentTextColor = mode !== "lg" ? theme.colors.primary : textColor
    return (
        <Button onPress={onPress} style={currentButtonStyle} icon={icon} textColor={currentTextColor}>
            {label}
        </Button>
    )
}

const styles = StyleSheet.create({
    sm: {
        width: '30%',
        height: '6%',
        backgroundColor: 'transparent',
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius: 10,
    },
    md: {
        width: '40%',
        height: '6%',
        backgroundColor: 'transparent',
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius: 10,
    },
    lg: {
        width: '50%',
        height: '6%',
        backgroundColor: theme.colors.primary,
        borderRadius: 10,
    }
})