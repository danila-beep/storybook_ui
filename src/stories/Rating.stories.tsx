import type {Meta, StoryObj} from '@storybook/react';
import Text from "../components/typography/Text";
import Rating from "../components/Buttons/Rating";


const meta: Meta<typeof Rating> = {
    title: "Components/Button/Rating",
    component: Rating,
    tags: ["autodocs"],
    argTypes: {
        rating: {
            control: {type: "select"},
            options: [1, 2, 3, 4, 5]
        }
    },
};

export default meta;

type Story = StoryObj<typeof Rating>

export const Primary: Story = {
    render: (args) => {
        return (
            <Rating {...args} />
        )
    }
}