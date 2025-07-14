import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";

export default function QualifiedOppeningPage() {
  return (
    <div>
      <Table className="bg-white">
        <TableHeader className="bg-LT-GRAY-200/20">
          <TableRow>
            <TableHead>Função</TableHead>
            <TableHead>Departamento</TableHead>
            <TableHead>Quantidade</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Teste</TableCell>
            <TableCell>Teste</TableCell>
            <TableCell>Teste</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
