function showToast(type) {
    let toastBox = document.getElementById("toastBox");
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerText = type === "success" ? "Success Message" : "Error Message";
    toastBox.appendChild(toast);
    setTimeout(() => { toast.remove(); }, 3000);
}
