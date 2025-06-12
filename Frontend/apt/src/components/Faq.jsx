import { useState } from "react";

const FaqItem = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <div
        className="flex justify-between items-center py-4 cursor-pointer text-lg font-semibold text-gray-800 hover:text-blue-600"
        onClick={() => setShow(!show)}
      >
        {question}
        <span className="text-xl">{show ? "−" : "+"}</span>
      </div>
      {show && (
        <div className="bg-blue-100 text-gray-800 p-4 rounded-md">
          {answer}
        </div>
      )}
    </div>
  );
};

const FaqAccordion = ({ data }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-white bg-blue-700 p-4 rounded-md">FAQs</h2>
      {data.map((item) => (
        <FaqItem key={item.id} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

const data = [
  { id: 1, question: "How do I register as a seller on Nitro?", answer: "To become a seller on Nitro, click on 'Register', select 'Seller', and complete the verification process." },
  { id: 2, question: "How do buyers place orders on Nitro?", answer: "Buyers can browse products, add items to the cart, and proceed to checkout using secure payment options." },
  { id: 3, question: "What payment methods are accepted?", answer: "We accept credit/debit cards, UPI, and cash on delivery (COD) for eligible orders." },
  { id: 4, question: "How do sellers manage their inventory?", answer: "Sellers can manage their inventory from the 'Seller Dashboard', where they can update stock and pricing." },
  { id: 5, question: "Can buyers track their orders?", answer: "Yes, buyers can track their orders from the 'My Orders' section with real-time updates." },
  { id: 6, question: "How does Nitro handle refunds and returns?", answer: "Buyers can request returns within 7 days. Sellers need to approve and process the refunds." },
  { id: 7, question: "Is there a commission fee for sellers?", answer: "Nitro charges a small commission on each sale. Sellers can check the fee details in their dashboard." },
  { id: 8, question: "How can I contact Nitro support?", answer: "For any issues, reach out to our support team via live chat, email, or phone." },
];

export const Faqs = () => {
  return (
    <div className="py-10 bg-gray-100 min-h-screen">
      <FaqAccordion data={data} />
    </div>
  );
};
