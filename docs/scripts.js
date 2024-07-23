const angleInput = document.getElementById('angleInput');
const angleSlider = document.getElementById('angleSlider');
const radioButtons = document.querySelectorAll('input[name="angle"]');

function updateUI(value) {
    value = Math.max(0, Math.min(360, value));
    angleInput.value = value;
    angleSlider.value = value;
    radioButtons.forEach(button => {
        button.checked = button.value == value;
    });
}

angleInput.addEventListener('input', () => {
    updateUI(Number(angleInput.value));
});

angleSlider.addEventListener('input', () => {
    updateUI(Number(angleSlider.value));
});

radioButtons.forEach(button => {
    button.addEventListener('change', () => {
        updateUI(Number(button.value));
    });
});
