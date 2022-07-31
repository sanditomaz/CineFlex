import StyledRegistration from "../Styles/StyledRegistration";

export default function Registration() {
  return (
    <StyledRegistration>
      <section>
        <div>Nome do comprador:</div>
        <input
          type="text"
          required
          name="Nome"
          placeholder="Digite seu nome..."
        ></input>
      </section>

      <section>
        <div>CPF do comprador:</div>
        <input
          type="number"
          required
          name="Cpf"
          placeholder="Digite seu CPF..."
        ></input>
      </section>

      <nav>
        <button>Reservar Assento(s)</button>
      </nav>
    </StyledRegistration>
  );
}
