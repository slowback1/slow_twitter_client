import commonWords from '../constants/commonWords';
function changeCheckbox(inputArr) {
    document.getElementById("commonOmission").checked = false;
    document.getElementById("noOmission").checked = false;
    document.getElementById("ownOmission").checked = false;
    document.getElementById("changeOmission").disabled = true;
    if(inputArr === "") {
        document.getElementById("noOmission").checked = true;
    } else if(inputArr === commonWords) {
        document.getElementById("commonOmission").checked = true;
    } else {
        document.getElementById("ownOmission").checked = true;
        document.getElementById("changeOmission").disabled = false;
    }
}

export default changeCheckbox;