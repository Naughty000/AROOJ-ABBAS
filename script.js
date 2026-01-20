
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
const skillsContainer = document.querySelector('.skills-container');
const filterBtns = document.querySelectorAll('.filter-btn');
const backToTop = document.getElementById('backToTop');
const contactForm = document.getElementById('contactForm');
const projectModal = document.getElementById('projectModal');
const closeModal = document.querySelector('.close-modal');
const modalBody = document.getElementById('modalBody');
const downloadCV = document.getElementById('downloadCV');

window.addEventListener('load', () => {
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        
       
        document.querySelectorAll('.progress-fill').forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = `${width}%`;
        });
        
        
        loadProjects();
        loadSkills();
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
        
        // Update active link
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
                    <a href="#" class="project-link view-details" data-id="${project.id}">
                        <i class="fas fa-info-circle"></i> Details
                    </a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
        
       
        setTimeout(() => {
            projectCard.classList.add('visible');
        }, 100);
    });
    
    // Add event listeners to view details buttons
    document.querySelectorAll('.view-details').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = parseInt(btn.getAttribute('data-id'));
            openProjectModal(projectId);
        });
    });
}


filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Filter projects
        const filter = btn.getAttribute('data-filter');
        loadProjects(filter);
    });
});


function openProjectModal(projectId) {
    const project = portfolioData.projects.find(p => p.id === projectId);
    
    if (project) {
        modalBody.innerHTML = `
            <div class="modal-project">
                <div class="modal-header">
                    <h2>${project.title}</h2>
                    <div class="modal-tags">
                        ${project.tech.map(tech => `<span class="modal-tag">${tech}</span>`).join('')}
                    </div>
                </div>
                
                <div class="modal-image">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                
                <div class="modal-content">
                    <h3>Project Overview</h3>
                    <p>${project.description}</p>
                    
                    <h3>Key Features</h3>
                    <ul class="modal-features">
                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    
                    <h3>Technologies Used</h3>
                    <div class="modal-tech">
                        ${project.tech.map(tech => `
                            <div class="tech-item">
                                <i class="fas fa-check"></i>
                                <span>${tech}</span>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div class="modal-links">
                        <a href="${project.github}" target="_blank" class="btn btn-primary">
                            <i class="fab fa-github"></i> View Code
                        </a>
                        <a href="${project.live}" target="_blank" class="btn btn-secondary">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                    </div>
                </div>
            </div>
        `;
   
        const style = document.createElement('style');
        style.textContent = `
            .modal-project {
                padding: 20px;
            }
            .modal-header {
                margin-bottom: 30px;
            }
            .modal-header h2 {
                font-size: 2rem;
                margin-bottom: 10px;
                color: var(--dark);
            }
            .dark-theme .modal-header h2 {
                color: var(--light);
            }
            .modal-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
            }
            .modal-tag {
                padding: 5px 15px;
                background: rgba(124, 58, 237, 0.1);
                color: var(--primary);
                border-radius: 20px;
                font-size: 0.9rem;
                font-weight: 500;
            }
            .modal-image {
                width: 100%;
                height: 300px;
                border-radius: var(--border-radius);
                overflow: hidden;
                margin-bottom: 30px;
            }
            .modal-image img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .modal-content h3 {
                margin: 25px 0 15px;
                color: var(--dark);
            }
            .dark-theme .modal-content h3 {
                color: var(--light);
            }
            .modal-features {
                padding-left: 20px;
                margin-bottom: 20px;
                color: var(--gray);
            }
            .modal-features li {
                margin-bottom: 8px;
            }
            .modal-tech {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
                gap: 15px;
                margin-bottom: 30px;
            }
            .tech-item {
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 10px 15px;
                background: rgba(124, 58, 237, 0.1);
                border-radius: var(--border-radius);
                color: var(--primary);
            }
            .modal-links {
                display: flex;
                gap: 15px;
                margin-top: 30px;
            }
        `;
        
        
        const existingStyle = document.querySelector('#modal-styles');
        if (existingStyle) existingStyle.remove();
        
        style.id = 'modal-styles';
        document.head.appendChild(style);
        
        projectModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}


closeModal.addEventListener('click', () => {
    projectModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        projectModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
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
                        <span class="skill-level">${skill.level}%</span>
                    </div>
                `).join('')}
            </div>
        `;
        
        skillsContainer.appendChild(categoryDiv);
        
        // Add skill level styles
        const style = document.createElement('style');
        style.textContent = `
            .skill-level {
                margin-left: auto;
                font-size: 0.8rem;
                opacity: 0.8;
                font-weight: 600;
                color: var(--primary);
            }
        `;
        
        if (!document.querySelector('#skill-styles')) {
            style.id = 'skill-styles';
            document.head.appendChild(style);
        }
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
        
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        
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
                    border-radius: var(--border-radius);
                    margin-top: 20px;
                }
                .success-message i {
                    font-size: 3rem;
                    color: var(--success);
                    margin-bottom: 20px;
                }
                .success-message h3 {
                    color: var(--success);
                    margin-bottom: 10px;
                }
                .success-message p {
                    color: var(--gray);
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


if (downloadCV) {
    downloadCV.addEventListener('click', (e) => {
        
        if (!document.querySelector('a[href*="Arooj-Abbas-CV.pdf"]')) {
            e.preventDefault();
            
            
            const cvContent = `
                AROOJ ABBAS
                Frontend Developer | React.js Specialist
                
                CONTACT
                Email: kambohabbas04@gmail.com
                Phone: +92 327 4266152
                GitHub: github.com/Naughty000
                LinkedIn: linkedin.com/in/arooj-abbas-80110a3a7
                Portfolio: naughty000.github.io
                
                SUMMARY
                BSCS 6th Semester student at Punjab University with hands-on experience 
                in React.js frontend development. Built 6+ deployed web applications 
                focusing on user experience and responsive design.
                
                SKILLS
                • Frontend: React.js, JavaScript, HTML5, CSS3, Tailwind CSS
                • Backend: Node.js, MongoDB, SQL, Python
                • Tools: Git, GitHub, VS Code, REST APIs
                
                PROJECTS
                1. Personal Finance Tracker - React.js, Chart.js, Tailwind CSS
                2. Health Tracking App - JavaScript, HTML5, CSS3
                3. Cat Breed Information - JavaScript, REST API
                4. Phone Number Validator - JavaScript, Regex
                5. Restaurant Menu System - JavaScript, Local Storage
                6. Nutrition Facts Generator - JavaScript, Chart.js
                
                EDUCATION
                • BSCS Computer Science - Punjab University (2022-Present)
                • F.Sc. Pre-Engineering - Govt. Girls College, Muridke
                
                EXPERIENCE
                • Teaching Assistant - Computer Organization, Punjab University
                • Computer Science Teacher - Inspire Education School System
                
                CERTIFICATIONS
                • Web Design & Development - PNY Trainings
                • Frontend Development - freeCodeCamp
                • Python Programming - Punjab University
            `;
            
            const blob = new Blob([cvContent], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Arooj-Abbas-CV.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            // Show download notification
            const notification = document.createElement('div');
            notification.className = 'download-notification';
            notification.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <span>CV downloaded successfully!</span>
            `;
            
            
            const style = document.createElement('style');
            style.textContent = `
                .download-notification {
                    position: fixed;
                    bottom: 30px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: var(--success);
                    color: white;
                    padding: 15px 25px;
                    border-radius: var(--border-radius);
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    box-shadow: var(--shadow);
                    z-index: 1000;
                    animation: slideUp 0.3s ease;
                }
                @keyframes slideUp {
                    from { transform: translate(-50%, 100px); opacity: 0; }
                    to { transform: translate(-50%, 0); opacity: 1; }
                }
                .download-notification i {
                    font-size: 1.2rem;
                }
            `;
            
            if (!document.querySelector('#notification-styles')) {
                style.id = 'notification-styles';
                document.head.appendChild(style);
            }
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 3000);
        }
    });
}

function initTypingAnimation() {
    const heroTitle = document.querySelector('.hero-title .highlight');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
    }
}

window.addEventListener('load', initTypingAnimation);

function createParticles() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;
    
    const particlesCount = 20;
    
    for (let i = 0; i < particlesCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        
        const size = Math.random() * 10 + 5;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
     
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            left: ${posX}%;
            top: ${posY}%;
            animation: float ${duration}s infinite ease-in-out ${delay}s;
        `;
        
        heroSection.appendChild(particle);
    }
    
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% {
                transform: translateY(0) rotate(0deg);
                opacity: 0.3;
            }
            50% {
                transform: translateY(-20px) rotate(180deg);
                opacity: 0.1;
            }
        }
    `;
    
    if (!document.querySelector('#particle-styles')) {
        style.id = 'particle-styles';
        document.head.appendChild(style);
    }
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
