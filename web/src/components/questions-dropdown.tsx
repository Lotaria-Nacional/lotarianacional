import { useState } from "react"
import { PiMinus, PiPlus } from "react-icons/pi"
import { PERGUNTAS_FREQUENTES } from "../constants/faq"
import { Link } from "react-router-dom"
const QuestionsDropdown = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [showMoreQuestions, setShowMoreQuestions] = useState(false)

  const handleDrop = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  const handleShowMoreQuestions = () => {
    setShowMoreQuestions((prev) => !prev)
  }

  const PERGUNTAS_FREQUENTES_SLICED = showMoreQuestions
    ? PERGUNTAS_FREQUENTES
    : PERGUNTAS_FREQUENTES.slice(0, 5)

  return (
    <div className="flex flex-col w-full">
      {PERGUNTAS_FREQUENTES_SLICED.map((item, index) => (
        <li
          key={index}
          onClick={() => handleDrop(index)}
          className={`flex cursor-pointer flex-col py-2 lg:py-3 w-full gap-4 lg:gap-5 select-none ${
            index !== PERGUNTAS_FREQUENTES.length - 1 &&
            "border-b border-b-zinc-300"
          }`}
        >
          <div className="items-center justify-between flex">
            <span
              className={`font-semibold w-[80%] lg:w-[90%] ${
                openIndex === index ? "text-LT_RED-100" : ""
              }`}
            >
              {item.question}
            </span>

            <span className="flex items-center justify-center size-8">
              {openIndex === index ? (
                <PiMinus className="text-black" />
              ) : (
                <PiPlus className="text-black" />
              )}
            </span>
          </div>
          {openIndex === index && (
            <p className="fade-in-text">
              {item.answer}
              {item.link && (
                <Link
                  to={item.link}
                  reloadDocument
                  className="text-LT_RED-100 underline"
                >
                  clique aqui
                </Link>
              )}
            </p>
          )}
        </li>
      ))}

      <button
        onClick={handleShowMoreQuestions}
        className="mt-[40px] border border-LT_RED-300 px-3 py-1 text-LT_RED-300 rounded-lg w-fit self-start"
      >
        {showMoreQuestions ? "Ocultar" : " Ver mais"}
      </button>
    </div>
  )
}

export default QuestionsDropdown
