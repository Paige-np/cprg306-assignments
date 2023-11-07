
import Link from 'next/link'
import StudentInfo from './studentinfo'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#E4D6A7] font-sans text-xl pt-20 pl-40">
      <h1 className="text-xl font-bold">CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo/><br/>
      
      <div className = "hover:text-[#DD614A] hover:text-2xl w-20"><Link href="/week2">week 2</Link></div>
      <div className = "hover:text-[#DD614A] hover:text-2xl w-20"><Link href="/week3">week 3</Link></div>
      <div className = "hover:text-[#DD614A] hover:text-2xl w-20"><Link href="/week4">week 4</Link></div>
      <div className = "hover:text-[#DD614A] hover:text-2xl w-20"><Link href="/week5">week 5</Link></div>
      <div className = "hover:text-[#DD614A] hover:text-2xl w-20"><Link href="/week6">week 6</Link></div>
      <div className = "hover:text-[#DD614A] hover:text-2xl w-20"><Link href="/week7">week 7</Link></div> 
      <div className = "hover:text-[#DD614A] hover:text-2xl w-20"><Link href="/week8">week 8</Link></div>
  
    </main>    
    
  )
}
