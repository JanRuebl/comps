import { useState, useEffect } from "react";
import Header from "./comps/header/Header";

import CompWrapper from "./comps/compWrapper/CompWrapper";
import Acc from "./comps/acc/Acc";
import ProgressBar from "./comps/progressBar/ProgressBar";

const questionsAnswers = [
  {
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    question: "How do I reset my password?",
    answer: `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
  },
  {
    question: "Can I cancel my subscription?",
    answer: `Yes! Send us a message and we’ll process your request no questions asked.`,
  },
  {
    question: "Do you provide additional support?",
    answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
  },
];

const quotes = {
  quotes: [
    {
      id: 41,
      quote:
        "Certain things catch your eye, but pursue only those that capture the heart.",
      author: " Ancient Indian Proverb",
    },
    {
      id: 42,
      quote: "Believe you can and you’re halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      id: 43,
      quote: "Everything you’ve ever wanted is on the other side of fear.",
      author: "George Addair",
    },
    {
      id: 44,
      quote:
        "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
      author: "Plato",
    },
    {
      id: 45,
      quote:
        "Teach thy tongue to say, “I do not know,” and thous shalt progress.",
      author: "Maimonides",
    },
  ],
};

function App() {
  return (
    <div className='App'>
      <Header />
      <CompWrapper>
        <Acc data={quotes} />
        <h1>Accordion</h1>
      </CompWrapper>
      <CompWrapper>
        <ProgressBar maxValue={18} />
        <h1>ProgressBar</h1>
      </CompWrapper>
    </div>
  );
}

export default App;
