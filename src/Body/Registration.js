import StyledRegistration from "../Styles/StyledRegistration";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function Registration({ place, title, day, time, idSeat }) {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");

  function register(e) {
    console.log(e);
    e.preventDefault();
    const body = {
      ids: idSeat,
      name: nome,
      cpf: cpf,
    };
    console.log(body);
    const promise = axios.post(
      "https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many",
      body
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
          type="number"
          required
          value={cpf}
          placeholder="Digite seu CPF..."
          onChange={(e) => setCpf(e.target.value)}
        ></input>
      </section>
      <Link to="/sucesso" state={{ cpf, nome, place, title, day, time }}>
        <nav>
          <button type="submit" value="submit">
            Reservar Assento(s)
          </button>
        </nav>
      </Link>
    </StyledRegistration>
  );
}
