import styled from 'styled-components'

type TextVariants = "italics" | "strong"
type TextSizes = "large" | "small"

const Text = styled.p<{ variant?: TextVariants, size?: TextSizes }>(props => {
    const baseStyle = `
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        margin: 0;
    `
    const bigText = baseStyle + `
        font-size: 1.2rem;
    `
    const smallText = baseStyle + `
        font-size: 0.9rem;
    `
    const italicText = baseStyle + `
        font-style: italic;
    `
    const strongText = baseStyle + `
        font-weight: 600;
    `
    const italicBig = baseStyle + `
        font-size: 1.2rem;
        font-style: italic
    `
    const italicSmall = baseStyle + `
        font-size: 0.9rem;
        font-style: italic
    `
    const strongBig = baseStyle + `
        font-weight: 600;
        font-size: 1.2rem
    `
    const strongSmall = baseStyle + `
        font-weight: 500;
        font-size: 0.9rem
    `

    if (props.size === "large") {
        if (props.variant === "italics") {
            return italicBig
        }
        if (props.variant === "strong") {
            return strongBig
        }
        return bigText
    }
    if (props.size === "small") {
        if (props.variant === "italics") {
            return italicSmall
        }
        if (props.variant === "strong") {
            return strongSmall
        }
        return smallText
    }
    if (props.variant === "italics") {
        return italicText
    }
    if (props.variant === "strong") {
        return strongText
    }

    return baseStyle
});

export default Text