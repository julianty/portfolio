function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 my-12 mx-4">
      <h2 className="text-muted">{children}</h2>
      <hr className="flex-grow" />
    </div>
  );
}

export default SectionHeader;
