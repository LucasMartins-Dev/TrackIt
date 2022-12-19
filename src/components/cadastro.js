import styled  from 'styled-components'
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

export default function Cadastro() {
    const[email,setemail]=useState('')
    const[senha,setsenha]=useState('')
    const[image,setimage]=useState('')
    const[name,setname]=useState('')
    const[info,setinfo]=useState([])
    console.log(info)

    function Cadastrar(){
        const cadastro = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up',
        {
            email: email,
            name: name,
            image: image,
            password: senha
        }
        )
        cadastro.then(deucerto)
    }

    function deucerto(response){
        setinfo(response.data)
    }


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
        <input onChange={event => setemail(event.target.value)} placeholder="email"></input>
      </Input>
      <Input>
        <input onChange={event => setsenha(event.target.value)} placeholder="senha"></input>
      </Input>
      <Input>
        <input onChange={event => setname(event.target.value)} placeholder="nome"></input>
      </Input>
      <Input>
        <input onChange={event => setimage(event.target.value)} placeholder="foto"></input>
      </Input>
      <Botao>
        <button onClick={Cadastrar}>Cadastrar</button>
      </Botao>
      <Link to="/">
        <Logar>Já tem uma conta? Faça login!</Logar>
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
const Logar = styled.div`
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
