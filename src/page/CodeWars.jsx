import { useLoaderData } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../styles/code-wars.css";
function CodeWars() {
    const kata = useLoaderData();

    return (
        <>
            <NavLink to="/" className="navlink-codewars">
                <h1 className="h1-code-wars">CodeWars et moi</h1>
            </NavLink>

            <div className="container-table_codewars">
                <table className="table-codewars">
                    <caption className="titre-table-codewars">
                        Nombres de kata realisé sur CodeWars :{" "}
                        {kata.data.length}
                    </caption>
                    <thead>
                        <tr>
                            <th
                                scope="col"
                                className="th-codewars"
                            >
                                Realisé le
                            </th>
                            <th
                                scope="col"
                                className="th-codewars"
                            >
                                Langage
                            </th>
                            <th
                                scope="col"
                                className="th-codewars"
                            >
                                Nom du kata
                            </th>
                        </tr>
                    </thead>

                    {kata.data.map((e, index) => (
                        <tbody key={index}>
                            <tr>
                                <th className="th-codewars">
                                    {new Date(
                                        e.completedAt
                                    ).toLocaleDateString()}
                                    {" à "}
                                    {new Date(
                                        e.completedAt
                                    ).toLocaleTimeString()}{" "}
                                </th>
                                <th className="th-codewars">
                                    {e.completedLanguages}
                                </th>
                                <th className="th-codewars">{`=> ${e.name}`}</th>
                            </tr>
                        </tbody>
                    ))}
                    <tfoot>
                        <tr>
                            <td>...en attente de resolution de Kata...</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <section className="section-donnee-codewars">
                <p>
                    Données récupérées sur :
                    https://www.codewars.com/api/v1/users/julien44830/code-challenges/completed?page=page
                </p>
            </section>
            <video
                className="video_codewars"
                src="src/assets/images/codewars-video.mp4"
                autoPlay
                // disablePictureInPicture
                loop
            ></video>
        </>
    );
}

export default CodeWars;
