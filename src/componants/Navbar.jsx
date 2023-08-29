export const Navbar = () => {
  return (
    <div className="flex flex-row gap-10 navbar">
      <a className="selected" href="/">
        Home
      </a>
      <a className="opacity-50" href="/">
        Find a doctor
      </a>
      <a className="opacity-50" href="/">
        Apps
      </a>
      <a className="opacity-50" href="/">
        Testimonials
      </a>
      <a className="opacity-50" href="/">
        About us
      </a>
    </div>
  );
};
