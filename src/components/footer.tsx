export default function Footer() {
  const date = new Date();
  return (
    <footer className="bg-black text-primary-foreground py-4">
      <div className="container mx-auto text-center">
        Copyright © {date.getFullYear()} Martin Paucot
      </div>
    </footer>
  );
}
