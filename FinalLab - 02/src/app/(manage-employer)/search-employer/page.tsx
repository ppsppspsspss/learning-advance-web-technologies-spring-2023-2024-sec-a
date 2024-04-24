import '../../globals.css';

export default function SearchEmployer(){
    return <>
        <table border={1} cellSpacing={0} cellPadding={20}>
            <tbody>
                <tr>
                    <td>
                        <input type="text" placeholder="Search an employer name" size={50} id='searchBox'/>
                        <button>Search</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </>;
}