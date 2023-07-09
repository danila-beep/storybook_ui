import styled from 'styled-components'

type TextPositions = "center" | "left" | "right"

const Heading2 = styled.h2<{textPosition?: TextPositions, hovered?: boolean}>(props => {
    const baseStyles = `
        white-space: nowrap;
        transition: .3s;
        font-weight: 800;
    `;
    const centeredHeading = baseStyles + `
        text-align: center
    `
    const leftHeading = baseStyles + `
        text-align: left
    `;
    const rightHeading = baseStyles + `
        text-align: right
    `;
    const hovered = baseStyles + `
        &:hover {
            color: red
        }
    `


    if (props.textPosition === "center") {
        return centeredHeading
    }
    else if (props.textPosition === "left") {
        return leftHeading
    }
    else if (props.textPosition === "right") {
        return rightHeading
    }

    if (props.hovered) {
        if (props.textPosition === "center") {
            return centeredHeading + hovered
        }
        else if (props.textPosition === "left") {
            return leftHeading + hovered
        }
        else if (props.textPosition === "right") {
            return rightHeading + hovered
        }
        return hovered
    }

    return baseStyles
});

export default Heading2