import { useLoaderData } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../styles/code-wars.css";
function CodeWars() {
    const kata = useLoaderData();

    return (
        <>
            <NavLink to="/">
                <h1 className="h1-code-wars">CodeWars et moi</h1>
            </NavLink>

            <div className="container-table_codewars">
                <table className="table-codewars">
                    <caption>
                        Nombres de kata realisé sur CodeWars :{" "}
                        {kata.data.length}
                    </caption>
                    <thead>
                        <tr>
                            <th
                                scope="col"
                                className="th-codewars"
                            >
                                realisé le
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
                    <tfoot>...en attente de resolution de Kata...</tfoot>
                </table>
            </div>

            <section>
                <p>donnée récupérée sur :</p>
                <p>
                    https://www.codewars.com/api/v1/users/julien44830/code-challenges/completed?page=page
                </p>
            </section>
            <video
                className="video_codewars"
                src="src/assets/images/codewars-video.mp4"
                autoPlay
                loop="true"
            ></video>
        </>
    );
}

export default CodeWars;
