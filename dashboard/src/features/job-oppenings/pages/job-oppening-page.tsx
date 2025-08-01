import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/shared/components/ui/dialog";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import AddQualifiedOppeningForm from "../components/add-qualified-oppening-form";
import AddPartnerOppeningForm from "../components/add-partner-oppening-form";
import { Button } from "@/shared/components/ui/button";
import { Plus } from "lucide-react";

export default function JobOppeningPage() {
  const location = useLocation();
  const buttonType = location.pathname.split("/")[2];

  return (
    <div className="flex flex-col gap-6 main">
      <section className="w-full flex items-center justify-between">
        <div className="flex items-center p-2 py-2 h-[38px] rounded-[6px] bg-white gap-2">
          <NavLink
            to={"/carreiras/quadros"}
            className={({ isActive }) =>
              `h-full flex items-center justify-center cursor-pointer text-sm rounded-[4px] py-[6px] px-[10px] ${
                isActive ? "bg-LT-RED-100 text-white" : "bg-white text-black"
              }`
            }
          >
            Quadros
          </NavLink>

          <NavLink
            to={"/carreiras/parceiros"}
            className={({ isActive }) =>
              `h-full flex items-center justify-center cursor-pointer text-sm rounded-[4px] py-[6px] px-[10px] ${
                isActive ? "bg-LT-RED-100 text-white" : "text-black"
              }`
            }
          >
            Parceiros
          </NavLink>
        </div>

        {buttonType === "quadros" ? (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant={"destructive"}>
                <Plus />
                Adicionar vaga
              </Button>
            </DialogTrigger>
            <DialogContent>
              <AddQualifiedOppeningForm />
            </DialogContent>
          </Dialog>
        ) : (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant={"destructive"}>
                <Plus />
                Adicionar vaga
              </Button>
            </DialogTrigger>
            <DialogContent>
              <AddPartnerOppeningForm />
            </DialogContent>
          </Dialog>
        )}
      </section>
      <Outlet />
    </div>
  );
}
