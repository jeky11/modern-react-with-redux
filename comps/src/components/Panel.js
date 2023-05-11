import classNames from "classnames";

function Panel({children, className, ...rest}) {
    const classes = classNames('border rounded p-3 shadow bg-write w-full', className);

    return (
        <div {...rest} className={classes}>
            {children}
        </div>
    );
}

export default Panel;