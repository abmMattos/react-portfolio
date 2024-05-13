import { Container, Header, Name, Career, Img, Text, Contact, Location, Links } from "./perfilstyles";
import { Main, Content, Experience, Paragraph, SubTitle, Title, TopicOcupation, Ocupation, Knowledge } from "./contentstyles";
import Button from "../../components/Button";
import OcupationItem from "../../components/Ocupation/OcupationItem"
import TopicKnowledge from "../../components/Knowledge/TopicKnowledge";
import NavMenu from "../../components/Nav";
import Section from "../../components/Sections/Section";



import perfil from "../../imgs/perfil.png"
import email from "../../imgs/email.svg"
import github from "../../imgs/github.svg"
import whatsapp from "../../imgs/whatsapp.svg"
import instagram from "../../imgs/instagram.svg"
import linkedin from "../../imgs/linkedin.svg"

import home from "../../imgs/home.svg"
import about from "../../imgs/about.svg"
import suitcase from "../../imgs/suitcase.svg"
import brain from "../../imgs/brain.svg"
import projects from "../../imgs/projects.svg"

import figma from "../../imgs/figma.png"
import react from "../../imgs/react.png"
import wordpress from "../../imgs/wordpress.png"
import php from "../../imgs/php.png"
import java from "../../imgs/java.png"
import mysql from "../../imgs/mysql.png"





export default function Home() {

    return (
        <Main>
            <Container>
                <Header>
                    <Name>André Mattos</Name>
                    <Career>Web Developer<br></br>Full Stack</Career>
                </Header>
                <Img>
                    <img src={perfil} alt="" />
                </Img>
                <Contact>
                    <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" target="_blank">
                        <img src={email} alt="" />
                    </a>
                    <Text>abmmattos0209@gmail.com</Text>
                </Contact>
                <Location>
                    <p>Brasil, Santa Catarina, Florianópolis</p>
                </Location>
                <Links>
                    <a href="https://github.com/abmMattos" target="_blank"><img src={github} alt="github" /></a>
                    <a href="https://www.linkedin.com/in/andr%C3%A9-mattos-62b4b4235/" target="_blank"><img src={linkedin} alt="linkedin" /></a>
                    <a href="https://wa.me/5548920012383?text=Ol%C3%A1%2C+tudo+bem%3F" target="_blank"><img src={whatsapp} alt="whatsapp" /></a>
                    <a href="https://www.instagram.com/andre_mattos02/" target="_blank"><img src={instagram} alt="instagram" /></a>
                </Links>
            </Container>
            <Content>
                <Section id="home" img={home} text="Introdução" />
                <Title>
                    Olá eu sou <span>André</span>,<br />
                    Web Developer<br />
                    Full Stack
                </Title>
                <Paragraph>
                    Sou um desenvolvedor apaixonado por tecnologia, buscando 
                    sempre aprimorar meu conhecimento e aprender cada vez mais.
                </Paragraph>
                <Section id="about" img={about} text="Sobre" />
                <SubTitle>
                    Conheça um pouco <br /><span>sobre mim</span>!
                </SubTitle>
                <Paragraph>
                Minha jornada como desenvolvedor começou em agosto de 2022, quando ingressei na 
                faculdade de Análise e Desenvolvimento de Sistemas. No entanto, antes disso, já era 
                fascinado pelo poder que a tecnologia pode ter em nossas vidas. Como experiência, 
                realizei alguns projetos pessoais para estudo e desenvolvi sites profissionais para terceiros.
                </Paragraph>
                <Section id="summary" img={suitcase} text="Resumo" />
                <SubTitle>
                    Estudos & <span>Experiência</span>.
                </SubTitle>
                <Experience>
                    <Ocupation>
                        <TopicOcupation>
                            Experiências Profissionais:
                        </TopicOcupation>
                        <OcupationItem title="Desenvolvedor Freelancer" time="2024 - presente" />
                    </Ocupation>
                    <Ocupation>
                        <OcupationItem title="Estágio em Desenvolvimento Web" time="C4 Marketing    11/09/2023 - 02/02/2024" />
                    </Ocupation>
                </Experience>
                <Experience>
                    <Ocupation>
                        <TopicOcupation>
                            Formação Acadêmica:
                        </TopicOcupation>
                        <OcupationItem title="Superior em Analise e Desenvolvimento de Sistemas" time="SENAI   01/08/2022 - presente" />
                    </Ocupation>
                </Experience>
                <Section id="knowladge" img={brain} text="Conhecimentos" />
                <Knowledge>
                    <TopicKnowledge img={figma} title="Figma" />
                    <TopicKnowledge img={react} title="React" />
                    <TopicKnowledge img={wordpress} title="WordPress" />
                    <TopicKnowledge img={php} title="PHP" />
                    <TopicKnowledge img={java} title="Java" />
                    <TopicKnowledge img={mysql} title="MySQL" />
                </Knowledge>
                <Section id="projects" img={projects} text="Projetos" />
                <SubTitle>
                    Veja um pouco dos meus<br />
                    <span>projetos</span> no <u>Github</u>!
                </SubTitle>
                <Button link="https://github.com/abmMattos" text="VER PROJETOS" />
            </Content>
            <NavMenu />
        </Main>

    )
}