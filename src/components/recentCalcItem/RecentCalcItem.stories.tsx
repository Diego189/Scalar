import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { fn } from 'storybook/test';
import { RecentCalcItem } from './RecentCalcItem';
import {MatrixOperation} from "@/types/matrix";

const meta = {
    title: 'Components/Recent Calculation Item',
    component: RecentCalcItem,
    decorators: [
        (Story) => (
            <View
                style={{
                    flex: 1,
                    padding: 24,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: "white",
                }}
            >
                    <Story />
            </View>
        ),
    ],
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // Use `fn` to spy on the onPress arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
    args: { onPress: fn() },

} satisfies Meta<typeof RecentCalcItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TwoByTwoMultiplication: Story = {
    args: {
        operation: MatrixOperation.Multiply,
        matrixA: { colA: 2, rowA: 2 },
        matrixB: { colB: 2, rowB: 2 },
    },
};

export const TwoByTwoAddition: Story = {
    args: {
        operation: MatrixOperation.Add,
        matrixA: { colA: 2, rowA: 2 },
        matrixB: { colB: 2, rowB: 2 },
    },
};

export const TwoByTwoSubtraction: Story = {
    args: {
        operation: MatrixOperation.Subtract,
        matrixA: { colA: 2, rowA: 2 },
        matrixB: { colB: 2, rowB: 2 },
    },
};

export const TwoByTwoInverse: Story = {
    args: {
        operation: MatrixOperation.Inverse,
        matrixA: { colA: 2, rowA: 2 },
    },
};

export const TwoByTwoDeterminant: Story = {
    args: {
        operation: MatrixOperation.Determinant,
        matrixA: { colA: 2, rowA: 2 },
    },
};

export const TwoByTwoRowReduction: Story = {
    args: {
        operation: MatrixOperation.RowReduce,
        matrixA: { colA: 2, rowA: 2 },
    },
};


