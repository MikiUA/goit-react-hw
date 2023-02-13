import styles from './styles/Modal.module.css'

export const Modal=({imgSrc='',onAbortF})=>(
    <div onClick={onAbortF} className={styles["Overlay"]}>
        <div className={styles["Modal"]}>
            <img src={imgSrc} alt="" />
        </div>
    </div>
)