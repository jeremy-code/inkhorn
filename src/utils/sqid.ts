"server-only";

import Sqids from "sqids";

export const sqids = new Sqids({
  minLength: 8,
  alphabet: process.env.SQID_ALPHABET,
});

export const encode = (id: number) => sqids.encode([id]);
export const decode = (sqid: string) => sqids.decode(sqid)[0];
