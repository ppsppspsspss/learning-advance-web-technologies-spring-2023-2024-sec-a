import Link from 'next/link';
import '../../globals.css';

export default function UpdateEmployer(){
    return <>
    <table border={1} cellSpacing={0} cellPadding={20}>
        <thead>
            <tr>
                <td>
                    Employer ID
                </td>
                <td>
                    Employer Name
                </td>
                <td>
                    Action
                </td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    E-001
                </td>
                <td>
                    Rianul Amin
                </td>
                <td>
                    <Link href='/update-employer/E-001'> Update Employer Info </Link> 
                </td>
            </tr>
            <tr>
                <td>
                    E-002
                </td>
                <td>
                    Asraful Alam Ratul
                </td>
                <td>
                    <Link href='/update-employer/E-002'> Update Employer Info </Link> 
                </td>
            </tr>
            <tr>
                <td>
                    E-003
                </td>
                <td>
                    Tanvir Hasan Tamal
                </td>
                <td>
                    <Link href='/update-employer/E-003'> Update Employer Info </Link> 
                </td>
            </tr>
        </tbody>
    </table>
    </>;
}