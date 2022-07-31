import Styled3Footer from "../Styles/Styled3Footer";

export default function Page3Footer({ url, title, day, time }) {
  return (
    <Styled3Footer>
      <div>
        <img src={url} alt={title} />
      </div>

      <section>
        <h1>{title}</h1>
        <h1>
          {" "}
          {day} - {time}
        </h1>
      </section>
    </Styled3Footer>
  );
}
