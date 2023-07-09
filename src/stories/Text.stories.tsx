import type {Meta, StoryObj} from '@storybook/react';
import Text from "../components/typography/Text";


const meta: Meta<typeof Text> = {
    title: "Typography/Text",
    component: Text,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            options: ["italics", "strong", "base"],
            control: {type: "select"}
        },
        size: {
            control: {type: "select"},
            options: ["large", "small", "base"]
        }
    },
};

export default meta;

type Story = StoryObj<typeof Text>

export const Primary: Story = {
    render: (args) => {
        return (
            <Text {...args}>Some Text</Text>
        )
    }
}

export const Strong: Story = {
    args: {
      variant: "strong"
    },
    render: (args) => {
        return (
            <Text {...args}>Some Text</Text>
        )
    }
}
export const Italic: Story = {
    args: {
      variant: "italics"
    },
    render: (args) => {
        return (
            <Text {...args}>Some Text</Text>
        )
    }
}
export const Large: Story = {
    args: {
      size: "large"
    },
    render: (args) => {
        return (
            <Text {...args}>Some Text</Text>
        )
    }
}
export const Small: Story = {
    args: {
      size: "small"
    },
    render: (args) => {
        return (
            <Text {...args}>Some Text</Text>
        )
    }
}