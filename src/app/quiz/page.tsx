'use client';
import Link from 'next/link';
import Display from '../components/Display';
import quizData from '../data/quiz';
import Button from '../components/Button';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


export default function quizPage() {
  const [quizIndex, setQuizIndex] = useState(0);
  const [answerLogas, setAnswerLogs] = useState([]);
  const router = useRouter();
  const MAX_QUIZ_LEN = quizData.length

  const handleClick = (clickedIndex) => {
    if (clickedIndex === quizData[quizIndex].answerIndex) {
      setAnswerLogs((prev) => [...prev, true])
    } else {
      setAnswerLogs((prev) => [...prev, false])
    }
    setQuizIndex((prev) => prev + 1);
  };

  useEffect(() => {
    if (answerLogas.length === MAX_QUIZ_LEN) {
      const correctNum = answerLogas.filter((answer) => answer === true).length;
      router.push(`/result?score=${correctNum}&total=${MAX_QUIZ_LEN}`);

    }
  }, [answerLogas]);

  if (quizIndex >= MAX_QUIZ_LEN) return null;

  return (

    <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100 p-6'>
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Quiz Qustions</h1>
      <br/>
      {quizData[quizIndex] && <Display>
        {`Q${quizIndex + 1}. ${quizData[quizIndex].question}`}
      </Display>}
        {
        quizData[quizIndex] && quizData[quizIndex].options.map((option, index) => {
            return <Button key={`option-${index}`} onClick={() => handleClick(index)}>{option}</Button>
          })
        }

    </div>

  );
}