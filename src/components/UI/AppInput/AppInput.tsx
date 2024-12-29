type TOAppInput = {
    type:string,
    placeholder:string,
    id:string,
}
export const AppInput = ({ type, placeholder, id}: TOAppInput) => {
    return (
        <input type={type} placeholder={placeholder} id={id} />
    );
};