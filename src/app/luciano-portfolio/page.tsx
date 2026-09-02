"use client";

import CaseStudy from "@/app/components/CaseStudy";
import { getCase } from "@/app/i18n/cases";
import { notFound } from "next/navigation";

export default function CasePage() {
  const entry = getCase("luciano-portfolio");
  if (!entry) notFound();
  return <CaseStudy entry={entry} />;
}
