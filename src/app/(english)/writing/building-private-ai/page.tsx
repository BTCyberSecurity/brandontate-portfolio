import NotebookArticle from "@/components/NotebookArticle";
import { articles } from "@/data/articles";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/writing/building-private-ai", { title: articles["building-private-ai"].title, description: articles["building-private-ai"].description });
export default function ArticlePage() { return <NotebookArticle slug="building-private-ai" />; }
