import { openai } from "@/lib/provider";
import { wrapLanguageModel } from "ai";
import { ragMiddleware } from "./rag-middleware";

export const customModel = wrapLanguageModel({
  model: openai("gpt-4o"),
  middleware: ragMiddleware,
});
