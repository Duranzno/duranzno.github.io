---
date: "2020-09-28 15:01 -0400"
comments: true
published: false
title: My first startup job rejection. It hurt, but it was a good hurt.
categories:
  - career
description: I had my high hopes with this social focused company, didn't worked out but forced me to grow better as a developer
# image-feature: https://images.unsplash.com/photo-1440635592348-167b1b30296f?crop=entropy&dpr=2&fit=crop&fm=jpg&h=475&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1250
# image-credit: thomas shellberg
# image-creditlink: https://unsplash.com/photos/Ki0dpxd3LGc
---

A little bit more than a month ago I sent an application to a Chilean startup that was looking for a Front-end Developer (the software development position I'm currently mostly comfortable with), their goals and work philosophy resonated with me as a few weeks earlier me and a group of friends tried to solve a similar problem with bringing neighbors together with the help of tech. After a week and a half of anxiety, fear and hope the dreaded rejection email came metaphorically knocking and It left me with a sweet and sour feeling. This is how it all happened.

### First Interview

One of the most important rules for when you start interviewing is to know about the company before hand; this I know but for some reason that day I didn't apply it and probably earned a few negative points. On the other side I had researched a bit about the interviewer and found out he and I came from the same country and studied in similar colleges which helped a bit empathizing over the fact that, were the conditions given, their app would do wonders for our country.

A matter I hope we bonded over was that at some point in our conversation I realized how different their growth as a company is to the usual e-commerce or social media and the fact that, the value their app was giving to the community grew at the same rate the neighbor users did; which is a really organic and nice way of growing.

My lack of reading their company's blog came into view once I asked about the origins of the company (and was clarified on how much was I mispronouncing their name 😅)

All in all at the end of the interview I was told they liked my _entrepreneurial and forward_ spirit and that I was welcome to continue with the assessment test knowing I was at a disadvantage due to the lack of work and React Native experience I had.

### Assessment Test

I was given 72 hours (the entire weekend) to code both a React and React Native app, implementing push connections through [Pusher](<[https://pusher.com/](https://pusher.com/)>) and Google Maps, a summary of the requirements is [available in the repository](<[https://github.com/Duranzno/react-rn-node-assessment-test-geolocation-webpush/blob/master/REQUIREMENTS.md](https://github.com/Duranzno/react-rn-node-assessment-test-geolocation-webpush/blob/master/REQUIREMENTS.md)>). Specially focus was **explicitly** given to: Analysis capacity, Code quality, Solution design and Documentation.

Wanting to show my skills and how up to date with the newest trends I focused on working on a monorepo (managing both projects in the same repository with the advantage of sharing code), implementing a [Component Driven Development with storybook](<[https://storybook.js.org/](https://storybook.js.org/)>), using [the Tailwind framework](<[https://tailwindcss.com/](https://tailwindcss.com/)>) and creating a quick design to base myself from in [Figma](<[https://www.figma.com/](https://www.figma.com/)>)

A short explanation of the project is available [on the repository](<[https://github.com/Duranzno/react-rn-node-assessment-test-geolocation-webpush#functionality](https://github.com/Duranzno/react-rn-node-assessment-test-geolocation-webpush/blob/master/README.md#functionality)>) along with possible improvements.

To be honest the weekend was chaotic, my focus on using a monorepo with a tool (Yarn Workspaces) that barely gave a minimal support for it gave me enough headaches and wasted a lot of time fixing things that weren't I so keen on optimizing early would not have been issues, at some point I was managing four sub-projects (both react apps, a common interface package and a small node server). I ended doing what I wanted to avoid and code repetition (mostly on typescript interfaces) was common in the end project. Most of Storybook features weren't even used and in a couple of cases some half baked tests ended up functioning barely enough so I could check their effects on the Pusher Dashboard. And to top it all I made the big mistake at the time to not communicate with the interviewer until an hour before the time limit and that was just to send them the final result.

### Technical Interview

A few weeks after finishing the assessment test I had to talk about my project with most (if not all) of the Startup Engineering Team along with a couple of extra guys from Design and Sales, probably between 8 and 10 people I watching how I went through the entire source code while I was jabbering (which means _“talking rapidly and excitedly but with little sense”,_ totally what I was doing*)* about my experience on that weekend and every little detail my code had that I felt was remotely important.

Suffice to say It was not one of my best moments. Some basic **IT** and **CS** questions were raised like explaining some of the code design choices I had made, opinions on frameworks and my experience with them, explaining concepts like OOP or Reactive Programming to which I answered correctly, but maybe talking more than I had to and extending myself too much without being concrete. We ended up with them explaining me I was one of the final candidates and committing to contact me in the near future to give me their final answer.

### Yesterday's Email

I have already spoiled the ending and you have probably seen _some_ of the reasons why I wasn't selected. It really stung a little to see the “_you have **not** been selected_”, but after reading it completely it made sense why they took that decision and gave me a really heartfelt feedback in how I could improve which I'm deeply grateful for.

While they praised my determination of competing against more senior developers and, apparently ending as one of the last two candidates, the lack of experience and maturity was evident in the precision of the project as I spend time I didn't have on cool tech and patterns rather than focusing on more important and less flashy tasks like usability, documentation and testing and the oral presentation as I lacked conciseness and clarity and did not express myself correctly enough. This was further empathized as they are a remote company and a clear communication tends to be critical in their day to day operations.

In the end I was not a good fit, but this experience has reinvigorated my job search and the illuminated me on what skills need to be honed to be more competitive on this field. Taking things and these lessons into action I've started to focus more on delivering usable products rather than play around with the latest and shiniest tech, write more regularly to express myself better and reinforce my Computer Science fundamentals.

#### Links

- [Source Code](https://github.com/Duranzno/react-rn-node-assessment-test-geolocation-webpush)

- [Figma Design](https://www.figma.com/file/YEpWITzMCsJLztfqCoNQOO/startup-assesment-test?node-id=2%3A9128)
