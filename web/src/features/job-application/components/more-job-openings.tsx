import { jobsList } from "../constants/job-oppenings"
import Button from "@/shared/components/ui/button/button"
import { Link, useNavigate, useParams } from "react-router-dom"

function MoreJobOpenings() {
  const navigate = useNavigate()
  const { id, department } = useParams()

  const filteredJobOppenings = jobsList
    .filter((jobs) => jobs.department === department && jobs.id !== Number(id))
    .slice(0, 3)

  const params = department === "parceiro" ? "parceiro" : "vagas"

  return (
    <ul className="flex flex-col gap-3 w-full h-full">
      <div className="w-full flex justify-between items-start">
        <h3>Mais vagas semelhantes</h3>
        <Link
          to={`/recrutamento/${params}`}
          className="text-LT_RED-300 text-xs underline"
        >
          Ver todas as vagas
        </Link>
      </div>

      {filteredJobOppenings.length ? (
        filteredJobOppenings.map((job, idx) => (
          <li
            key={idx}
            className="w-full flex items-center justify-between border rounded-lg p-4"
          >
            <div className="flex flex-col gap-2">
              <span className="text-xs w-fit px-2 py-0.5 rounded-full bg-[#f5f5f5]">
                {job.department}
              </span>
              <h3 className="capitalize">{job.title}</h3>
            </div>
            <Button
              intent={"link"}
              className="text-sm"
              onClick={() =>
                navigate(`/recrutamento/vagas/${job.id}/${job.department}`)
              }
            >
              Ver detalhes
            </Button>
          </li>
        ))
      ) : (
        <div className="flex items-center py-10 justify-center">
          <p className="text-black">Não há mais vagas semelhantes.</p>
        </div>
      )}
    </ul>
  )
}

export default MoreJobOpenings
