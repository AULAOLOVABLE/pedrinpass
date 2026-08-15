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
    <form onSubmit={handleSubmit} className="search-bar-gradient-border bg-black/40 backdrop-blur-xl rounded-xl border border-ui-border group focus-within:border-primary/50 transition-colors">
      <div className="flex items-center gap-3 px-4 py-4">
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
          className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary text-primary-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-lg shadow-primary/20"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
