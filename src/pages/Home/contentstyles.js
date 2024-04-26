import styled from "styled-components"

export const Main = styled.div`
    display: flex;
    padding: 80px 5%;
    
`

export const Content = styled.div`
    padding-left: 120px;
    margin-top: -65px;
`

export const Title = styled.h1`
    font-size: 4.75em;
    font-weight: 500;
    line-height: 1.1em;
    margin-bottom: 35px;
`

export const Paragraph = styled.p`
    font-size: 1.125em;
    color: ${({ theme }) => theme.COLORS.GRAY};
    width: 63%;
`
export const SubTitle = styled.h2`
    font-size: 2.875em;
    line-height: 1.1em;
    font-weight: 400;
    margin-bottom: 35px;
`
export const Experience = styled.div`
    margin-top: 65px;

    &:hover h3 {
        color: ${({ theme }) => theme.COLORS.GREEN};
    }
`

export const Ocupation = styled.div`
    &:hover p {
        color: ${({ theme }) => theme.COLORS.GREEN};
    }
`

export const TopicOcupation = styled.h3`
    font-size: 1.5em;
    color: ${({ theme }) => theme.COLORS.GRAY};
    font-weight: 500;
`

export const Knowledge = styled.div`
    display: grid;
    grid-template-columns: 200px 200px 200px;
    gap: 30px;
`
