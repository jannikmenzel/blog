document.addEventListener("DOMContentLoaded", function () {
    const seoScript = document.createElement("script");
    seoScript.type = "application/ld+json";
    seoScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://jannikmenzel.me",
        "name": "Jannik Menzel Portfolio",
        "description": "Der Studienblog von Jannik Menzel, einem Informatikstudenten an der Technischen Universität Dresden, bietet interessante Artikel zu Mathematik, Informatik, Technologie und mehr.",
        "publisher": {
            "@type": "Person",
            "name": "Jannik Menzel",
            "sameAs": "https://jannikmenzel.me"
        },
        "creator": {
            "@type": "Person",
            "name": "Jannik Menzel",
            "sameAs": "https://jannikmenzel.me"
        },
        "mainEntityOfPage": "https://jannikmenzel.me",
        "sameAs": [
            "https://github.com/jannikmenzel",
            "https://www.instagram.com/jnk.mnz/",
            "https://dev.to/jnk_mnz"
        ],
        "jobTitle": "Informatikstudent",
        "worksFor": {
            "@type": "EducationalOrganization",
            "name": "Technische Universität Dresden"
        },
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://jannikmenzel.me/blog?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    });

    document.head.appendChild(seoScript);
});