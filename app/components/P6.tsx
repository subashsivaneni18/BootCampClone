import React from 'react'

const P6 = () => {
  return (
    <div className="relative  bg-[#27272A]  py-16 sm:py-24 lg:py-32 max-w-3xl mx-auto px-10 mt-10">
      <p className="overflow-y-hidden bg-[#27272A] text-center mt-2 text-4xl uppercase font-extrabold  dark:text-white ">
        THE SCHEDULE
      </p>
      <p className="bg-[#27272A] text-center mt-2 text-2xl uppercase font-medium">
        Each week we&apos;ll unlock a new module
      </p>

      <div className="bg-[#27272A]">
        <p className="bg-[#27272A] mt-6 text-3xl font-bold uppercase tracking-tight">
          MODULE 1
        </p>
        <div className="bg-[#27272A] mt-2">
          <p className="bg-[#27272A] text-[20px]">
            In this module, we define and plan our application, understand the
            problem, the architecture we&apos;ll need, and the tech choices.
            We&apos;ll introduce and install PocketBase locally, and start doing
            some initial data modeling for our app by creating collections.
          </p>
        </div>
      </div>

      <div className="bg-[#27272A]">
        <p className="bg-[#27272A] mt-6 text-3xl font-bold uppercase tracking-tight">
          MODULE 2
        </p>
        <div className="bg-[#27272A] mt-2">
          <p className="bg-[#27272A] text-[20px]">
            We&apos;ll introduce Astro, we&apos;ll create our Astro-based
            website, with a Git repository so we can easily track progress.
            We&apos;ll then create our homepage, blog, etc., for the site part.
            We&apos;ll use Tailwind to build a layout that is responsive and
            handles dark and bright mode. We&apos;ll learn how to use Astro
            components to compose the HTML, server side, using JavaScript
            imports. We&apos;ll also learn how to create dynamic routes and how
            to use content collections to build the product blog. Finally,
            we&apos;ll push the site to GitHub.
          </p>
        </div>
      </div>

      <div className="bg-[#27272A]">
        <p className="bg-[#27272A] mt-6 text-3xl font-bold uppercase tracking-tight">
          MODULE 3
        </p>
        <div className="bg-[#27272A] mt-2">
          <p className="bg-[#27272A] text-[20px]">
            In module 3 we&apos;ll start working on the app part of our SaaS.
            We&apos;ll create a dashboard, start fetching data from PocketBase,
            and show it in the app. We&apos;ll add a way to create a new project
            using a modal window. We&apos;ll introduce htmx and Alpine.js, and
            I&apos;ll show you how to use them to perform actions and make our
            app dynamic. We&apos;ll let people add a task to the project, and
            we&apos;ll list the projects tasks.
          </p>
        </div>
      </div>

      <div className="bg-[#27272A]">
        <p className="bg-[#27272A] mt-6 text-3xl font-bold uppercase tracking-tight">
          MODULE 4
        </p>
        <div className="bg-[#27272A] mt-2">
          <p className="bg-[#27272A] text-[20px]">
            In module 4 we&apos;ll first add a sidebar that lists all projects,
            with a hamburger menu to show it on mobile too. We&apos;ll use
            htmx&apos;s `hx-boost` feature to make the app feel faster. Then
            we&apos;ll add a way to mark tasks as done, edit the project status,
            edit the project&apos;s name, and edit the task text. We&apos;ll
            also add a way to delete a project and a task. We&apos;ll add the
            ability to star a task, and we&apos;ll then show starred tasks
            coming from all projects in the dashboard.
          </p>
        </div>
      </div>

      <div className="bg-[#27272A]">
        <p className="bg-[#27272A] mt-6 text-3xl font-bold uppercase tracking-tight">
          MODULE 5
        </p>
        <div className="bg-[#27272A] mt-2">
          <p className="bg-[#27272A] text-[20px]">
            In module 5 we&apos;ll introduce authentication to our app.
            We&apos;ll protect all routes that require auth, and we&apos;ll
            start creating user-specific data. All projects, tasks, etc., will
            be associated with a user. We&apos;ll also add forms to sign up and
            sign in, and reset the password. We&apos;ll let people logout too.
            We&apos;ll add form protection using Cloudflare Turnstile.
          </p>
        </div>
      </div>

      <div className="bg-[#27272A]">
        <p className="bg-[#27272A] mt-6 text-3xl font-bold uppercase tracking-tight">
          MODULE 6
        </p>
        <div className="bg-[#27272A] mt-2">
          <p className="bg-[#27272A] text-[20px]">
            In module 6 we&apos;ll make it possible to upload images to a task
            via drag and drop, and we&apos;ll let users delete them too.
            We&apos;ll also take care of security across our app, talk about
            XSS, introduce a Content Security Policy. We&apos;ll then introduce
            some error handling across our requests.
          </p>
        </div>
      </div>

      <div className="bg-[#27272A]">
        <p className="bg-[#27272A] mt-6 text-3xl font-bold uppercase tracking-tight">
          MODULE 7
        </p>
        <div className="bg-[#27272A] mt-2">
          <p className="bg-[#27272A] text-[20px]">
            In module 7 we&apos;ll handle showing starred tasks before
            non-starred ones from PocketBase, we&apos;ll handle resource not
            found issues, we&apos;ll see how to handle htmx connection errors,
            we&apos;ll add some more security checks by setting htmx to only
            allow requests to our domain and using the correct headers and
            origin to prevent possible abuse.
          </p>
        </div>
      </div>

      <div className="bg-[#27272A]">
        <p className="bg-[#27272A] mt-6 text-3xl font-bold uppercase tracking-tight">
          MODULE 8
        </p>
        <div className="bg-[#27272A] mt-2">
          <p className="bg-[#27272A] text-[20px]">
            In module 8 we&apos;ll create teams. We&apos;ll create the teams
            collection in PocketBase, show a form to let people create a team,
            we&apos;ll show teams in the sidebar, we&apos;ll allow people to
            activate a team by paying the subscription on Stripe, we&apos;ll add
            projects to the team, list team projects, list starred team tasks,
            we&apos;ll also list team projects in the sidebar, and do some work
            on the sidebar to highlight the active project and team.
          </p>
        </div>
      </div>

      <div className="bg-[#27272A]">
        <p className="bg-[#27272A] mt-6 text-3xl font-bold uppercase tracking-tight">
          MODULE 9
        </p>
        <div className="bg-[#27272A] mt-2">
          <p className="bg-[#27272A] text-[20px]">
            In module 9 we&apos;ll keep working on teams. We&apos;ll add
            invites, we&apos;ll list team members, we&apos;ll handle
            accepting/rejecting invites, we&apos;ll send emails through
            PocketBase, we&apos;ll handle changing a team name, subscription
            cancellation, we&apos;ll freeze the projects if people stop paying,
            and we&apos;ll add a link to manage the subscription on Stripe to
            update the payment method. We&apos;ll also handle team deletion and
            clearing the data.
          </p>
        </div>
      </div>

      <div className="bg-[#27272A]">
        <p className="bg-[#27272A] mt-6 text-3xl font-bold uppercase tracking-tight">
          MODULE 10
        </p>
        <div className="bg-[#27272A] mt-2">
          <p className="bg-[#27272A] text-[20px]">
            In module 10 we&apos;ll create an activity page where people can see
            what happened in their projects, and we&apos;ll create a team
            dashboard where people can see what happened in their team projects
            at a glance. We&apos;ll add a way for people to change their
            username, and in the filters list, we will add a way to filter by
            user, by team, by project. We also show tasks done today in the
            personal/team dashboard, we&apos;ll do some optimizations, and
            we&apos;ll add a service worker to show an offline splash screen.
            We&apos;ll also allow the app to be installed as a PWA.
          </p>
        </div>
      </div>

      <div className="bg-[#27272A]">
        <p className="bg-[#27272A] mt-6 text-3xl font-bold uppercase tracking-tight">
          MODULE 11
        </p>
        <div className="bg-[#27272A] mt-2">
          <p className="bg-[#27272A] text-[20px]">
            In module 11 we&apos;ll take care of caching and performance.
            We&apos;ll prevent 2 roundtrips with HX-Redirect, we&apos;ll
            optimize creating a project and task, we&apos;ll prevent
            double-click of the buttons, we&apos;ll cache modals, we&apos;ll
            cache assets, and we&apos;ll add loading spinners.
          </p>
        </div>
      </div>

      <div className="bg-[#27272A]">
        <p className="bg-[#27272A] mt-6 text-3xl font-bold uppercase tracking-tight">
          MODULE 12
        </p>
        <div className="bg-[#27272A] mt-2">
          <p className="bg-[#27272A] text-[20px]">
            Module 12 is about deployment. We&apos;ll deploy our app to Railway
            using Docker, and we&apos;ll handle all we need to go from local dev
            mode to production.
          </p>
        </div>
      </div>
    </div>
  );
}

export default P6
