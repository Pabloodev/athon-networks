import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";

export default function CeoContainer() {
  return (
    <div className="absolute bottom-0 flex items-center gap-10 p-4">
      <div>
        <Avatar>
          <AvatarImage src="./oseias.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <p className="text-white">Oseias Cruz</p>
        <span className="font-bold">CEO of Athon Networks</span>
        <p>
          "Conectando pessoas, impulsionando negócios. Esse é o futuro que
          estamos construindo."
        </p>
      </div>
    </div>
  );
}
