import Link from "next/link";


export default function StudentInfo() {
  return (
    <main>
      <div className="">      
        <p>Name: Parinthorn Songsana</p>
        <p>Course section: CPRG 306 F</p>
        <Link href="https://github.com/Paige-np/cprg306-assignments"
              className = "hover:text-[#DD614A] hover:text-2xl w-20"
              >https://github.com/Paige-np/cprg306-assignments</Link>
      </div>  
    </main>    
  )
}