export const Modal=({imgSrc='',onAbortF})=>(
    <div onClick={onAbortF} className="Overlay">
        <div className="Modal">
            <img src={imgSrc} alt="" />
        </div>
    </div>
)