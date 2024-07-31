import { NavBar } from './_components/NavBar';

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-500">
      <NavBar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
