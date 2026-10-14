import NotFound from "@/app/(english)/not-found";
import { pageMetadata } from "@/lib/metadata";

export const metadata = {
  ...pageMetadata("/about/outside-of-work", "Outside of Work", "Family, hobbies, and life beyond technology. Coming soon."),
  robots: { index: false, follow: true },
};

export default function OutsideOfWork() {
  return <NotFound />;
}
