
function CourseSave(props) {
    return (<div>
        course name: < input type="text" onChange={props.nameChangedEvent}
            value={props.courseSaveName} />
        course code: <input type="text" />
        <input type="button" value="save" onClick={props.onClickFn} />

        <h4> === === === === === === === === === === === == </h4>
        <h4> === === === === === === === === === === === == </h4>
    </div >
    
    )
}

export default CourseSave;