import styled from "styled-components";
import TextField from '@mui/material/TextField';


export const Wrapper = styled.header`
    align-items: center;
    background-color: var(--color-pallet-back-ground-2);
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 1rem;
    height: 150px;
`;

export const SearchWrapper = styled.form`
    
    width: 50%;
`;

export const CssTextField = styled(TextField)({
    '& .color': {
      color: 'var(--color-pallet-2)',
    },
    '& label': {
      color: 'var(--color-pallet-2)',
    },
    '& label.Mui-focused': {
      color: 'var(--color-pallet-icon)',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'var(--color-pallet-2)',
      },
      '&:hover fieldset': {
        borderColor: 'var(--color-pallet-icon)',
      },
      
    },
  });

export const Icon = styled.a`
    display: flex;
    margin: 0;
    cursor: pointer;
`;