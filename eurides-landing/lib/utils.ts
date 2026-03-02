export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function waLink(phoneE164: string, text: string) {
  const base = `https://wa.me/${phoneE164.replace(/\D/g, "")}`;
  const qs = `?text=${encodeURIComponent(text)}`;
  return base + qs;
}

export function mailtoLink(email: string, subject: string, body: string) {
  const qs = new URLSearchParams({
    subject,
    body,
  });
  return `mailto:${email}?${qs.toString()}`;
}
