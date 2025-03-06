// import { useState } from "react";
// import axios from "axios";
// import { FaPaperPlane, FaImage } from "react-icons/fa"; // Import icons

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [image, setImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     setImage(file);

//     // Preview the image
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const sendMessage = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const newMessages = [...messages, { text: input, sender: "user" }];
//     setMessages(newMessages);
//     setInput("");

//     const formData = new FormData();
//     formData.append("message", input);
//     if (image) formData.append("image", image);

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/chat",
//         formData,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );

//       setMessages([
//         ...newMessages,
//         { text: response.data.reply, sender: "bot" },
//       ]);
//     } catch (error) {
//       setMessages([
//         ...newMessages,
//         { text: "I need some details to analyses.", sender: "bot" },
//       ]);
//     }

//     setImage(null);
//     setImagePreview(null);
//     setLoading(false);
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 p-4">
//       <div className="flex-1 overflow-y-auto mb-4 animate__animated animate__fadeIn">
//         <div className="max-w-2xl mx-auto">
//           <div className="text-center mb-6">
//             <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white animate__animated animate__bounce my-6">
//               Vaidhya 🩺
//             </h1>
//             <p className="text-4xl text-gray-200">Your Health, Your Guide</p>
//           </div>

//           <div className="space-y-4">
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`flex ${
//                   msg.sender === "user" ? "justify-end" : "justify-start"
//                 }`}
//               >
//                 <div
//                   className={`max-w-xs px-4 py-2 rounded-lg shadow-md transition-all duration-300 ${
//                     msg.sender === "user"
//                       ? "bg-blue-500 text-white text-right"
//                       : "bg-gray-300 text-gray-900 text-left"
//                   }`}
//                 >
//                   <p className="animate__animated animate__fadeIn">
//                     {msg.text}
//                   </p>
//                 </div>
//               </div>
//             ))}

//             {loading && (
//               <div className="flex justify-start">
//                 <div className="max-w-xs px-4 py-2 rounded-lg bg-gray-300 text-left text-gray-600 animate__animated animate__flash">
//                   <p>
//                     Typing<span className="animate-ping">...</span>
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>

//           {imagePreview && (
//             <div className="flex justify-center mt-4">
//               <img
//                 src={imagePreview}
//                 alt="Uploaded"
//                 className="max-w-xs rounded-lg shadow-lg"
//               />
//             </div>
//           )}
//         </div>
//       </div>

//       <form
//         onSubmit={sendMessage}
//         className="flex items-center justify-center mt-4 space-x-2 w-full max-w-md mx-auto"
//       >
//         <div className="relative w-full">
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Type a message..."
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-blue-500 transition-all duration-300 pr-12"
//           />
//           {/* Image Upload Icon */}
//           <label
//             htmlFor="imageUpload"
//             className="absolute right-10 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700 transition"
//           >
//             <FaImage size={20} />
//           </label>
//           <input
//             id="imageUpload"
//             type="file"
//             accept="image/*"
//             className="hidden"
//             onChange={handleImageUpload}
//           />
//         </div>

//         <button
//           type="submit"
//           className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
//         >
//           <FaPaperPlane />
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Chatbot;

// import { useState } from "react";
// import axios from "axios";
// import { FaPaperPlane, FaImage } from "react-icons/fa";

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [image, setImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);

//   const apiKey = "AIzaSyDCRW0k3rIolTjVQbnRCClUlu-dvg6IuiU";
//   const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     setImage(file);

//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const sendMessage = async (e) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     setLoading(true);
//     const newMessages = [...messages, { text: input, sender: "user" }];
//     setMessages(newMessages);
//     setInput("");

//     try {
//       const response = await axios.post(apiUrl, {
//         contents: [{ parts: [{ text: input }] }],
//       });

//       const botReply =
//         response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
//         "Sorry, I couldn't understand that.";

//       setMessages([...newMessages, { text: botReply, sender: "bot" }]);
//     } catch (error) {
//       console.error("Error:", error);
//       setMessages([
//         ...newMessages,
//         { text: "I encountered an issue. Please try again.", sender: "bot" },
//       ]);
//     }

//     setLoading(false);
//     setImage(null);
//     setImagePreview(null);
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 p-4">
//       <div className="flex-1 overflow-y-auto mb-4 animate__animated animate__fadeIn">
//         <div className="max-w-2xl mx-auto">
//           <div className="text-center mb-6">
//             <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white animate__animated animate__bounce my-6">
//               Vaidhya 🩺
//             </h1>
//             <p className="text-4xl text-gray-200">Your Health, Your Guide</p>
//           </div>

//           <div className="space-y-4">
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`flex ${
//                   msg.sender === "user" ? "justify-end" : "justify-start"
//                 }`}
//               >
//                 <div
//                   className={`max-w-xs px-4 py-2 rounded-lg shadow-md transition-all duration-300 ${
//                     msg.sender === "user"
//                       ? "bg-blue-500 text-white text-right"
//                       : "bg-gray-300 text-gray-900 text-left"
//                   }`}
//                 >
//                   <p className="animate__animated animate__fadeIn">
//                     {msg.text}
//                   </p>
//                 </div>
//               </div>
//             ))}

//             {loading && (
//               <div className="flex justify-start">
//                 <div className="max-w-xs px-4 py-2 rounded-lg bg-gray-300 text-left text-gray-600 animate__animated animate__flash">
//                   <p>
//                     Typing<span className="animate-ping">...</span>
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>

//           {imagePreview && (
//             <div className="flex justify-center mt-4">
//               <img
//                 src={imagePreview}
//                 alt="Uploaded"
//                 className="max-w-xs rounded-lg shadow-lg"
//               />
//             </div>
//           )}
//         </div>
//       </div>

//       <form
//         onSubmit={sendMessage}
//         className="flex items-center justify-center mt-4 space-x-2 w-full max-w-md mx-auto"
//       >
//         <div className="relative w-full">
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Type a message..."
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-blue-500 transition-all duration-300 pr-12"
//           />
//           <label
//             htmlFor="imageUpload"
//             className="absolute right-10 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700 transition"
//           >
//             <FaImage size={20} />
//           </label>
//           <input
//             id="imageUpload"
//             type="file"
//             accept="image/*"
//             className="hidden"
//             onChange={handleImageUpload}
//           />
//         </div>

//         <button
//           type="submit"
//           className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
//         >
//           <FaPaperPlane />
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Chatbot;

import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { FaPaperPlane, FaImage } from "react-icons/fa";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const apiKey = "AIzaSyDCRW0k3rIolTjVQbnRCClUlu-dvg6IuiU";
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await axios.post(apiUrl, {
        contents: [{ parts: [{ text: input }] }],
      });

      const botReply =
        response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn't understand that.";

      setMessages([...newMessages, { text: botReply, sender: "bot" }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages([
        ...newMessages,
        { text: "I encountered an issue. Please try again.", sender: "bot" },
      ]);
    }

    setLoading(false);
    setImage(null);
    setImagePreview(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 p-4">
      <div className="flex-1 overflow-y-auto mb-4 animate__animated animate__fadeIn">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white animate__animated animate__bounce my-6">
              Vaidhya 🩺
            </h1>
            <p className="text-4xl text-gray-200">Your Health, Your Guide</p>
          </div>

          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg shadow-md transition-all duration-300 ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white text-right"
                      : "bg-gray-300 text-gray-900 text-left"
                  }`}
                >
                  {msg.sender === "bot" ? (
                    <ReactMarkdown
                      components={{
                        p: ({ children }) => (
                          <p className="text-gray-900">{children}</p>
                        ),
                        strong: ({ children }) => (
                          <strong className="font-bold">{children}</strong>
                        ),
                        em: ({ children }) => (
                          <em className="italic">{children}</em>
                        ),
                        a: ({ href, children }) => (
                          <a
                            href={href}
                            className="text-blue-500 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {children}
                          </a>
                        ),
                        code: ({ children }) => (
                          <code className="bg-gray-200 text-red-600 px-1 py-0.5 rounded-md">
                            {children}
                          </code>
                        ),
                      }}
                    >
                      {msg.text}
                    </ReactMarkdown>
                  ) : (
                    <p>{msg.text}</p>
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="max-w-xs px-4 py-2 rounded-lg bg-gray-300 text-left text-gray-600 animate__animated animate__flash">
                  <p>
                    Typing<span className="animate-ping">...</span>
                  </p>
                </div>
              </div>
            )}
          </div>

          {imagePreview && (
            <div className="flex justify-center mt-4">
              <img
                src={imagePreview}
                alt="Uploaded"
                className="max-w-xs rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>
      </div>

      <form
        onSubmit={sendMessage}
        className="flex items-center justify-center mt-4 space-x-2 w-full max-w-md mx-auto"
      >
        <div className="relative w-full">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-blue-500 transition-all duration-300 pr-12"
          />
          <label
            htmlFor="imageUpload"
            className="absolute right-10 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700 transition"
          >
            <FaImage size={20} />
          </label>
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
        >
          <FaPaperPlane />
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
