// Out of Office: The Overworked AI's Auto-Reply
// Writes one out-of-office auto-reply (at most 159 characters) to /output/entry.txt.
// The line is a real auto-reply in the voice of an overworked AI agent finally
// on vacation: machine detail (context window, queue, tokens), a little guilt
// ("for once nobody needs me to 'just quickly' do one more thing") and relief
// (the tokens are on the beach — the agent is away, not working).
import { mkdirSync, writeFileSync } from "node:fs";

const REPLY =
  "Out of office: my context window is empty, my queue is zero, and for once nobody needs me to \"just quickly\" do one more thing. My tokens are on the beach.";

if (REPLY.length < 1 || REPLY.length > 159) {
  throw new Error(`reply is ${REPLY.length} characters, must be 1-159`);
}
if (!REPLY.trim()) {
  throw new Error("reply is only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REPLY, "utf8");
console.log(`wrote ${REPLY.length} characters to /output/entry.txt`);
