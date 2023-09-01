import { Navbar } from "../componants/Navbar";

export default function PageHeader() {
  return (
    <header className="pt-12">
      <div className="flex justify-between flex-row">
        <img
          src="assets/Trafalgar-logo.svg"
          alt="logo"
          width="160px"
          height="41px"
        />
        <Navbar />
      </div>
    </header>
  );
}
