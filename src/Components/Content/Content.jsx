import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../../Config/api";
import "./content.scss";

const Content = ({ category, setCategory, setSearchVal, setLayerActive, setActiveImg }) => {
    const [amount, setAmount] = useState(15);
    const [images, setImages] = useState([]);

    useEffect(() => {

        const fetchImg = async () => {
            try {
                const res = await axios.get(url(category, amount));
                setImages(res?.data.hits);
            } catch (e) {
                window.alert("Something Went Wrong");
            }
        }
        fetchImg();
    }, [category, amount]);

    return (
        <div className="content">
            <div className="categories">
                <form action="">
                    <input checked={(category === "all") && true} type="radio" name="category" value="all" id="all" onChange={(e) => {
                        setCategory(e.target.value)
                        setAmount(15);
                        setSearchVal("");
                    }} />
                    <label htmlFor="all">All</label>

                    <div className="dot"></div>
                    <input checked={(category === "landscape") && true} type="radio" name="category" value="landscape" id="landscape" onChange={(e) => {
                        setCategory(e.target.value)
                        setAmount(15);
                        setSearchVal("");
                    }} />
                    <label htmlFor="landscape">Landscape</label>

                    <div className="dot"></div>
                    <input checked={(category === "Wildlife") && true} type="radio" name="category" value="Wildlife" id="Wildlife" onChange={(e) => {
                        setCategory(e.target.value)
                        setAmount(15);
                        setSearchVal("");
                    }} />
                    <label htmlFor="wildlife">Wildlife</label>

                    <div className="dot"></div>
                    <input checked={(category === "Fashion") && true} type="radio" name="category" value="Fashion" id="Fashion" onChange={(e) => {
                        setCategory(e.target.value)
                        setAmount(15);
                        setSearchVal("");
                    }} />
                    <label htmlFor="Fashion">Fashion</label>

                    <div className="dot"></div>
                    <input checked={(category === "Sports") && true} type="radio" name="category" value="Sports" id="Sports" onChange={(e) => {
                        setCategory(e.target.value)
                        setAmount(15);
                        setSearchVal("");
                    }} />
                    <label htmlFor="Sports">Sports</label>

                    <div className="dot"></div>
                    <input checked={(category === "Technology") && true} type="radio" name="category" value="Technology" id="Technology" onChange={(e) => {
                        setCategory(e.target.value)
                        setAmount(15);
                        setSearchVal("");
                    }} />
                    <label htmlFor="Technology">Technology</label>

                </form>
            </div>

            <div className="images">
                {
                    images.map((image, index) => (
                        <div key={index} className="imgContainer" onClick={() => { setActiveImg(image); setLayerActive(true); }}>
                            <img src={image.largeImageURL} alt="" />
                        </div>
                    ))
                }
            </div>
            <button onClick={() => setAmount(amount + 15)}>
                Load More
            </button>

        </div>
    )
}

export default Content