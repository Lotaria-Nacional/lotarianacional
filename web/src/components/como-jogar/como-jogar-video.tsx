type Props = {
  handleClose: () => void
}

const ComoJogarVideo = ({ handleClose }: Props) => {
  return (
    <div
      className="fixed top-0 lg:w-full w-full inset-0 h-full bg-black/70 z-[40000] flex items-center justify-center"
      onClick={handleClose}
    >
      <video
        controls
        className="w-fit h-2/3"
        onClick={(e) => e.stopPropagation()}
      >
        <source src="/como_jogar/video-como-jogar.mp4" className="" />
      </video>
    </div>
  )
}

export default ComoJogarVideo
