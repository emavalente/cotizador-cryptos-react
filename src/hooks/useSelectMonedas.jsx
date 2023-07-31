import { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  display: block;
  font-weight: 700;
  font-size: 1.2rem;
  color: #fff;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin: 16px 0 24px;
  border-radius: 4px;
  font-size: 1.2rem;
`;

const useSelectMonedas = (label, opciones) => {
  const [state, setState] = useState("");

  const SelectMonedas = () => (
    <>
      <Label>{label}</Label>
      <Select value={state} onChange={(e) => setState(e.target.value)}>
        <option value="">- Seleccione -</option>
        {opciones.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </>
  );

  return [state, SelectMonedas];
};

export default useSelectMonedas;
