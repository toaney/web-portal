"use client"

type Props = {
  params: UrlParams
}

type UrlParams = {
  id: string
}

const SitAmet = ({params}: Props) => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      Sit Amet - {params.id}
    </div>
  )
}

export default SitAmet;