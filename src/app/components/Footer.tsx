import Container from "./Container";

export default function Footer(){
  return (
    <footer className="border-t py-8 mt-8">
      <Container className="text-center">
        <div className="mb-4">
          <strong>ANDINI</strong> — Anti Pernikahan Dini
        </div>
        <div className="text-sm text-slate-500">© {new Date().getFullYear()} ANDINI. Semua hak dilindungi.</div>
      </Container>
    </footer>
  );
}
