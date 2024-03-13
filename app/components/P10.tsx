import React from 'react'
import QuestionCard from './QuestionCard';

const P10 = () => {
  return (
    <div className="w-[80vw] mx-auto">
      <p className="mt-20 mb-20 text-3xl font-extrabold text-zinc-900 dark:text-white text-center pb-10">
        Frequently asked questions
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        <QuestionCard
          Paragraph="Too many tutorials and little action? This bootcamp is perfect for you. Web development looks complex to you? This bootcamp is perfect for you. You're a frontend dev and you want to get more fullstack/backend skills? This bootcamp is great for you. You're a backend dev and you want to get more frontend skills? This bootcamp is great for you."
          Question="Who is this bootcamp for?"
        />
        <QuestionCard
          Paragraph="This is a different thing. It's a cohort-based course. You will have access to a community chat of students that started the course on the same day as you did. This means you have accountability and motivation. Make friends with your fellow class mates to get the most out of the bootcamp, and challenge each other! How many Udemy courses did you buy but never followed through after the first couple lessons? There's no way this bootcamp will end up like the dozens of courses you purchased but never finished."
          Question="What's the difference with a $10 Udemy course?"
        />
        <QuestionCard
          Paragraph="It depends, but I estimate about 1 or 2 hours every week day. Or do 3/4 hours on weekend days. If you do more, its better because the more time you study, the more things will intensive, it's a marathon, not a sprint."
          Question="What's the effort required?"
        />
        <QuestionCard
          Paragraph='The bootcamp is not "live". You can adjust it around your school/work/life schedule. I unlock a new module every week. The only thing I ask is to stay on top of the weekly schedule, meaning I will release a new module on Tuesday, complete it by next Tuesday when a new module will unlock. Most students will follow the schedule and you&apos;ll find more activity and community support, because everyone is doing those lessons along with you. This is the best way to stay on top of the schedule and complete the bootcamp successfully.'
          Question="I want to know the schedule"
        />
        <QuestionCard
          Paragraph="Every week to I will unlock multiple modules, each containing various lessons. Lessons are text based. Text is better to parse, to copy code snippets from, search and reference later."
          Question="What's the format of the lessons?"
        />
        <QuestionCard
          Paragraph="Yes. Once you finish the course, you ask me the certificate of attendance and I will issue that to you."
          Question="Will I get a certificate at the end?"
        />
        <QuestionCard
          Paragraph="Yes. You have a no-questions-asked 100% refund if you are not happy with the bootcamp and if you don't think you get value from it, up to 14 days after the start of the Bootcamp. This is also for subscriptions: no refunds after the first 2 weeks.
"
          Question="Do you have a refund policy?"
        />
        <QuestionCard
          Paragraph="We'll work on a very cool project management SaaS app, complete with authentication, permissions, payments, and more. It's a real-world project that will give you a lot of experience and will be a great addition to your portfolio."
          Question="What kind of project will we create?"
        />
        <QuestionCard
          Paragraph="Yes, they will be yours forever."
          Question="Will I have access to the course lesson at the end of the bootcamp?"
        />
        <QuestionCard
          Question="Can I follow the bootcamp at my own pace?"
          Paragraph="Yes! I do unlock 1 new module every week but there is no problem in going a bit slower. Some people have more time, some less. There's no problem, although I see more success rates in students that stay on top of the schedule."
        />

        <QuestionCard
          Paragraph="What are the prerequisites?"
          Question="I assume some basic knowledge on how the web works, HTML, CSS, some JavaScript basics. If you're not sure, you can ask me and I can help you understand if you're ready for the bootcamp."
        />
        <QuestionCard
          Question="I joined the 2020/2021/2022/2023 cohort. Is this bootcamp different? Can I join again?"
          Paragraph="Compared to previous editions, in 2024 I have rewritten 100% of the material. The bootcamp is a completely new course compared to past editions, so if you want to learn the new material, you should join again. I will have a discount for you since you joined the bootcamp in the past."
        />
        <QuestionCard
          Question="What time of day are the lessons?"
          Paragraph="The bootcamp is not &quot;live&quot;. We'll have students from New Zealand, Nigeria, Brazil, United States, Norway, India.. all over the world! So it's impossible to find hours that work for everyone. Instead, the bootcamp is asynchronous. You pick the hours that best suit your schedule, and you connect to the students Discord chat where you'll always find people you can talk to, to discuss ideas or clarify some concepts together."
        />
        <QuestionCard
          Question="Is the training instructor led?  How does it work?"
          Paragraph="I (Flavio Copes) built the entire curriculum, lessons and projects. I will unlock access to a new lessons module each week. It's not like in school where I'll have lectures. Instead, you find the lessons on a web page and you go through each lesson on your own. The content will be text based. The particular thing about the bootcamp cohort is that you're studying privately, but you're not on your own. You'll have other students you can talk to, ask questions, help each other. All of them are doing the same things you're doing now. And I (the instructor) will be in the Discord chat as much as possible to help everyone during the bootcamp, so that no one gets left behind and we can all complete the course successfully."
        />
      </div>
    </div>
  );
}

export default P10
