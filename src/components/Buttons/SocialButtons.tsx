import React, {DetailedHTMLProps, FC, ReactNode} from 'react';
import styled from "styled-components";
import {UilApple, UilGooglePlay, UilIcons} from "@iconscout/react-unicons";

type SocialCardProps = DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    color?: "black" | "white",
    icon?: ReactNode,
    title?: string,
    subTitle?: string,
    variant?: "social" | "download"
}

const SocialButtons: FC<SocialCardProps> = (props) => {
    const SocialButtonWrapper = styled.button`
      border: none;
      font: inherit;
      color: ${props.color === "black" ? "white" : "var(--black09)"};
      display: flex;
      flex-direction: row;
      justify-content: ${props.variant === "social" ? "center" : undefined};
      align-items: center;
      gap: .7rem;
      padding: .5rem 1rem;
      background: ${props.color === "black" ? "var(--black09)" : "white"};
      border-radius: .4rem;
      min-width: 10rem;
      box-shadow: 0px 5px 30px 2px rgba(34, 60, 80, 0.2);
      transition: .3s;
      cursor: pointer;
      
      &:hover{
        box-shadow: none;
        
      }
    `
    const IconWrapper = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
    `
    const ContentWrapper = styled.div`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    `
    const ContentSubTitle = styled.h3`
      margin: 0;
      font-size: .7rem;
      font-weight: 500;
    `
    const ContentTitle = styled.h1`
      margin: 0;
      font-size: 1.3rem;
      font-weight: 500;
      
    `

    const iconChecker = (): ReactNode => {
        if (props.icon) {
            return props.icon
        }
        return undefined
    }

    const titleChecker = () => {
        if (!props.title) {
            return "Title"
        }
        return props.title
    }
    const subTitleChecker = () => {
        if (!props.subTitle) {
            if (props.variant === "social") {
                return ""
            }
            return "Sub Title"
        }
        if (props.variant === "social") {
            return ""
        }
        return props.subTitle
    }

    return (
        <SocialButtonWrapper>
            <IconWrapper>
                {iconChecker()}
            </IconWrapper>
            <ContentWrapper>
                <ContentSubTitle>
                    {subTitleChecker()}
                </ContentSubTitle>
                <ContentTitle>
                    {titleChecker()}
                </ContentTitle>
            </ContentWrapper>
        </SocialButtonWrapper>
    );
};

export default SocialButtons;