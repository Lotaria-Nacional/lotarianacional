import Icon from "@/components/ui/icon";
import { isValidArray } from "@/lib/utils";
import EmptyState from "@/components/empty-state";
import Button from "@/components/ui/lottary-button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useGetAllAgencies } from "@/features/agencies/hooks/query";
import AgencyTable from "@/features/agencies/components/agency-table";
import AddAgencyForm from "@/features/agencies/components/form/add-agency-form";
import AgencyTableSkeleton from "@/features/agencies/components/agency-table-skeleton";

type Props = {};

export default function AgenciesPage({}: Props) {
  const { data, isLoading } = useGetAllAgencies({ page: 1, pageSize: 20 });
  return (
    <div className="main w-full h-full flex">
      <section className="bg-white flex flex-col gap-6 justify-between rounded-card h-auto md:h-full p-4 w-full">
        <div className="relative flex flex-col gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="yellow" className="self-end">
                <Icon name="plus" className="md:size-[12px]" />
                <span>Adicionar</span>
              </Button>
            </DialogTrigger>
            <AddAgencyForm />
          </Dialog>

          {isLoading ? (
            <AgencyTableSkeleton />
          ) : data && isValidArray(data.data) ? (
            <AgencyTable data={data.data} />
          ) : (
            <EmptyState message="Ainda não há agências." />
          )}
        </div>
      </section>
    </div>
  );
}
