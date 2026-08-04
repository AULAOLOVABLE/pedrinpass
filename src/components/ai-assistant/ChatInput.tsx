import { useState } from "react";
import { ArrowUp } from "lucide-react";

const ChatInput = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo only — no backend wired. Enable Lovable Cloud to connect a real AI.
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar-gradient-border bg-black rounded-xl">
      <div className="flex items-center gap-3 px-4 py-3">
        {/* Input */}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite uma tarefa ou instrução..."
          maxLength={500}
          aria-label="Mensagem do chat (apenas demonstração)"
          className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
        />

        {/* Send Button - White bg rounded-xl */}
        <button
          type="submit"
          disabled={!input.trim()}
          aria-label="Enviar mensagem (apenas demonstração)"
          className="flex items-center justify-center w-8 h-8 rounded-xl bg-primary text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
