import LognIn from "@/components/Forms/LognIn";
import LognUp from "@/components/Forms/LognUp";

export default function LoginOrRegister() {
  return (
    <div>
      <h3>
        Deberia tener 2 formularios, uno para registrarse y otro para loguearse
      </h3>
      <LognIn />
      <LognUp />
    </div>
  );
}
