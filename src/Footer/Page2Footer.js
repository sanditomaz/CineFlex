import Styled2Footer from "../Styles/Styled2Footer";

export default function Page2Footer({ title, url }) {
  return (
    <Styled2Footer>
      <div>
        <img src={url} alt={title} />
      </div>
      <h1>{title}</h1>
    </Styled2Footer>
  );
}
