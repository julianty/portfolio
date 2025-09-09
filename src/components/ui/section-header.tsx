function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 my-12 md:mx-4 mx-2">
      <h2 className="text-muted">{children}</h2>
      <hr className="grow" />
    </div>
  );
}

export default SectionHeader;
