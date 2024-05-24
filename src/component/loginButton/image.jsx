import loginImg from "./webpix.png"

function Images(){
    return <img src={`${loginImg}`}
                style={{width: "38%", objectFit: "contain"}} alt="pics"/>
}
export default Images;