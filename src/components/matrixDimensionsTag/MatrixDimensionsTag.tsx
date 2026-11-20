import {StyleSheet, View} from 'react-native';
import { Text } from 'react-native-paper';
import {theme} from "@/shared/theme";

export interface MatrixDimensionsTagProps {
    label: string;
    rows: number;
    columns: number;
}

export const MatrixDimensionsTag = ({ label, rows, columns }: MatrixDimensionsTagProps) => {
    return (
        <View style={styles.container}>
            <Text variant="labelMedium" style={styles.text}>
                {label}: {rows} × {columns}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 6,
        paddingHorizontal: 10,
        paddingVertical: 4,
        backgroundColor: theme.colors.lightBackgroundGreen,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 12,
        color: theme.colors.primary,
    },
});
