import LayoutProfile from "@/components/layout/LayoutProfile"

const Layouts = ({ children }) => {
    return (
        <div>
            <LayoutProfile >
                {children}
            </LayoutProfile>
        </div>
    )
}

export default Layouts
