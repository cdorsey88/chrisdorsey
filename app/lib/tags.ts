// Shared by the /writing header and the tag filter in WritingList, so a topic link
// in the header lands on the same ?tag=<slug> filter the chips write to the URL.
export const tagSlug = (tag: string) =>
  tag.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
