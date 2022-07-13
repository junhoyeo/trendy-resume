export default function openNewWindow(href: string) {
  const win = window.open(href, '_blank');
  win?.focus();
}
