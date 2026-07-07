
function course(courseName) {
    return function(batch) {
        return function(room) {
            console.log("Course : " + courseName);
            console.log("Batch : " + batch);
            console.log("Room : " + room);

            alert(
                "Course : " + courseName + "\n" +
                "Batch : " + batch + "\n" +
                "Room : " + room
            );
        };
    };
}

course("JavaScript")("Morning")("Batch-36");