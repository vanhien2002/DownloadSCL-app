import ButtonDownload from "./ButtonDownload.jsx";
import "./css/FormInput.css";

function FormInput() { 
  return (
    <div className="form-url">
      <input className="inpItem" placeholder="Paste SoundCloud URL here..." />
      <ButtonDownload text="Download" size="md" />
    </div>
  );
}

export default FormInput;
