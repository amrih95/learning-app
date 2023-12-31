import React from "react";
import styled from "styled-components";

const ButtonComponent = styled.button`
    position: relative;
    display: inline-flex;
    align-items: center;
    jutifiy-content: center;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    border-radius: 0.3rm;
    padding: 0 ${props => 
                    props.size === 'sm' 
                        ? "1.1rem" 
                        : props.size === "md" 
                        ? "1.4rem" 
                        : props.size === "lg" 
                        ? "1.6rem" 
                        : "1.1rem"};
    height: ${props => 
                props.size === 'sm' 
                    ? "34px" 
                    : props.size === "md" 
                    ? "37px" 
                    : props.size === "lg" 
                    ? "40px" 
                    : "34"};
    font-family: "Inter", sans-serif;
    font-weight: 500;
    border: 1px solid transparent;
    background-color: ${(props) =>
                props.variant === 'light'
                    ? "#f8f9fa" 
                    : props.variant === 'dark' 
                    ? '#212529' 
                    : '#dc3545'};

    color:  ${(props) =>
                props.variant === 'light'
                    ? "#212529" 
                    : props.variant === 'dark' 
                    ? '#ffffff' 
                    : '#ffffff'};
    `;

const Button = ({type, variant, className, id, onClick, size, children}) => {

    return(
        <ButtonComponent 
            type={type ? type : 'button'} 
            variant={variant} 
            className={className ? `btn-component ${className}` : "btn-component"}
            id={id}
            onClick={onClick}
            size={size}
        >
            {children}    
        </ButtonComponent>
    )
}

export default Button;