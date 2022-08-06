import Info from "../info/info"
import "./header.css"
import { useState } from 'react';


function Header(props) {

    const [search, setSearch] = useState("");
    const [result, setResult] = useState(false);
    const [message, setMessage] = useState("");


    const searchApi = (event) => {
        setSearch(event.target.value)
    }

    const searchResult = () => {
        if (search === "") {
            setMessage("le nom est pas bon ou exister pas")
        } else {
            const url = `http://localhost:8006/hero/${search}`

            fetch(url).then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Something went wrong');
            })
                .then((result) => {
                    console.log(result)
                    setResult(result)
                    setSearch("")
                    setMessage("");
                    props.info(result)
                })
                .catch((error) => {
                    setMessage("le nom est pas bon ou exister pas")

                    console.log(error)
                });


        }

    }
    const home = () => {
        props.info([])
        setResult(false)
        setMessage("");
    }


    return (
        <header style={{ backgroundImage: result ? `url(${result.image})` : null }} >
            <nav className="nav">
                <div className="logo">
                    <h2>Logo</h2>
                </div>
                <ul className="list-items">
                    <li><a onClick={home} href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#power">Power</a></li>
                </ul>
                <div className="search-bar">
                    <div className="search-input">
                    <input type="text" value={search} onChange={searchApi} placeholder="personnage : batman" />
                    <button onClick={searchResult} className="search-btn">search</button>
                    </div>
                    <p className="errormsg" style={{ color: 'red' }}>{message}</p>
                </div>
            </nav>
            <Info data={result} />
        </header>
    )
}

export default Header 