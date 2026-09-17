import "./css/FormInput.css";

function FormInput() { 
  return (
    <>
      <div className="form-url">
        <input className="inpItem" placeholder="url soundcloud" />
        <button className="btn-download">Download</button>
      </div>
    </>
  );
}

export default FormInput;
