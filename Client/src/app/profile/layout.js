import LayoutProfile from "@/components/layout/LayoutProfile"

const Layouts = ({ children }) => {
    return (
        <div>
            <LayoutProfile />
            {children}
        </div>
    )
}

export default Layouts
