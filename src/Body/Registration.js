import StyledRegistration from "../Styles/StyledRegistration";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function Registration({ place, title, day, time, idSeat }) {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  let navigate = useNavigate();

  function register(e) {
    e.preventDefault();
    if (idSeat.length === 0) {
      alert("Selecione um assento");
      return;
    }
    const body = {
      ids: idSeat,
      name: nome,
      cpf: cpf,
    };

    const promise = axios.post(
      "https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many",
      body
    );
    promise.then(
      navigate("/sucesso", { state: { cpf, nome, place, title, day, time } })
    );
  }

  return (
    <StyledRegistration onSubmit={register}>
      <section>
        <div>Nome do comprador:</div>
        <input
          type="text"
          required
          value={nome}
          placeholder="Digite seu nome..."
          onChange={(e) => setNome(e.target.value)}
        ></input>
      </section>

      <section>
        <div>CPF do comprador:</div>
        <input
          type="text"
          pattern="[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}"
          required
          value={cpf}
          placeholder="Digite seu CPF..."
          onChange={(e) => setCpf(e.target.value)}
        ></input>
      </section>

      <nav>
        <button type="submit" value="submit">
          Reservar Assento(s)
        </button>
      </nav>
    </StyledRegistration>
  );
}
