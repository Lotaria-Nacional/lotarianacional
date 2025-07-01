type Props = {
    isLoading:boolean
    data?:unknown[]
    emptyState:React.ReactNode
    skeleton:React.ReactNode
    listing:React.ReactNode
}
export function renderContent (props:Props){
    if (props.isLoading) return props.skeleton;
    if (!props.data || props.data.length === 0)
      return props.emptyState;
    return props.listing;
  };