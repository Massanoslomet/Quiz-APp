'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';



export default function Resultpage() {
  const searchParams = useSearchParams();
  const maxQuizLen = searchParams.get('total')
  const correctNumLen = searchParams.get('score');

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center w-full max-w-md">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Result</h1>
        <br />
        <p className="mb-4 text-lg">Your score is....</p>
        <p className="mb-8 text-xl font-semibold text-gray-900">
          {`Total ${maxQuizLen} spørsmål, ${correctNumLen} var riktig!!`}
        </p>
        <Link href="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors duration-300">
          Go to homepage!!
        </Link>
      </div>
    </div>
  );
}
