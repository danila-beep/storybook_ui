import type {Meta, StoryObj} from '@storybook/react';
import Checkbox from "../components/Selectors/Checkbox";


const meta: Meta<typeof Checkbox> = {
    title: "Components/Selectors/Checkbox",
    component: Checkbox,
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Checkbox>

export const Primary: Story = {
    render: (args) => {
        return <Checkbox {...args} />
    }
}

