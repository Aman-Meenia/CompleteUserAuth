// import React from "react";
// import { TiTickOutline } from "react-icons/ti";
// import { BsCheck2All } from "react-icons/bs";
//
// const Messages = () => {
//   return (
//     <>
//       <div className="chat chat-end lg:max-w-xl xl:max-w-2xl">
//         <div className="chat-image avatar">
//           <div className="w-10 rounded-full">
//             <img
//               alt="Tailwind CSS chat bubble component"
//               src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
//             />
//           </div>
//         </div>
//         <div className="chat-bubble flex flex-col lg:flex-row items-start lg:items-center lg:justify-between">
//           <div className="w-full lg:w-3/4 xl:w-4/5">
//             <div className="flex-shrink-0 bg-gray-200 text-black rounded-lg p-3">
//               It was said that you would, destroy the Sith, not join
//             </div>
//           </div>
//           <div className="flex-shrink-0 ml-2">
//             <BsCheck2All />
//           </div>
//         </div>
//         <div className="text-gray-500 text-xs ml-6">12:34 PM</div>
//       </div>
//     </>
// );
// };
//
// export default Messages;

import React from "react";
import { BsCheck2All } from "react-icons/bs";

const Message = ({ text, time, position }) => {
  return (
    <div className={`chat ${position} lg:max-w-xl xl:max-w-2xl`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>
      <div className="chat-bubble flex flex-col lg:flex-row items-start lg:items-center lg:justify-between">
        <div className="w-full lg:w-3/4 xl:w-4/5">
          <div className="flex-shrink-0 bg-gray-200 text-black rounded-lg p-3">
            {text}
          </div>
        </div>
        <div className="flex-shrink-0 ml-2">
          <BsCheck2All />
        </div>
      </div>
      <div className="text-gray-500 text-xs ml-6">{time}</div>
    </div>
  );
};

const MessagesContainer = () => {
  const messages = [
    {
      text: "It was said that you would, destroy the Sith, not join",
      time: "12:34 PM",
      position: "chat-end",
    },
    {
      text: "It was said that you would, destroy the Sith, not join",
      time: "12:34 PM",
      position: "chat-end",
    },
    {
      text: "It was said that you would, destroy the Sith, not join",
      time: "12:34 PM",
      position: "chat-start",
    },
    {
      text: "It was said that you would, destroy the Sith, not Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolorem repudiandae possimus sunt facere hic suscipit, nulla officiis labore vel eos fugiat consequatur doloribus nihil. Aliquam, magnam illum. Possimus accusantium, ad sapiente eaque vero eveniet qui. Fugiat obcaecati ipsum, necessitatibus libero corrupti, fuga, iste illo dicta velit minima excepturi inventore!join",
      time: "12:34 PM",
      position: "chat-start",
    },
  ];

  return (
    <div className="flex flex-col space-y-4">
      {messages.map((message, index) => (
        <Message key={index} {...message} />
      ))}
    </div>
  );
};

export default MessagesContainer;
