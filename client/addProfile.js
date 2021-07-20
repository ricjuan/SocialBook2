Template.addProfile.events({
    'click .js-save'(event){
        // grabs data from html page
        let profPic = $('#profPic').val();
        let profFirst = $('#firstName').val();
        let profLast = $('#lastName').val();
        let profAge = $('#age').val();
        let profGen = $('input[name="GenderRadio"]:checked').val();
        if (isAddFormValid(profPic, profFirst, profLast, profAge)){
            // Save data into collection
            profilesdb.insert({
                "pPic":profPic,
                "pFirst":profFirst,
                "pLast":profLast,
                "pAge":profAge,
                "pGen":profGen,
                "pOwn":Meteor.userId(),
                "pName":Meteor.user().username,
                 "createdOn": new Date().getTime()

            });
            // clear input boxes
            document.getElementById("preImg").src = "blank-profile_640.png";
            $('#profPic').val("");
            $('#firstName').val("");
            $('#lastName').val("");
            $('#age').val("");
            $('#addModal').modal('hide');
        }
    },
    'input #profPic'(event){
        let profPic = $('#profPic').val();
        document.getElementById("preImg").src = profPic;
    }
});

isAddFormValid = function(pic, first, last, age){
    let isValid = true;
    // reset each input box
    $("#profPic").removeClass("invalidWarn");
    $("#firstName").removeClass("invalidWarn");
    $("#lastName").removeClass("invalidWarn");
    $("#age").removeClass("invalidWarn");
    if (pic == ""){
        $("#profPic").addClass("invalidWarn");
        isValid = false;
    }
    if (first == ""){
        $("#firstName").addClass("invalidWarn");
        isValid = false;
    }
    if (last == ""){
        $("#lastName").addClass("invalidWarn");
        isValid = false;
    }
    if (age == ""){
        $("#age").addClass("invalidWarn");
        isValid = false;
    }
    return isValid;
}