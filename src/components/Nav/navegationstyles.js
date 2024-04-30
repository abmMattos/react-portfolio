import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 25px;
    height: fit-content;
    padding: 25px 10px;
    border: solid ${({ theme }) => theme.COLORS.GRAY};
    border-radius: 25px;
    margin: 10% 0%;
    position: -webkit-sticky;
    position: sticky;
    top: 32%;

    @media (max-width: 600px) {
    flex-direction: row;
    padding: 10px 20px;
    position: fixed;
    top: -2%;
    left: 22%;
    border-color: ${({ theme }) => theme.COLORS.GREEN};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};;
  }
`
