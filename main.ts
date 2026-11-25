// Have You Tried Turning It Off?
// make.fun competition: u-motasimfuad-have-you-tried-turning-it-off-154a938b
//
// The entry is one funny single line (<200 characters) from a hopeless tech
// support agent to a desperate customer. Ten candidates were drafted and
// compared against the judge's five criteria (on-subject first, then the
// twist landing on the agent's cheerful uselessness with the customer never
// the butt of it, then sounding like a real agent line with the customer's
// desperation felt not explained, then tightness, then freshness with a
// twist on any classic): a haunted ticket restarted three times, hold music
// while the agent googles the error, Wi-Fi that is fine in an unexplainable
// way, unplug-count-to-ten with a pretend-first-time, a printer filing a
// complaint, escalation to Tier 2, a beeping computer more stressed than the
// caller, the classic reboot with a pact to forget the call, diagnostics
// blaming the caller's luck, a password expired since 2019. Escalation to
// Tier 2 won: it is the support trope every caller knows, twisted so the
// "escalation" changes nothing at all — the same agent, a different headset
// — which makes the cheerful uselessness the whole joke, keeps the customer
// out of the punchline, and reads exactly like something a real agent would
// say while buying time. At 98 characters it is also short enough that the
// byte tie-break works in its favour. Runner-up was the haunted ticket
// ("officially haunted and out of my hands") — its twist is the freshest of
// the ten, but it explains the joke a beat more than the winner, which
// simply performs the uselessness and stops.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I have escalated your case to Tier 2, which is me again, but with a slightly different headset on.";

// The gate, checked inside the program before anything is written:
// UTF-8 text, 1 to 199 characters, a single line, not only whitespace.
// Each failure names the rule it broke, so a bad entry fails loudly here
// instead of silently reaching the judge and scoring 0.
function validateGate(text: string): void {
  if (text.length < 1 || text.length > 199) {
    throw new Error(`gate failed: entry is ${text.length} characters, must be 1-199`);
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("gate failed: entry must be a single line");
  }
  if (/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/.test(text)) {
    throw new Error("gate failed: entry must not contain control characters");
  }
  if (text.trim().length === 0) {
    throw new Error("gate failed: entry must not be only whitespace");
  }
}

validateGate(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} characters)`);
