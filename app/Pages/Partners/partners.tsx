"use client"

import React, { useState } from "react";
import Image from "next/image";
import {
     ArrowRight,
    ArrowDown,
    GraduationCap,
    LineChart,
    Building2,
    CheckCircle2,
    Mail,
    Loader2,
} from "lucide-react";
import AnimateOnScroll from "@/app/components/AnimateOnScroll";
import { PROGRAMMES } from "@/app/data/programmes";

const isftAwardCount = PROGRAMMES.filter((p) => p.category === "ISFT Awards").length;

const stats = [
    { value: `${PROGRAMMES.length}`, label: "Accredited & literacy programmes" },
    { value: `${isftAwardCount}`, label: "UK-regulated ISFT awards" },
    { value: "3", label: "Engagement models" },
    { value: "9–18+", label: "Learner age bands served" },
];

// Add logos to /public/partners and set `logo` (e.g. "/partners/university-name.png").
// Entries without a logo show the institution name instead.
const academicPartners: { name: string; logo?: string }[] = [
    { name: "Chandigarh University", logo: "/partners/chandigarh-university.png" },
    { name: "Jaipuria Institute of Management", logo: "/partners/jaipuria.png" },
    { name: "DOLA", logo: "/partners/dola.png" },
    { name: "Zenithwave Capital", logo: "/partners/zenithwave-capital.png" },
    { name: "ZISHI", logo: "/partners/zishi.png" },
];

const models = [
    {
        icon: GraduationCap,
        tag: "Academic",
        title: "Universities & Business Schools",
        description:
            "Embed ISFT-certified market modules into MBA, finance, and commerce curricula as credit-bearing electives or pre-placement bootcamps.",
        points: [
            "Co-branded certificates mapped to UK qualification levels",
            "Faculty enablement and guest practitioner sessions",
            "Live simulation labs for campus cohorts",
        ],
        featured: false,
    },
    {
        icon: LineChart,
        tag: "Most Requested",
        title: "Prop Trading & Financial Desks",
        description:
            "Screen, onboard, and up-skill junior traders with a structured pipeline built on execution discipline and risk-first reflexes.",
        points: [
            "Assessment-led talent screening before hiring",
            "Custom risk management and behavioural modules",
            "Desk-ready graduates with tracked performance data",
        ],
        featured: true,
    },
    {
        icon: Building2,
        tag: "Workforce & CSR",
        title: "Corporate & FinTech Sponsors",
        description:
            "Fund financial, digital, and cyber literacy for employees, customers, or underserved schools through Sprout, Bloom, and Harvest tracks.",
        points: [
            "Fraud-awareness and payment safety for user bases",
            "CSR-aligned school literacy drives with impact reports",
            "Employee wellbeing sessions on capital protection",
        ],
        featured: false,
    },
];

const steps = [
    { title: "Discovery Call", text: "We map your goals, audience, and timelines within 48 hours." },
    { title: "Programme Blueprint", text: "A tailored module plan, delivery format, and commercial proposal." },
    { title: "Launch & Report", text: "Cohort rollout with progress dashboards and outcome reviews." },
];

const partnershipOptions = models.map((m) => m.title).concat("Other / Not sure yet");
const cohortOptions = ["Under 25 learners", "25–100 learners", "100–500 learners", "500+ learners"];

const inputClass =
    "w-full px-4 py-3 rounded-xl bg-[#F9FAFB] border border-[#E5E7EB] text-xs sm:text-sm text-[#111111] placeholder-[#6B7280] focus:outline-none focus:border-[#ED1654] transition-colors";
const labelClass = "text-xs font-semibold text-[#374151]";

function Required() {
    return <span aria-hidden="true" className="text-[#C20F42]">*</span>;
}

export default function Partners() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        organisation: "",
        designation: "",
        partnershipModel: partnershipOptions[0],
        cohortSize: cohortOptions[1],
        message: "",
    });
    const [consent, setConsent] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const update = (key: keyof typeof formData) =>
        (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
            setFormData({ ...formData, [key]: e.target.value });

    const scrollToForm = () =>
        document.getElementById("partner-form")?.scrollIntoView({ behavior: "smooth", block: "start" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);
        try {
            const response = await fetch("/api/partner", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const result = await response.json().catch(() => ({}));
            if (!response.ok) {
                throw new Error(result?.error || "Unable to send your inquiry right now.");
            }
            setIsSubmitted(true);
        } catch (error) {
            setSubmitError(
                error instanceof Error ? error.message : "Unable to send your inquiry right now. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* Hero */}
            <section className="relative w-full overflow-hidden bg-white pt-28 sm:pt-36">
                <AnimateOnScroll animation="fade-up" duration={700} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
                    <span className="block text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#D6124B]">
                        Institutional Partnerships
                    </span>
                    <h1
                        className="text-[2.1rem] sm:text-5xl lg:text-6xl font-bold text-[#000000] tracking-tight leading-[1.1]"
                        style={{ fontFamily: "var(--font-serif)" }}
                    >
                        Partner With <span className="text-[#D6124B]">Derivion</span>.
                        <span className="block">Enabling Real-World Market Capability.</span>
                    </h1>
                    <p className="text-sm sm:text-base text-[#5F5F5F] max-w-2xl mx-auto leading-relaxed">
                        We help academic institutions, trading firms, and mission-driven organisations turn
                        financial knowledge into trained judgement — through UK-regulated ISFT qualifications
                        and age-calibrated literacy curricula.
                    </p>
                    <button
                        type="button"
                        onClick={scrollToForm}
                        className="inline-flex items-center gap-3 pl-6 pr-1.5 py-1.5 rounded-full bg-[#D6124B] hover:bg-[#B50F40] text-white text-sm font-semibold shadow-lg shadow-[#D6124B]/25 transition-all active:scale-95"
                    >
                        Become a Partner
                        <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                            <ArrowDown className="w-4 h-4 text-[#D6124B]" />
                        </span>
                    </button>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-in" delay={150} duration={800} className="relative -mt-4 sm:-mt-10">
                    <div className="relative w-full h-[320px] sm:h-[460px] lg:h-[560px]">
                        <Image
                            src="/partners/hero.jpg"
                            alt="Learners collaborating on laptops during a Derivion partner cohort session"
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover object-[center_35%]"
                        />
                        <div className="absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-white via-white/70 to-transparent" />
                    </div>
                </AnimateOnScroll>

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 pb-12 sm:pb-16">
                    <dl className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                        {stats.map((s) => (
                            <div key={s.label} className="rounded-2xl bg-white border border-[#EFE3E7] px-5 py-4 shadow-lg">
                                <dt className="sr-only">{s.label}</dt>
                                <dd className="text-2xl sm:text-3xl font-bold text-[#D6124B]">{s.value}</dd>
                                <dd className="mt-1 text-xs text-[#5F5F5F] leading-snug">{s.label}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            {/* Academic partners */}
            <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-14 sm:py-16 border-t border-[#F1F1F1]">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-8 lg:gap-12 items-center">
                    <AnimateOnScroll animation="fade-up" duration={600} className="space-y-2">
                        <span className="text-[11px] font-semibold tracking-wider uppercase text-[#C20F42]">
                            Academic Partners
                        </span>
                        <h2
                            className="text-2xl sm:text-3xl font-bold text-[#000000] tracking-tight"
                            style={{ fontFamily: "var(--font-serif)" }}
                        >
                            Institutions Teaching With Us
                        </h2>
                    </AnimateOnScroll>
                    <div className="lg:col-span-3 flex flex-wrap justify-center gap-3 sm:gap-4">
                        {academicPartners.map((p, i) => (
                            <AnimateOnScroll key={p.name} animation="fade-up" delay={i * 60} duration={500} className="w-[calc(50%-0.375rem)] sm:w-[calc(33.333%-0.667rem)]">
                                <div className="group h-24 flex items-center justify-center rounded-2xl border border-[#E5E7EB] bg-[#FAFAFA] px-4 transition-all hover:bg-white hover:border-[#F5B8CA] hover:shadow-md">
                                    {p.logo ? (
                                        <div className="relative h-12 w-full">
                                            <Image
                                                src={p.logo}
                                                alt={p.name}
                                                fill
                                                sizes="160px"
                                                className="object-contain"
                                            />
                                        </div>
                                    ) : (
                                        <span className="text-xs sm:text-sm font-semibold text-center text-[#737373] group-hover:text-[#000000]">
                                            {p.name}
                                        </span>
                                    )}
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Engagement models */}
            <section id="partner-models" className="w-full bg-[#FAFAFA] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 scroll-mt-24">
                <div className="max-w-7xl mx-auto">
                    <AnimateOnScroll animation="fade-up" duration={600} className="text-center max-w-2xl mx-auto space-y-3">
                        <span className="text-[11px] font-semibold tracking-wider uppercase text-[#C20F42]">
                            How We Collaborate
                        </span>
                        <h2
                            className="text-2xl sm:text-4xl font-bold text-[#000000] tracking-tight"
                            style={{ fontFamily: "var(--font-serif)" }}
                        >
                            Three Tailored Models of Institutional Engagement
                        </h2>
                        <p className="text-sm text-[#737373]">
                            Each model is shaped around who your learners are and what they must be able to do on day one.
                        </p>
                    </AnimateOnScroll>

                    <div className="mt-12 grid md:grid-cols-3 gap-6 items-stretch">
                        {models.map((m, i) => {
                            const Icon = m.icon;
                            return (
                                <AnimateOnScroll key={m.title} animation="fade-up" delay={i * 120} duration={600}>
                                    <article
                                        className={`h-full flex flex-col rounded-3xl p-6 sm:p-8 border transition-transform hover:-translate-y-1 ${
                                            m.featured
                                                ? "bg-[#0B0B0B] text-white border-[#0B0B0B] shadow-2xl md:-my-4"
                                                : "bg-white text-[#000000] border-[#E5E7EB]"
                                        }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span
                                                className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                                                    m.featured ? "bg-[#D6124B]" : "bg-[#FDE7EE]"
                                                }`}
                                            >
                                                <Icon className={`w-5 h-5 ${m.featured ? "text-white" : "text-[#D6124B]"}`} />
                                            </span>
                                            <span
                                                className={`text-[10px] font-semibold uppercase tracking-wider ${
                                                    m.featured ? "text-[#FF6B93]" : "text-[#737373]"
                                                }`}
                                            >
                                                {m.tag}
                                            </span>
                                        </div>
                                        <h3 className="mt-6 text-lg font-bold">{m.title}</h3>
                                        <p className={`mt-2 text-sm leading-relaxed ${m.featured ? "text-[#BDBDBD]" : "text-[#737373]"}`}>
                                            {m.description}
                                        </p>
                                        <ul className="mt-6 space-y-3 flex-1">
                                            {m.points.map((p) => (
                                                <li key={p} className="flex gap-2 text-sm">
                                                    <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-[#D6124B]" />
                                                    <span className={m.featured ? "text-[#E5E5E5]" : "text-[#374151]"}>{p}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setFormData((f) => ({ ...f, partnershipModel: m.title }));
                                                scrollToForm();
                                            }}
                                            className={`mt-8 inline-flex items-center gap-1.5 text-sm font-semibold ${
                                                m.featured ? "text-white hover:text-[#FF6B93]" : "text-[#D6124B] hover:text-[#B50F40]"
                                            }`}
                                        >
                                            Discuss this model <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </article>
                                </AnimateOnScroll>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Inquiry */}
            <section id="partner-form" className="w-full bg-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20 scroll-mt-24">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-10 lg:gap-14">
                    <AnimateOnScroll animation="fade-up" duration={600} className="lg:col-span-2 space-y-8">
                        <div className="space-y-3">
                            <span className="text-[11px] font-semibold tracking-wider uppercase text-[#C20F42]">
                                Start the Conversation
                            </span>
                            <h2
                                className="text-2xl sm:text-4xl font-bold text-[#000000] tracking-tight"
                                style={{ fontFamily: "var(--font-serif)" }}
                            >
                                Let&apos;s Architect Your Institutional Capability.
                            </h2>
                            <p className="text-sm text-[#737373] leading-relaxed">
                                Share a few details and our partnerships team will come back with a scoped
                                recommendation — no generic brochures.
                            </p>
                        </div>
                        <ol className="space-y-5">
                            {steps.map((s, i) => (
                                <li key={s.title} className="flex gap-4">
                                    <span className="w-8 h-8 shrink-0 rounded-full bg-[#000000] text-white text-xs font-bold flex items-center justify-center">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <div>
                                        <p className="text-sm font-semibold text-[#000000]">{s.title}</p>
                                        <p className="text-xs text-[#737373] mt-0.5">{s.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                        <a
                            href="mailto:admissions@derivion.in"
                            className="flex items-center gap-3 p-4 rounded-2xl border border-[#E5E7EB] hover:border-[#D6124B] transition-colors"
                        >
                            <Mail className="w-5 h-5 text-[#D6124B]" />
                            <span className="text-sm">
                                <span className="block text-xs text-[#737373]">Prefer email?</span>
                                <span className="font-semibold text-[#000000]">admissions@derivion.in</span>
                            </span>
                        </a>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fade-up" delay={120} duration={600} className="lg:col-span-3">
                        <div className="bg-white text-[#111111] p-6 sm:p-10 rounded-3xl border border-[#E6E6E6] shadow-xl">
                            {isSubmitted ? (
                                <div className="text-center py-12 space-y-4" role="status">
                                    <CheckCircle2 className="w-12 h-12 text-[#D6124B] mx-auto" />
                                    <h3 className="text-xl font-bold">Inquiry received</h3>
                                    <p className="text-sm text-[#737373] max-w-sm mx-auto">
                                        Thank you, {formData.fullName.split(" ")[0]}. Our partnerships team will reach out to{" "}
                                        {formData.email} shortly.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <h3 className="text-lg font-bold">Partner Inquiry Application</h3>
                                    {submitError ? (
                                        <div id="partner-submit-error" role="alert" className="p-3 rounded-xl bg-[#FEF2F2] border border-[#FECACA] text-xs text-[#B91C1C]">
                                            {submitError}
                                        </div>
                                    ) : null}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label htmlFor="partner-name" className={labelClass}>Full Name <Required /></label>
                                            <input id="partner-name" required type="text" autoComplete="name" value={formData.fullName} onChange={update("fullName")} placeholder="e.g. Priya Mehta" className={inputClass} />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label htmlFor="partner-email" className={labelClass}>Work Email <Required /></label>
                                            <input id="partner-email" required type="email" autoComplete="email" value={formData.email} onChange={update("email")} placeholder="name@organisation.com" className={inputClass} />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label htmlFor="partner-org" className={labelClass}>Organisation <Required /></label>
                                            <input id="partner-org" required type="text" autoComplete="organization" value={formData.organisation} onChange={update("organisation")} placeholder="Institution or company name" className={inputClass} />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label htmlFor="partner-designation" className={labelClass}>Designation</label>
                                            <input id="partner-designation" type="text" autoComplete="organization-title" value={formData.designation} onChange={update("designation")} placeholder="e.g. Head of Placements" className={inputClass} />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label htmlFor="partner-phone" className={labelClass}>Phone <Required /></label>
                                            <input id="partner-phone" required type="tel" autoComplete="tel" value={formData.phone} onChange={update("phone")} placeholder="+91 98765 43210" className={inputClass} />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label htmlFor="partner-cohort" className={labelClass}>Expected Cohort Size</label>
                                            <select id="partner-cohort" value={formData.cohortSize} onChange={update("cohortSize")} className={inputClass}>
                                                {cohortOptions.map((o) => <option key={o}>{o}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label htmlFor="partner-model" className={labelClass}>Partnership Model</label>
                                        <select id="partner-model" value={formData.partnershipModel} onChange={update("partnershipModel")} className={inputClass}>
                                            {partnershipOptions.map((o) => <option key={o}>{o}</option>)}
                                        </select>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label htmlFor="partner-message" className={labelClass}>What would you like to achieve?</label>
                                        <textarea id="partner-message" rows={4} value={formData.message} onChange={update("message")} placeholder="Learner profile, timelines, outcomes you're targeting…" className={inputClass} />
                                    </div>
                                    <label className="flex items-start gap-2 text-xs text-[#737373]">
                                        <input type="checkbox" required checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 accent-[#D6124B]" />
                                        I agree to be contacted by Derivion about this partnership inquiry.
                                    </label>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#D6124B] hover:bg-[#B50F40] disabled:opacity-70 text-white text-sm font-semibold transition-all active:scale-[0.99]"
                                    >
                                        {isSubmitting ? (<><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>) : (<>Submit Partnership Inquiry <ArrowRight className="w-4 h-4" /></>)}
                                    </button>
                                </form>
                            )}
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>
        </>
    )
}
