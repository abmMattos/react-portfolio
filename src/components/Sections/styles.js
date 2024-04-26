import styled from "styled-components";

export const Topic = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 22px;
    gap: 15px;
    border: solid ${({ theme }) => theme.COLORS.GRAY};
    border-radius: 25px;
    margin: 65px 0px;
    color: white;
    font-size: 1em;
    font-weight: 400;
    width: fit-content;
`