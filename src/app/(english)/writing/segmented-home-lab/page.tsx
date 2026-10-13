import NotebookArticle from "@/components/NotebookArticle";
import { articles } from "@/data/articles";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/writing/segmented-home-lab", { title: articles["segmented-home-lab"].title, description: articles["segmented-home-lab"].description });
export default function ArticlePage() { return <NotebookArticle slug="segmented-home-lab" />; }
