import styled from "styled-components";

export const Wrapper = styled.section`
  align-items: flex-end;
  display: flex;
  background: none;
  color: var(--color-pallet-1);
  gap: 1rem;
  width: 45%;
`;
export const Image = styled.img`
  border-radius: 50%;
  border: 1px solid var(--color-pallet-1);
  width: 250px;
  height: 100%;
`;
export const UserHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.75rem;
  overflow: hidden;
  text-overflow: clip;
  h1 {
    color: var(--color-pallet-1);
    font-size: 2rem;
    margin: 0 0 0.25rem 0;
  }
`;
export const UseDescription = styled.aside`
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 1rem;
  }
  h3 {
    font-size: 1.5rem;
    color: var(--color-pallet-2);
  }
  span {
    font-size: 1.25rem;
  }
`;
