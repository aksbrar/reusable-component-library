import { IoPersonSharp } from "react-icons/io5"

export default function Avatar({img, children, color="navy"}){ 
  const styles = {
    body: {
      backgroundColor: "#2F2F2F",
    },
    avatar: {
      height: "150px",
      width: "150px",
      borderRadius: "50%",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: ".3rem solid white",
    },
    avatarImg: {
      width: "100%",
    },
    avatarLetters: {
      backgroundColor: "#F43F5E", 
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "2.5rem",
      fontFamily: "'Karla', sans-serif",
    },
    avatarIcon: {
      backgroundColor: "#1F2937", 
    },
    avatarSvg: {
      height: "100%",
      width: "100%",
      transform: "translateY(20px)",
      color: "whitesmoke",
    },

    // Random background color helpers
    navy: {
      backgroundColor: "#1F2937",
    },
    pink: {
      backgroundColor: "#DA6AEC",
    },
    red: {
      backgroundColor: "#F43F5E",
    },
    blue: {
      backgroundColor: "#2F74DC",
    },
    green: {
      backgroundColor: "#22CD90",
    },
  };

  let html = ``
  let applyStyle = {...styles.body}
  if(img){
    html = <img src={img.src} alt={img.alt}></img>
    applyStyle = {
      ...applyStyle,
      ...styles.avatar,
      ...styles[color]
    }
  }
  if(children){
    const words = children.split(" ")
    if (words.length === 1 ){
      html = words[0].slice(0,2)
    } else {
      const word = words.map(word => word.slice(0 , 1))
      html = word[0] + word[1]
    }
    applyStyle = {
      ...applyStyle,
      ...styles.avatar,
      ...styles.avatarLetters,
      ...styles[color]
    }
  }

  if(!children && !img){
    html = <IoPersonSharp/>
    applyStyle = {
      ...applyStyle,
      ...styles.avatar,
      ...styles.avatarIcon,
      ...styles[color]
    }
  }

  return (
    <div style={applyStyle}>
      {html}
    </div>
  )
}