interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}

const ChatMessage = ({ role, content }: ChatMessageProps) => {
  if (role === "assistant") {
    return (
      <div className="text-center">
        <span className="text-[13px] font-bold text-primary tracking-tight">
          {content}
        </span>
      </div>
    );
  }

  return (
    <div className="flex justify-end">
      <div className="px-4 py-2 bg-ui-surface border border-ui-border rounded-xl max-w-[80%]">
        <span className="text-[13px] text-foreground">{content}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
