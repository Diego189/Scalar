import { Button } from 'react-native-paper'
import {StyleProp, StyleSheet, TextStyle, ViewStyle} from 'react-native'
import {theme} from "@/shared/theme";
import {ComponentProps, useState} from "react";

type buttonProps = {
    label: string;
    onPress?: () => void;
    mode?: "sm" | "md" | "lg"
    icon?: ComponentProps<typeof Button>["icon"];
    textColor?: string;
    overrideStyles?: StyleProp<ViewStyle>;
    labelStyle?: StyleProp<TextStyle>;
}

export const CustomButton = ({ label, onPress, mode = 'md', icon, textColor = "white", overrideStyles, labelStyle }: buttonProps) => {
    const [pressed, setPressed] = useState(false);
    const currentButtonStyle = [styles[mode], overrideStyles, { transform: [{ scale: pressed ? 0.97 : 1 }] }];
    const currentTextColor = mode !== "lg" ? theme.colors.primary : textColor
    return (
        <Button
            onPressIn={() => setPressed(true)}
            onPressOut={() => setPressed(false)}
            onPress={onPress}
            style={currentButtonStyle}
            icon={icon}
            textColor={currentTextColor}
            labelStyle={labelStyle}
        >
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