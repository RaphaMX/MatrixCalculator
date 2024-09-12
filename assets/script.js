document.addEventListener('DOMContentLoaded', () => {
    const versionSelect = document.getElementById('version-select');
    const downloadButton = document.getElementById('download-button');

    downloadButton.addEventListener('click', () => {
        const selectedVersion = versionSelect.value;
        window.location.href = selectedVersion;
    });
});
