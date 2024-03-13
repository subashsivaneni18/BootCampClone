import React from "react";

interface QuestionCardProps {
  Question:string
  Paragraph: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ Paragraph, Question }) => {
  return (
    <div className="text-left text-zinc-800 dark:text-zinc-300 max-w-2xl mx-auto text-xl bg-zinc-50 rounded-xl shadow-lg dark:bg-zinc-800 hover:bg-zinc-700 dark:hover:bg-zinc-700 p-5">
      <h3 className="text-2xl leading-10 font-bold text-zinc-900 dark:text-white ">
        {Question}
      </h3>

      <p className="mt-2 text-md font-light text-zinc-500 dark:text-zinc-200 text-left">
        {Paragraph}
      </p>
    </div>
  );
};

export default QuestionCard;
