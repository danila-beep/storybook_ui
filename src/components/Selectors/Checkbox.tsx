import React, {DetailedHTMLProps, FC} from 'react';
import styled from "styled-components";
import {v1} from "uuid";

type CheckBoxProps = DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    error?: boolean,
    variant?: "default" | "large",
    title?: string,
    description?: string
}

const Checkbox: FC<CheckBoxProps> = (props) => {

    const {...rest} = props
    const checkboxId = v1()

    const CheckboxInput = styled.input`
      opacity: 0;
      left: -90000px;
      top: -90000px;
      position: absolute;
      

      &:checked + label {
        color: ${props.error ? "red" : undefined};
      }
      &:disabled + label {
        opacity: .6;
      }
      &:hover + label:before {
        border: .1rem solid ${props.error ? "red" : "var(--grey07)"};
      }
      &:disabled + label:before {
        background: var(--grey03);
      }
      &:disabled:hover + label:before {
        border: .1rem solid var(--grey05);
      }
      &:checked + label:before {
        background: ${props.error ? "red" : "var(--blue05)"};
        border: .1rem solid transparent;
      }
      &:checked:disabled + label:before {
        background: var(--blue03);
        border: .1rem solid transparent;
      }
      &:checked + label:after {
        position: absolute;
        content: "\\2714";
        color: white;
        top: ${props.variant === "large" ? ".2rem" : ".3rem"};
        left: ${props.variant === "large" ? ".4rem" : ".3rem"};
        font-size: ${props.variant === "large" ? ".9rem" : ".7rem"};
      }
    `
    const CheckboxLabel = styled.label`
      display: inline-flex;
      align-items: center;
      position: relative;
      color: ${props.error ? "red" : undefined};
      cursor: pointer;
      
      
      &:before {
        margin-right: .5rem;
        content: "";
        width: ${props.variant === "large" ? "1.3rem" : "1rem"};
        height: ${props.variant === "large" ? "1.3rem" : "1rem"};
        background: white;
        border: .1rem solid ${props.error ? "red" : "var(--grey05)"};
        border-radius: .3rem;
        transition: .3s;
      }
      &:after {
        position: absolute;
        content: "";
        color: transparent;
        top: .3rem;
        left: .3rem;
        font-size: 0rem;
        transition: .3s ease;
      }

      & span {
        display: flex;
        flex-direction: column;
        font-size: .5rem;
      }
      & span h3 {
        color: var(--grey08);
        margin: 0;
      }
      & span p {
        color: var(--grey06);
        margin: 0;
      }
    `

    return (
        <div>
            <CheckboxInput type={"checkbox"} id={checkboxId} {...rest}/>
            <CheckboxLabel htmlFor={checkboxId}>
                <span>
                    <h3>
                        {props.title}
                    </h3>
                    <p>
                        {props.description}
                    </p>
                </span>
            </CheckboxLabel>
        </div>
    );
};

export default Checkbox;