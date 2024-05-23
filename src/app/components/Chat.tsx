"use client";

import { useChat } from "ai/react";

import { useRef, useEffect } from "react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const chatSection = useRef<HTMLElement>(null);

  useEffect(() => {
    if (chatSection.current) {
      chatSection.current.scrollTop = chatSection.current.scrollHeight;
    }
  });

  return (
    <div className="flex flex-col w-full h-screen max-w-2xl pb-24 mx-auto stretch bg-white">
      <header className="p-4 border-b-2 w-full max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold">Chat Bot</h1>
      </header>
      <section
        ref={chatSection}
        className="flex-grow overflow-auto shadow-xl border-gray-300 bg-gray-500 rounded-xl mt-4 p-4"
      >
        {messages.map((m, index) => (
          <>
            {m.role === "user" ? (
              <div key={index} className="flex flex-row">
                <div className="rounded-xl p-4 bg-white shadow-md flex">
                  <p className="text-primary">{m.content}</p>
                </div>
              </div>
            ) : (
              <div key={index} className="flex flex-row-reverse">
                <div className="rounded-xl p-4 bg-white shadow-md flex w-3/4">
                  <p className="text-primary">{m.content}</p>
                </div>
              </div>
            )}
          </>
        ))}
      </section>

      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-3xl mx-auto items-center"
      >
        <input
          className="fixed bottom-0 w-full max-w-2xl p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
