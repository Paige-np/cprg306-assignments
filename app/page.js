
import Link from 'next/link'
import StudentInfo from './studentinfo'

export default function Home() {
  return (
    <main className="min-h-screen p-10 bg-violet-100">
      <h1 className="text-xl font-bold">CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo/><br/>
      
      <p><Link href="/week2">week 2</Link></p>
      <p><Link href="/week3">week 3</Link></p>
      <p><Link href="/week4">week 4</Link></p>
      <p><Link href="/week5">week 5</Link></p>
      <p><Link href="/week6">week 6</Link></p>
  
    </main>
    
    
  )
}
