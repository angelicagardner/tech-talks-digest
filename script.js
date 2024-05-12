document.addEventListener('DOMContentLoaded', function () {
    const labelFilter = document.getElementById('labelFilter');
    const tableRows = document.querySelectorAll('#talksTable tbody tr');

    function populateFilterOptions() {
        const labelSet = new Set();
        tableRows.forEach(row => {
            const labels = row.getAttribute('data-labels').split(', ');
            labels.forEach(label => labelSet.add(label));
        });
        labelSet.forEach(label => {
            const option = document.createElement('option');
            option.value = label;
            option.textContent = label;
            labelFilter.appendChild(option);
        });
    }

    function filterTable() {
        const selectedLabel = labelFilter.value;
        tableRows.forEach(row => {
            const labels = row.getAttribute('data-labels').split(', ');
            if (selectedLabel === 'all' || labels.includes(selectedLabel)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }

    populateFilterOptions();
    labelFilter.addEventListener('change', filterTable);
});
