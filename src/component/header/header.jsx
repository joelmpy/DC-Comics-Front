import Info from "../info/info"
import styles from "./header.module.css"
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
        <>
            <nav className={styles.navbar}>
                <div className={styles.navbarContent}>
                    <div className={styles.navTitle}>
                        <h2>Logo</h2>
                    </div>
                    <ul className={styles.nav}>
                        <li className={styles.navLink}><a onClick={home} href="#">Home</a></li>
                        <li className={styles.navLink}><a href="#about">About</a></li>
                        <li className={styles.navLink}><a href="#power">Power</a></li>
                    </ul>

                    <form className={styles.form}>
                        <input className={styles.input} type="search" value={search} onChange={searchApi} placeholder="personnage : batman" />
                        <button onClick={searchResult} className="fas fa-search" ></button>
                    </form>
                    <p className="errormsg" style={{ color: 'red' }}>{message}</p>
                </div>
            </nav>

            <header className={styles.header} style={{ backgroundImage: result ? `url(${result.image})` : null }}>
                <Info data={result} />
            </header>
        </>
    )
}

export default Header 