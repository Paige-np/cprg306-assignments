import Link from "next/link";
import StudentInfo from "../studentinfo";


export default function Page() {
  return (
    <main className="min-h-screen p-10 bg-violet-100">
      <h1>My Shopping List</h1>
      <StudentInfo />
      
    </main>
  );
}