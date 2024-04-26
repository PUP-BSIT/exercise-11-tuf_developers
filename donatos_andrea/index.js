function commentForm() {
    let name = document.getElementById("member_name");
    if (name.value.length > 0) {
        document.getElementById("button").disabled = false;
    } else {
        document.getElementById("button").disabled = true;
    }

    let comment = document.getElementById("comment");
    if (comment.value.length > 0) {
        document.getElementById("button").disabled = false;
    } else {
        document.getElementById("butoon").disabled = true;
    }
} 
