import '../app/globals.css';
import Link from "next/link"

const Header = () => {
  return (
    <div>
        <Link href='/'> Home </Link> | 
        <Link href='/create-employer'> Create Employer </Link> | 
        <Link href='/update-employer'> Update Employer </Link> | 
        <Link href='/delete-employer'> Delete Employer </Link> | 
        <Link href='/search-employer'> Search Employer </Link> 
    </div>
  )
}

export default Header;