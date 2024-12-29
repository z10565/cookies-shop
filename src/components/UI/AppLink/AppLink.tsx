type TOAppLink = {
    href:string;
    dataLink:string;
    linkText:string;
}
export const AppLink = ({href, dataLink, linkText}: TOAppLink) => {
    return (
        <a href={href} data-link={dataLink}>
            {linkText}
        </a>
    );
};