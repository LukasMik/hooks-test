interface IProps {
    name: string
}

export const Header = ({name}: IProps) => {
    return <h1 className='heading'>{name}</h1>
}