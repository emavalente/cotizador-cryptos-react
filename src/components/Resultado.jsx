import styled from "@emotion/styled";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #fff;
  font-family: "Lato", sans-serif;
`;

const Texto = styled.p`
  font-size: 1rem;
  & span {
    font-weight: 900;
  }
`;

const Precio = styled.p`
  font-size: 1.2rem;
  & span {
    font-weight: 900;
  }
`;

const Imagen = styled.img`
  display: block;
  width: 120px;
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;

  return (
    <Contenedor>
      <Imagen
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="imagen criptomoneda"
      />
      <div>
        <Precio>
          El precio actual es de: <span>{PRICE}</span>
        </Precio>
        <Texto>
          Precio más alto del día: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          Precio más bajo del día: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Variación últimas 24hs <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Última actualización: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Contenedor>
  );
};

export default Resultado;
