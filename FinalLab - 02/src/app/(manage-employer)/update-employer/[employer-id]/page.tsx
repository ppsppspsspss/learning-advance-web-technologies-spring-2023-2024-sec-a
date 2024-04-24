import '../../../globals.css';

export default function UpdateEmployerInfo( {params} : {params:{employerID: string}} ){
    return (
        <>
        <table border={1} cellSpacing={0} cellPadding={20}>
            <tbody>
                <tr>
                    <td>
                        Employer ID - {params.employerID}
                        <br /><br />
                        Employer Name <br />
                        <input type="text" /><br /><br />
                        Company Name <br />
                        <input type="text" /><br /><br />
                        Contact No <br />
                        <input type="text" /><br /><br />
                        Username <br />
                        <input type="text" /><br /><br />
                        Password <br />
                        <input type="text" /><br /><br />
                        <button>Update Employer</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </>
    );
}