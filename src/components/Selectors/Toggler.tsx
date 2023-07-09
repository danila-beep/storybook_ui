import React from 'react';
import styled from "styled-components";

const Toggler = () => {

    const TogglerWrapper = styled.label`
      position: relative;
      display: inline-block;
      
    `
    const InputStyled = styled.input`
      opacity: 1;
      width: 3rem;
      height: 1rem;
      background: red;
    `
    const SliderStyled = styled.span`
      
    `

    return (
        <TogglerWrapper>
            <InputStyled type="checkbox"/>
            <SliderStyled />
        </TogglerWrapper>
    );
};

export default Toggler;