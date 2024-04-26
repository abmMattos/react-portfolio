import styled from "styled-components";

export const ButtonComponent = styled.button`
    background-color: ${({ theme }) => theme.COLORS.GREEN};
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 15px 25px;
    width: fit-content;
    font-size: 1.125em;
    font-weight: bold;
    border-radius: 25px;
    border: none;
`