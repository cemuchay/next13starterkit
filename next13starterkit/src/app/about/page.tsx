import Image from 'next/image'
import ReusableButton from '@/components/commons/ReusableButton'


export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
   <div>
      <h1>My Next.js Page</h1>
      <ReusableButton
        variant="bg-blue-500 text-white" // Tailwind CSS classes for styling
        label="Click Me"
        // onClick={()=>{}}
      />
    </div>
    </main>
  )
}
