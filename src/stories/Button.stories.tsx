import type {Meta, StoryObj} from '@storybook/react';
import Button from "../components/Buttons/Button";


const meta: Meta<typeof Button> = {
    title: "Components/Button/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        type: {
            options: ["primary" , "danger" , "link" , "outline"],
            control: {type: "select"},
            description: "Select a type of Button",
            table: { defaultValue: { summary: 'primary' } },

        },
        size: {
            options: ["default" , "large" , "compact"],
            control: {type: "select"},
            description: "Select a size of Button",
            table: { defaultValue: { summary: 'default' } },
        },
        disabled: {
            control: {type: 'boolean'}
        }
    },
};

export default meta;

type Story = StoryObj<typeof Button>

export const Primary: Story = {

    args: {
        type: "primary",
        size: "default",
    },

    render: (args) => {
        return <Button {...args} >Button</Button>
    }
}

export const Danger: Story = {

    args: {
        type: "danger",
        size: "default",
    },

    render: (args) => {
        return <Button {...args}>Button</Button>
    }
}

export const Outlined: Story = {

    args: {
        type: "outline",
        size: "default",
    },

    render: (args) => {
        return <Button {...args}>Button</Button>
    }
}

export const Link: Story = {

    args: {
        type: "link",
        size: "default",
    },

    render: (args) => {
        return <Button {...args}>Button</Button>
    }
}

export const Large: Story = {

    args: {
        type: "primary",
        size: "large",
    },

    render: (args) => {
        return <Button {...args}>Button</Button>
    }
}

export const Compact: Story = {

    args: {
        type: "primary",
        size: "compact",
    },

    render: (args) => {
        return <Button {...args}>Button</Button>
    }
}
