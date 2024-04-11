document.getElementById('labelFilter').addEventListener('change', function() {
  const selectedLabel = this.value.toLowerCase();
  const talks = document.querySelectorAll('tr');

  talks.forEach(talk => {
    const labels = talk.dataset.labels.toLowerCase();
    if (selectedLabel === 'all' || labels.includes(selectedLabel)) {
      talk.style.display = '';
    } else {
      talk.style.display = 'none';
    }
  });
});
