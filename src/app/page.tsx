'use client';
import Link from 'next/link';

export default function Homepage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center w-full max-w-md">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Quiz App</h1>
        <Link
            href="/quiz"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors duration-300"
          >
            Start Quiz
        </Link>
      </div>
    </div>
  );
}
