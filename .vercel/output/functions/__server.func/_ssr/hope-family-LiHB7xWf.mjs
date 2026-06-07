import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as Sparkles, d as ChevronUp, C as ChevronDown, H as Heart, Q as Quote } from "../_libs/lucide-react.mjs";
function HopeFamilyPage() {
  const [openAccordion, setOpenAccordion] = reactExports.useState(0);
  const [newsletterEmail, setNewsletterEmail] = reactExports.useState("");
  const [isSubscribed, setIsSubscribed] = reactExports.useState(false);
  const accordionData = [{
    title: "Transparency",
    content: "All members of the Hope Family receive monthly updates from our team on the ground via our newsletter. We are accountable to you, letting you know exactly where those funds were directed."
  }, {
    title: "Education",
    content: "All members of the Hope Family also receive educational newsletters. We want you to be informed about what we are doing, why, and why it matters. For example, you’ll learn about the importance of girls’ education, refugee education, and the impact of dedicated health care workers."
  }, {
    title: "Hope",
    content: "Our world needs hope. All members of the Hope Family receive hope stories of lives being changed and impacted. We are your source of good news, and we’ll always remind you that you are a part of something impactful."
  }];
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 text-center bg-gradient-to-b from-soft via-background to-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-6 md:px-12 lg:px-16 reveal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs uppercase tracking-widest font-semibold text-coral bg-coral/5 border border-coral/15 px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3 animate-pulse" }),
        " Monthly Giving Community"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl sm:text-6xl md:text-7.5xl text-ink font-black tracking-tight leading-[1.05] mb-6", children: [
        "Join the ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral", children: "Hope Family!" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10", children: "A community of dedicated giving with transparent, transformative results." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#donation-section", className: "btn-coral rounded-full px-8 py-4 text-sm tracking-wider capitalize font-bold inline-flex items-center gap-2 shadow-lg shadow-coral/20 hover:shadow-xl hover:shadow-coral/30 hover:scale-[1.02] transition-all", children: "Join the Hope Family" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-6 md:px-12 lg:px-16 reveal reveal-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl text-ink font-extrabold tracking-tight mb-4", children: "Why join the Hope Family?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Discover how your sustained commitment builds long-term impact on the ground." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 mb-12", children: accordionData.map((item, index) => {
        const isOpen = openAccordion === index;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl border border-border overflow-hidden transition-all duration-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => toggleAccordion(index), className: "w-full text-left px-6 py-5 flex items-center justify-between font-bold text-ink hover:text-coral transition-colors", "aria-expanded": isOpen, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base sm:text-lg", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-4 h-6 w-6 rounded-full bg-soft border border-border flex items-center justify-center text-muted-foreground group-hover:text-ink", children: isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `transition-all duration-300 ease-in-out ${isOpen ? "max-h-[300px] border-t border-border/60" : "max-h-0"} overflow-hidden`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 text-sm sm:text-base text-slate-600 leading-relaxed", children: item.content }) })
        ] }, index);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#donation-section", className: "btn-coral rounded-full px-8 py-4 text-sm tracking-wider capitalize font-bold inline-flex items-center gap-2 shadow-lg shadow-coral/20 hover:shadow-xl hover:shadow-coral/30 hover:scale-[1.02] transition-all", children: "Join the Hope Family" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-6 md:px-12 lg:px-16 reveal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl text-ink font-extrabold tracking-tight mb-4", children: "Why give monthly?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-1 bg-coral mx-auto rounded-full" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative rounded-3xl bg-white border border-border/80 p-8 flex flex-col justify-between card-hover shadow-sm overflow-hidden min-h-[240px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 h-28 w-28 bg-gradient-to-bl from-indigo-50 to-transparent rounded-bl-full pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-indigo-500 font-bold bg-indigo-50 px-2 py-1 rounded", children: "Sustainability" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl sm:text-2xl text-ink font-semibold tracking-tight mt-3 mb-4 group-hover:text-coral transition-colors", children: "Key to Long-Term Impact" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-balance text-muted-foreground leading-relaxed", children: "Monthly giving is key to long-term impact. By knowing that we have a recurring base of donations, we can cover our monthly costs and take on long-term projects that require support." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative rounded-3xl bg-white border border-border/80 p-8 flex flex-col justify-between card-hover shadow-sm overflow-hidden min-h-[240px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 h-28 w-28 bg-gradient-to-bl from-coral/10 to-transparent rounded-bl-full pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-coral font-bold bg-coral/5 px-2 py-1 rounded", children: "Partnership" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl sm:text-2xl text-ink font-semibold tracking-tight mt-3 mb-4 group-hover:text-coral transition-colors", children: "Spread Out Your Giving" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-balance text-muted-foreground leading-relaxed", children: "Monthly giving helps you as well! You can spread your giving beyond a year-end donation, helping you to be a part of something for the long-run and staying informed as to the effects of your donation." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#donation-section", className: "btn-coral rounded-full px-8 py-4 text-sm tracking-wider capitalize font-bold inline-flex items-center gap-2 shadow-lg shadow-coral/20 hover:shadow-xl hover:shadow-coral/30 hover:scale-[1.02] transition-all", children: "Support Monthly Giving" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "donation-section", className: "py-24 bg-soft border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 md:px-12 lg:px-16 reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold text-coral/80 bg-coral/5 border border-coral/15 px-4 py-1.5 rounded-full inline-block", children: "Start Today" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl sm:text-4xl text-ink font-black tracking-tight leading-tight", children: [
          "Ready to Make ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral", children: "an Impact?" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-1 bg-[#1cbee7] rounded-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base text-slate-700 leading-relaxed", children: "To join the Hope Family, simply use the DonorBox checkout to the right of your screen. You will automatically be signed up for our monthly newsletters and will receive a year-end tax receipt from KTMS." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 rounded-2xl bg-white border border-border flex gap-4 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 shrink-0 bg-coral/5 border border-coral/10 rounded-full flex items-center justify-center text-coral", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-5 w-5 fill-current" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Your monthly connection provides healthcare, education, and safe shelter in Kyaka II." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-6 -bottom-6 h-full w-full rounded-3xl bg-soft/50 border border-border/40 pointer-events-none transform translate-x-2 translate-y-2 opacity-50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl p-8 md:p-10 border border-sky/30 bg-white shadow-soft overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-5 bg-sky" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-0 bottom-0 w-1.5 bg-sky" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-10 w-10 text-sky/30 transform rotate-180 mb-6" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "text-ink leading-relaxed italic text-balance font-display", children: "“I know that what I give is having a profound and direct impact on lives that truly need support. Lives have been torn apart by war, and many have nothing. By giving what I can monthly, I know I am a part of lasting change.”" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "my-6 border-border" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("cite", { className: "not-italic block font-semibold text-base text-coral", children: "— A member of the Hope Family" }) }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 h-full bg-white rounded-3xl p-2 sm:p-2 border border-border shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { src: "https://donorbox.org/embed/the-hope-family-1?a=b", name: "donorbox", allowpaymentrequest: "allowpaymentrequest", seamless: true, frameBorder: "0", height: "100%", title: "DonorBox Donation Form", className: "w-full rounded-xl shadow-sm" }) })
    ] }) }) })
  ] });
}
export {
  HopeFamilyPage as component
};
