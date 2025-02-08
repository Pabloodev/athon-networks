import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";

export default function CeoContainer() {
  return (
    <div className="flex items-center gap-5 p-4 mt-10 mb-10">
      <div>
        <Avatar>
          <AvatarImage src="./oseias.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <p className="text-white text-start">Oseias Cruz</p>
        <p className="font-bold text-start">CEO of Athon Networks</p>
        <p className="text-start">
          "Conectando pessoas, impulsionando negócios. Esse é o futuro que
          estamos construindo."
        </p>
      </div>
    </div>
  );
}
