const portfolioData = {
    projects: [
        {
            id: 1,
            title: "Personal Finance Tracker",
            description: "A React.js application for managing personal finances with interactive charts, expense tracking, and budget planning.",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            tags: ["react", "javascript"],
            tech: ["React.js", "Chart.js", "Tailwind CSS", "Local Storage"],
            github: "https://github.com/Naughty000/Personal-Finance-Track",
            live: "https://naughty000.github.io/Personal-Finance-Track",
            features: [
                "Interactive balance sheet visualization",
                "Expense categorization and tracking",
                "Income vs Expense comparison charts",
                "Budget planning and alerts",
                "Data persistence with Local Storage"
            ]
        },
        {
            id: 2,
            title: "Health Tracking App",
            description: "Calorie counter and nutrition tracker with meal planning, progress visualization, and health insights.",
            image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            tags: ["javascript"],
            tech: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
            github: "https://github.com/Naughty000/Health-Tracking-App",
            live: "https://health-tracking-app.vercel.app",
            features: [
                "Calorie counting with food database",
                "Meal planning and scheduling",
                "Nutrition facts visualization",
                "Progress tracking with charts",
                "Water intake tracker"
            ]
        },
        {
            id: 3,
            title: "Cat Breed Information",
            description: "Interactive web application providing detailed information about different cat breeds with search and filter functionality.",
            image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            tags: ["javascript"],
            tech: ["JavaScript", "REST API", "CSS Grid", "Flexbox"],
            github: "https://github.com/Naughty000/Cat-Breed-Info",
            live: "https://cat-breed-info.netlify.app",
            features: [
                "Search cat breeds by name",
                "Filter by characteristics and traits",
                "Detailed breed information",
                "High-quality images gallery",
                "Responsive design for all devices"
            ]
        },
        {
            id: 4,
            title: "Phone Number Validator",
            description: "Tool for validating and formatting international phone numbers with real-time feedback and country code support.",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            tags: ["javascript"],
            tech: ["JavaScript", "Regex", "HTML5", "CSS3"],
            github: "https://github.com/Naughty000/Phone-Number-Validator",
            live: "https://naughty000.github.io/Phone-Number-Validator",
            features: [
                "Real-time phone number validation",
                "Support for 50+ country codes",
                "Automatic formatting",
                "Error detection and suggestions",
                "Copy to clipboard functionality"
            ]
        },
        {
            id: 5,
            title: "Restaurant Menu System",
            description: "Interactive restaurant menu with category filtering, order management, and real-time cart updates.",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            tags: ["javascript", "fullstack"],
            tech: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
            github: "https://github.com/Naughty000/Restaurant-Menu-System",
            live: "https://naughty000.github.io/Restaurant-Menu-System",
            features: [
                "Interactive menu with categories",
                "Add to cart functionality",
                "Real-time order summary",
                "Table booking system",
                "Responsive design"
            ]
        },
        {
            id: 6,
            title: "Nutrition Facts Generator",
            description: "Application to generate and display nutrition facts labels for various food items with detailed breakdown.",
            image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            tags: ["javascript"],
            tech: ["JavaScript", "HTML5", "CSS3", "Chart.js"],
            github: "https://github.com/Naughty000/Nutrition-Facts-Generator",
            live: "https://naughty000.github.io/Nutrition-Facts-Generator",
            features: [
                "Nutrition facts label generation",
                "Macro and micronutrient tracking",
                "Food database integration",
                "Printable labels",
                "Daily value calculations"
            ]
        }
    ],
    skills: {
        frontend: [
            { name: "React.js", icon: "fab fa-react", level: 90 },
            { name: "JavaScript (ES6+)", icon: "fab fa-js", level: 85 },
            { name: "HTML5", icon: "fab fa-html5", level: 95 },
            { name: "CSS3", icon: "fab fa-css3-alt", level: 90 },
            { name: "Tailwind CSS", icon: "fas fa-palette", level: 80 },
            { name: "Responsive Design", icon: "fas fa-mobile-alt", level: 85 }
        ],
        backend: [
            { name: "Node.js", icon: "fab fa-node-js", level: 70 },
            { name: "MongoDB", icon: "fas fa-database", level: 65 },
            { name: "SQL", icon: "fas fa-database", level: 75 },
            { name: "REST APIs", icon: "fas fa-server", level: 80 },
            { name: "Python", icon: "fab fa-python", level: 85 },
            { name: "Git & GitHub", icon: "fab fa-git-alt", level: 90 }
        ],
        tools: [
            { name: "VS Code", icon: "fas fa-code", level: 95 },
            { name: "Figma", icon: "fab fa-figma", level: 60 },
            { name: "Postman", icon: "fas fa-paper-plane", level: 75 },
            { name: "Chrome DevTools", icon: "fab fa-chrome", level: 85 },
            { name: "npm/yarn", icon: "fab fa-npm", level: 80 },
            { name: "Docker", icon: "fab fa-docker", level: 50 }
        ]
    }
};

const loadingScreen = document.getElementById('loadingScreen');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const navLinksAll = document.querySelectorAll('.nav-link');
const themeToggle = document.getElementById('themeToggle');
const projectsGrid = document.getElementById('projectsGrid');
const skillsContainer = document.getElementById('skillsContainer');
const filterBtns = document.querySelectorAll('.filter-btn');
const backToTop = document.getElementById('backToTop');
const contactForm = document.getElementById('contactForm');

window.addEventListener('load', () => {
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        
        document.querySelectorAll('.progress-fill').forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = `${width}%`;
        });
        
        loadProjects();
        loadSkills();
        initCVDownload();
    }, 1500);
});

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
});

navLinksAll.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
        
        navLinksAll.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('dark-theme')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    const icon = themeToggle.querySelector('i');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

function loadProjects(filter = 'all') {
    projectsGrid.innerHTML = '';
    
    const filteredProjects = filter === 'all' 
        ? portfolioData.projects 
        : portfolioData.projects.filter(project => 
            project.tags.includes(filter)
        );
    
    filteredProjects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.animationDelay = `${index * 0.1}s`;
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tech.map(tech => `<span class="project-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" class="project-link">
                        <i class="fab fa-github"></i> Code
                    </a>
                    <a href="${project.live}" target="_blank" class="project-link">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
        
        setTimeout(() => {
            projectCard.classList.add('visible');
        }, 100);
    });
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        loadProjects(filter);
    });
});

function loadSkills() {
    skillsContainer.innerHTML = '';
    
    Object.entries(portfolioData.skills).forEach(([category, skills]) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skill-category';
        
        let icon = 'fas fa-code';
        let title = 'Frontend';
        
        switch(category) {
            case 'backend':
                icon = 'fas fa-server';
                title = 'Backend & Database';
                break;
            case 'tools':
                icon = 'fas fa-tools';
                title = 'Tools & Platforms';
                break;
        }
        
        categoryDiv.innerHTML = `
            <h3><i class="${icon}"></i> ${title}</h3>
            <div class="skill-list">
                ${skills.map(skill => `
                    <div class="skill-item">
                        <i class="${skill.icon}"></i>
                        <span>${skill.name}</span>
                    </div>
                `).join('')}
            </div>
        `;
        
        skillsContainer.appendChild(categoryDiv);
    });
}

function handleScrollAnimations() {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
    
    const sections = document.querySelectorAll('section');
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinksAll.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
    
    const animateElements = document.querySelectorAll('.project-card');
    animateElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScrollAnimations);

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            const successMsg = document.createElement('div');
            successMsg.className = 'success-message';
            successMsg.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for your message. I'll get back to you soon.</p>
            `;
            
            const style = document.createElement('style');
            style.textContent = `
                .success-message {
                    text-align: center;
                    padding: 30px;
                    background: rgba(16, 185, 129, 0.1);
                    border-radius: 12px;
                    margin-top: 20px;
                }
                .success-message i {
                    font-size: 3rem;
                    color: #10B981;
                    margin-bottom: 20px;
                }
                .success-message h3 {
                    color: #10B981;
                    margin-bottom: 10px;
                }
                .success-message p {
                    color: #6B7280;
                }
            `;
            
            if (!document.querySelector('#success-styles')) {
                style.id = 'success-styles';
                document.head.appendChild(style);
            }
            
            contactForm.parentNode.insertBefore(successMsg, contactForm.nextSibling);
            contactForm.reset();
            
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            setTimeout(() => {
                successMsg.remove();
            }, 5000);
        }, 2000);
    });
}

function initCVDownload() {
    const cvLinks = document.querySelectorAll('a[href*="Arooj-Abbas-CV"]');
    
    cvLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('CV downloaded: Arooj-Abbas-CV.pdf', new Date());
            
            showDownloadNotification();
            
            if (this.getAttribute('target') === '_blank') {
                e.preventDefault();
                window.open(this.href, '_blank');
            }
        });
    });
}

function showDownloadNotification() {
    const notification = document.createElement('div');
    notification.className = 'download-notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <div>
            <h4>CV Downloaded!</h4>
            <p>Thank you for your interest. Check your downloads folder.</p>
        </div>
    `;
    
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .download-notification {
                position: fixed;
                bottom: 100px;
                right: 30px;
                background: #10B981;
                color: white;
                padding: 20px;
                border-radius: 12px;
                display: flex;
                align-items: center;
                gap: 15px;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                z-index: 1000;
                animation: slideInRight 0.3s ease;
                max-width: 350px;
            }
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            .download-notification i {
                font-size: 2rem;
            }
            .download-notification h4 {
                margin-bottom: 5px;
            }
            .download-notification p {
                font-size: 0.9rem;
                opacity: 0.9;
            }
            @keyframes slideOutRight {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
    handleScrollAnimations();
    
    const buttons = document.querySelectorAll('.btn, .project-link, .social-link, .filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-3px)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0)';
        });
    });
    
    console.log('%c🚀 Welcome to Arooj Abbas Portfolio!', 'color: #7C3AED; font-size: 18px; font-weight: bold;');
    console.log('%c👨‍💻 Frontend Developer | React.js Specialist', 'color: #2563EB; font-size: 14px;');
    console.log('%c📧 Contact: kambohabbas04@gmail.com', 'color: #10B981; font-size: 14px;');
});
