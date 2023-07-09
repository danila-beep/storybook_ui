import type {Meta, StoryObj} from '@storybook/react';
import Button from "../components/Buttons/Button";
import SocialButtons from "../components/Buttons/SocialButtons";
import {UilIcons} from "@iconscout/react-unicons";


const meta: Meta<typeof SocialButtons> = {
    title: "Components/Button/SocialButton",
    component: SocialButtons,
    tags: ["autodocs"],
    argTypes: {
        color: {
            control: {type: "select"},
            options: ["black", "white"]
        },
        icon: {
            options: [<UilIcons />, undefined]
        },
        title: {
            control: {type: "string"}
        },
        subTitle: {
            control: {type: "string"}
        },
        variant: {
            control: {type: "select"},
            options: ["social", "download"]
        }
    },
};

export default meta;

type Story = StoryObj<typeof SocialButtons>

export const Black_Download: Story = {
    args: {
        color: "black",
        icon: <UilIcons/>,
        title: "Some title",
        subTitle: "Some SubTitle",
        variant: "download"
    },
    render: (args) => {
        return <SocialButtons {...args} />
    }
}

export const White_Download: Story = {
    args: {
        color: "white",
        icon: <UilIcons/>,
        title: "Some title",
        subTitle: "Some SubTitle",
        variant: "download"
    },
    render: (args) => {
        return <SocialButtons {...args} />
    }
}
export const Black_Social: Story = {
    args: {
        color: "black",
        icon: <UilIcons/>,
        title: "Some title",
        variant: "social"
    },
    render: (args) => {
        return <SocialButtons {...args} />
    }
}
export const White_Social: Story = {
    args: {
        color: "white",
        icon: <UilIcons/>,
        title: "Some title",
        variant: "social"
    },
    render: (args) => {
        return <SocialButtons {...args} />
    }
}
export const Without_Icon_White: Story = {
    args: {
        color: "white"
    },
    render: (args) => {
        return <SocialButtons {...args} />
    }
}
export const Without_Icon_Black: Story = {
    args: {
        color: "black"
    },
    render: (args) => {
        return <SocialButtons {...args} />
    }
}
