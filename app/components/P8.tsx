import React from 'react';
import TestimonyCard from './TestimonyCard';

const P8 = () => {
  return (
    <div className="w-[80vw] mx-auto mb-30">
      <p className="text-center mb-20 text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight px-20">
        Hear what students say
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        <TestimonyCard
          Name="Victor Campos"
          Paragraph="“The web development bootcamp was a game-changer for me. It taught me how to develop modern web applications using the best practices. I recommend it 100%!!!”"
        />
        <TestimonyCard
          Name="Ivan Zulfikar"
          Paragraph="“I can’t recommend this course enough for self-learner developers. It gives me the bird's eye view of current technology and lots of portfolio projects. But my most valuable takeaway from this course is the newbie learning community that learns together with you. For me, this course boosts my confidence to apply for dev jobs, and alhamdulillah, 1 month later I got a full-time job as a developer.”"
        />
        <TestimonyCard
          Name="Brad Alexander"
          Paragraph="“This course was a game-changer for me. The more regimented coursework made me realize I had to grind harder if I wanted to make it. It also teaches you a wide range of skills, vs Udemy courses where you'll learn 5 skill sets maybe at most. Here you'll learn 20+ (probably more). I already feel like I've learned 20x what I could have found on my own. Thanks, Flavio!”"
        />
        <TestimonyCard
          Name="Geoff Hollingworth"
          Paragraph='“Flavio offers a personal feeling bootcamp course that allows you to interact with him and 50+ fellow course participants using Discord and great online courses. If you can "do JavaScript" but want to go the next level, I highly recommend joining where you can work at your own pace but take part with many others for support. Come increase the fun!”'
        />
        <TestimonyCard
          Name="Pete Roobol"
          Paragraph="“I am really enjoying Flavio course. there are so many nuggets of wisdom in there. To have such a vast range of smooth-flowing and consistent Javascript learning material in one place is a pleasure- thank you Flavio!!”"
        />

        <TestimonyCard
          Name="Farkas Attila"
          Paragraph="“I learned the most valuable lessons in practice, theory, and execution. The bootcamp gives a well-defined curriculum including projects and examples. The text-based style is just exponentially great and Flavio is always there to help out!”"
        />

        <TestimonyCard
          Name="Ayu Adiati"
          Paragraph="“Finally, I found an affordable & flexible ONLINE bootcamp where I can manage my time between learning and my family. Fellow students who always help each other & with Flavio himself actively engages with what student needs help me enormously in my learning journey!”"
        />

        <TestimonyCard
          Name="Anna Kalil"
          Paragraph="“This course is much more satisfying than General Assembly's JavaScript Development class. Flavio gets into the nitty-gritty of how things work and why they work that way. I'm a QA Engineer at a tech startup and I'm learning a lot about the tools that my Engineering team already uses, and I think it's helping me to be better at my job. I also really appreciate that you can work on this course at your own pace.”"
        />

        <TestimonyCard
          Name="Tom Phillips"
          Paragraph="“I just wanted to share what a great experience I am having in this bootcamp. I was so nervous to sign up for this, but after a month, I am getting to know some great people from all over who share my enthusiasm for building web apps. In a short time, I have already learned a LOT. I love Tailwind CSS, and now that we are beginning the JavaScript portion of the bootcamp, I am even more excited than I was before the class started. Honestly, this has been one of the best decisions I have made. Thanks for all of your efforts to lift us up as pro developers and for giving me a break on the tuition. It is worth every penny and then some!”"
        />

        <TestimonyCard
          Name="Christian Halvorsen"
          Paragraph="“I started learning programming a couple of months before the bootcamp started, and it felt overwhelming to figure out how I should approach it. I tried using other tutorials, but the ones I found were mostly video-based and I found it hard to follow, especially since I am a beginner. However, this bootcamp is text-based, and I find it much more enjoyable to be able to go back and read the material again, I feel I am absorbing the information in a different way. Also, the bootcamp has given me a good structure for learning all the topics that are necessary to become a full stack developer, which would have taken me a very long time to figure out on my own. In addition, the discord community is very friendly, and I have found lots of help and information from the chat.”"
        />
        <TestimonyCard
          Name="Gedrie"
          Paragraph="“I had some background in learning this programming language, but this course offered so much more insight into all things that happens behind the scenes! I fell a little bit more confident, that I will be able to prosper my future career with JavaScript.”"
        />
        <TestimonyCard
          Name="Lamberto Asghedom"
          Paragraph="“The JS Bootcamp is an excellent resource for anybody looking to improve. I still use this course as a primary resource for gaps in JS knowledge. Highly recommend you give this course a try!”"
        />

        <TestimonyCard
          Name="Aurore Knapic"
          Paragraph="“It's great to be part of the JS Bootcamp, learning new things with the friendly Discord community. A nice thing about Flavio's course is that the theory is written in small fun blocks with some practical projects on the side so it allows you to follow it easily.”"
        />
        <TestimonyCard
          Name="Corey Gwin"
          Paragraph="“Flavio's lessons get you building real things right away. The variety of projects you'll build will serve as great examples for building your own products. He uses the latest libraries, tech and tools to get you up and running in no time.”"
        />
        <TestimonyCard
          Name="Khanh Mai"
          Paragraph="“I've learnt a lot from Flavio's React.js, Node.js related courses, since my current job tech stack is using javascript a lot. The challenges in the end of each lesson are interesting as well. I do agree with Flavio as his courses format are not videos. So I can reference anytime I want to remind myself anything.”"
        />
      </div>
    </div>
  );
}

export default P8;
