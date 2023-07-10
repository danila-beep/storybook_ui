import type {Meta, StoryObj} from '@storybook/react';
import Toggler from "../components/Selectors/Toggler";


const meta: Meta<typeof Toggler> = {
    title: "Components/Selectors/Toggler",
    component: Toggler,
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Toggler>

export const Primary: Story = {
    render: (args) => {
        return <Toggler {...args} />
    }
}

export const Default_Size_Toggler: Story = {
    args: {
        variant: "default"
    },
    render: (args) => {
        return <Toggler {...args} />
    }
}

export const Large_Size_Toggler: Story = {
    args: {
        variant: "large"
    },
    render: (args) => {
        return <Toggler {...args} />
    }
}

export const Toggler_with_title: Story = {
    args: {
        variant: "default",
        title: "Toggler Title"
    },
    render: (args) => {
        return <Toggler {...args} />
    }
}
export const Toggler_with_description: Story = {
    args: {
        variant: "default",
        subTitle: "description"
    },
    render: (args) => {
        return <Toggler {...args} />
    }
}
export const Toggler_with_title_and_description: Story = {
    args: {
        variant: "default",
        title: "Toggler Title",
        subTitle: "description"
    },
    render: (args) => {
        return <Toggler {...args} />
    }
}

