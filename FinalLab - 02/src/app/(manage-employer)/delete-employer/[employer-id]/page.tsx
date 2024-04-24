import '../../../globals.css';

export default function UpdateEmployerInfo( {params} : {params:{employerID: string}} ){
    return (
        <>
        <table border={1} cellSpacing={0} cellPadding={20}>
            <tbody>
                <tr>
                    <td>
                        Employer ID - {params.employerID} has been deleted.
                    </td>
                </tr>
            </tbody>
        </table>
    </>
    );
}