import '../../globals.css';

export default function CreateEmployer(){
    return <>
        <table border={1} cellSpacing={0} cellPadding={20}>
            <tbody>
                <tr>
                    <td>
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
                        <button>Create Employer</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </>;
}