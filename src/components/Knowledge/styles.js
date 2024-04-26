import styled from "styled-components"

export const Topic = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 160px;
    border: solid ${({ theme }) => theme.COLORS.GRAY};
    border-radius: 50%;
    gap: 20px;

    &:hover {
        border-color: ${({ theme }) => theme.COLORS.GREEN}
    }

    &:hover h3 {
        color: ${({ theme }) => theme.COLORS.GREEN}
    }
`

export const TitleKnoledge = styled.h3`
    font-size: 1em;
    color: ${({ theme }) => theme.COLORS.GRAY};
    font-weight: 500;
`