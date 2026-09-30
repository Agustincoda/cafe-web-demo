import Link from "next/link";
import { texts } from "@/data/texts";
import Container from "@/components/ui/Container";

export const metadata = { title: texts.notFound.title };

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <h1 className="text-4xl font-bold">{texts.notFound.title}</h1>
      <p className="mt-4 text-muted">{texts.notFound.message}</p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-primary px-6 py-3 font-medium text-on-primary hover:opacity-90"
      >
        {texts.notFound.backHome}
      </Link>
    </Container>
  );
}
