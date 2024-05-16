import { useLoaderData } from "react-router-dom";
import "../styles/about.css";
function About() {
    const kata = useLoaderData();

    return (
        <>
            <h1>je suis MOI !!!</h1>

            <table>
                <caption>
                    Nombres de kata realisé sur CodeWars : {kata.data.length}
                </caption>
                <thead>
                    <tr>
                        <th scope="col">realisé le</th>
                        <th scope="col">Langage</th>
                        <th scope="col">Nom du kata</th>
                    </tr>
                </thead>

                {kata.data.map((e, index) => (
                    <tbody key={index}>
                        <tr>
                            <th>{new Date(e.completedAt).toUTCString()}*</th>
                            <th>{e.completedLanguages}</th>
                            <th>{`=> ${e.name}`}</th>
                        </tr>
                    </tbody>
                ))}
                <tfoot>
                    <tr>
                        <td>------------------------------</td>
                    </tr>
                </tfoot>
            </table>

            <p>*Heure local = heure GTM + 2h </p>
            <p>------------------------------</p>
        </>
    );
}

export default About;
