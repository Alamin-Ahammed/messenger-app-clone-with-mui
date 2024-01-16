import './TextField.css'
const iconStyles = {
  maxWidth: "20px",
  height: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.5rem",
  opacity: "0.5",
};

export default function TextField({
  data: { type, placeholder, styles, leftIcon, rightIcon },
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.2rem",
        height: "35px",
        width: "100%",
        padding: "0.5rem 1rem",
        ...styles,
      }}
    >
      <div style={iconStyles} className="text-field-icon">
        {leftIcon && leftIcon}
      </div>
      <input
        style={{
          outline: "none",
          width: "100%",
          height: "100%",
          border: "none",
          background: "transparent",
          fontSize: "1rem",
        }}
        type={type}
        placeholder={placeholder}
      />
      <div style={iconStyles} className="text-field-icon">
        {rightIcon && rightIcon}
      </div>
    </div>
  );
}
