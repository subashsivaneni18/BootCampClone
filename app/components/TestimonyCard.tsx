import React from "react";

interface TestiMonyCardProps {
  Paragraph: string;
  Name: string;
}

const TestimonyCard: React.FC<TestiMonyCardProps> = ({ Paragraph, Name }) => {
  return (
    <div className="text-left text-zinc-800 dark:text-zinc-300 max-w-2xl mx-auto text-xl bg-zinc-50 rounded-xl shadow-lg dark:bg-zinc-800 hover:bg-zinc-700 dark:hover:bg-zinc-700 p-5">
      <p className="mt-2 text-md font-light text-zinc-500 dark:text-zinc-200 text-left">
        {Paragraph}
      </p>
      <h3 className="mt-2 text-md text-zinc-900 dark:text-white tracking-tight text-left">
        {Name}
      </h3>
    </div>
  );
};

export default TestimonyCard;
