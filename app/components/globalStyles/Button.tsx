"use client";
import styled from "styled-components";

type ButtonProp = {
  primary: Boolean,
  href: string,
  content: string,

}

export default function Button({primary, href, content}: ButtonProp) {
  return( 
    <a>
    <Container>
      <Container2>
        <ButtonBody>
          <Text>{content}</Text></ButtonBody>
      </Container2>
    </Container>
    </a>
    );
}

const Container = styled.div`
  padding: 1rem;
  position: relative;
  background: linear-gradient(180deg, #CAB19D 13.54%, rgba(202, 177, 157, 0.1) 100%);
  /* background: linear-gradient(to right, red, purple); */
  padding: 5px;
  top: 25px;
  border-radius: 13px;
`
const Container2 = styled.div`
  background-color: #111010;
  border-radius: 8px;
`

const ButtonBody = styled.div`
  /* background: linear-gradient(180deg, rgba(202, 177, 157, 0.2) 30%, rgba(202, 177, 157, 0) 100%); */
  /* background: rgb(202,177,157); */
  background-color: #111010;
  /* background: linear-gradient(180deg, rgba(202, 177, 157, 0.5) 20%, rgba(202, 177, 157, 0) 90%); */
  background: radial-gradient(133.89% 123.53% at -11.3% -13.31%, rgba(202, 177, 157, 0.3) 0%, rgba(202, 177, 157, 0) 100%);
  border-radius: 3px;
  color: '#CAB19D';
  font-weight: 600;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 7px;
  padding-bottom: 7px;
  border-width: 0px;
  border-style: solid;
  border-color: transparent;
  border-radius: 8px;
  transition: 0.2s linear;
  cursor: pointer;
  font-size: 14pt;
  position: relative;
  
  text-decoration: none;


  &:hover {
    background-color: transparent;
    color:  '#cab19d';
  }

  @media (max-width: 740px) {
    text-align: center;
    font-size: 12pt;
    top: 5px;
    width: 90%;
  }
`;


const Text = styled.p`
    background: linear-gradient(180deg, #CAB19D 21.35%, rgba(202, 177, 157, 0.08) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`