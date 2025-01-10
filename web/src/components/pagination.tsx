// import { SetURLSearchParams } from "react-router-dom"

// type Props = {
//   pages?: number
//   currentPage: number
//   setSearch: SetURLSearchParams
// }

// const Pagination = ({ currentPage, setSearch, pages }: Props) => {
//   const MAX_BUTTONS = 5
//   if (!pages) return

//   const controls = {
//     calculateButtons: () => {
//       let halfButtons = Math.floor(MAX_BUTTONS / 2)
//       let maxLeft = Math.max(1, currentPage - halfButtons)
//       let maxRight = Math.min(pages, currentPage + halfButtons)

//       // Recalcular limites caso maxRight ultrapasse o total de páginas
//       if (maxRight - maxLeft + 1 < MAX_BUTTONS) {
//         if (maxLeft === 1) {
//           maxRight = Math.min(pages, maxLeft + MAX_BUTTONS - 1)
//         } else if (maxRight === pages) {
//           maxLeft = Math.max(1, maxRight - (MAX_BUTTONS - 1))
//         }
//       }

//       return { maxLeft, maxRight }
//     },
//     previousPage: () => {},
//     nextPage: () => {},
//     goToEnd: () => {},
//     goToStart: () => {},
//     goTo: (page: number) => {},
//   }

//   return <div>Pagination</div>
// }

// export default Pagination
