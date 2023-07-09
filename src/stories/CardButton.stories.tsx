import type {Meta, StoryObj} from '@storybook/react';
import CardButton from "../components/Buttons/CardButton";
import {UilApple} from "@iconscout/react-unicons";


const meta: Meta<typeof CardButton> = {
    title: "Components/Button/CardButton",
    component: CardButton,
    tags: ["autodocs"],
    argTypes: {
        title: {
            control: {type: "text"},
            description: "Set main title value"
        },
        subTitle: {
            control: {type: "text"},
            description: "Set sub title value"
        },
        icon: {
            options: [<UilApple />, undefined],
            control: {type: "select"},
            description: "Set the icon"
        },
        disabled: {
            control: {type: "boolean"},
            description: "you can set card disabled"
        }
    },
};

export default meta;

type Story = StoryObj<typeof CardButton>

export const Card_Button: Story = {
    render: (args) => {
        return <CardButton {...args} />
    }
}
export const Card_Button_with_icon: Story = {
    args: {
        icon: <UilApple />
    },
    render: (args) => {
        return <CardButton {...args}/>
    }
}
export const Card_Button_disabled: Story = {
    render: (args) => {
        return <CardButton disabled/>
    }
}
