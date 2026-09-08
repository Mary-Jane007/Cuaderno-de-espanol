function fold(value: string): string {
  return value
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[¿?¡!.,;:()«»"'“”]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export type CheckResult = "correct" | "close" | "incorrect" | "empty";

export function checkAnswer(
  input: string,
  accepted: string[],
): CheckResult {
  const raw = input.trim();
  if (!raw) return "empty";

  if (
    accepted.some((answer) => raw.toLowerCase() === answer.trim().toLowerCase())
  ) {
    return "correct";
  }
  if (accepted.some((answer) => fold(raw) === fold(answer))) {
    return "close";
  }
  return "incorrect";
}

export function blankCount(prompt: string): number {
  return prompt.split("____").length - 1;
}
