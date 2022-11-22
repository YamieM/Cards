const infoForm = document.forms.infoForm;
const submitBtn = infoForm?.elements.submitBtn;
submitBtn.disabled = true;

function getName(a){
const nameText = a;
if(nameText.length>0&&infoForm.phone.value.length>0){
    submitBtn.disabled = false;    
}
else submitBtn.disabled=true;
}

function getPhone(a){
const phoneText = a;
if(phoneText.length>0 && infoForm.name.value.length>0){
    submitBtn.disabled = false;
}
else submitBtn.disabled=true;
}

submitBtn.addEventListener('click', () => {
    const name = infoForm.name.value;
    const phone = infoForm.phone.value;
    const complexity = infoForm.complexity.value;
    const infoObj = {
        name,
        phone,
        complexity,
        isChecked: infoForm.checkbox.checked,
    }
    console.log(infoObj);
});
 