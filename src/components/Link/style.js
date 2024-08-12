import styled from "styled-components";

export const LinkStyle = styled.a`
    color: var(--color-pallet-1);
    font-size: ${(props) => (props.size ? props.size : '1rem')};
    text-decoration: none;
    transition: color .25s ease-in;

    &:hover {
        color: var(--color-pallet-icon);
        text-decoration: underline;
    }
`;
