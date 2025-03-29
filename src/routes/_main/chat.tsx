import { genAIResponse } from "@/lib/ai";
import { useChat } from "@ai-sdk/react";
import { createFileRoute } from "@tanstack/react-router";
import type { UIMessage } from "ai";
import { Send } from "lucide-react";
import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/_main/chat")({
  component: RouteComponent,
});

function EmptyState({
  input,
  handleInputChange,
  handleSubmit,
}: {
  input: string;
  handleInputChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <CardTitle className="text-4xl font-bold mb-4 text-foreground">
        TanStack Chat
      </CardTitle>
      <p className="text-foreground text-center max-w-sm font-medium mb-4">
        You can ask me about anything, I might or might not have a good answer,
        but you can still ask.
      </p>
      <div className="mt-4 w-[500px]">
        <ChatInput
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

function Messages({ messages }: { messages: Array<UIMessage> }) {
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <ScrollArea className="h-[calc(100vh-140px)] w-full">
      <div className="pr-4 whitespace-normal">
        {messages.map(({ id, role, content }) => (
          <div key={id}>
            <div className="py-5">
              <div className="flex items-start gap-12 w-full">
                {role === "assistant" ? (
                  <Avatar className="h-8 w-8 flex-shrink-0">
                    <AvatarImage
                      src="../../../public/lumon.png"
                      alt="AI Assistant"
                    />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      AI
                    </AvatarFallback>
                  </Avatar>
                ) : (
                  <Avatar className="h-8 w-8 flex-shrink-0">
                    <AvatarFallback className="bg-secondary text-secondary-foreground">
                      E
                    </AvatarFallback>
                  </Avatar>
                )}
                <div className="flex-1 overflow-hidden">
                  <div className="prose dark:prose-invert max-w-none text-foreground break-words overflow-wrap-anywhere [&>*]:mb-6 [&>*:last-child]:mb-0">
                    <ReactMarkdown
                      remarkPlugins={[
                        remarkGfm,
                        [remarkBreaks, { breaks: true }],
                      ]}
                      rehypePlugins={[
                        rehypeRaw,
                        rehypeSanitize,
                        rehypeHighlight,
                      ]}
                      components={{
                        p: ({ children }) => (
                          <p className="whitespace-pre-line">{children}</p>
                        ),
                      }}
                    >
                      {content}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}

function ChatInput({
  input,
  handleInputChange,
  handleSubmit,
}: {
  input: string;
  handleInputChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
}) {
  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <Textarea
          value={input}
          onChange={handleInputChange}
          placeholder="Type something clever (or don't, we won't judge)..."
          className="min-h-[60px] resize-none pr-12 border-input text-foreground placeholder:text-muted-foreground rounded-md"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              if (input.trim()) {
                handleSubmit(e as any);
              }
            }
          }}
        />
        <Button
          type="submit"
          size="icon"
          disabled={!input.trim()}
          className="absolute right-2 bottom-2 h-8 w-8 bg-primary hover:bg-primary/90 disabled:opacity-50 text-primary-foreground"
        >
          <Send className="w-4 h-4" />
          <span className="sr-only">Send message</span>
        </Button>
      </div>
    </form>
  );
}

function RouteComponent() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages: [],
    fetch: (_url, options) => {
      const { messages } = JSON.parse(options!.body! as string);
      return genAIResponse({
        data: {
          messages,
        },
      });
    },
  });

  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      {!messages.length ? (
        <div className="flex flex-col items-center justify-center min-h-screen w-full py-8">
          <EmptyState
            input={input}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </div>
      ) : (
        <div className="w-full max-w-[800px] mx-auto flex flex-col gap-4 p-10">
          <Messages messages={messages} />
          <ChatInput
            input={input}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </div>
      )}
    </div>
  );
}
