import {MatrixOperation, operationLabelsMap, operationLabels, MatrixA, MatrixB} from "@/types/matrix";
import {View, Text, TouchableOpacity} from "react-native";
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import {theme} from "@/shared/theme";
import { Divider } from 'react-native-paper';
import {MatrixDimensionsTag} from "@/components/matrixDimensionsTag/MatrixDimensionsTag";
import {styles} from "./styles"
type itemProps = {
    operation: MatrixOperation,
    matrixA: MatrixA;
    matrixB?: MatrixB;
    onPress?: () => void,
}


export const RecentCalcItem = ({ operation, matrixA, matrixB, onPress }: itemProps) => {
    const itemOperation = (operation: MatrixOperation): string => operationLabelsMap[operation];
    const itemSubDescription = operationLabels[operation];
    const tagStyles = matrixB ? styles.tagContainer : [styles.tagContainer, styles.tagContainerSolo]
    return (
        <View style={styles.container}>
            <View style={styles.leftIcon}>
                <MaterialCommunityIcons name={"history"} size={30} color={theme.colors.primary} />
            </View>
            <View style={styles.innerContentContainer}>
                <View style={styles.labelContainer}>
                    <Text style={styles.mainLabel}>{itemOperation(operation)}</Text>
                    <Divider style={styles.divider} />
                    <Text style={styles.subLabel}>{itemSubDescription}</Text>
                </View>
                <View style={tagStyles}>
                    <MatrixDimensionsTag label={"A"} columns={matrixA.colA} rows={matrixA.rowA} />
                    {matrixB && (<MatrixDimensionsTag label="B" columns={matrixB.colB} rows={matrixB.rowB} />)}
                </View>
            </View>

            <TouchableOpacity
                style={styles.rightIcon}
                onPress={onPress}
                hitSlop={10}
            >
                <Ionicons name="chevron-forward-outline" size={25} color="grey" />
            </TouchableOpacity>
        </View>
    )
}