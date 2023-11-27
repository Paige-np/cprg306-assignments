import Link from "next/link";


export default function StudentInfo() {
  return (
    // <main className="rounded bg-[#afa269] text-[#222422] cursor-pointer p-3 w-1/2">
    <main className="">
      <div className="">      
        <p>Name: Parinthorn Songsana (Paige)</p>
        <p>Course section: CPRG 306 F</p>
        <Link href="https://github.com/Paige-np/cprg306-assignments"
              target="_blank"
              className = "hover:text-[#ffce5d] hover:text-xl hover:underline"
              >https://github.com/Paige-np/cprg306-assignments</Link>
      </div>  
    </main>    
  )
}