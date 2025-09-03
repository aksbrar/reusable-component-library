export default function Button(props){
  const style = {
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "16px",
    padding: "20px",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    border: "1px solid black",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    color: "black"
  } 

  return (
    <button style={style} className="reusable-button">{props.children}</button>)
}