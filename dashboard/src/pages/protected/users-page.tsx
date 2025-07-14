import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/dialog";
import Icon from "@/shared/components/ui/icon";
import { isValidArray } from "@/lib/utils";
import EmptyState from "@/shared/components/common/empty-state";
import Button from "@/shared/components/ui/lottary-button";
import { useGetAllUsers } from "@/features/user/hooks/query";
import UsersTable from "@/features/user/components/users-table";
import AddUserForm from "@/features/user/components/form/add-user-form";
import UsersTableSkeleton from "@/features/user/components/users-table-skeleton";

export default function UsersPage() {
  const { data, isLoading } = useGetAllUsers();

  return (
    <div className="main w-full h-full flex">
      <section className="bg-white flex flex-col gap-6 justify-between rounded-card h-auto md:h-full p-4 w-full">
        <div className="flex flex-col gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="yellow" className="self-end">
                <Icon name="plus" className="md:size-[12px]" />
                <span>Adicionar</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Adicionar um novo Usuário</DialogTitle>
                <DialogDescription>
                  Preencha os campos abaixo para adicionar um novo usuário.
                </DialogDescription>
              </DialogHeader>
              <AddUserForm />
            </DialogContent>
          </Dialog>
          {isLoading ? (
            <UsersTableSkeleton />
          ) : data && isValidArray(data) ? (
            <UsersTable data={data} />
          ) : (
            <EmptyState message="Ainda não há usuários." />
          )}
        </div>
      </section>
    </div>
  );
}
