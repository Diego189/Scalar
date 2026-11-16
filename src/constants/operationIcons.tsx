import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import type { ReactNode } from 'react';
import { Text } from 'react-native-paper';
import { MatrixOperation } from '@/types/matrix';

import { Platform, type TextStyle } from 'react-native';

type OperationIconProps = {
    size: number;
    color: string;
};

type IconRenderer = (props: OperationIconProps) => ReactNode;

const mathIconStyle = (size: number, color: string): TextStyle => ({
    fontFamily: Platform.OS === 'ios' ? 'Times New Roman' : 'serif',
    fontStyle: 'italic',
    fontWeight: '700',
    fontSize: size * 0.8,

    width: 50,
    height: 35,
    lineHeight: size,

    color,
    letterSpacing: 0,
    textAlign: 'center',
    textAlignVertical: 'center',
    includeFontPadding: false,
});

export const operationIcons = {
    [MatrixOperation.Add]: (props) => (
        <Ionicons name="add" {...props} />
),

[MatrixOperation.Subtract]: (props) => (
    <Ionicons name="remove" {...props} />
),

[MatrixOperation.Multiply]: (props) => (
    <Ionicons name="close" {...props} />
),

[MatrixOperation.Inverse]: ({ size, color }) => (
    <Text
        allowFontScaling={false}
        style={mathIconStyle(size, color)}
    >
        A⁻¹
    </Text>
),

[MatrixOperation.Determinant]: ({ size, color }) => (
    <Text
        allowFontScaling={false}
        style={mathIconStyle(size, color)}
    >
        |A|
    </Text>
),

[MatrixOperation.RowReduce]: (props) => (
    <MaterialCommunityIcons name="stairs" {...props} />
),
} satisfies Record<MatrixOperation, IconRenderer>;