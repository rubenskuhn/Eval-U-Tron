import StandardButton from "../components/StandardButton";
import DeleteButton from "../components/DeleteButton";

export default function Page() {
  return (
    <>
      <h1>Eval-U-Tron</h1>;
      <form>
        <label htmlFor="proposition">Write your question:</label>
        <input type="text" id="proposition" proposition="proposition" />
        <br />
        <label htmlFor="answer">first answer:</label>
        <input type="text" id="answer" answer="answer" />
        <br />
        <label htmlFor="answer">second answer:</label>
        <input type="text" id="answer" answer="answer" />
        <br />
        <button type="submit">Submit</button>
      </form>
      <StandardButton label="Start Test!" />
      <DeleteButton label="" />
    </>
  );
}
