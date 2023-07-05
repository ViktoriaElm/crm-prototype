import { Inter } from 'next/font/google'
import AllCandidates from "../components/AllCandidates"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <AllCandidates/>
    </>
  )
}
