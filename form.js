const infoForm = document.forms.infoForm;
const submitBtn = infoForm?.elements.submitBtn;
submitBtn.disabled = true;

function getName(a){
let nameText = a;
if(nameText.length>0&&infoForm.phone.value.length>0){
    submitBtn.disabled = false;    
}
else submitBtn.disabled=true;
}

function getPhone(a){
let phoneText = a;
if(phoneText.length>0){
    submitBtn.disabled = false;
}
else submitBtn.disabled=true;
}

submitBtn.addEventListener('click', () => {
    let nameText = infoForm.name.value;
    let phoneText = infoForm.phone.value;
    let comlexityText = infoForm.complexity.value;
    const infoObj = {
        name: nameText,
        phone: phoneText,
        comlexity: comlexityText,
        isChecked: infoForm.checkbox.checked,
    }
    console.log(infoObj);
});
 