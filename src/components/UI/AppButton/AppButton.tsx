type TOAppButton = {
    buttonText: string,
    buttonType: "submit" | "button",
    isDisabled?: boolean,
    className?: string,
    id?: string
}

const AppButton = ({ buttonText, buttonType, isDisabled, className, id }: TOAppButton) => {
    return (
        <button 
            disabled={isDisabled} 
            type={buttonType} 
            className={className} 
            id={id}
        >
            {buttonText}
        </button>
    );
};

export default AppButton;
