import styled from "styled-components";
import InputFilter from "../Functions/Buscar";
import PortadaImage from "../Img/portada.jpg";



function Dasboard(){
const [result,Buscar] = InputFilter();



    return (

    <Container>
    <Portada/>
    <Input onChange={(e)=>{Buscar(e.target.value)}} placeholder="Busca tu artista favorito"/>
    <Top>
    {result.length ?  result.map((item)=>{
    return(
    <Caratula key={item.id} >
    <img src={item.imagen}  alt={item.imagen}/>
    <span>{item.artista}</span>
    <p>{item.titulo}</p>
    </Caratula>          
    )}) : <h1>No hay artistas</h1>}
    </Top>
    
    </Container>
    );

}


const Input = styled.input`

width:500px;
padding:15px;
border:none;
outline:none;
border-radius:5px;
margin:auto;
margin-top:10px;
font-size:18px;
@media (max-width:500px){
width:100%;
margin:20px 0px;
}

`;



const Container = styled.section`
width:1000px;
height:800px;
background:#1B1A17;
margin:auto;
border-radius:10px;
padding:30px;
display:flex;
flex-direction:column;

@media (max-width:1000px){
width:100%;
height:100%;
}
`;


const Top = styled.div`
width:100%;
padding:30px;
background:#4E9F3D;
border-radius:10px;
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
`;

const Portada = styled.section`

width:100%;
height:250px;
background-image:url(${PortadaImage});
background-size:cover;
margin-bottom:30px;
border-radius:10px;


`;


const Caratula = styled.div`

background-image:url(${props => props.fondo && props.fondo});
background-size:cover;
margin:0px 10px;
height:80%;
width:150px;
border-radius:5px;
padding:5px;
cursor:pointer;

img{
border-radius:10px;
width:100%;
height:150px;
object-fit:cover;
}

span{
font-size:14px;
font-weight:bold;
}

span{
font-size:16px;
}


`;

export default Dasboard;