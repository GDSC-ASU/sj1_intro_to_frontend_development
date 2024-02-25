const Student = (props) => {
    return (
        <div>
            <h3>Student Component:</h3>
            <ul>
                <li>{props.name}</li>
                <li>{props.id}</li>
                <li>
                    {props.graduate
                        ? `${props.name} is a graduate stundet`
                        : `${props.name} is not a graduate stundet`}
                </li>
            </ul>
        </div>
    );
};

export default Student;
