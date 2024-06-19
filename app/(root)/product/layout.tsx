import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/Sidebar";
import { RedirectToSignIn, SignedIn } from "@clerk/nextjs";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SignedIn>
      <main className="root">
        <Sidebar />
        <div className="root-container">
          <div className="">{children}</div>
        </div>
      </main>
    </SignedIn>
  );
};

export default Layout;
