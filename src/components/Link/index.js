import { LinkStyle } from "./style";

const Link = ({children, href, size}) => {
    return (
        <LinkStyle href={href} size={size}>
            {children}
        </LinkStyle>
    );
}
export default Link;