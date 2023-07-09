import styled from "styled-components";

export type ButtonProps = {
    type?: ButtonTypes,
    size?: ButtonSizes
}

type ButtonTypes = "primary" | "danger" | "link" | "outline"
type ButtonSizes = "default" | "large" | "compact"


const Button = styled.button<ButtonProps>`
  border: ${props => {
    if (props.type === "danger") {
      return "none"
    }
    if (props.type === "link") {
      return "none"
    }
    if (props.type === "outline") {
      return "1px solid black"
    }

    return "none"
  }};;
  color: ${props => {
    if (props.type === "danger") {
      return "white"
    }
    if (props.type === "link") {
      return "var(--blue06)"
    }
    if (props.type === "outline") {
      return "var(--black09)"
    }

    return "white"
  }};;
  background-color: ${props => {
    if (props.type === "danger") {
      return "var(--red06)"
    }
    if (props.type === "link") {
      return "transparent"
    }
    if (props.type === "outline") {
      return "transparent"
    }

    return "var(--blue05)"
  }};
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: .75rem;
  padding: ${props => {
    if (props.size === "large") {
      return ".6rem 1rem"
    }
    if (props.size === "compact") {
      return ".6rem 1rem"
    }
    return ".6rem 1rem"
  }};
  font-size: ${props => {
    if (props.size === "large") {
      return "1.25rem"
    }
    if (props.size === "compact") {
      return ".8rem"
    }
    return "1rem"
  }};;
  font-weight: 500;
  line-height: 160%;


  &:hover {
    background: ${props => {
      if (props.type === "danger") {
        return "var(--red07)"
      }
      if (props.type === "link") {
        return "transparent"
      }
      if (props.type === "outline") {
        return "transparent"
      }

      return "var(--blue06)"
    }};;
    box-shadow: ${props => {
      if (props.type === "outline") {
        return "0px 5px 10px 1px var(--grey05)"
      }
    }};
    color: ${props => {
      if (props.type === "danger") {
        return "white"
      }
      if (props.type === "link") {
        return "var(--blue07)"
      }
      if (props.type === "outline") {
        return "var(--black09)"
      }

      return "white"
    }};;
  }

  &:active {
    background: ${props => {
      if (props.type === "danger") {
        return "var(--red08)"
      }
      if (props.type === "link") {
        return "transparent"
      }
      if (props.type === "outline") {
        return "transparent"
      }

      return "var(--blue07)"
    }};
    box-shadow: ${props => {
      if (props.type === "outline") {
        return "none"
      }
    }};
    color: ${props => {
      if (props.type === "danger") {
        return "white"
      }
      if (props.type === "link") {
        return "var(--blue08)"
      }
      if (props.type === "outline") {
        return "var(--black09)"
      }

      return "white"
    }};
  }

  &:disabled {
    background: ${props => {
      if (props.type === "danger") {
        return "var(--grey03)"
      }
      if (props.type === "link") {
        return "transparent"
      }
      if (props.type === "outline") {
        return "transparent"
      }

      return "var(--grey03)"
    }};
    color: ${props => {
      if (props.type === "danger") {
        return "var(--grey06)"
      }
      if (props.type === "link") {
        return "var(--blue03)"
      }
      if (props.type === "outline") {
        return "var(--grey06)"
      }

      return "var(--grey06)"
    }};
    border: ${props => {
      if (props.type === "outline") {
        return "1px solid var(--grey04)"
      }
    }};
  }
`

export default Button