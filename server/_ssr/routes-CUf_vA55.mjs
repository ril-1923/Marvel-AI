import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CUf_vA55.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var capabilities = [{
	code: "A / Self-review",
	title: "Checks its own work",
	body: "A second pass audits every output for unsupported claims before it reaches you, so you inherit confidence rather than doubt.",
	span: "md:col-span-7"
}, {
	code: "B / Tool routing",
	title: "Calls the right tool",
	body: "Searches, runs code, and reads files with a fixed latency budget — no silent, unbounded runs.",
	span: "md:col-span-5"
}];
var useCases = [
	[
		"Research ops",
		"Source sweeps",
		"Cross-references papers and filings into a single, cited brief."
	],
	[
		"Product",
		"Spec drafting",
		"Turns a fuzzy goal into a testable spec with open questions flagged."
	],
	[
		"Data",
		"Query translation",
		"Natural language to safe, explainable SQL — with the reasoning shown."
	]
];
var plans = [
	{
		name: "Field",
		price: "$0",
		note: "forever",
		items: [
			"50 reasoned tasks / month",
			"Single memory graph",
			"Community guardrails"
		],
		action: "Start free"
	},
	{
		name: "Studio",
		price: "$48",
		note: "per seat / month",
		items: [
			"Unlimited reasoned tasks",
			"Shared memory + citations",
			"Tool routing & latency budget"
		],
		action: "Get Studio",
		featured: true
	},
	{
		name: "Foundry",
		price: "Custom",
		note: "annual / on-prem",
		items: [
			"Self-hosted inference",
			"SSO, audit & retention",
			"Dedicated guardrail team"
		],
		action: "Talk to us"
	}
];
function MarvelsLanding() {
	const [prompt, setPrompt] = (0, import_react.useState)("draft a launch brief for a developer tool targeting EU teams");
	const [status, setStatus] = (0, import_react.useState)("ready");
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const mainRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const root = mainRef.current;
		if (!root) return;
		const nodes = root.querySelectorAll(".reveal");
		const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: .12 });
		nodes.forEach((node) => observer.observe(node));
		return () => observer.disconnect();
	}, []);
	const runPrompt = () => {
		setStatus("reasoning");
		window.setTimeout(() => setStatus("complete"), 1100);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		ref: mainRef,
		className: "overflow-x-hidden bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "nav-blur sticky top-0 z-50 border-b border-paper/10 bg-ink/90 text-paper",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex min-h-16 max-w-7xl items-center justify-between px-5 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#top",
							className: "flex items-center gap-2",
							"aria-label": "Marvels AI home",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-7 place-items-center rounded-md bg-cyan font-grotesk text-sm font-semibold text-ink",
								children: "M"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-grotesk text-lg font-semibold",
								children: ["MARVELS", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-cyan",
									children: ".ai"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden items-center gap-8 font-mono text-xs uppercase text-steel md:flex",
							"aria-label": "Main navigation",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#demo",
									className: "hover:text-paper",
									children: "Demo"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#features",
									className: "hover:text-paper",
									children: "Capabilities"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#cases",
									className: "hover:text-paper",
									children: "Use cases"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#pricing",
									className: "hover:text-paper",
									children: "Pricing"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "hidden font-mono text-xs uppercase text-steel hover:text-paper sm:inline",
									href: "#demo",
									children: "Sign in"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "rounded-md bg-cyan px-4 py-2 text-sm font-medium text-ink ring-1 ring-cyan transition hover:opacity-90",
									href: "#pricing",
									children: "Get access"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "grid size-9 place-items-center rounded-md border border-paper/20 md:hidden",
									"aria-label": "Toggle navigation",
									"aria-expanded": menuOpen,
									onClick: () => setMenuOpen((value) => !value),
									children: "☰"
								})
							]
						})
					]
				}), menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex flex-col border-t border-paper/10 px-5 py-4 font-mono text-xs uppercase text-steel md:hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "py-2",
							href: "#demo",
							onClick: () => setMenuOpen(false),
							children: "Demo"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "py-2",
							href: "#features",
							onClick: () => setMenuOpen(false),
							children: "Capabilities"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "py-2",
							href: "#cases",
							onClick: () => setMenuOpen(false),
							children: "Use cases"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "py-2",
							href: "#pricing",
							onClick: () => setMenuOpen(false),
							children: "Pricing"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "top",
				className: "relative overflow-hidden bg-ink text-paper",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "scanline",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl items-end gap-12 px-5 py-24 sm:px-6 md:grid-cols-12 md:py-32",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal md:col-span-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-6 font-mono text-xs uppercase text-cyan",
								children: "Neural interface · v4.2"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "max-w-[16ch] font-serif text-5xl leading-none text-balance sm:text-6xl md:text-7xl",
								children: "Reasoning that reads the room before you ask."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 max-w-[52ch] text-lg text-steel",
								children: "Marvels wires a planning mind into your workflow — it decomposes the task, drafts, reviews its own output, and ships a decision you can defend."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-wrap gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "rounded-md bg-cyan px-6 py-3 font-grotesk font-medium text-ink ring-1 ring-cyan hover:opacity-90",
									href: "#demo",
									children: "See it think"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "rounded-md px-5 py-3 font-mono text-sm text-paper ring-1 ring-paper/20 hover:ring-paper/40",
									href: "#features",
									children: "Read the spec"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "reveal delay-1 space-y-3 self-start md:col-span-4",
						children: [["12.4M", "Tokens reasoned daily"], ["98.1%", "Plan accept rate"]].map(([value, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg bg-paper/5 px-5 py-4 ring-1 ring-paper/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-3xl font-medium",
								children: value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-mono text-[11px] uppercase text-steel",
								children: label
							})]
						}, label))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "overflow-hidden border-y border-ink/20 bg-cyan py-3 text-ink",
				"aria-label": "Capabilities ticker",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "marquee-track flex whitespace-nowrap font-mono text-sm uppercase",
					children: [0, 1].map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex",
						children: [
							"Context engine",
							"Self-review",
							"Tool routing",
							"Memory graph",
							"Guardrails",
							"Latency budget"
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-8",
							children: item
						}, `${group}-${item}`))
					}, group))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "demo",
				className: "bg-paper py-24 text-ink",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 md:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal md:col-span-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-4 font-mono text-xs uppercase text-cyan",
								children: "Live surface"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "max-w-[14ch] font-serif text-4xl leading-none text-balance md:text-5xl",
								children: "Type a goal. Watch the plan assemble itself."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-[40ch] text-steel",
								children: "Every prompt is decomposed into verifiable steps before anything is generated — inspect, edit, or reject each one."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "reveal delay-1 md:col-span-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "console-glow rounded-lg bg-card/70 p-5 ring-1 ring-ink/10 backdrop-blur-xl md:p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 border-b border-ink/10 pb-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `size-2.5 rounded-full ${status === "complete" ? "bg-cyan" : "bg-signal"}` }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-xs text-steel",
											children: "prompt://plan"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-auto font-mono text-xs text-cyan",
											children: status
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mt-5 block font-mono text-xs uppercase text-steel",
									htmlFor: "prompt",
									children: "Prompt"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "prompt",
									value: prompt,
									onChange: (event) => setPrompt(event.target.value),
									className: "mt-2 w-full border-0 bg-transparent font-mono text-sm text-ink outline-none md:text-base"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-6 space-y-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "shrink-0 font-mono text-cyan",
												children: "01"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Map buyer personas against existing search intent." })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "shrink-0 font-mono text-cyan",
												children: "02"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Position against incumbents; flag unclaimed wedges." })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "shrink-0 font-mono text-signal",
												children: "03"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: status === "complete" ? "Review complete — evidence mapped and ready to ship." : "Review: tighten claim 2 — evidence pending." })]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex items-center gap-3 rounded-md bg-ink px-4 py-3 text-paper",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-cyan",
											children: ">"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "min-w-0 flex-1 truncate font-mono text-sm text-steel",
											children: prompt
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: runPrompt,
											className: "rounded bg-cyan px-3 py-1 font-mono text-xs text-ink",
											children: "Run"
										})
									]
								})
							]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "features",
				className: "bg-ink-soft py-24 text-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-4 font-mono text-xs uppercase text-cyan",
							children: "Capabilities"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "max-w-[20ch] font-grotesk text-4xl font-semibold leading-tight text-balance md:text-5xl",
							children: "Built like an instrument, not a chatbox."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-14 grid gap-5 md:grid-cols-12",
						children: [capabilities.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: `reveal ${index ? "delay-1" : ""} ${item.span} rounded-lg bg-paper/5 p-8 ring-1 ring-paper/10`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-xs text-cyan",
									children: item.code
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 text-2xl font-medium",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-[46ch] text-steel",
									children: item.body
								})
							]
						}, item.code)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "reveal delay-2 flex flex-col justify-between gap-6 rounded-lg bg-cyan/10 p-8 ring-1 ring-cyan/30 md:col-span-12 md:flex-row md:items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs text-cyan",
								children: "C / Memory graph"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-2xl font-medium",
								children: "Remembers across sessions, on your terms"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#demo",
								className: "shrink-0 rounded-md px-5 py-3 font-mono text-sm ring-1 ring-paper/20 hover:ring-paper/40",
								children: "Explore memory"
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "cases",
				className: "bg-warm py-24 text-ink",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-4 font-mono text-xs uppercase text-signal",
							children: "Use cases"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "max-w-[18ch] font-serif text-4xl leading-none text-balance md:text-5xl",
							children: "Where teams point it first."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 grid gap-6 md:grid-cols-3",
						children: useCases.map(([label, title, body], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: `reveal ${index === 1 ? "delay-1" : index === 2 ? "delay-2" : ""} rounded-lg bg-card/70 p-7 ring-1 ring-ink/10`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-xs text-signal",
									children: label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 text-xl font-medium",
									children: title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-ink/70",
									children: body
								})
							]
						}, label))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "pricing",
				className: "bg-ink py-24 text-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-4 font-mono text-xs uppercase text-cyan",
							children: "Pricing"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mx-auto max-w-[18ch] font-serif text-4xl leading-none text-balance md:text-5xl",
							children: "Start free. Scale when the plans hold."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 grid gap-6 md:grid-cols-3",
						children: plans.map((plan, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: `reveal ${index === 1 ? "delay-1" : index === 2 ? "delay-2" : ""} rounded-lg p-7 ${plan.featured ? "bg-paper/10 ring-1 ring-cyan/50 md:-translate-y-4" : "bg-paper/5 ring-1 ring-paper/10"}`,
							children: [
								plan.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[11px] uppercase text-cyan",
									children: "Most chosen"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: `${plan.featured ? "mt-3" : ""} text-xl font-medium`,
									children: plan.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 font-mono text-3xl",
									children: plan.price
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-mono text-xs text-steel",
									children: plan.note
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 space-y-2 font-mono text-sm text-steel",
									children: plan.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#demo",
									className: `mt-8 inline-flex w-full justify-center rounded-md px-4 py-3 text-sm ${plan.featured ? "bg-cyan font-medium text-ink ring-1 ring-cyan" : "font-mono ring-1 ring-paper/20"}`,
									children: plan.action
								})
							]
						}, plan.name))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-ink/10 bg-paper py-16 text-ink",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-between gap-10 md:flex-row md:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#top",
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-7 place-items-center rounded-md bg-cyan text-sm font-semibold",
								children: "M"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-lg font-semibold",
								children: ["MARVELS", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-cyan",
									children: ".ai"
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-[20ch] text-2xl",
							children: "The planning mind behind your next decision."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "grid grid-cols-2 gap-12 font-mono text-xs uppercase text-steel",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-ink",
										children: "Product"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "block hover:text-ink",
										href: "#demo",
										children: "Demo"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "block hover:text-ink",
										href: "#features",
										children: "Capabilities"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "block hover:text-ink",
										href: "#pricing",
										children: "Pricing"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-ink",
										children: "Company"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "block hover:text-ink",
										href: "#cases",
										children: "Research"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "block hover:text-ink",
										href: "#top",
										children: "Careers"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "block hover:text-ink",
										href: "mailto:hello@marvels.ai",
										children: "Contact"
									})
								]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-12 border-t border-ink/10 pt-6 font-mono text-xs text-steel",
						children: "© 2026 Marvels AI — a fictional prototype. Built with restraint."
					})]
				})
			})
		]
	});
}
//#endregion
export { MarvelsLanding as component };
