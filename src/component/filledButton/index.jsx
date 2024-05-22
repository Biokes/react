import style from "./index.module.css"
function FilledButton({color,text,textColor}){
    return(
        <div>
            <button className={style.btn} style={{background: color,color:textColor}}>{text}</button>
        </div>
    )
}
export default FilledButton;