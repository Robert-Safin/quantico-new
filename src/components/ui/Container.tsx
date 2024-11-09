import { FC } from "react"


type Props = {
  children: React.ReactNode
}

const Container:FC<Props> = (props) => {
  return (
    <div className="max-w-screen-desktop mx-auto w-full px-7 tablet:px-12 desktop:px-14">
      {props.children}
    </div>
  )
}

export default Container
