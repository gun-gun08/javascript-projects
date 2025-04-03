let toastBox = document.getElementById('toastBox');

function showToast(message, type) {
    let toast = document.createElement('div');
    toast.classList.add('toast', type);
    toast.innerHTML = message;
    toastBox.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

