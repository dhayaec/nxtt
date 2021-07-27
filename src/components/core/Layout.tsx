export interface LayoutProps {
    children?: React.ReactNode
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <>
            <main className="container mx-auto">{children}</main>
        </>
    )
}