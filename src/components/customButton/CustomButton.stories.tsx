import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { fn } from 'storybook/test';
import {CustomButton} from "@/components/customButton/CustomButton";

const meta = {
    title: 'Components/Custom Button',
    component: CustomButton,
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

} satisfies Meta<typeof CustomButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NewCalculation: Story = {
    args: {
        label: "New calculation",
        mode: "lg",
        icon: "plus",
    },
};

export const Calculate: Story = {
    args: {
        label: "Calculate",
        mode: "lg",
        icon: "calculator",
    },
};

export const Copy: Story = {
    args: {
        label: "Copy",
        mode: "md",
        icon: "content-copy",
    },
};

export const Save: Story = {
    args: {
        label: "Save",
        mode: "md",
        icon: "bookmark-outline",
    },
};

export const smSave: Story = {
    args: {
        label: "Save",
        mode: "sm",
        icon: "bookmark-outline",
        labelStyle: { fontSize: 12 },
    },
};

export const smPaste: Story = {
    args: {
        label: "Paste",
        mode: "sm",
        icon: "content-paste",
        labelStyle: { fontSize: 12 },
    },
};