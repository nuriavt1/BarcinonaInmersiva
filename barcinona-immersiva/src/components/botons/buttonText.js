export default function ButtonText ({children, onClick, classname = ''}) {
    return(
        <button  onClick={onClick}>
           {children}
        </button>
    );
}