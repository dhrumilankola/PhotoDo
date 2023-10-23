import { useState, useEffect } from 'react';
import './imgLayer.scss';

const ImgLayer = ({ layerActive, setLayerActive, activeImg }) => {
    const [downloadUrl, setDownloadUrl] = useState("");

    useEffect(() => {
        const fun = async () => {
            try {
                let blob = await fetch(activeImg.largeImageURL).then(r => r.blob());
                setDownloadUrl(window.URL.createObjectURL(blob));
            }
            catch (e) {

            }
        }
        fun();
    }, [activeImg]);

    return (
        <div className={layerActive ? "imgLayer active" : "imgLayer"}>
            <img onClick={() => setLayerActive(false)} src="images/close.png" alt="" className="closeBtn" />
            <div className="imgCard">
                <div className="topBar">
                    <div className="left">
                        <img className="userImg" src={activeImg.userImageURL || "https://firebasestorage.googleapis.com/v0/b/luxuryhub-3b0f6.appspot.com/o/Site%20Images%2Fprofile.png?alt=media&token=6f94d26d-315c-478b-9892-67fda99d2cd6"} alt="" />
                        <span>
                            {activeImg.user}
                        </span>
                    </div>
                    <div className="right">
                        <a target="_blank" rel="noreferrer" className="downloadBtn" href={downloadUrl} download>
                            Download Free
                        </a>
                    </div>
                </div>
                <img className="mainImg" src={activeImg.largeImageURL} alt="" />
                <div className="interactions">
                    <div className="item">
                        <img src="images/like.png" alt="" />
                        <span>
                            {activeImg.likes}
                        </span>
                    </div>
                    <div className="item">
                        <img src="images/comment.png" alt="" />
                        <span>
                            {activeImg.comments}
                        </span>
                    </div>
                    <div className="item">
                        <img src="images/download.png" alt="" />
                        <span>
                            {activeImg.downloads}
                        </span>
                    </div>
                    <div className="item">
                        <img src="images/view.png" alt="" />
                        <span>
                            {activeImg.views}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImgLayer