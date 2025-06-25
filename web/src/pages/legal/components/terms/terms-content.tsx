import { Terms } from "../../constants/terms";

type Props = {
  terms: Terms;
  term_id: string;
};

export default function TermsContent({ term_id, terms }: Props) {
  return (
    <div id={term_id} className="flex flex-col gap-4 w-full">
      <h3 className="font-bold">{terms.title}</h3>
      <ol className="flex flex-col gap-4 text-justify">
        {terms.content.map((term, index) => {
          if (typeof term === "string") return <li key={index}>{term}</li>;
          else if (term.list) {
            return (
              <ul key={index} className="space-y-2">
                {term.list.map((termListItem, termListIndex) => (
                  <li className="whitespace-pre-line" key={termListIndex}>
                    {termListItem}
                  </li>
                ))}
              </ul>
            );
          }
        })}
      </ol>
    </div>
  );
}
