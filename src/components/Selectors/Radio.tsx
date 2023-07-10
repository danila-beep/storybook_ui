import React, {DetailedHTMLProps, FC} from 'react';
import styled from "styled-components";
import {v1} from "uuid";

type RadioProps = DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    error?: boolean,
    title?: string,
    description?: string
}

const Radio: FC<RadioProps> = (props) => {

    const radioId = v1()
    const {...rest} = props

    const RadioInput = styled.input<RadioProps>`
      opacity: 0;
      left: -90000px;
      top: -90000px;
      position: absolute;

      &:hover + label:before {
        border: .1em solid ${props.error ? "red" : "var(--grey06)"};
      }

      &:checked + label:before {
        border: .1em solid ${props.error ? "red" : "transparent"};
        background: ${props.error ? "" : "var(--blue05)"};
      }

      &:disabled + label:before {
        border: .1em solid transparent;
        background: var(--grey04);
      }

      &:checked:disabled + label:before {
        border: .1em solid transparent;
        background: var(--blue02);
      }

      &:checked + label:after {
        content: "";
        position: absolute;
        top: ${props => {
            if (props.title && props.description) {
                return ".6em"
            }
        }};
        left: .4em;
        width: .4em;
        height: .4em;
        background: white;
        border-radius: 50%;
      }

      &:disabled + label:after {
        content: "";
        position: absolute;
        top: ${props => {
            if (props.title && props.description) {
                return ".6em"
            }else {
                return ".4em"
            }
        }};
        left: .4em;
        width: .4em;
        height: .4em;
        background: var(--grey06);
        border-radius: 50%;
      }

      &:disabled:checked + label:after {
        content: "";
        position: absolute;
        top: ${props => {
          if (props.title && props.description) {
            return ".6em"
          }
          return ".4em"
        }};;
        left: .4em;
        width: .4em;
        height: .4em;
        background: white;
        border-radius: 50%;
      }

      &:disabled + label {
        color: var(--grey05);
      }
    `
    const RadioLabel = styled.label`
      display: inline-flex;
      align-items: center;
      gap: .5rem;
      position: relative;
      cursor: pointer;

      &:before {
        content: "";
        background: transparent;
        width: 1em;
        height: 1em;
        border: .1em solid ${props.error ? "red" : "var(--grey04)"};
        border-radius: 50%;
        transition: .3s;
      }
    ;

      & span {
        display: flex;
        flex-direction: column;
        font-size: .5em;
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
            <RadioInput type={"radio"} id={radioId} {...rest}/>
            <RadioLabel htmlFor={radioId}>
                <span>
                    <h3>
                        {props.title}
                    </h3>
                    <p>
                        {props.description}
                    </p>
                </span>
            </RadioLabel>
        </div>
    );
};

export default Radio;