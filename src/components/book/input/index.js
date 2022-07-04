import "./index.css";

const Input = ({ placeholder, Icon }) => {
  return (
    <div className="input-container">
      <input placeholder={placeholder} />
      <Icon />
    </div>
  );
};

export default Input;
