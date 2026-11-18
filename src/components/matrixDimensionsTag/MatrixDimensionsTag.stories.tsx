import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { MatrixDimensionsTag } from './MatrixDimensionsTag';

const meta = {
    title: 'Components/Matrix Dimensions Tag',
    component: MatrixDimensionsTag,
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

} satisfies Meta<typeof MatrixDimensionsTag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const standard: Story = {
    args: {
        label: "A",
        rows: 2,
        columns: 2,
    },
};