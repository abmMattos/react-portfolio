import styled from "styled-components"

export const Main = styled.div`
    display: flex;
    padding: 80px 5%;
    
    @media (max-width: 420px) {
    display: flex;
    flex-wrap: wrap;
    padding: 20px 15px 90px 15px;
  }
`

export const Content = styled.div`
    padding-left: 120px;
    margin-top: -65px;
    @media (max-width: 600px) {
    margin: 0;
    padding: 30px 0px 0px 10px;
  }
`

export const Title = styled.h1`
    font-size: 4.75em;
    font-weight: 500;
    line-height: 1.1em;
    margin-bottom: 35px;
    @media (max-width: 600px) {
    font-size: 2.5em;
  }
`

export const Paragraph = styled.p`
    font-size: 1.125em;
    color: ${({ theme }) => theme.COLORS.GRAY};
    width: 63%;
    @media (max-width: 600px) {
    font-size: 1em;
    width: 80%
  }
`
export const SubTitle = styled.h2`
    font-size: 2.875em;
    line-height: 1.1em;
    font-weight: 400;
    margin-bottom: 35px;
    @media (max-width: 600px) {
    font-size: 2.25em;
    }
`
export const Experience = styled.div`
    margin-top: 65px;

    &:hover h3 {
        color: ${({ theme }) => theme.COLORS.GREEN};
    }
    @media (max-width: 600px) {
        h3 {
            color: ${({ theme }) => theme.COLORS.GREEN};
        }
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
    @media (max-width: 600px) {
    grid-template-columns: 175px 175px;
    gap: 15px;
  }
`
