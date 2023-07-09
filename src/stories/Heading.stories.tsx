// Button.stories.ts|tsx

import type {Meta, StoryObj} from '@storybook/react';
import Heading1 from "../components/typography/Heading1";
import Heading2 from "../components/typography/Heading2";
import Heading3 from "../components/typography/Heading3";


const meta: Meta<typeof Heading1> = {
    title: "Typography/Headings",
    component: Heading1,
    tags: ["autodocs"],
    argTypes: {
        textPosition: {
            options: ["left", "center", "right"],
            control: {type: "radio"},
            description: "text align parameters",
        },
    }
};

export default meta;

type Story = StoryObj<typeof Heading1>


export const Heading_1: Story = {
    render: (args) => <Heading1 {...args} >Heading</Heading1>
}
export const Heading_2: Story = {
    render: (args) => <Heading2 {...args} >Heading</Heading2>
}
export const Heading_3: Story = {
    render: (args) => <Heading3 {...args} >Heading</Heading3>
}
export const Centered: Story = {
    args: {
        textPosition: "center"
    },
    render: (args) => <Heading3 {...args} >Heading</Heading3>
}
export const RightSided: Story = {
    args: {
        textPosition: "right"
    },
    render: (args) => <Heading3 {...args} >Heading</Heading3>
}

