export interface LayoutProps {
    children?: React.ReactNode
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <div className="bg-blue-50 border-r-2 border-l-2border-blue-200">
            <main className="container mx-auto bg-white h-screen rounded-lg">{children}</main>
        </div>
    )
}