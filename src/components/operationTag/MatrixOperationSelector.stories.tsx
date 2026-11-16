import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { fn } from 'storybook/test';
import { MatrixOperationSelector } from './MatrixOperationSelector';
import {MatrixOperation} from "@/types/matrix";

const meta = {
    title: 'Components/Matrix Operation Selector',
    component: MatrixOperationSelector,
    decorators: [
        (Story) => (
            <View
                style={{
                    flex: 1,
                    padding: 24,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: "white"
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

} satisfies Meta<typeof MatrixOperationSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Add: Story = {
    args: {
        operation: MatrixOperation.Add
    },
};

export const Subtract: Story = {
    args: {
        operation: MatrixOperation.Subtract
    },
};

export const Multiply: Story = {
    args: {
        operation: MatrixOperation.Multiply,
    },
};

export const Inverse: Story = {
    args: {
        operation: MatrixOperation.Inverse
    },
};

export const Determinant: Story = {
    args: {
        operation: MatrixOperation.Determinant
    },
};

export const RowReduce: Story = {
    args: {
        operation: MatrixOperation.RowReduce
    },
};