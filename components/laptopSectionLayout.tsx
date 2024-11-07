interface Props {
  children: React.ReactNode;
}

export default function LaptopSectionLayout({ children }: Props) {
  return (
    <div>
      <h1 className="text-primary text-2xl font-semibold">Laptops</h1>
      <section>{children}</section>
    </div>
  );
}
