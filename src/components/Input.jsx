const Input = ({ disabled = false, className, ...props }) => (
    <input
        disabled={disabled}
        className={`${className} rounded-md shadow-sm input input-bordered`}
        {...props}
    />
)

export default Input
