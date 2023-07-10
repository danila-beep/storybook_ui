import React, {DetailedHTMLProps, FC} from 'react';
import styled from "styled-components";
import {v1} from "uuid";

type TogglerProps = DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    variant?: "default" | "large",
    title?: string,
    subTitle?: string
}

const Toggler: FC<TogglerProps> = (props) => {

    const {...rest} = props

    const togglerId = v1()

    const TogglerInput = styled.input`
      opacity: 0;
      left: -90000px;
      top: -90000px;
      position: absolute;

      &:checked + label::before {
        background: var(--blue06);
      }
      &:checked + label::after {
        left: ${props.variant === "large" ? "1.35em" : "1.05em"};
      }
      &:hover + label:before {
        background: var(--grey06);
      }
      &:checked:hover + label:before {
        background: var(--blue08);
      }
    `
    const TogglerLabel = styled.label`
      display: inline-flex;
      align-items: center;
      gap: .5rem;
      position: relative;
      cursor: pointer;

      &:before {
        content: "";
        width: ${props.variant === "large" ? "2.5em" : "2em"};
        height: ${props.variant === "large" ? "1.2em" : "1em"};
        background: var(--grey04);
        border-radius: 1em;
        transition: .3s ease-in-out;
      }
      
      &:after {
        content: "";
        position: absolute;
        left: .15em;
        width: ${props.variant === "large" ? "1em" : ".8em"};
        height: ${props.variant === "large" ? "1em" : ".8em"};
        background: white;
        border-radius: 50%;
        transition: .3s ease-in-out;
      }
    `
    const TogglerTitles = styled.div`
      display: flex;
      flex-direction: column;
      align-items: start;
      
      & h3 {
        margin: 0;
        font-size: .6rem;
        font-weight: 500;
        color: var(--grey09);
        
      }
      & p {
        margin: 0;
        font-size: .4rem;
        font-weight: 300;
        color: var(--grey06);
        
      }
    `

    const toggleTitlesChecker = () => {
        if (props.title && props.subTitle) {
            return (
                <TogglerTitles>
                    <h3>{props.title}</h3>
                    <p>{props.subTitle}</p>
                </TogglerTitles>
            )
        }
        if (props.title || !props.subTitle) {
            return (
                <TogglerTitles>
                    <h3>{props.title}</h3>
                </TogglerTitles>
            )
        }
        if (!props.title || props.subTitle) {
            return (
                <TogglerTitles>
                    <p>{props.subTitle}</p>
                </TogglerTitles>
            )
        }
        return ""
    }

    return (
        <div {...rest}>
            <TogglerInput type="checkbox" id={togglerId}/>
            <TogglerLabel htmlFor={togglerId}>
                {toggleTitlesChecker()}
            </TogglerLabel>
        </div>
    );
};

export default Toggler;