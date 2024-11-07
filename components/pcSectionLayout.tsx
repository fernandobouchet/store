interface Props {
  children: React.ReactNode;
}

export default function PcSectionLayout({ children }: Props) {
  return (
    <div>
      <h1 className="text-primary text-2xl font-semibold">Pc&apos;s</h1>
      <section>{children}</section>
    </div>
  );
}
