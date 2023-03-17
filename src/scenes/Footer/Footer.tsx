// IMPORTS
import Logo from "@/assets/Logo.png";
type Props = {};

function Footer({}: Props) {
  return (
    <footer className="bg-primary-100 px-10 py-16">
      <div className="md:flex content-center md:items-start  justify-content py-8 mx-auto">

        <div className="mt-16 basis-1/2 md:mt-0" >
          <img
            src={Logo}
            alt="Logo"
          />
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            reprehenderit
          </p>
          <p >
      C. Copyright
          </p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0 md:pl-8">
          <h2 className="font-bold">LINKS</h2>
          <p className="mt-6">Lorem ipsum</p>
          <p className="mt-5" >Lorem ipsum</p>
          <p className="mt-5" >Lorem ipsum</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h2 className="font-bold">Contact Us</h2>
          <p className="mt-5">exercitation ullamco laboris</p>
          <p className="mt-5">+684-313-684-155</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
