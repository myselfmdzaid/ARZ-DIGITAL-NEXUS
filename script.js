document.addEventListener('DOMContentLoaded', () => {
    // Services Data with Detailed Info
    const services = [
        {
            title: "Web Development",
            description: "Custom website development tailored to your needs, available with or without hosting solutions.",
            details: "We build fast, responsive, and beautiful websites. Whether you need a personal blog, a business site, or an online store, we handle everything from design to putting it online.",
            icon: "fa-code"
        },
        {
            title: "Resume & Portfolio Website",
            description: "Showcase your skills and experience with a professional digital portfolio and resume site.",
            details: "Stand out from the crowd! We create a personal website just for you that highlights your skills, projects, and experience. It's like a resume, but interactive and much cooler.",
            icon: "fa-id-card"
        },
        {
            title: "Web Application",
            description: "Powerful and scalable web applications built to solve your business problems.",
            details: "Need software that runs in a browser? We build custom tools to help your business run smoother, manage data, or provide a service to your customers.",
            icon: "fa-laptop-code"
        },
        {
            title: "Short Form Video Editing",
            description: "Engaging edits for Reels, TikToks, and Shorts to boost your social media presence.",
            details: "We take your raw footage and turn it into catchy, high-energy videos perfect for Instagram Reels, TikTok, and YouTube Shorts. We add music, captions, and effects.",
            icon: "fa-video"
        },
        {
            title: "Social Media Post Design",
            description: "Daily creative designs to keep your social media feed active and attractive.",
            details: "Keep your followers engaged! We design eye-catching posts for Instagram, Facebook, and LinkedIn that look professional and match your brand style.",
            icon: "fa-paintbrush"
        },
        {
            title: "Menu to Website",
            description: "Digitize your restaurant or business menu into an interactive website format.",
            details: "Ditch the PDF! We turn your restaurant or cafe menu into a mobile-friendly website where customers can easily browse photos and prices of your food.",
            icon: "fa-utensils"
        },
        {
            title: "QR Code Generation",
            description: "Custom QR codes for your social media, shop, website, or digital payments.",
            details: "We make custom QR codes that scan instantly. Use them for your menu, Wi-Fi, Instagram page, or payment links. We can even add your logo to them.",
            icon: "fa-qrcode"
        },
        {
            title: "WhatsApp Business Automation",
            description: "Setup auto-replies, catalogs, and order management for seamless communication.",
            details: "Save time replying to messages. We set up your WhatsApp Business to automatically answer common questions, show your products, and even take orders while you sleep.",
            icon: "fa-whatsapp"
        },
        {
            title: "Chatbot Integration",
            description: "Intelligent chatbots for your website or social platforms to handle customer queries.",
            details: "Add a smart assistant to your website. It talks to visitors, answers their questions 24/7, and helps them find what they need without you lifting a finger.",
            icon: "fa-robot"
        },
        {
            title: "Data Analysis & Dashboard",
            description: "Comprehensive data analysis with interactive dashboards and monthly reports.",
            details: "We turn your messy data into clear, colorful charts and graphs. See exactly how your business is doing with an easy-to-read dashboard updated every month.",
            icon: "fa-chart-line"
        },
        {
            title: "One Page Festival Website",
            description: "Specialized single-page websites for festivals, events, or seasonal promotions.",
            details: "Planning an event? We build a stunning one-page website to share all the details, sell tickets, and get people excited about your festival or special occasion.",
            icon: "fa-calendar-check"
        },
        {
            title: "Data Cleaning",
            description: "Organize and clean your datasets to ensure accuracy and usability.",
            details: "Got a messy Excel file? We fix it. We remove duplicates, fix errors, and organize your data so it's ready to use for reports or marketing.",
            icon: "fa-database"
        },
        {
            title: "Excel Works",
            description: "Advanced Excel solutions including formulas, macros, and spreadsheet management.",
            details: "Stop struggling with spreadsheets. We create complex formulas, automatic calculators, and professional sheets to make your work life easier.",
            icon: "fa-file-excel"
        }
    ];

    const servicesGrid = document.getElementById('services-grid');
    const modal = document.getElementById('service-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    
    // Modal Elements
    const modalTitle = document.getElementById('modal-title');
    const modalIcon = document.getElementById('modal-icon');
    const modalDesc = document.getElementById('modal-description');
    const modalDetails = document.getElementById('modal-details');

    // Render Services
    services.forEach((service, index) => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.style.animationDelay = `${index * 0.1}s`; 
        
        card.innerHTML = `
            <div class="card-icon-wrapper">
                <i class="fa-solid ${service.icon}"></i>
            </div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <span class="read-more">Click for Details <i class="fa-solid fa-arrow-right"></i></span>
        `;
        
        // Add click sound effect
        card.addEventListener('mouseenter', () => {
            playHoverSound();
        });

        // Open Modal on Click
        card.addEventListener('click', () => {
            openModal(service);
        });

        servicesGrid.appendChild(card);
    });

    // Modal Functions
    function openModal(service) {
        modalTitle.textContent = service.title;
        modalIcon.className = `fa-solid ${service.icon}`;
        modalDesc.textContent = service.description;
        modalDetails.innerHTML = `<p class="detail-text">${service.details}</p>`;
        
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);
    }

    window.closeModal = function() {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }

    closeModalBtn.addEventListener('click', closeModal);

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            closeModal();
        }
    });

    // Sound Effects
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    function playHoverSound() {
        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }
        
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(880, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.02, audioContext.currentTime); // Lower volume
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.1);
    }

    // Smooth Scrolling for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form Submission Handling with Web3Forms AJAX
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validation Regex
            const phoneRegex = /^\d{10}$/;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Reset button style for feedback
            btn.style.background = '';
            btn.disabled = false;

            // Validation Checks
            if (!name) {
                alert("Please enter your Name.");
                return;
            }
            if (!phoneRegex.test(phone)) {
                alert("Please enter a valid 10-digit Phone Number (no spaces or dashes).");
                return;
            }
            if (!emailRegex.test(email)) {
                alert("Please enter a valid Email Address.");
                return;
            }
            if (!message) {
                alert("Please enter your Enquiry Request.");
                return;
            }

            // Start Sending
            btn.innerHTML = 'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';
            btn.disabled = true;

            const formData = new FormData(form);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    btn.innerHTML = 'Message Sent! <i class="fa-solid fa-check"></i>';
                    btn.style.background = 'linear-gradient(90deg, #00b09b, #96c93d)'; // Success green
                    form.reset();
                    
                    // Reset button after 3 seconds
                    setTimeout(() => {
                        btn.innerHTML = originalText;
                        btn.style.background = '';
                        btn.disabled = false;
                    }, 3000);
                } else {
                    console.log(response);
                    btn.innerHTML = 'Error! Try Again <i class="fa-solid fa-triangle-exclamation"></i>';
                    btn.style.background = 'linear-gradient(90deg, #ff416c, #ff4b2b)'; // Error red
                    
                    setTimeout(() => {
                        btn.innerHTML = originalText;
                        btn.style.background = '';
                        btn.disabled = false;
                    }, 3000);
                }
            })
            .catch(error => {
                console.log(error);
                btn.innerHTML = 'Error! Try Again <i class="fa-solid fa-triangle-exclamation"></i>';
                btn.style.background = 'linear-gradient(90deg, #ff416c, #ff4b2b)';
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.background = '';
                    btn.disabled = false;
                }, 3000);
            });
        });
    }
});
