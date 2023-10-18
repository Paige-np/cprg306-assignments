import Link from "next/link";
import StudentInfo from "../studentinfo";


export default function Page() {
  return (
    <main className="min-h-screen bg-[#E4D6A7] font-sans text-xl pt-20 pl-40">
      <h1 className="text-xl font-bold pb-3">My Shopping List</h1>
      <StudentInfo />
      
    </main>
  );
}