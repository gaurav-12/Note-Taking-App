$( document ).ready(function() {
    let notesID = [0];
    $("#createNote").prop('disabled', true);
    
    $("#newNote").click(function() {
        if($("#newNoteDiv").css("visibility") === "collapse")
            $("#newNoteDiv").css("visibility", "visible");
        else 
        $("#newNoteDiv").css("visibility", "collapse");
    })

    $('input[type="text"]').keyup(function() {
        if($("#noteTitle").val() !== '' && 
            $("#noteDesc").val() !== ''){
                $("#createNote").prop('disabled', false);
        }
        else {
            $("#createNote").prop('disabled', true);
        }
     });

     $("#createNote").click(function() {
         let title = $("#noteTitle").val();
         let desc = $("#noteDesc").val();
         let id = notesID[notesID.length - 1] + 1
        $("#container").append(
            "<div id='" + id + "'>" +
            "<br> <br>" +
            "<input type='text' disabled='true' value='" + title  + "' >" +
            "<br>" +
            "<input type='text' disabled='true' value='" + desc  + "' >" +
            "<br>" +
            "<button type='button' id='" + id + "edit" + "' onClick='editNote(this)'> Edit </button>" +
            "<button type='button'id='" + id + "delete" + "' onClick='deleteNote(this)'>     Delete </button>" +
            "</div>"
        )

        $("#noteTitle").val("");
        $("#noteDesc").val("");
        $("#createNote").prop('disabled', true);
        notesID.push(id);
     })

});

function deleteNote(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
}

function editNote(element) {
    if(element.innerHTML !== "Done") {
        element.innerHTML = "Done";
        let inputs = element.parentNode.getElementsByTagName('input');
        inputs[0].disabled = false;
        inputs[1].disabled = false;
    }
    else {
        element.innerHTML = "Edit";
        let inputs = element.parentNode.getElementsByTagName('input');
        inputs[0].disabled = true;
        inputs[1].disabled = true;
    }
}