import StyledRegistration from "../Styles/StyledRegistration";

export default function Registration() {
  return (
    <StyledRegistration>
      <section>
        <div>Nome do comprador:</div>
        <input type="text" name="Nome" placeholder="Digite seu nome..."></input>
      </section>

      <section>
        <div>CPF do comprador:</div>
        <input type="number" name="Cpf" placeholder="Digite seu CPF..."></input>
      </section>

      <nav>
        <button>Reservar Assento(s)</button>
      </nav>
    </StyledRegistration>
  );
}
