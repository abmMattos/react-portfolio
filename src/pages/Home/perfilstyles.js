import styled from 'styled-components'

export const Container = styled.div`
    width: 400px;
    height: fit-content;
    border: solid ${({ theme }) => theme.COLORS.GRAY};
    border-radius: 25px;
    padding: 30px 35px;
    position: -webkit-sticky;
    position: sticky;
    top: 12%;

    @media (max-width: 600px) {
    position: relative;
    width: 375px;
    margin-top: 100px;
  }
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 35px;
`

export const Name = styled.h3`
    font-size: 1.5em;
`

export const Career = styled.h3`
    font-size: 1.125em;
    font-weight: 400;
    text-align: center;
`

export const Img = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Contact = styled.div`
    display: flex;
    padding: 30px 35px 10px 35px;
    justify-content: center;
    align-items: center;
    gap: 30px;
`

export const Text = styled.p`
    font-size: 1.125em;
`

export const Location = styled.div`
    text-align: center;
    font-size: 1.125em;
    margin-bottom: 30px;
`

export const Links = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
`