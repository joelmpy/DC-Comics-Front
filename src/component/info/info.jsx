import "./info.css"

function Info (props) {
    console.log(props.data)
    return (
        <>
        <section className="main-page">
            <h1>{props.data.name ? props.data.name : "Justice League"}</h1>
            <p>{props.data.intro ? props.data.intro : "Il est temps d'être l'équipe qu'ils pensaient que nous étions au lieu de l'équipe que nous avons été ces cinq dernières années. en route Justice League"}</p>
            <a href="#" className="btn">Watch Me</a>
        </section>
 
        </>
    )
}

export default Info 