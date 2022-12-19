import styled  from 'styled-components'
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <Imagem>
        <Img1  src='./assets/Vector 1.png'/>
        <Img2 className='2'src='./assets/Vector 2.png'/>
        <Img3 className='3'src='./assets/Vector 3.png'/>
        <Img4 src='./assets/Vector 4.png'/>
      </Imagem>
      <Titulo>TrackIt</Titulo>
      <Input>
        <input placeholder="email"></input>
      </Input>
      <Input>
        <input placeholder="senha"></input>
      </Input>
      <Botao>
        <button>Entrar</button>
      </Botao>
      <Link to="/cadastro">
        <Cadastro>Não tem uma conta? Cadastre-se!</Cadastro>
      </Link>
    </div>
  );
}

const Imagem = styled.div`
display: flex;
margin-top: 100px;
margin-left: 100px;
position: relative;
height: 80px;
`
const Img1 = styled.img`
 position: absolute;
 left: 40px;
 bottom:45px
`
const Img2 = styled.img`
 position: absolute;
 left:65px;
`
const Img3 = styled.img`
 position: absolute;
 left: 90px;
 bottom: 25px;
`
const Img4 = styled.img`
 position: absolute;
 bottom: 0;
`
const Cadastro = styled.div`
margin-left: 36px;`;
const Titulo = styled.div`
display: flex;
align-items: center;
justify-content: center;
  font-family: 'Playball', cursive;
  font-weight: 400;
  font-size: 69px;
  color: #126ba5;
`;

const Input = styled.div`
  input {
    box-sizing: border-box;
    padding-left: 10px;
    margin-left: 36px;
    margin-bottom:5px ;
    border-radius: 5px;
    border: 1px solid #d4d4d4;
    width: 303px;
    height: 45px;
  }
`;
const Botao = styled.div`
  button {
    border-radius: 5px;
    margin-left: 36px;
    margin-bottom:5px ;
    border: none;
    width: 303px;
    height: 45px;
    background-color: #52b6ff;
    color: white;
  }
`;
