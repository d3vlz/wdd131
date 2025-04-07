const products = [
    { id: "p001", name: "Cafetera Premium" },
    { id: "p002", name: "Aspiradora Inteligente" },
    { id: "p003", name: "Robot de Cocina Multifunción" },
    { id: "p004", name: "Monitor Curvo 4K" },
    { id: "p005", name: "Teclado Mecánico RGB" },
    { id: "p006", name: "Auriculares Inalámbricos" },
    { id: "p007", name: "Batidora de Vaso" },
    { id: "p008", name: "Cámara de Seguridad WiFi" }
];

function loadProductOptions() {
    const productSelect = document.getElementById('product');
    
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.name;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadProductOptions();
});