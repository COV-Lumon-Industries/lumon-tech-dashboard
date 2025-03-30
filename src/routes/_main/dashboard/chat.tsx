import { genAIResponse } from "@/lib/ai";
import "@/styles/chat.index.css";
import { createFileRoute } from "@tanstack/react-router";
import { useChat, type Message as UIMessage } from "ai/react";
import { ClockIcon, CreditCardIcon, Send, ZapIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/context/auth-provider";

// Define types for badge actions
type BadgeAction = {
  type: "stock" | "loan" | "transactions";
  prompt: string; // Make prompt mandatory to represent user intent
};

export const Route = createFileRoute("/_main/dashboard/chat")({
  component: RouteComponent,
});

function EmptyState({
  input,
  handleInputChange,
  handleSubmit,
  handleBadgeClick,
}: {
  input: string;
  handleInputChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  handleBadgeClick: (action: BadgeAction) => void; // Updated prop type
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <CardTitle className="text-4xl font-bold mb-4 text-foreground">
        Lumon Chat
      </CardTitle>
      <p className="text-foreground text-center max-w-lg font-medium mb-4">
        Hi there I am Lumon ⭐, I am here to give you a personalized experience.
        Lets have a chat. What do you want to talk about?
      </p>
      <div className="mt-4 w-[500px] space-y-4">
        <ChatInput
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />

        <div className="flex gap-2 ml-4">
          <Badge
            className="cursor-pointer"
            onClick={() =>
              handleBadgeClick({
                type: "stock",
                prompt: "What is the current stock price of Apple?", // More conversational prompt
              })
            } // Pass type and prompt
          >
            <ZapIcon
              className="-ms-0.5 opacity-60"
              size={12}
              aria-hidden="true"
            />
            Current Stock Price of Apple
          </Badge>

          <Badge
            className="cursor-pointer"
            onClick={
              () =>
                handleBadgeClick({
                  type: "loan",
                  prompt: "Show my loan requests",
                }) // Updated prompt
            } // Pass type and prompt
          >
            <CreditCardIcon
              className="-ms-0.5 opacity-60"
              size={12}
              aria-hidden="true"
            />
            Loan request
          </Badge>

          <Badge
            className="cursor-pointer"
            onClick={() =>
              handleBadgeClick({
                type: "transactions",
                prompt: "Show my recent transactions", // Added prompt
              })
            } // Pass type and prompt
          >
            <ClockIcon
              className="-ms-0.5 opacity-60"
              size={12}
              aria-hidden="true"
            />
            Recent Transactions
          </Badge>
        </div>
      </div>
    </div>
  );
}

function Messages({ messages }: { messages: Array<UIMessage> }) {
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Use setTimeout to ensure DOM is fully updated
    const timeoutId = setTimeout(() => {
      const viewport = scrollAreaRef.current?.querySelector(
        '[data-slot="scroll-area-viewport"]'
      );
      if (viewport) {
        viewport.scrollTop = viewport.scrollHeight;
      }
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [messages]);

  return (
    <ScrollArea ref={scrollAreaRef} className="h-[calc(100vh-160px)] w-full">
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
  const { messages, input, handleInputChange, handleSubmit, append, setInput } =
    useChat({
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

  const { user } = useAuth();

  // Hardcoded base URL (Consider moving to environment variables)
  const API_BASE_URL = import.meta.env.VITE_API_URL;

  const handleBadgeClick = async (action: BadgeAction) => {
    // Check if user data is available
    if (!user || !user.token || !user.id) {
      console.error("User data not available for API request.");
      // Optionally, inform the user in the chat
      append({
        id: window.crypto.randomUUID(),
        role: "assistant",
        content:
          "Sorry, I cannot perform this action without user authentication.",
      });
      return;
    }

    const { type, prompt } = action;
    let url = "";
    const authToken = `Bearer ${user.token}`; // Use dynamic token
    let options: RequestInit = {
      headers: {
        "Content-Type": "application/json",
        Authorization: authToken, // Use dynamic auth token
      },
    };

    try {
      switch (type) {
        case "stock":
          url = `${API_BASE_URL}/api/chat/search`;
          options.method = "POST";
          options.body = JSON.stringify({ prompt });
          break;
        case "loan":
          // Use dynamic borrower ID from user data
          const borrowerId = user.id; // Use dynamic user ID
          url = `${API_BASE_URL}/api/loan-requests/borrower/${borrowerId}`;
          options.method = "GET";
          // Remove Content-Type and body for GET request
          if (options.headers) {
            // @ts-ignore - Keep this ignore or fix type if needed
            delete options.headers["Content-Type"];
          }
          delete options.body; // Ensure body is not sent
          break;
        case "transactions":
          url = `${API_BASE_URL}/api/transactions`;
          options.method = "GET";
          if (options.headers) {
            // @ts-ignore
            delete options.headers["Content-Type"];
          }
          delete options.body; // Ensure body is not sent
          break;
        default:
          console.error("Unknown badge type:", type);
          return;
      }

      const response = await fetch(url, options);

      console.log(response);

      if (!response.ok) {
        throw new Error(
          `API request failed for type \'${type}\' with status ${response.status}`
        );
      }

      const result = await response.json();
      let content = "";

      // Handle response based on type
      switch (type) {
        case "stock":
          // Assuming stock search also returns a { status: 'success', data: '...' } structure for now
          if (result.status === "success" && result.data) {
            content = result.data;
          } else {
            content = `Received data for ${type}, but couldn\'t extract details.`;
            console.warn(`Unexpected response structure for ${type}:`, result);
          }
          break;
        case "loan":
          if (
            result.status === "success" &&
            result.data &&
            Array.isArray(result.data.loan_requests)
          ) {
            const loanRequests = result.data.loan_requests;
            content = "Here are your current loan requests:\n\n";
            if (loanRequests.length > 0) {
              content += loanRequests
                .map(
                  (
                    req: any // Use 'any' for now, define a LoanRequest type later
                  ) =>
                    `- **Amount:** ${req.amount}, **Purpose:** ${req.purpose}, **Status:** ${req.status}, **Interest:** ${req.interest_rate}%, **Duration:** ${req.loan_duration} months`
                )
                .join("\n");
            } else {
              content += "No loan requests found.";
            }
          } else {
            content =
              "Received loan request data, but couldn\'t parse the list.";
            console.warn(
              "Unexpected response structure for loan requests:",
              result
            );
          }
          break;
        case "transactions":
          if (
            result.status === "success" &&
            result.data &&
            Array.isArray(result.data.transactions)
          ) {
            const transactions = result.data.transactions;
            // Format the transactions for display
            content = `Here are your recent transactions (Page ${result.data.meta.page || 1}):\n\n`;
            if (transactions.length > 0) {
              content += transactions
                .map(
                  (
                    tx: any // Using 'any' for now, consider defining a Transaction type
                  ) =>
                    `- **${tx.transaction_type}**: ${tx.amount} on ${new Date(tx.transaction_date).toLocaleDateString()} - Ref: ${tx.reference || "N/A"}`
                )
                .join("\n");
            } else {
              content += "No transactions found.";
            }
          } else {
            content =
              "Received transaction data, but couldn\'t parse the list.";
            console.warn(
              "Unexpected response structure for transactions:",
              result
            );
          }
          break;
        default:
          content = `Received data for unknown type ${type}.`;
          console.warn(`Received response for unknown type ${type}:`, result);
      }

      // Append the fetched data as a single user message
      append({
        id: window.crypto.randomUUID(),
        role: "user", // Append data as user message
        content: content,
      });
    } catch (error) {
      console.error(`Error fetching badge response for type '${type}':`, error);
      // Optionally append an error message to the chat
      append({
        id: window.crypto.randomUUID(),
        role: "assistant",
        content: `Sorry, I encountered an error while processing the request for ${type}.`,
      });
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      {!messages.length ? (
        <div className="flex flex-col items-center justify-center min-h-screen w-full py-8">
          <EmptyState
            input={input}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            handleBadgeClick={handleBadgeClick}
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
