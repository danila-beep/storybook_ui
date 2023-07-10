import type {Meta, StoryObj} from '@storybook/react';
import Radio from "../components/Selectors/Radio";
import Text from "../components/typography/Text"

const meta: Meta<typeof Radio> = {
    title: "Components/Selectors/Radio",
    component: Radio,
    tags: ["autodocs"],
    argTypes: {
        error: {
            control: {type: "boolean"}
        },
        title: {
            control: {type: "text"}
        },
        description: {
            control: {type: "text"}
        },
        disabled: {
            control: {type: "boolean"}
        }
    },
};

export default meta;

type Story = StoryObj<typeof Radio>

export const Primary: Story = {
    render: (args) => {
        return <Radio {...args}/>
    }
}
export const Radio_with_title: Story = {
    args: {
        title: "Title"
    },
    render: (args) => {
        return <Radio {...args}/>
    }
}
export const Radio_with_description: Story = {
    args: {
        description: "Description"
    },
    render: (args) => {
        return <Radio {...args}/>
    }
}
export const Radio_with_title_and_description: Story = {
    args: {
        title: "Title",
        description: "Description"
    },
    render: (args) => {
        return <Radio {...args}/>
    }
}
export const Error_radio: Story = {
    args: {
        error: true
    },
    render: (args) => {
        return <Radio {...args}/>
    }
}
export const Disabled_radio: Story = {
    args: {
        disabled: true
    },
    render: (args) => {
        return <Radio {...args}/>
    }
}

export const Group_of_radios_Row: Story = {
    render: (args) => {
        return (
            <>

                <div style={{display: "flex", flexDirection: "row"}}>
                    <Radio {...args} value={1} name={"test"}/>
                    <Radio {...args} value={2} name={"test"}/>
                    <Radio {...args} value={3} name={"test"}/>
                    <Radio {...args} value={4} name={"test"}/>
                    <Radio {...args} value={5} name={"test"}/>
                </div>
                <Text variant={"italics"}>You need to use values and names here (like a native radio input)</Text>

            </>
        )
    }
}
export const Group_of_radios_Column: Story = {
    render: (args) => {
        return (
            <>

                <div style={{display: "flex", flexDirection: "column"}}>
                    <Radio {...args} value={1} name={"test"}/>
                    <Radio {...args} value={2} name={"test"}/>
                    <Radio {...args} value={3} name={"test"}/>
                    <Radio {...args} value={4} name={"test"}/>
                    <Radio {...args} value={5} name={"test"}/>
                </div>
                <Text variant={"italics"}>You need to use values and names here (like a native radio input)</Text>

            </>
        )
    }
}
