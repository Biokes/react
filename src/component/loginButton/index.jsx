import style from "./index.module.css"
function Buttons({text}){
    return(
        <div>
            <button className={style.btn}>{text}</button>
        </div>
    )
}

export default Buttons;