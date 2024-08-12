import styled from "styled-components";
import Link from "../../Link";

export const WrapperItem = styled.div`
    background-color: var(--color-pallet-back-ground-2);
    border: 1px solid var(--color-pallet-2);
    display: flex;
    flex-direction: column;
    gap: .5rem;
    margin: .25rem;
    padding: .5rem;
    width: 30%;
    
`;
export const Title = styled.h2`
    font-size: clamp(1.5rem, 2vw, 1.75rem);
    overflow: hidden;
    text-overflow: ellipsis;
`;
export const SubTitle = styled.h2`
    font-size: clamp(1rem, 1.5vw, 1.5rem);
    overflow: hidden;
    text-overflow: ellipsis;
`;
export const LinkItem = styled(Link)`
    font-size: clamp(1rem, 1.5vw, 1.5rem);
    overflow: hidden;
    text-overflow: ellipsis;
`;