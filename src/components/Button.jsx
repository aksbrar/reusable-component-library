export default function Button({size="default", color="default", children, ...rest}){
  const baseStyle = {
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "16px",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    border: "1px solid black",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    color: "black",
    display: "flex",
    gap: "1em"
  };

  const buttonStyles = {
    sizes: {
      default: { padding: "20px", fontSize: "16px" },
      large: { padding: "28px 36px", fontSize: "20px" },
      small: { padding: "12px 18px", fontSize: "14px" },
    },
    colors: {
      default: { 
        color: "#111827", 
        background: "linear-gradient(135deg, #f9fafb, #e5e7eb)" 
      }, // neutral gray
      primary: { 
        color: "white", 
        background: "linear-gradient(135deg, #3b82f6, #1d4ed8)" 
      }, // vibrant blue
      secondary: { 
        color: "white", 
        background: "linear-gradient(135deg, #6b7280, #374151)" 
      }, // elegant gray
      danger: { 
        color: "white", 
        background: "linear-gradient(135deg, #ef4444, #b91c1c)" 
      }, // red alert
      success: { 
        color: "white", 
        background: "linear-gradient(135deg, #22c55e, #15803d)" 
      }, // fresh green
      warning: { 
        color: "#111827", 
        background: "linear-gradient(135deg, #facc15, #ca8a04)" 
      }, // warm yellow
      info: { 
        color: "white", 
        background: "linear-gradient(135deg, #06b6d4, #0e7490)" 
      }, // teal
    },
  };

  const combinedStyles = {
    ...baseStyle,
    ...buttonStyles.sizes[size],
    ...buttonStyles.colors[color]
  }


  return (
    <button style={combinedStyles} {...rest}>
            {children}
    </button>
    )
}