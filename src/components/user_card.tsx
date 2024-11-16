import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

type User = {
  name?: string;
  email?: string;
  linkedin?: string;
  photo: string;
  description?: string;
};

export default async function UserCard(user: User) {
  return (
    <div className="grid place-items-center p-2">
      <div className="card w-72 lg:w-96 bg-base-100 shadow-xl hover:shadow-2xl duration-500 h-[32rem]">
        <figure className="p-4 bg-base-200">
          <Image src={user.photo} alt={user.name || ""} width={300} height={300} className="rounded-full scale-none hover:scale-105 duration-500"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{user.name || ""}</h2>
          <p>{user.description || ""}</p>
          <div className="card-actions justify-center py-2 grid grid-cols-2">
            <Link href={user.linkedin || ""} className="btn btn-primary"  target="_blank">Linkedin</Link>
            <Link href={"mailto:" + user.email || ""} className="btn btn-primary" target="_blank">Email</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
