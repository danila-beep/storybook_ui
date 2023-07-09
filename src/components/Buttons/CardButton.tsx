import React, {DetailedHTMLProps, FC} from 'react';
import styled from "styled-components";
import Heading3 from "../typography/Heading3";
import Text from "../typography/Text";
import {UilCardAtm} from "@iconscout/react-unicons";

type CardButtonProps = DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    title?: string,
    subTitle?: string,
    icon?: React.ReactNode
}

const CardButton: FC<CardButtonProps> = (props) => {

    const {title, subTitle, icon} = props
    const {...rest} = props

    const CardButtonWrapper = styled.button`
      border: none;
      font: inherit;
      color: inherit;
      background: transparent;
      display: inline-flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;
      box-shadow: 0px 5px 30px 2px rgba(34, 60, 80, 0.2);
      padding: 1rem;
      border-radius: .75rem;
      min-width: 16rem;
      transition: .3s;
      cursor: pointer;
      
      &:hover {
        box-shadow: 0px 5px 30px 2px rgba(34, 60, 80, 0.4);
      }
      
      &:active {
        box-shadow: none;
        background: var(--blue01);
      }
      &:active > div:nth-child(1){
        background: var(--blue07);
        color: var(--blue03);
      }
      &:disabled {
        background: transparent;
        border: .1rem solid var(--grey03);
        box-shadow: none;
      }
      &:disabled > div:nth-child(1){
        background: var(--grey02);
        color: var(--grey06);
      }
      &:disabled > div:nth-child(2){
        color: var(--grey06);
      }
    `

    const IconWrapper = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      padding: .5rem;
      background: var(--blue01);
      border-radius: .5rem;
      transition: .3s;
      color: var(--blue06);
    `

    const ContentWrapper = styled.div`
      display: flex;
      flex-direction: column;
      align-items: start;
      transition: .3s;
      
    `

    const iconChecker = () => {
        if (!icon) {
            return undefined
        }
        return icon
    }

    const titleChecker = (): string => {
        if (!title) {
            return "Title"
        }
        return title
    }
    const subTitleChecker = (): string => {
        if (!subTitle) {
            return "Sub Title"
        }
        return subTitle
    }

    return (
        <CardButtonWrapper {...rest}>
            <IconWrapper>
                {iconChecker()}
            </IconWrapper>
            <ContentWrapper>
                <Heading3>{titleChecker()}</Heading3>
                <Text size={"small"}>{subTitleChecker()}</Text>
            </ContentWrapper>
        </CardButtonWrapper>
    );
};

export default CardButton;