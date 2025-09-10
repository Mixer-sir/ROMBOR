export function Footer() {
  return (
    <footer className="border-t border-border mt-16">
      <div className="container mx-auto py-10 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} ROMBOR. Все права защищены.</p>
        <p className="opacity-80">Лофт • Дерево • Металл</p>
      </div>
    </footer>
  );
}
