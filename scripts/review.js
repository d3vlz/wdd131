function getUrlParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const pairs = queryString.split('&');
    
    pairs.forEach(pair => {
        const [key, value] = pair.split('=');
        if (key && value) {
            params[key] = decodeURIComponent(value.replace(/\+/g, ' '));
        }
    });
    
    return params;
}

function updateReviewCounter() {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount = parseInt(reviewCount) + 1;
    localStorage.setItem('reviewCount', reviewCount);
    
    document.getElementById('reviewCount').textContent = reviewCount;
}

function displayReviewDetails() {
    const params = getUrlParams();
    const summaryDiv = document.getElementById('reviewSummary');
    
    if (summaryDiv) {
        let summaryHTML = '';
        
        // Producto
        if (params.product) {
            summaryHTML += `<p><strong>Producto:</strong> ${params.product}</p>`;
        }
        
        // Valoración
        if (params.rating) {
            let stars = '';
            for (let i = 0; i < parseInt(params.rating); i++) {
                stars += '★';
            }
            summaryHTML += `<p><strong>Valoración:</strong> ${stars} (${params.rating}/5)</p>`;
        }
        
        if (params.installDate) {
            const date = new Date(params.installDate);
            const formattedDate = date.toLocaleDateString();
            summaryHTML += `<p><strong>Fecha de instalación:</strong> ${formattedDate}</p>`;
        }
        
        if (params.features) {
            let features = params.features;
            if (!Array.isArray(features)) {
                features = [features];
            }
            summaryHTML += `<p><strong>Características útiles:</strong> ${features.join(', ')}</p>`;
        }
        
        if (params.review) {
            summaryHTML += `<p><strong>Tu reseña:</strong> ${params.review}</p>`;
        }
        
        if (params.userName) {
            summaryHTML += `<p><strong>Nombre de usuario:</strong> ${params.userName}</p>`;
        }
        
        summaryDiv.innerHTML = summaryHTML;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    displayReviewDetails();
    updateReviewCounter();
});