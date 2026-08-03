import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import supportBg from "@/assets/support-bg.png";

const ChatBox = () => {
  return (
    <div 
      className="flex flex-col w-full max-w-2xl mx-auto rounded-3xl border border-border overflow-hidden"
      style={{
        backgroundImage: `url(${supportBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Messages Area */}
      <div className="flex flex-col gap-4 p-6 min-h-[300px] max-h-[400px] overflow-y-auto">
        <ChatMessage role="assistant" content="Como posso te ajudar?" />
        <ChatMessage
          role="assistant"
          content="Prévia de demonstração — este chat ainda não está conectado a um backend. Ative o Lovable Cloud para conectá-lo a um assistente de IA real."
        />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-border">
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatBox;
