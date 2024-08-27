import Link from "next/link";
import Contact from "./contact";
import Image from "next/image";

export default async function Footer() {
  return (
    <footer className="footer footer-center bg-primary text-primary-content p-10">
      <div className="grid w-full grid-cols-1 lg:grid-cols-2">
        <div className="grid place-items-center">
          <aside className="grid place-items-center ">
            <Image src="/favicon.svg" width={100} height={100} alt="logo"/>
            <p className="font-bold">
              SRM Electronics Club
              <br />
              Where Circuits Come Alive.
            </p>
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
          </aside>
        </div>
        {/* <Contact /> */}
        <div>    
          <h1 className="text-2xl font-bold">Contact us</h1>      
          <Link href="https://www.instagram.com/srm.electronicsclub" target="_blank" className="btn btn-circle btn-ghost">
            <Image src="/logos/instagram.svg" width={30} height={30} alt="instagram"/>
          </Link>
          <Link href="mailto:srm.eclub@gmail.com" target="_blank" className="btn btn-circle btn-ghost">
            <Image src="/logos/gmail.svg" width={30} height={30} alt="gmail"/>
          </Link>
          <br></br>
          <h1 className="text-lg">Phone number</h1>
          <div className="grid place-items-center">
            <p >+91 8981790650</p>
            <p>Alapan Konar</p>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
