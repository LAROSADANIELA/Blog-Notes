import { useContext } from "react";
import { BlocContext } from "../Context/blocContext";
import "../style/style.css";

function BlocCard({ note }) {
  const { DeleteNote } = useContext(BlocContext);
  return (
    <section className="note">
      <div className="div_note">
        <h1 className="note_title">{note.title}</h1>
        <p className="note_description">{note.description}</p>
      </div>
      <div className="div_button">
        <button className="delete_button" onClick={() => DeleteNote(note.id)}>
          Delete Note
        </button>
      </div>
    </section>
  );
}
export default BlocCard;
