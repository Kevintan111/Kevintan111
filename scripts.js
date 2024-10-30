<script>
    document.querySelectorAll('.sidebar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 80; // Adjusts for sidebar height
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        });
    });
</script>

