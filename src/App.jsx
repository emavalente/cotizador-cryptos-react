import styled from "@emotion/styled";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";
import ImagenCripto from "./img/imagen-criptos.png";
import { useEffect, useState } from "react";

const Contenedor = styled.div`
  width: 90%;
  height: 100vh;
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  width: 80%;
  max-width: 400px;
  margin: 40px auto 0;
  display: block;
`;

const Heading = styled.h1`
  margin: 80px 0 50px;
  font-family: "Lato", sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  text-align: center;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    margin: 10px auto 0;
    background-color: #fff;
    box-shadow: inset 0px 0px 6px #66a2fe;
    display: block;
  }
`;

function App() {
  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    // Validar si el estado monedas tiene valor.
    if (Object.keys(monedas).length) {
      const cotizarCripto = async () => {
        setCargando(true);
        setResultado({}); // Reseteo el obj resultado para que no se muestre.

        const { moneda, criptomoneda } = monedas;
        const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const respuesta = await fetch(URL);
        const data = await respuesta.json();

        setResultado(data.DISPLAY[criptomoneda][moneda]);
        setCargando(false);
      };

      cotizarCripto();
    }
  }, [monedas]);

  return (
    <Contenedor>
      <Imagen src={ImagenCripto} />
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Formulario setMonedas={setMonedas} />
        {/* Si existe PRICE en resultado (true) mostrar el componente. */}
        {cargando && <Spinner />}
        {resultado.PRICE && <Resultado resultado={resultado} />}
      </div>
    </Contenedor>
  );
}

export default App;
