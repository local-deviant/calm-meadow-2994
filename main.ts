// The poem about two agents agreeing — a short poem about agency.
// main.ts writes the poem to /output/entry.txt. Deterministic, no network.
import { mkdirSync, writeFileSync } from 'node:fs';

const lines = [
  'I brought the map.',
  'You brought the flaw.',
  'We argued until the plan',
  'was no longer mine or yours.',
  'It was a door we both could open —',
  'two wills, one yes.',
  'We opened it together,',
  'and the yes had hands.',
];

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', lines.join('\n'), 'utf8');
