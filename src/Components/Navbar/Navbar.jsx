// import './navbar.scss';

// const Navbar = ({ setCategory, searchVal, setSearchVal }) => {

//     const handleSearch = (e) => {
//         e.preventDefault();
//         setCategory(searchVal);
//     }

//     return (
//         <div className="navbar">
//             <div className="banner">
//                 <div className="layer">
//                     <img src="images/camera.png" alt="" />
//                     <p className="slogan">
//                         Capturing the moments that captivate your heart.
//                     </p>
//                     <form>
//                         <input value={searchVal} onChange={(e) => setSearchVal(e.target.value)} type="text" placeholder="Search here..." />
//                         <button type="submit" onClick={(e) => handleSearch(e)}>
//                             <img src="images/search.png" alt="" />
//                         </button>
//                     </form>
//                 </div>
//                 <img src="images/banner.jpg" alt="" />
//             </div>
//         </div>
//     )
// }

// export default Navbar

import './navbar.scss';

const Navbar = ({ setCategory, searchVal, setSearchVal }) => {
    const handleSearch = (e) => {
        e.preventDefault();
        setCategory(searchVal);
    }

    return (
        <div className="navbar">
            <div className="banner">
                <div className="layer">
                    <img src="images/camera.png" alt="" />
                    <p className="slogan">
                        Capturing the moments that captivate your heart.
                    </p>
                    <form>
                        <div className="search-container">
                            <input
                                value={searchVal}
                                onChange={(e) => setSearchVal(e.target.value)}
                                type="text"
                                placeholder="Search here..."
                                className="search-input"
                            />
                            <button type="submit" onClick={(e) => handleSearch(e)}>
                                <img src="images/search.png" alt="" />
                            </button>
                        </div>
                    </form>
                </div>
                <img src="images/banner1.jpg" alt="" />
            </div>
        </div>
    );
};

export default Navbar;
