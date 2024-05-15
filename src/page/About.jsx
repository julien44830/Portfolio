import { useLoaderData } from "react-router-dom";

function About() {
    const data = useLoaderData();

    return (
        <>
            <h1>je suis MOI !!!</h1>

            <table>
                <caption>
                    Nombres de kata realisé sur CodeWars : {data.data.length}
                </caption>
                <thead>
                    <tr>
                        <th scope="col">Nom du kata</th>
                        <th scope="col">Langage</th>
                        <th scope="col">realisé le</th>
                    </tr>
                </thead>

                {data.data.map((e, index) => (
                    <tbody key={index}>
                        <tr>
                            <th>{e.name}</th>
                            <th>{e.completedLanguages}</th>
                            <th>{new Date(e.completedAt).toUTCString()}</th>
                        </tr>
                    </tbody>
                ))}
                <tfoot>
                    <tr>
                        <td>-----------------------------</td>
                    </tr>
                </tfoot>
            </table>
        </>
    );
}

export default About;
