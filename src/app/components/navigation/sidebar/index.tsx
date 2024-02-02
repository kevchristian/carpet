import Link from "next/link";

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  return (
    <>
      <div
        className="sidebar-container fixed w-full h-full overflow-hidden justify-center bg-black grid pt-[120px] left-0 z-10"
        style={{
          opacity: `${isOpen ? "1" : "0"}`,
          top: ` ${isOpen ? "0" : "-100%"}`,
        }}
      >
        <ul className="sidebar-nav text-center leading-relaxed text-xl text-white">
          <li>
            <Link href="/about" onClick={toggle}>
              <p>ABOUT US</p>
            </Link>
          </li>
          <li>
            <Link href="/products" onClick={toggle}>
              <p>PRODUCTS</p>
            </Link>
          </li>
          <li>
            <Link href="/projects" onClick={toggle}>
              <p>PROJECTS</p>
            </Link>
          </li>
          <li>
            <Link href="/news" onClick={toggle}>
              <p>NEWS</p>
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={toggle}>
              <p>CONTACT US</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;