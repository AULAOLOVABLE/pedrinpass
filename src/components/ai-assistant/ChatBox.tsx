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
        <ChatMessage role="assistant" content="Assistente TecExtension pronto para executar tarefas complexas." />
        <ChatMessage
          role="assistant"
          content="Posso ajudar com streaming, histórico de conversas e ações seguras. Ative o Lovable Cloud para integração total."
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
