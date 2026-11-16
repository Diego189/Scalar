import { MatrixOperation, operationLabels } from "@/types/matrix";
import { StyleSheet , View } from "react-native";
import { operationIcons } from "@/constants/operationIcons"
import { Icon, Text, TouchableRipple } from "react-native-paper";
import {theme} from "@/shared/theme";
type OperationTagProps = {
    operation: MatrixOperation;
    onPress: () => {}
}

export const MatrixOperationSelector = ({ operation, onPress}: OperationTagProps) => {
    return (
        <TouchableRipple
            onPress={onPress}
            rippleColor={theme.colors.lightPrimary}
            style={styles.container}
            borderless
        >
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Icon
                    source={operationIcons[operation]}
                    size={32}
                    color={theme.colors.primary}
                />

                <Text style={styles.label}>{operationLabels[operation]}</Text>
            </View>
        </TouchableRipple>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        maxWidth: 165,
        height: 85,
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    label: {
        textTransform: 'capitalize',
        fontWeight: "bold",
        fontSize: 16
    }
})