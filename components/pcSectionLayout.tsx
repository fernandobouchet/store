interface Props {
  children: React.ReactNode;
}

export default function PcSectionLayout({ children }: Props) {
  return (
    <div>
      <h1 className="text-primary text-2xl font-semibold">Desktop</h1>
      <section>{children}</section>
    </div>
  );
}
