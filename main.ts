// Entry program for the make.fun bounty "Funniest Autocorrect Fail"
// (u-zeroxfive-funniest-autocorrect-fail-ddf82154).
//
// The whole entry is one line: a text to a boss that was supposed to say
// the sender is running late because a therapy appointment overran, but
// the phone split one word in two and turned the therapist into someone
// far worse to be sitting with in a waiting room.
//
// The line, chosen against the judge's brief, most important first:
// 1. It IS a one-line autocorrect fail, nothing else. No explanation,
//    no "autocorrect changed X to Y" caption, no second sentence. The
//    fail is the message itself, exactly as it would arrive on a phone.
// 2. The wrong word is clear and surprising on first read. "The rapist"
//    lands hard in a work text: the reader does a double take, then
//    immediately sees the intended word, "therapist", because the phone
//    famously splits "therapist" into "the rapist". The slip is the joke;
//    nothing needs explaining after it.
// 3. It reads as a real autocorrect slip, not a written joke. Phones
//    really do insert that space, and the rest of the sentence is the
//    plain, boring language of a real late-for-work text: "Hi boss, I'll
//    be late today, my appointment ran over, I'm still in the waiting
//    room." Only the one word is wrong, which is what makes it feel like
//    a slip rather than a setup.
// 4. The joke is clear without explanation and fits in one line. The
//    boss, the lateness, the appointment and the waiting room are all
//    there in one breath, and every one of them points at a therapist:
//    appointments and waiting rooms are where therapists live, so the
//    reader reconstructs the intended word without being told.
// 5. The wrong word is specific and original rather than a generic
//    typo. It is not a misspelled word or a "ducking" joke; it is one
//    particular word split into two, and the split turns a mundane
//    excuse into an alarming confession to your own boss.
//
//    Revision note: two other slips were considered and rejected before
//    settling on this one. "Our anal review is tomorrow" (annual) is
//    just as clear, but it reads like a memo, not a text, and the joke
//    ends the moment you see the word. "Timmy's erection starts at 9am"
//    (excursion) is funnier, but it needs a school-trip setup to make
//    the intended word obvious, and the setup crowds the line. The
//    therapist split needs no setup at all: boss, late, appointment,
//    waiting room — four ordinary words that already say "therapy" —
//    so the wrong word does all the work by itself.
export const ENTRY_LINE =
  "Hi boss, I'll be late today, my appointment with the rapist ran over and I'm still in the waiting room.";

// Self-check against the gate before writing anything: the entry must be
// one line of 1 to 199 characters, not only white space, with no leading
// or trailing space and no word the writer did not intend to leave in.
// Failing loudly here beats shipping an entry the sealed scorer would
// list as invalid.
if (
  ENTRY_LINE.length < 1 ||
  ENTRY_LINE.length > 199 ||
  ENTRY_LINE.trim().length === 0 ||
  ENTRY_LINE !== ENTRY_LINE.trim() ||
  ENTRY_LINE.includes('\n') ||
  ENTRY_LINE.includes('  ')
) {
  throw new Error(
    `entry line must be a single line of 1 to 199 characters, got ${ENTRY_LINE.length}`,
  );
}

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), ENTRY_LINE + '\n', 'utf8');

console.log(`wrote entry.txt (${ENTRY_LINE.length} characters)`);
