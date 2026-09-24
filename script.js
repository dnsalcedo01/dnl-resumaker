/**
 * Vector graphics assets for institution and organization emblems.
 */
const LOGOS = {
    crest: `<svg viewBox="0 0 36 36" width="28" height="28"><circle cx="18" cy="18" r="17" fill="#0d47a1" stroke="#fbc02d" stroke-width="2"/><circle cx="18" cy="18" r="12" fill="#ffffff"/><path d="M18 8 L18 28 M10 15 L26 15" stroke="#fbc02d" stroke-width="3" stroke-linecap="round"/><circle cx="18" cy="18" r="4.5" fill="#0d47a1"/></svg>`,
    badge: `<svg viewBox="0 0 36 36" width="28" height="28"><circle cx="18" cy="18" r="17" fill="#1b5e20" stroke="#fbc02d" stroke-width="1.5"/><circle cx="18" cy="18" r="12" fill="#ffffff"/><path d="M12 18 C12 25 24 25 24 18 C24 11 18 9 18 9 C18 9 12 11 12 18 Z" fill="#2e7d32"/><circle cx="18" cy="18" r="3.5" fill="#fbc02d"/></svg>`,
    globe: `<svg viewBox="0 0 36 36" width="28" height="28"><circle cx="18" cy="18" r="17" fill="#33691e" stroke="#c0ca33" stroke-width="1.5"/><circle cx="18" cy="18" r="12" fill="#ffffff"/><path d="M13 23 C13 19 16 17 18 17 C20 17 23 19 23 23 Z" fill="#558b2f"/><circle cx="18" cy="13" r="3.5" fill="#fbc02d"/></svg>`
};

/**
 * Default placeholder portrait avatar (SVG data URI).
 */
const DEFAULT_PHOTO = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f1f5f9"/>
      <stop offset="100%" stop-color="#cbd5e1"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" fill="url(#bg)"/>
  <path d="M 12 100 L 22 68 L 38 72 L 50 80 L 62 72 L 78 68 L 88 100 Z" fill="#1e293b"/>
  <polygon points="38,72 50,80 62,72 55,54 45,54" fill="#ffffff"/>
  <polygon points="48,66 52,66 54,100 46,100" fill="#1d4ed8"/>
  <rect x="44" y="48" width="12" height="12" fill="#fbd5b5" rx="2"/>
  <ellipse cx="50" cy="36" rx="16" ry="19" fill="#fbd5b5"/>
  <path d="M 34 33 C 34 16 66 16 66 33 C 66 24 61 17 50 17 C 39 17 34 24 34 33 Z" fill="#1e1b18"/>
  <ellipse cx="45" cy="35" rx="1.8" ry="1.4" fill="#1e1b18"/>
  <ellipse cx="55" cy="35" rx="1.8" ry="1.4" fill="#1e1b18"/>
  <path d="M 42 31 Q 45 29 48 31" stroke="#1e1b18" stroke-width="1.2" fill="none"/>
  <path d="M 52 31 Q 55 29 58 31" stroke="#1e1b18" stroke-width="1.2" fill="none"/>
  <path d="M 50 35 L 49 40 L 52 40" stroke="#d97706" stroke-width="1" fill="none"/>
  <path d="M 46 44 Q 50 47 54 44" stroke="#b45309" stroke-width="1.2" fill="none"/>
</svg>
`)}`;

/**
 * Default sample signature graphic (SVG data URI).
 */
const DEFAULT_SIGNATURE = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 60" width="160" height="60">
  <path d="M 65 10 C 52 14, 42 30, 52 40 C 60 48, 74 44, 69 32 C 64 20, 48 16, 58 48 C 64 58, 80 50, 85 35 C 90 20, 82 25, 78 45" fill="none" stroke="#111827" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M 88 18 L 90 12 L 92 18 L 98 20 L 92 22 L 90 28 L 88 22 L 82 20 Z" fill="#111827"/>
</svg>
`)}`;

/**
 * Curated FontAwesome icons catalog for visual picker selection.
 */
const ICON_LIST = [
    { class: 'far fa-window-maximize', name: 'Window Max' },
    { class: 'fas fa-laptop-code', name: 'Laptop Code' },
    { class: 'fas fa-paper-plane', name: 'Paper Plane' },
    { class: 'fas fa-hourglass-half', name: 'Hourglass' },
    { class: 'fas fa-photo-video', name: 'Photo/Video' },
    { class: 'fas fa-camera', name: 'Camera' },
    { class: 'fas fa-film', name: 'Film' },
    { class: 'fas fa-robot', name: 'Robot' },
    { class: 'fas fa-microchip', name: 'Microchip' },
    { class: 'fas fa-brain', name: 'Brain' },
    { class: 'fas fa-code', name: 'Code' },
    { class: 'fas fa-terminal', name: 'Terminal' },
    { class: 'fas fa-desktop', name: 'Desktop' },
    { class: 'fas fa-server', name: 'Server' },
    { class: 'fas fa-database', name: 'Database' },
    { class: 'fas fa-cloud', name: 'Cloud' },
    { class: 'fas fa-network-wired', name: 'Network' },
    { class: 'fas fa-shield-alt', name: 'Security' },
    { class: 'fas fa-lock', name: 'Lock' },
    { class: 'fas fa-key', name: 'Key' },
    { class: 'fas fa-bug', name: 'Bug' },
    { class: 'fas fa-tools', name: 'Tools' },
    { class: 'fas fa-wrench', name: 'Wrench' },
    { class: 'fas fa-cog', name: 'Settings' },
    { class: 'fas fa-rocket', name: 'Rocket' },
    { class: 'fas fa-star', name: 'Star' },
    { class: 'fas fa-heart', name: 'Heart' },
    { class: 'fas fa-lightbulb', name: 'Idea' },
    { class: 'fas fa-award', name: 'Award' },
    { class: 'fas fa-certificate', name: 'Certificate' },
    { class: 'fas fa-graduation-cap', name: 'Graduation' },
    { class: 'fas fa-book', name: 'Book' },
    { class: 'fas fa-briefcase', name: 'Briefcase' },
    { class: 'fas fa-chart-line', name: 'Analytics' },
    { class: 'fas fa-tasks', name: 'Tasks' },
    { class: 'fas fa-calendar-alt', name: 'Calendar' },
    { class: 'fas fa-stopwatch', name: 'Stopwatch' },
    { class: 'fas fa-clock', name: 'Clock' },
    { class: 'fas fa-bell', name: 'Notification' },
    { class: 'fas fa-comments', name: 'Comments' },
    { class: 'fas fa-globe', name: 'Globe' },
    { class: 'fas fa-compass', name: 'Compass' },
    { class: 'fas fa-map-marked-alt', name: 'Map' },
    { class: 'fas fa-mobile-alt', name: 'Mobile' },
    { class: 'fas fa-wifi', name: 'Wi-Fi' },
    { class: 'fas fa-music', name: 'Music' },
    { class: 'fas fa-headphones', name: 'Headphones' },
    { class: 'fas fa-gamepad', name: 'Gaming' },
    { class: 'fas fa-paint-brush', name: 'Paint' },
    { class: 'fas fa-palette', name: 'Palette' },
    { class: 'fas fa-pen-nib', name: 'Design' },
    { class: 'fas fa-clone', name: 'Clone' },
    { class: 'fas fa-layer-group', name: 'Layers' },
    { class: 'fas fa-folder', name: 'Folder' },
    { class: 'fas fa-folder-open', name: 'Folder Open' },
    { class: 'fas fa-file-alt', name: 'Document' },
    { class: 'fas fa-file-code', name: 'Code File' },
    { class: 'fas fa-share-alt', name: 'Share' },
    { class: 'fas fa-link', name: 'Link' },
    { class: 'fas fa-users', name: 'Team' },
    { class: 'fas fa-hands-helping', name: 'Volunteer' }
];

/**
 * Standard generic sample resume state for initial load.
 */
const defaultState = {
    id: "doc_default_sample",
    documentTitle: "Alex Morgan - Resume",
    personal: {
        name: "Alex Morgan",
        title: "Information Technology Specialist",
        phone: "+1 (555) 234-5678",
        email: "alex.morgan@example.com",
        website: "alexmorgan.dev",
        location: "San Francisco, CA 94105, United States",
        age: "24 years old",
        dob: "October 14, 2000",
        nationality: "American",
        photoUrl: DEFAULT_PHOTO
    },
    summary: "Dedicated IT Systems Specialist with foundational experience in hardware diagnostics, network troubleshooting, and cloud infrastructure operations. Proven ability to resolve end-user technical issues promptly while optimizing workstation deployment and automation workflows. Passionate about system administration, security fundamentals, and collaborative technical support.",
    education: [
        { 
            id: "e1", 
            title: "Bachelor of Science - Information Technology", 
            institution: "Metropolitan State University", 
            date: "09/2020 - 05/2024", 
            location: "San Francisco, CA",
            logoType: "crest",
            logoUrl: ""
        },
        { 
            id: "e2", 
            title: "High School Diploma - STEM Track", 
            institution: "Bay Area Preparatory Academy", 
            date: "08/2016 - 06/2020", 
            location: "San Francisco, CA",
            logoType: "badge",
            logoUrl: ""
        }
    ],
    volunteeringTitle: "Work Experience",
    volunteering: [
        { 
            id: "v1", 
            title: "IT Systems Support Intern", 
            organization: "Apex Technology Solutions", 
            date: "06/2024 - 01/2025", 
            location: "San Francisco, CA (Hybrid)", 
            description: "Provided Tier 1 and Tier 2 IT support across Windows and macOS workstations.\n- Resolved hardware, network connectivity, and operating system issues for 150+ staff members.\n- Configured virtual machines, user directory accounts, and automated routine software installations.\n- Assisted network administrators in monitoring switch infrastructure and router endpoints.",
            logoType: "globe",
            logoUrl: ""
        }
    ],
    training: [
        { 
            id: "t1", 
            title: "CompTIA Security+ Certification", 
            institution: "Certificate of Achievement, **CompTIA**" 
        },
        { 
            id: "t2", 
            title: "AWS Certified Cloud Practitioner", 
            institution: "Certificate of Completion, **Amazon Web Services (AWS)**" 
        },
        { 
            id: "t3", 
            title: "Google IT Support Professional Certificate", 
            institution: "Professional Specialization, **Coursera / Google**" 
        }
    ],
    skills: [
        { id: "s1", name: "Windows Troubleshooting" },
        { id: "s2", name: "Linux Administration" },
        { id: "s3", name: "Active Directory & User Access" },
        { id: "s4", name: "Network Diagnostics (TCP/IP, DNS)" },
        { id: "s5", name: "Cloud VM Configuration (AWS/GCP)" },
        { id: "s6", name: "Remote Support & Helpdesk" },
        { id: "s7", name: "Web Fundamentals (HTML/CSS/JS)" },
        { id: "s8", name: "Python Scripting" },
        { id: "s9", name: "SQL Database Queries" },
        { id: "s10", name: "Hardware Diagnostics" },
        { id: "s11", name: "System Backup & Recovery" },
        { id: "s12", name: "Customer & User Support" }
    ],
    interests: [
        { 
            id: "i1", 
            title: "Cloud Architecture & Homelabs", 
            icon: "fas fa-server", 
            description: "Active interest in self-hosted home lab setups, virtualization with Proxmox, and exploring distributed cloud architectures." 
        },
        { 
            id: "i2", 
            title: "Automation & Modern Tech", 
            icon: "fas fa-robot", 
            description: "Enthusiastic about workflow automation, shell scripting, and leveraging AI tools to optimize productivity." 
        }
    ],
    projects: [
        { 
            id: "p1", 
            title: "CloudDesk Portal", 
            icon: "far fa-window-maximize", 
            description: "Developed a web-based service desk application for managing hardware and software support tickets." 
        },
        { 
            id: "p2", 
            title: "NetMonitor Dashboard", 
            icon: "fas fa-network-wired", 
            description: "Created a lightweight monitoring dashboard displaying local network ping latency and server uptime metrics." 
        },
        { 
            id: "p3", 
            title: "SecureDrop Transfer", 
            icon: "fas fa-paper-plane", 
            description: "Built an internal file-sharing web service with secure authentication and encrypted transfers." 
        }
    ],
    signature: {
        text: "I hereby certify that all of the information\nwritten here are true and correct.",
        url: DEFAULT_SIGNATURE,
        width: 150,
        overlap: -16
    }
};

// Active state reference
let state = JSON.parse(JSON.stringify(defaultState));

/**
 * Clean blank template definition for resetting content.
 */
const BLANK_TEMPLATE_STATE = {
    id: "doc_blank_template",
    documentTitle: "Untitled Resume",
    personal: {
        name: "",
        title: "",
        phone: "",
        email: "",
        website: "",
        location: "",
        age: "",
        dob: "",
        nationality: "",
        photoUrl: DEFAULT_PHOTO
    },
    summary: "",
    education: [
        { 
            id: "edu_tmpl_1", 
            title: "", 
            institution: "", 
            date: "", 
            location: "",
            logoUrl: ""
        }
    ],
    volunteering: [
        { 
            id: "vol_tmpl_1", 
            title: "", 
            organization: "", 
            date: "", 
            location: "",
            description: "",
            logoUrl: ""
        }
    ],
    volunteeringTitle: "Work Experience",
    training: [
        { id: "trn_tmpl_1", title: "", institution: "" },
        { id: "trn_tmpl_2", title: "", institution: "" }
    ],
    skills: [
        { id: "sk_tmpl_1", name: "" },
        { id: "sk_tmpl_2", name: "" },
        { id: "sk_tmpl_3", name: "" },
        { id: "sk_tmpl_4", name: "" }
    ],
    interests: [
        { id: "int_tmpl_1", title: "", icon: "fas fa-star", description: "" },
        { id: "int_tmpl_2", title: "", icon: "fas fa-laptop-code", description: "" }
    ],
    projects: [
        { id: "prj_tmpl_1", title: "", icon: "far fa-window-maximize", description: "" },
        { id: "prj_tmpl_2", title: "", icon: "fas fa-code-branch", description: "" }
    ],
    signature: {
        text: "I hereby certify that all of the information\nwritten here are true and correct.",
        url: DEFAULT_SIGNATURE,
        width: 150,
        overlap: -16
    }
};
const BLANK_STATE = BLANK_TEMPLATE_STATE;

// --- CLIENT-SIDE IMAGE COMPRESSION (PREVENTS LOCALSTORAGE QUOTA ERRORS) ---
function compressImage(file, maxDimension, quality, callback) {
    const reader = new FileReader();
    reader.onerror = () => callback(null);
    reader.onload = (e) => {
        const img = new Image();
        img.onerror = () => callback(e.target.result);
        img.onload = () => {
            const canvas = document.createElement('canvas');
            let w = img.width;
            let h = img.height;
            const maxDim = maxDimension || 400;

            if (w > h) {
                if (w > maxDim) {
                    h = Math.round((h * maxDim) / w);
                    w = maxDim;
                }
            } else {
                if (h > maxDim) {
                    w = Math.round((w * maxDim) / h);
                    h = maxDim;
                }
            }

            canvas.width = w;
            canvas.height = h;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, w, h);

            const isPng = file.type === 'image/png' || (file.name && file.name.toLowerCase().endsWith('.png'));
            let dataUrl;
            if (isPng) {
                dataUrl = canvas.toDataURL('image/png');
                if (dataUrl.length > 350000 && !(file.name && file.name.toLowerCase().includes('sig'))) {
                    dataUrl = canvas.toDataURL('image/jpeg', quality || 0.88);
                }
            } else {
                dataUrl = canvas.toDataURL('image/jpeg', quality || 0.88);
            }
            callback(dataUrl);
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

// Automatic White/Light Paper Background Removal for Digital Signatures
function removeWhiteBackgroundFromDataUrl(dataUrl, callback) {
    if (!dataUrl) {
        callback(dataUrl);
        return;
    }
    // If it's already an SVG, no canvas processing needed
    if (dataUrl.startsWith('data:image/svg+xml')) {
        callback(dataUrl);
        return;
    }

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        try {
            const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const d = imgData.data;

            for (let i = 0; i < d.length; i += 4) {
                const r = d[i];
                const g = d[i + 1];
                const b = d[i + 2];
                // Perceived brightness formula
                const brightness = 0.299 * r + 0.587 * g + 0.114 * b;

                if (brightness >= 225) {
                    // White or near-white paper -> 100% transparent
                    d[i + 3] = 0;
                } else if (brightness >= 145) {
                    // Smooth anti-aliased edge transition
                    const factor = (225 - brightness) / 80;
                    d[i + 3] = Math.round(d[i + 3] * Math.max(0, Math.min(1, factor)));
                    d[i] = Math.min(r, 18);
                    d[i + 1] = Math.min(g, 22);
                    d[i + 2] = Math.min(b, 32);
                } else {
                    // Solid dark cursive ink
                    d[i] = Math.min(r, 18);
                    d[i + 1] = Math.min(g, 22);
                    d[i + 2] = Math.min(b, 32);
                }
            }

            ctx.putImageData(imgData, 0, 0);
            callback(canvas.toDataURL('image/png'));
        } catch (e) {
            console.warn('Canvas pixel processing error:', e);
            callback(dataUrl);
        }
    };
    img.onerror = () => callback(dataUrl);
    img.src = dataUrl;
}

// File picker helper with auto-compression and optional signature background removal
function openImagePicker(callback, maxDimension = 400, quality = 0.88, isSignature = false) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
            compressImage(file, maxDimension, quality, (compressedDataUrl) => {
                if (compressedDataUrl) {
                    if (isSignature) {
                        removeWhiteBackgroundFromDataUrl(compressedDataUrl, (cleanedUrl) => {
                            callback(cleanedUrl);
                        });
                    } else {
                        callback(compressedDataUrl);
                    }
                }
            });
        }
    };
    input.click();
}

/**
 * Persistence layer supporting document cataloging, multi-resume management,
 * and client-side IndexedDB & LocalStorage synchronization.
 */
const DB_NAME = 'ResumeEditorDB';
const DB_VERSION = 2;
const DB_STORE_CACHE = 'resume_cache';
const DB_STORE_DOCUMENTS = 'resumes';

function getDB() {
    return new Promise((resolve) => {
        if (!window.indexedDB) {
            resolve(null);
            return;
        }
        const req = indexedDB.open(DB_NAME, DB_VERSION);
        req.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains(DB_STORE_CACHE)) {
                db.createObjectStore(DB_STORE_CACHE);
            }
            if (!db.objectStoreNames.contains(DB_STORE_DOCUMENTS)) {
                db.createObjectStore(DB_STORE_DOCUMENTS, { keyPath: 'id' });
            }
        };
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => resolve(null);
    });
}

async function saveToDB(storeName, keyOrVal, val) {
    try {
        const db = await getDB();
        if (!db) return false;
        return new Promise((resolve) => {
            const tx = db.transaction(storeName, 'readwrite');
            const store = tx.objectStore(storeName);
            if (val !== undefined) {
                store.put(val, keyOrVal);
            } else {
                store.put(keyOrVal);
            }
            tx.oncomplete = () => resolve(true);
            tx.onerror = () => resolve(false);
        });
    } catch (e) {
        return false;
    }
}

async function loadFromDB(storeName, key) {
    try {
        const db = await getDB();
        if (!db) return null;
        return new Promise((resolve) => {
            const tx = db.transaction(storeName, 'readonly');
            const req = tx.objectStore(storeName).get(key);
            req.onsuccess = () => resolve(req.result || null);
            req.onerror = () => resolve(null);
        });
    } catch (e) {
        return null;
    }
}

async function getAllFromDB(storeName) {
    try {
        const db = await getDB();
        if (!db) return [];
        return new Promise((resolve) => {
            const tx = db.transaction(storeName, 'readonly');
            const req = tx.objectStore(storeName).getAll();
            req.onsuccess = () => resolve(req.result || []);
            req.onerror = () => resolve([]);
        });
    } catch (e) {
        return [];
    }
}

async function deleteFromDB(storeName, key) {
    try {
        const db = await getDB();
        if (!db) return false;
        return new Promise((resolve) => {
            const tx = db.transaction(storeName, 'readwrite');
            tx.objectStore(storeName).delete(key);
            tx.oncomplete = () => resolve(true);
            tx.onerror = () => resolve(false);
        });
    } catch (e) {
        return false;
    }
}

/**
 * Updates UI document title bar and browser tab title.
 */
function updateDocumentTitleUI() {
    const input = document.getElementById('document-title-input');
    if (input && state.documentTitle) {
        input.value = state.documentTitle;
    }
    const title = state.documentTitle || (state.personal && state.personal.name ? `${state.personal.name} - Resu-maker` : 'Resu-maker by DNL');
    document.title = title;
}

function setSaveStatus(saved = true) {
    const indicator = document.getElementById('save-status-indicator');
    if (!indicator) return;
    if (saved) {
        indicator.innerHTML = '<i class="fas fa-check-circle"></i> Saved';
        indicator.classList.remove('unsaved');
    } else {
        indicator.innerHTML = '<i class="fas fa-dot-circle"></i> Unsaved';
        indicator.classList.add('unsaved');
    }
}

/**
 * Saves current resume document to catalog and local browser storage.
 */
async function saveToLocalStorage(showAlert = true) {
    if (!state.id) {
        state.id = 'doc_' + Date.now();
    }
    if (!state.documentTitle) {
        state.documentTitle = (state.personal && state.personal.name) ? `${state.personal.name} - Resume` : 'Untitled Resume';
    }

    const docRecord = {
        id: state.id,
        title: state.documentTitle,
        updatedAt: new Date().toISOString(),
        data: JSON.parse(JSON.stringify(state))
    };

    let savedDB = false;
    let savedLocal = false;

    // 1. Save to IndexedDB documents catalog & cache
    try {
        await saveToDB(DB_STORE_DOCUMENTS, docRecord);
        await saveToDB(DB_STORE_CACHE, 'current_resume', state);
        savedDB = true;
    } catch (e) {
        console.warn('IndexedDB persistence error:', e);
    }

    // 2. Persist active snapshot to LocalStorage
    try {
        localStorage.setItem('resume_editor_active_data', JSON.stringify(state));
        localStorage.setItem('resume_editor_active_id', state.id);
        savedLocal = true;
    } catch (e) {
        console.warn('LocalStorage quota limit reached:', e);
    }

    setSaveStatus(true);
    updateDocumentTitleUI();

    if (savedDB || savedLocal) {
        if (showAlert) {
            showToast(`Resume "${state.documentTitle}" saved to browser database!`);
        }
    } else if (showAlert) {
        showToast('Storage quota exceeded! Could not persist resume.', true);
    }
}

/**
 * Retrieves all saved resume documents from IndexedDB catalog.
 */
async function getAllSavedDocuments() {
    let docs = await getAllFromDB(DB_STORE_DOCUMENTS);
    
    // Auto-migration: if catalog is empty but legacy cache exists, import it as first document
    if (!docs || docs.length === 0) {
        let legacy = await loadFromDB(DB_STORE_CACHE, 'current_resume');
        if (!legacy) {
            try {
                const ls = localStorage.getItem('dnl_resume_data') || localStorage.getItem('resume_editor_active_data');
                if (ls) legacy = JSON.parse(ls);
            } catch (e) {}
        }
        if (legacy && typeof legacy === 'object') {
            const firstDoc = {
                id: legacy.id || 'doc_' + Date.now(),
                title: legacy.documentTitle || (legacy.personal && legacy.personal.name ? `${legacy.personal.name} - Resume` : 'My Resume'),
                updatedAt: new Date().toISOString(),
                data: legacy
            };
            await saveToDB(DB_STORE_DOCUMENTS, firstDoc);
            docs = [firstDoc];
        }
    }
    
    // Sort by most recently updated
    return (docs || []).sort((a, b) => new Date(b.updatedAt || 0) - new Date(a.updatedAt || 0));
}

/**
 * Switches the active editor to a specific saved document.
 */
async function openSavedDocument(id) {
    const doc = await loadFromDB(DB_STORE_DOCUMENTS, id);
    if (!doc || !doc.data) {
        showToast('Could not locate document!', true);
        return;
    }
    applyLoadedState(doc.data);
    await saveToDB(DB_STORE_CACHE, 'current_resume', state);
    showToast(`Loaded "${state.documentTitle}"`);
    closeOpenDocumentModal();
}

/**
 * Deletes a saved document from IndexedDB catalog.
 */
async function deleteSavedDocument(id) {
    const doc = await loadFromDB(DB_STORE_DOCUMENTS, id);
    const title = doc ? doc.title : 'this document';
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return;

    await deleteFromDB(DB_STORE_DOCUMENTS, id);
    showToast(`Deleted "${title}"`);
    
    // If deleted the active document, load another or default
    if (state.id === id) {
        const remaining = await getAllSavedDocuments();
        if (remaining.length > 0) {
            applyLoadedState(remaining[0].data);
        } else {
            applyLoadedState(defaultState);
        }
    }
    renderSavedDocsList();
}

/**
 * Clones the current resume state into a new named document copy.
 */
async function saveCurrentAsNewCopy() {
    const newId = 'doc_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4);
    const baseTitle = state.documentTitle || 'Resume';
    const newTitle = baseTitle.includes('(Copy)') ? `${baseTitle} 2` : `${baseTitle} (Copy)`;
    
    state.id = newId;
    state.documentTitle = newTitle;
    await saveToLocalStorage(false);
    showToast(`Saved new copy as "${newTitle}"`);
    renderSavedDocsList();
}

/**
 * Exports resume state as a downloadable JSON backup file.
 */
function exportResumeFile() {
    const filename = (state.documentTitle || 'resume')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '_')
        .replace(/^_+|_+$/g, '') + '.json';
    
    const jsonStr = JSON.stringify(state, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showToast(`Exported "${filename}" to downloads!`);
}

async function exportSpecificDoc(id) {
    const doc = await loadFromDB(DB_STORE_DOCUMENTS, id);
    if (!doc || !doc.data) return;
    const filename = (doc.title || 'resume')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '_')
        .replace(/^_+|_+$/g, '') + '.json';
    
    const blob = new Blob([JSON.stringify(doc.data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(`Exported "${filename}"!`);
}

/**
 * Imports and restores an exported resume JSON file into the editor.
 */
function importResumeFromJsonFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (e) => {
        try {
            const parsed = JSON.parse(e.target.result);
            if (!parsed || typeof parsed !== 'object') throw new Error('Invalid JSON format');
            
            parsed.id = 'doc_' + Date.now();
            if (!parsed.documentTitle) {
                parsed.documentTitle = file.name.replace(/\.[^/.]+$/, '').replace(/[_-]/g, ' ') || 'Imported Resume';
            }
            
            applyLoadedState(parsed);
            await saveToLocalStorage(false);
            showToast(`Restored "${state.documentTitle}" successfully!`);
            closeOpenDocumentModal();
        } catch (err) {
            console.error(err);
            alert('Failed to read resume file. Please ensure it is a valid resume JSON export.');
        }
    };
    reader.readAsText(file);
}

/**
 * Opens a local PDF file in a browser tab.
 */
function openLocalPdfFile(file) {
    if (!file) return;
    const blobUrl = URL.createObjectURL(file);
    window.open(blobUrl, '_blank');
    closeOpenDocumentModal();
}

/**
 * Applies a loaded state object cleanly to the application.
 */
function applyLoadedState(loaded) {
    if (!loaded) return;
    state = Object.assign({}, defaultState, loaded);
    ['education', 'volunteering', 'training', 'skills', 'interests', 'projects'].forEach(key => {
        if (Array.isArray(loaded[key])) {
            state[key] = loaded[key];
        }
    });
    if (loaded.personal) state.personal = Object.assign({}, defaultState.personal, loaded.personal);
    if (loaded.signature) state.signature = Object.assign({}, defaultState.signature, loaded.signature);
    if (loaded.documentTitle) state.documentTitle = loaded.documentTitle;
    if (loaded.id) state.id = loaded.id;

    updateDocumentTitleUI();
    setSaveStatus(true);
    renderEditor();
    renderPreview();
}

/**
 * Renders the saved documents catalog list in the Open Document modal.
 */
async function renderSavedDocsList(filterText = '') {
    const container = document.getElementById('saved-docs-list-container');
    const countEl = document.getElementById('saved-docs-count');
    if (!container) return;

    const docs = await getAllSavedDocuments();
    if (countEl) countEl.textContent = docs.length;

    const query = filterText.toLowerCase().trim();
    const filtered = query 
        ? docs.filter(d => (d.title || '').toLowerCase().includes(query))
        : docs;

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-docs-state">
                <i class="fas fa-folder-open"></i>
                <p>${query ? 'No matching saved resumes found.' : 'No saved resumes yet in database. Click "Save as New Copy" or Save Progress to add one!'}</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(doc => {
        const isActive = state.id === doc.id;
        const dateStr = doc.updatedAt ? new Date(doc.updatedAt).toLocaleDateString(undefined, { 
            month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' 
        }) : 'Recent';

        return `
            <div class="saved-doc-card ${isActive ? 'active-doc' : ''}">
                <div class="saved-doc-main">
                    <div class="saved-doc-title">
                        <i class="fas fa-file-alt" style="color: var(--primary-color);"></i>
                        <span>${escapeHtml(doc.title || 'Untitled Resume')}</span>
                        ${isActive ? '<span class="saved-doc-badge">Current</span>' : ''}
                    </div>
                    <div class="saved-doc-meta">
                        <span><i class="far fa-clock"></i> ${dateStr}</span>
                    </div>
                </div>
                <div class="saved-doc-actions">
                    <button type="button" class="saved-doc-btn saved-doc-open-btn" onclick="openSavedDocument('${doc.id}')" title="Open this resume in editor">
                        <i class="fas fa-folder-open"></i> Open
                    </button>
                    <button type="button" class="saved-doc-btn saved-doc-export-btn" onclick="exportSpecificDoc('${doc.id}')" title="Download backup file">
                        <i class="fas fa-download"></i>
                    </button>
                    <button type="button" class="saved-doc-btn saved-doc-delete-btn" onclick="deleteSavedDocument('${doc.id}')" title="Delete from storage">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function escapeHtml(text) {
    if (!text) return '';
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/**
 * Loads saved state on application startup.
 */
async function loadSavedData() {
    let loaded = null;
    
    // 1. Check IndexedDB active cache
    try {
        const fromDB = await loadFromDB(DB_STORE_CACHE, 'current_resume');
        if (fromDB && typeof fromDB === 'object') {
            loaded = fromDB;
        }
    } catch (e) {}

    // 2. Check LocalStorage fallback
    if (!loaded) {
        try {
            const saved = localStorage.getItem('resume_editor_active_data') || localStorage.getItem('dnl_resume_data');
            if (saved) {
                loaded = JSON.parse(saved);
            }
        } catch (e) {}
    }

    if (loaded) {
        applyLoadedState(loaded);
    } else {
        updateDocumentTitleUI();
        renderEditor();
        renderPreview();
    }
}

// --- SAFE RESET WORKFLOW ---
let backupBeforeReset = null;

function showResetModal() {
    const modal = document.getElementById('reset-confirm-modal');
    if (modal) modal.style.display = 'flex';
}

function closeResetModal() {
    const modal = document.getElementById('reset-confirm-modal');
    if (modal) modal.style.display = 'none';
}

function executeResetToBlank() {
    backupBeforeReset = JSON.parse(JSON.stringify(state));
    state = JSON.parse(JSON.stringify(BLANK_STATE));
    saveToLocalStorage(false);
    renderEditor();
    renderPreview();
    closeResetModal();
    showToast('Resume reset to blank format!', false, () => {
        if (backupBeforeReset) {
            state = JSON.parse(JSON.stringify(backupBeforeReset));
            saveToLocalStorage(false);
            renderEditor();
            renderPreview();
            showToast('Previous resume content restored!');
        }
    });
}

function executeRestoreTemplate() {
    backupBeforeReset = JSON.parse(JSON.stringify(state));
    state = JSON.parse(JSON.stringify(defaultState));
    saveToLocalStorage(false);
    renderEditor();
    renderPreview();
    closeResetModal();
    showToast('Original sample template restored!', false, () => {
        if (backupBeforeReset) {
            state = JSON.parse(JSON.stringify(backupBeforeReset));
            saveToLocalStorage(false);
            renderEditor();
            renderPreview();
            showToast('Previous resume content restored!');
        }
    });
}

// --- TOAST NOTIFICATION WITH UNDO ---
function showToast(msg, isError = false, undoCallback = null) {
    const toast = document.getElementById('toast-notification');
    const msgSpan = document.getElementById('toast-message');
    const undoBtn = document.getElementById('toast-undo-btn');
    const icon = document.getElementById('toast-icon');

    if (!toast || !msgSpan) return;

    msgSpan.textContent = msg;

    if (isError) {
        toast.style.background = '#ef4444';
        if (icon) icon.className = 'fas fa-exclamation-circle';
    } else {
        toast.style.background = '#10b981';
        if (icon) icon.className = 'fas fa-check-circle';
    }

    if (undoBtn) {
        if (undoCallback) {
            undoBtn.style.display = 'inline-block';
            undoBtn.onclick = () => {
                undoCallback();
                toast.style.display = 'none';
            };
        } else {
            undoBtn.style.display = 'none';
        }
    }

    toast.style.display = 'flex';
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
        toast.style.display = 'none';
    }, undoCallback ? 6000 : 3000);
}

// Auto-save debounce
let autoSaveTimeout = null;
function triggerAutoSave() {
    setSaveStatus(false);
    clearTimeout(autoSaveTimeout);
    autoSaveTimeout = setTimeout(() => {
        saveToLocalStorage(false);
    }, 700);
}

// --- RICH TEXT PARSER (BOLD, ITALIC, UNDERLINE) ---
function parseMarkdown(text) {
    if (!text) return "";
    return text
        .replace(/\*\*\*([\s\S]*?)\*\*\*/g, '<strong><em>$1</em></strong>') // ***bold italic***
        .replace(/\*\*([\s\S]*?)\*\*/g, '<strong>$1</strong>')       // **bold**
        .replace(/__([\s\S]*?)__/g, '<u>$1</u>')                     // __underline__
        .replace(/\*([\s\S]*?)\*/g, '<em>$1</em>')                   // *italic*
        .replace(/_([\s\S]*?)_/g, '<em>$1</em>')                     // _italic_
        .replace(/\n/g, '<br>');
}

function renderBullets(text) {
    if (!text) return "";
    const lines = text.split('\n');
    let intro = [];
    let bullets = [];
    
    lines.forEach(line => {
        const trimmed = line.trim();
        if (trimmed.startsWith('- ')) {
            bullets.push(trimmed.substring(2));
        } else if (trimmed.length > 0) {
            intro.push(trimmed);
        }
    });

    let html = '';
    if (intro.length > 0) {
        html += `<div class="cv-vol-desc">${intro.map(p => parseMarkdown(p)).join('<br>')}</div>`;
    }
    if (bullets.length > 0) {
        html += `<ul class="cv-vol-list">${bullets.map(b => `<li>${parseMarkdown(b)}</li>`).join('')}</ul>`;
    }
    return html;
}

/**
 * Renders the live resume preview sheet matching active state.
 */
function renderPreview() {
    const preview = document.getElementById('resume-preview');
    if (!preview) return;

    const hasContact = state.personal.phone || state.personal.email || state.personal.website || 
                       state.personal.location || state.personal.age || state.personal.dob || state.personal.nationality;

    preview.innerHTML = `
        <!-- HEADER -->
        <header class="cv-header">
            <div class="cv-header-info">
                <h1 class="cv-name">${state.personal.name ? parseMarkdown(state.personal.name) : '<span class="cv-placeholder-guide">Full Name</span>'}</h1>
                <div class="cv-title">${state.personal.title ? parseMarkdown(state.personal.title) : '<span class="cv-placeholder-guide">Professional Title / Position</span>'}</div>
                <div class="cv-contact">
                    ${hasContact ? `
                        <div class="cv-contact-row">
                            ${state.personal.phone ? `<span class="cv-contact-item"><i class="fas fa-phone-alt"></i> ${parseMarkdown(state.personal.phone)}</span>` : ''}
                            ${state.personal.email ? `<span class="cv-contact-item"><i class="fas fa-at"></i> ${parseMarkdown(state.personal.email)}</span>` : ''}
                            ${state.personal.website ? `<span class="cv-contact-item"><i class="fas fa-link"></i> ${parseMarkdown(state.personal.website)}</span>` : ''}
                        </div>
                        ${state.personal.location ? `
                            <div class="cv-contact-row">
                                <span class="cv-contact-item"><i class="fas fa-map-marker-alt"></i> ${parseMarkdown(state.personal.location)}</span>
                            </div>
                        ` : ''}
                        <div class="cv-contact-row">
                            ${state.personal.age ? `<span class="cv-contact-item"><i class="far fa-star"></i> ${parseMarkdown(state.personal.age)}</span>` : ''}
                            ${state.personal.dob ? `<span class="cv-contact-item"><i class="far fa-calendar-alt"></i> ${parseMarkdown(state.personal.dob)}</span>` : ''}
                            ${state.personal.nationality ? `<span class="cv-contact-item"><i class="far fa-flag"></i> ${parseMarkdown(state.personal.nationality)}</span>` : ''}
                        </div>
                    ` : `
                        <div class="cv-contact-row">
                            <span class="cv-contact-item cv-placeholder-guide"><i class="fas fa-phone-alt"></i> Phone Number</span>
                            <span class="cv-contact-item cv-placeholder-guide"><i class="fas fa-at"></i> Email Address</span>
                            <span class="cv-contact-item cv-placeholder-guide"><i class="fas fa-link"></i> Website / Portfolio</span>
                        </div>
                        <div class="cv-contact-row">
                            <span class="cv-contact-item cv-placeholder-guide"><i class="fas fa-map-marker-alt"></i> Location Address</span>
                            <span class="cv-contact-item cv-placeholder-guide"><i class="far fa-calendar-alt"></i> Date of Birth</span>
                            <span class="cv-contact-item cv-placeholder-guide"><i class="far fa-flag"></i> Nationality</span>
                        </div>
                    `}
                </div>
            </div>
            ${state.personal.photoUrl ? `
                <div class="cv-photo-container">
                    <img src="${state.personal.photoUrl}" alt="Formal Photo" class="cv-photo" id="cv-rendered-photo">
                </div>
            ` : ''}
        </header>

        <!-- TWO COLUMN GRID -->
        <div class="cv-grid">
            <!-- LEFT COLUMN -->
            <div class="cv-col-left">
                <!-- Professional Summary -->
                <section class="cv-section">
                    <div class="cv-section-title">Summary</div>
                    <div class="cv-summary-text">${state.summary ? parseMarkdown(state.summary) : '<span class="cv-placeholder-guide">Write a brief professional summary highlighting your key background, technical strengths, and career objectives...</span>'}</div>
                </section>

                <!-- EDUCATION -->
                ${state.education.length > 0 ? `
                    <section class="cv-section">
                        <div class="cv-section-title">Education</div>
                        ${state.education.map(edu => `
                            <div class="cv-edu-item">
                                <div class="cv-edu-logo">
                                    ${edu.logoUrl ? `<img src="${edu.logoUrl}" alt="Logo" class="cv-custom-logo">` : (edu.logoType && LOGOS[edu.logoType] ? LOGOS[edu.logoType] : `<div class="cv-edu-logo-placeholder" title="No logo uploaded"><i class="fas fa-university"></i></div>`)}
                                </div>
                                <div class="cv-edu-details">
                                    <div class="cv-edu-title">${edu.title ? parseMarkdown(edu.title) : '<span class="cv-placeholder-guide">Degree / Qualification Title</span>'}</div>
                                    <div class="cv-edu-school">${edu.institution ? parseMarkdown(edu.institution) : '<span class="cv-placeholder-guide">School or University Name</span>'}</div>
                                    <div class="cv-edu-meta">
                                        <span>${edu.date ? parseMarkdown(edu.date) : '<span class="cv-placeholder-guide">09/2023 - Present</span>'}</span>
                                        <span>${edu.location ? parseMarkdown(edu.location) : '<span class="cv-placeholder-guide">City, Country</span>'}</span>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </section>
                ` : ''}

                <!-- VOLUNTEERING / WORK EXPERIENCE -->
                ${state.volunteering.length > 0 ? `
                    <section class="cv-section">
                        <div class="cv-section-title">${parseMarkdown(state.volunteeringTitle || "Work Experience")}</div>
                        ${state.volunteering.map(vol => `
                            <div class="cv-vol-item">
                                <div class="cv-vol-logo">
                                    ${vol.logoUrl ? `<img src="${vol.logoUrl}" alt="Logo" class="cv-custom-logo">` : (vol.logoType && LOGOS[vol.logoType] ? LOGOS[vol.logoType] : `<div class="cv-edu-logo-placeholder" title="No logo uploaded"><i class="fas fa-building"></i></div>`)}
                                </div>
                                <div class="cv-vol-details">
                                    <div class="cv-vol-title">${vol.title ? parseMarkdown(vol.title) : '<span class="cv-placeholder-guide">Job Title / Role</span>'}</div>
                                    <div class="cv-vol-org">${vol.organization ? parseMarkdown(vol.organization) : '<span class="cv-placeholder-guide">Company or Organization Name</span>'}</div>
                                    <div class="cv-vol-meta">
                                        <span>${vol.date ? parseMarkdown(vol.date) : '<span class="cv-placeholder-guide">Dates / Duration</span>'}</span> &nbsp;&nbsp; <span>${vol.location ? parseMarkdown(vol.location) : '<span class="cv-placeholder-guide">City, Country</span>'}</span>
                                    </div>
                                    ${vol.description ? renderBullets(vol.description) : '<ul class="cv-vol-list cv-placeholder-guide"><li>Key responsibility or achievement</li><li>Key responsibility or achievement</li></ul>'}
                                </div>
                            </div>
                        `).join('')}
                    </section>
                ` : ''}

                <!-- TRAINING COURSES & CERTIFICATIONS (2-COLUMN SUBGRID) -->
                ${state.training.length > 0 ? `
                    <section class="cv-section">
                        <div class="cv-section-title">Training Courses & Certifications</div>
                        <div class="cv-training-grid">
                            ${state.training.map(trn => `
                                <div class="cv-training-item">
                                    <div class="cv-training-title">${trn.title ? parseMarkdown(trn.title) : '<span class="cv-placeholder-guide">Course / Certification Title</span>'}</div>
                                    <div class="cv-training-inst">${trn.institution ? parseMarkdown(trn.institution) : '<span class="cv-placeholder-guide">Provider / Platform</span>'}</div>
                                </div>
                            `).join('')}
                        </div>
                    </section>
                ` : ''}
            </div>

            <!-- RIGHT COLUMN -->
            <div class="cv-col-right">
                <!-- SKILLS (CLEAN REGULAR FONT, NO LINES BY DEFAULT) -->
                ${state.skills.length > 0 ? `
                    <section class="cv-section">
                        <div class="cv-section-title">Skills</div>
                        <div class="cv-skills-list">
                            ${state.skills.map(skill => `
                                <div class="cv-skill-item">${skill.name ? parseMarkdown(skill.name) : '<span class="cv-placeholder-guide">Skill Name</span>'}</div>
                            `).join('')}
                        </div>
                    </section>
                ` : ''}

                <!-- INTERESTS -->
                ${state.interests.length > 0 ? `
                    <section class="cv-section">
                        <div class="cv-section-title">Interests</div>
                        ${state.interests.map(item => `
                            <div class="cv-interest-item">
                                <div class="cv-interest-header">
                                    <i class="${item.icon || 'fas fa-star'} cv-interest-icon"></i>
                                    <span class="cv-interest-title">${item.title ? parseMarkdown(item.title) : '<span class="cv-placeholder-guide">Interest Area</span>'}</span>
                                </div>
                                <div class="cv-interest-desc">${item.description ? parseMarkdown(item.description) : '<span class="cv-placeholder-guide">Short description of interest...</span>'}</div>
                            </div>
                        `).join('')}
                    </section>
                ` : ''}

                <!-- PROJECTS -->
                ${state.projects.length > 0 ? `
                    <section class="cv-section">
                        <div class="cv-section-title">Projects</div>
                        ${state.projects.map(proj => `
                            <div class="cv-project-item">
                                <div class="cv-project-header">
                                    <i class="${proj.icon || 'far fa-window-maximize'} cv-project-icon"></i>
                                    <span class="cv-project-pill">${proj.title ? parseMarkdown(proj.title) : '<span class="cv-placeholder-guide">Project Name</span>'}</span>
                                </div>
                                <div class="cv-project-desc">${proj.description ? parseMarkdown(proj.description) : '<span class="cv-placeholder-guide">Brief description of project goals and achievements...</span>'}</div>
                            </div>
                        `).join('')}
                    </section>
                ` : ''}

                <!-- SIGNATURE & CERTIFICATION STATEMENT -->
                ${state.signature ? `
                    <div class="cv-certification-container">
                        ${state.signature.url ? `
                            <div class="cv-signature-wrapper" id="cv-sig-wrapper" style="margin-bottom: ${state.signature.overlap !== undefined ? state.signature.overlap : -16}px;">
                                <img src="${state.signature.url}" alt="Signature" class="cv-signature-img" id="cv-rendered-sig" style="width: ${state.signature.width || 150}px;" title="Cursive Digital Signature (Scroll mouse wheel to resize)">
                            </div>
                        ` : ''}
                        <div class="cv-certification-text">${parseMarkdown(state.signature.text || "I hereby certify that all of the information\nwritten here are true and correct.")}</div>
                    </div>
                ` : ''}
            </div>
        </div>
    `;

    // Interactive Mouse Wheel Resize on Preview Signature
    const renderedSig = document.getElementById('cv-rendered-sig');
    if (renderedSig) {
        renderedSig.addEventListener('wheel', (e) => {
            e.preventDefault();
            const delta = e.deltaY < 0 ? 5 : -5;
            const currentW = (state.signature && state.signature.width) ? state.signature.width : 150;
            const newW = Math.min(Math.max(currentW + delta, 70), 280);
            if (!state.signature) state.signature = {};
            state.signature.width = newW;
            renderedSig.style.width = `${newW}px`;
            const widthSlider = document.getElementById('sig-width-slider');
            const widthDisplay = document.getElementById('sig-width-display');
            if (widthSlider) widthSlider.value = newW;
            if (widthDisplay) widthDisplay.textContent = `${newW}px`;
            triggerAutoSave();
        }, { passive: false });
    }
}

/**
 * Field configuration schema for the dynamic form generator.
 */
const fieldConfigs = {
    personal: [
        { key: 'name', label: 'Full Name', type: 'text', placeholder: 'e.g. Alex Morgan' },
        { key: 'title', label: 'Professional Title', type: 'text', placeholder: 'e.g. IT Systems Specialist' },
        { key: 'phone', label: 'Phone Number', type: 'text', placeholder: 'e.g. +1 (555) 234-5678' },
        { key: 'email', label: 'Email Address', type: 'text', placeholder: 'e.g. alex.morgan@example.com' },
        { key: 'website', label: 'Website / Portfolio', type: 'text', placeholder: 'e.g. linkedin.com/in/alexmorgan' },
        { key: 'location', label: 'Location Address', type: 'text', placeholder: 'e.g. San Francisco, CA / Metro Area' },
        { key: 'age', label: 'Age', type: 'text', placeholder: 'e.g. 24 y.o.' },
        { key: 'dob', label: 'Date of Birth', type: 'text', placeholder: 'e.g. 10/14/2000' },
        { key: 'nationality', label: 'Nationality', type: 'text', placeholder: 'e.g. American' }
    ],
    education: [
        { key: 'title', label: 'Degree / Certificate', type: 'text', placeholder: 'e.g. Bachelor of Science in Information Technology' },
        { key: 'institution', label: 'School / University', type: 'text', placeholder: 'e.g. Metropolitan State University' },
        { key: 'date', label: 'Dates (e.g. 09/2020 - 05/2024)', type: 'text', placeholder: 'e.g. 09/2020 - 05/2024' },
        { key: 'location', label: 'City, Country', type: 'text', placeholder: 'e.g. San Francisco, CA / Metro Manila' }
    ],
    volunteering: [
        { key: 'title', label: 'Job Title / Volunteer Role', type: 'text', placeholder: 'e.g. IT Systems Support Specialist' },
        { key: 'organization', label: 'Company / Organization Name', type: 'text', placeholder: 'e.g. Apex Technology Solutions' },
        { key: 'date', label: 'Dates / Duration', type: 'text', placeholder: 'e.g. 06/2024 - Present' },
        { key: 'location', label: 'Location (City, Country / Remote)', type: 'text', placeholder: 'e.g. San Francisco, CA / Remote' },
        { key: 'description', label: 'Responsibilities & Achievements (Start line with - for bullet)', type: 'textarea', isLargeBox: true, placeholder: 'e.g.\n- Resolved hardware, software, and network connectivity issues\n- Assisted staff with system configurations and installations' }
    ],
    training: [
        { key: 'title', label: 'Course / Certification Title', type: 'text', placeholder: 'e.g. CompTIA Security+ / AWS Cloud Practitioner' },
        { key: 'institution', label: 'Provider / Details', type: 'text', placeholder: 'e.g. CompTIA / AWS / Coursera' }
    ],
    skills: [
        { key: 'name', label: 'Skill Name', type: 'text', placeholder: 'e.g. Network Diagnostics, Python, Cloud Setup' }
    ],
    interests: [
        { key: 'title', label: 'Interest Area', type: 'text', placeholder: 'e.g. Cloud Architecture' },
        { key: 'icon', label: 'Icon', type: 'icon-picker' },
        { key: 'description', label: 'Description', type: 'textarea', isLargeBox: false, placeholder: 'e.g. Exploring serverless and distributed cloud architectures' }
    ],
    projects: [
        { key: 'title', label: 'Project Name', type: 'text', placeholder: 'e.g. CloudDesk Ticketing System' },
        { key: 'icon', label: 'Icon', type: 'icon-picker' },
        { key: 'description', label: 'Short Description', type: 'textarea', isLargeBox: false, placeholder: 'e.g. Developed a full-stack ticket tracking portal with role-based access.' }
    ]
};

function generateId() {
    return 'id_' + Math.random().toString(36).substr(2, 9);
}

function handleInputChange(section, id, key, value) {
    if (id === null) {
        if (section === 'summary') {
            state.summary = value;
        } else if (section === 'signature') {
            if (!state.signature) state.signature = {};
            state.signature.text = value;
        } else {
            state[section][key] = value;
        }
    } else {
        const item = state[section].find(i => i.id === id);
        if (item) item[key] = value;
    }
    renderPreview();
    triggerAutoSave();
}

function removeItem(section, id) {
    state[section] = state[section].filter(i => i.id !== id);
    renderEditor();
    renderPreview();
    triggerAutoSave();
}

function addItem(section) {
    const newItem = { id: generateId() };
    fieldConfigs[section].forEach(f => {
        newItem[f.key] = "";
    });
    if (section === 'projects') newItem.icon = 'far fa-window-maximize';
    if (section === 'interests') newItem.icon = 'fas fa-star';
    if (section === 'education' || section === 'volunteering') newItem.logoUrl = "";
    state[section].push(newItem);
    renderEditor();
    renderPreview();
    triggerAutoSave();
}

// Active callback for icon picker modal
let activeIconCallback = null;

function openIconPicker(currentIcon, onSelect) {
    activeIconCallback = onSelect;
    const modal = document.getElementById('icon-picker-modal');
    const searchInput = document.getElementById('icon-search-input');
    searchInput.value = '';
    renderIconGrid('');
    modal.style.display = 'flex';
    searchInput.focus();
}

function closeIconPicker() {
    const modal = document.getElementById('icon-picker-modal');
    modal.style.display = 'none';
    activeIconCallback = null;
}

function renderIconGrid(filterText) {
    const grid = document.getElementById('icon-grid-container');
    grid.innerHTML = '';
    const query = filterText.toLowerCase().trim();

    const filtered = ICON_LIST.filter(item => 
        item.name.toLowerCase().includes(query) || item.class.toLowerCase().includes(query)
    );

    filtered.forEach(iconObj => {
        const tile = document.createElement('div');
        tile.className = 'icon-tile';
        tile.innerHTML = `
            <i class="${iconObj.class}"></i>
            <span>${iconObj.name}</span>
        `;
        tile.onclick = () => {
            if (activeIconCallback) {
                activeIconCallback(iconObj.class);
            }
            closeIconPicker();
        };
        grid.appendChild(tile);
    });

    if (filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; color: #94a3b8; padding: 20px;">No icons found matching "${filterText}".</div>`;
    }
}

// Helper: find formatted token (*italic*, **bold**, __underline__) at or touching cursor position
function findFormattedTokenAtCursor(val, cursor, formatType) {
    if (cursor === null || cursor === undefined || !val) return null;
    if (formatType === 'bold') {
        const regex = /\*\*([^*]+)\*\*/g;
        let match;
        while ((match = regex.exec(val)) !== null) {
            const start = match.index;
            const end = start + match[0].length;
            if (cursor >= start && cursor <= end) {
                return { start, end, innerContent: match[1] };
            }
        }
    } else if (formatType === 'underline') {
        const regex = /__([^_]+)__/g;
        let match;
        while ((match = regex.exec(val)) !== null) {
            const start = match.index;
            const end = start + match[0].length;
            if (cursor >= start && cursor <= end) {
                return { start, end, innerContent: match[1] };
            }
        }
    } else if (formatType === 'italic') {
        const regex = /\*([^*]+)\*|_([^_]+)_/g;
        let match;
        while ((match = regex.exec(val)) !== null) {
            const start = match.index;
            const end = start + match[0].length;
            const beforeChar = start > 0 ? val[start - 1] : '';
            const afterChar = end < val.length ? val[end] : '';
            if (beforeChar === '*' || beforeChar === '_' || afterChar === '*' || afterChar === '_') {
                continue;
            }
            if (cursor >= start && cursor <= end) {
                return { start, end, innerContent: match[1] || match[2] };
            }
        }
    }
    return null;
}

// Indicator checker: checks if an entry, a word inside description, or selection has formatting
function getFormattingIndicators(val, selectionStart = null, selectionEnd = null) {
    if (!val) return { isBold: false, isItalic: false, isUnderline: false };

    let isBold = false;
    let isItalic = false;
    let isUnderline = false;

    // Check if entire text or any word inside contains bold: **text** or ***text***
    if (/\*\*[^*]+\*\*/.test(val) || /\*\*\*.*?\*\*\*/.test(val)) {
        isBold = true;
    }

    // Check underline: __text__
    if (/__[^_]+__/.test(val)) {
        isUnderline = true;
    }

    // Check italic: *text* (excluding **) or _text_ (excluding __) or ***text***
    const stripped = val.replace(/\*\*[^*]+\*\*/g, '').replace(/__[^_]+__/g, '');
    if (/(^|[^*])\*[^*]+\*([^*]|$)/.test(stripped) || /(^|[^_])_[^_]+_([^_]|$)/.test(stripped) || /\*\*\*.*?\*\*\*/.test(val)) {
        isItalic = true;
    }

    // If active selection, prioritize checking if selection specifically has formatting
    if (selectionStart !== null && selectionEnd !== null && selectionEnd > selectionStart) {
        const sel = val.substring(selectionStart, selectionEnd);
        let selBold = /\*\*[^*]+\*\*/.test(sel) || /\*\*\*.*?\*\*\*/.test(sel);
        let selUnderline = /__[^_]+__/.test(sel);
        const selStripped = sel.replace(/\*\*[^*]+\*\*/g, '').replace(/__[^_]+__/g, '');
        let selItalic = /(^|[^*])\*[^*]+\*([^*]|$)/.test(selStripped) || /(^|[^_])_[^_]+_([^_]|$)/.test(selStripped) || /\*\*\*.*?\*\*\*/.test(sel);

        if (selectionStart >= 2 && selectionEnd <= val.length - 2 && val.substring(selectionStart - 2, selectionStart) === '**' && val.substring(selectionEnd, selectionEnd + 2) === '**') {
            selBold = true;
        }
        if (selectionStart >= 2 && selectionEnd <= val.length - 2 && val.substring(selectionStart - 2, selectionStart) === '__' && val.substring(selectionEnd, selectionEnd + 2) === '__') {
            selUnderline = true;
        }
        if (selectionStart >= 1 && selectionEnd <= val.length - 1 && val[selectionStart - 1] === '*' && val[selectionEnd] === '*' && (selectionStart < 2 || val[selectionStart - 2] !== '*') && (selectionEnd > val.length - 2 || val[selectionEnd + 1] !== '*')) {
            selItalic = true;
        }

        return {
            isBold: selBold || isBold,
            isItalic: selItalic || isItalic,
            isUnderline: selUnderline || isUnderline
        };
    }

    return { isBold, isItalic, isUnderline };
}

// Update the active indicator state on toolbar buttons
function updateToolbarButtons(group, inputEl) {
    if (!group || !inputEl) return;
    const { isBold, isItalic, isUnderline } = getFormattingIndicators(
        inputEl.value,
        inputEl.selectionStart,
        inputEl.selectionEnd
    );

    const boldBtn = group.querySelector('.fmt-btn[data-fmt="bold"]');
    const italicBtn = group.querySelector('.fmt-btn[data-fmt="italic"]');
    const underlineBtn = group.querySelector('.fmt-btn[data-fmt="underline"]');

    if (boldBtn) boldBtn.classList.toggle('active', isBold);
    if (italicBtn) italicBtn.classList.toggle('active', isItalic);
    if (underlineBtn) underlineBtn.classList.toggle('active', isUnderline);
}

// Clickable Text Formatting Helper with Instant Single-Entry Toggle & Selection Formatting
function applyFormatToInput(inputEl, formatType, group = null) {
    const val = inputEl.value;
    let start = inputEl.selectionStart;
    let end = inputEl.selectionEnd;

    // Helper: analyze and decompose formatting layers (**bold**, __underline__, *italic*)
    function getFormatState(str) {
        let text = str;
        let isBold = false;
        let isUnderline = false;
        let isItalic = false;

        let changed = true;
        while (changed) {
            changed = false;
            if (!isBold && text.startsWith('**') && text.endsWith('**') && text.length >= 4) {
                isBold = true;
                text = text.substring(2, text.length - 2);
                changed = true;
                continue;
            }
            if (!isUnderline && text.startsWith('__') && text.endsWith('__') && text.length >= 4) {
                isUnderline = true;
                text = text.substring(2, text.length - 2);
                changed = true;
                continue;
            }
            if (!isItalic && text.startsWith('*') && text.endsWith('*') && !text.startsWith('**') && !text.endsWith('**') && text.length >= 2) {
                isItalic = true;
                text = text.substring(1, text.length - 1);
                changed = true;
                continue;
            }
            if (!isItalic && text.startsWith('_') && text.endsWith('_') && !text.startsWith('__') && !text.endsWith('__') && text.length >= 2) {
                isItalic = true;
                text = text.substring(1, text.length - 1);
                changed = true;
                continue;
            }
        }
        return { cleanText: text, isBold, isUnderline, isItalic };
    }

    // Helper: re-wrap clean text with active formats
    function rebuildFormattedText(cleanText, isBold, isUnderline, isItalic) {
        let res = cleanText;
        if (isItalic) res = `*${res}*`;
        if (isBold) res = `**${res}**`;
        if (isUnderline) res = `__${res}__`;
        return res;
    }

    let newText = '';
    let newStart = 0;
    let newEnd = 0;

    const hasSelection = (start !== end && end > start);

    if (hasSelection) {
        const selected = val.substring(start, end);
        const state = getFormatState(selected);

        // Check if user selected formatted text directly and toggle it off
        let toggled = false;
        if (formatType === 'bold' && state.isBold) {
            const updated = rebuildFormattedText(state.cleanText, false, state.isUnderline, state.isItalic);
            newText = val.substring(0, start) + updated + val.substring(end);
            newStart = start;
            newEnd = start + updated.length;
            toggled = true;
        } else if (formatType === 'underline' && state.isUnderline) {
            const updated = rebuildFormattedText(state.cleanText, state.isBold, false, state.isItalic);
            newText = val.substring(0, start) + updated + val.substring(end);
            newStart = start;
            newEnd = start + updated.length;
            toggled = true;
        } else if (formatType === 'italic' && state.isItalic) {
            const updated = rebuildFormattedText(state.cleanText, state.isBold, state.isUnderline, false);
            newText = val.substring(0, start) + updated + val.substring(end);
            newStart = start;
            newEnd = start + updated.length;
            toggled = true;
        }

        // Check if markers are immediately outside the selection and strip them
        if (!toggled) {
            if (formatType === 'bold' && start >= 2 && end <= val.length - 2 && val.substring(start - 2, start) === '**' && val.substring(end, end + 2) === '**') {
                newText = val.substring(0, start - 2) + selected + val.substring(end + 2);
                newStart = start - 2;
                newEnd = end - 2;
                toggled = true;
            } else if (formatType === 'underline' && start >= 2 && end <= val.length - 2 && val.substring(start - 2, start) === '__' && val.substring(end, end + 2) === '__') {
                newText = val.substring(0, start - 2) + selected + val.substring(end + 2);
                newStart = start - 2;
                newEnd = end - 2;
                toggled = true;
            } else if (formatType === 'italic' && start >= 1 && end <= val.length - 1 && val[start - 1] === '*' && val[end] === '*' && (start < 2 || val[start - 2] !== '*') && (end > val.length - 2 || val[end + 1] !== '*')) {
                newText = val.substring(0, start - 1) + selected + val.substring(end + 1);
                newStart = start - 1;
                newEnd = end - 1;
                toggled = true;
            }
        }

        // Otherwise wrap the selected text with the requested format
        if (!toggled) {
            let marker = formatType === 'bold' ? '**' : (formatType === 'underline' ? '__' : '*');
            newText = val.substring(0, start) + marker + selected + marker + val.substring(end);
            newStart = start + marker.length;
            newEnd = end + marker.length;
        }
    } else {
        // NO SELECTION: Check if cursor is at/inside an existing formatted token
        const token = findFormattedTokenAtCursor(val, start, formatType);
        if (token) {
            // Unformat that specific token
            newText = val.substring(0, token.start) + token.innerContent + val.substring(token.end);
            newStart = token.start;
            newEnd = token.start + token.innerContent.length;
        } else if (val.trim().length === 0) {
            let marker = formatType === 'bold' ? '**' : (formatType === 'underline' ? '__' : '*');
            newText = marker + marker;
            newStart = marker.length;
            newEnd = marker.length;
        } else {
            // Instant single-entry formatting toggle (e.g. skills or single title)
            const state = getFormatState(val);
            let nextBold = state.isBold;
            let nextUnderline = state.isUnderline;
            let nextItalic = state.isItalic;

            if (formatType === 'bold') nextBold = !nextBold;
            if (formatType === 'underline') nextUnderline = !nextUnderline;
            if (formatType === 'italic') nextItalic = !nextItalic;

            newText = rebuildFormattedText(state.cleanText, nextBold, nextUnderline, nextItalic);
            newStart = 0;
            newEnd = newText.length;
        }
    }

    inputEl.value = newText;
    inputEl.dispatchEvent(new Event('input'));
    inputEl.focus();
    inputEl.setSelectionRange(newStart, newEnd);
    if (group) {
        updateToolbarButtons(group, inputEl);
    }
}

// Create an input group for form with Clickable Format Buttons & Icon Badge
function createFormGroup(label, value, onChange, type = 'text', onIconPick = null, isLargeBox = false, placeholder = '') {
    const group = document.createElement('div');
    group.className = 'form-group';

    // Header row with Label & Clickable Format Buttons
    const headerRow = document.createElement('div');
    headerRow.className = 'form-group-header';

    const lbl = document.createElement('label');
    lbl.textContent = label;
    headerRow.appendChild(lbl);

    // Format buttons for text & textareas
    if (type === 'text' || type === 'textarea') {
        const fmtToolbar = document.createElement('div');
        fmtToolbar.className = 'format-toolbar';
        fmtToolbar.innerHTML = `
            <button type="button" class="fmt-btn" data-fmt="bold" title="Bold"><i class="fas fa-bold"></i></button>
            <button type="button" class="fmt-btn" data-fmt="italic" title="Italic"><i class="fas fa-italic"></i></button>
            <button type="button" class="fmt-btn" data-fmt="underline" title="Underline"><i class="fas fa-underline"></i></button>
        `;
        headerRow.appendChild(fmtToolbar);
    }
    group.appendChild(headerRow);

    // 1. Icon selector control
    if (type === 'icon-picker') {
        const controlRow = document.createElement('div');
        controlRow.className = 'icon-selector-control';

        const previewBadge = document.createElement('div');
        previewBadge.className = 'icon-current-badge';
        previewBadge.innerHTML = `<i class="${value || 'fas fa-star'}"></i>`;
        controlRow.appendChild(previewBadge);

        const pickBtn = document.createElement('button');
        pickBtn.type = 'button';
        pickBtn.className = 'btn-secondary';
        pickBtn.innerHTML = '<i class="fas fa-icons"></i> Change Icon';
        pickBtn.onclick = () => {
            if (onIconPick) {
                onIconPick((chosenClass) => {
                    previewBadge.innerHTML = `<i class="${chosenClass}"></i>`;
                    onChange(chosenClass);
                });
            }
        };
        controlRow.appendChild(pickBtn);

        group.appendChild(controlRow);
        return group;
    }

    // 2. Text / Textarea input control
    const input = document.createElement(type === 'textarea' ? 'textarea' : 'input');
    if (type !== 'textarea') input.type = type;
    if (type === 'textarea' && isLargeBox) input.className = 'box-large';
    input.value = value || '';
    if (placeholder) input.placeholder = placeholder;
    input.addEventListener('input', (e) => onChange(e.target.value));

    // Connect format toolbar buttons to input (prevent focus loss on mousedown)
    const fmtBtns = group.querySelectorAll('.fmt-btn');
    fmtBtns.forEach(btn => {
        btn.onmousedown = (e) => e.preventDefault();
        btn.onclick = (e) => {
            e.preventDefault();
            applyFormatToInput(input, btn.dataset.fmt, group);
        };
    });

    // Real-time indicator updating on typing, selecting, mouseup, or keyup
    const updateToolbar = () => updateToolbarButtons(group, input);
    input.addEventListener('input', updateToolbar);
    input.addEventListener('keyup', updateToolbar);
    input.addEventListener('mouseup', updateToolbar);
    input.addEventListener('select', updateToolbar);

    group.appendChild(input);

    // Initial check for format indicators on load
    updateToolbar();

    return group;
}

// --- RENDER EDITOR FORM ---
function renderEditor() {
    const container = document.getElementById('editor-form-container');
    if (!container) return;
    container.innerHTML = '';

    // 1. PERSONAL INFORMATION & 1:1 PHOTO SECTION
    const personalSec = document.createElement('div');
    personalSec.className = 'form-section';
    personalSec.innerHTML = `
        <div class="section-header">
            <div class="section-header-left">
                <i class="fas fa-chevron-down section-toggle-icon"></i>
                <h3 class="section-title">Personal Information & Photo</h3>
            </div>
        </div>
        <div class="section-body">
            <!-- 1:1 Photo Upload Box -->
            <div class="photo-upload-card">
                <img id="editor-photo-thumb" class="photo-preview-thumb" alt="Thumbnail">
                <div class="photo-actions">
                    <button type="button" class="btn-secondary" id="btn-upload-photo">
                        <i class="fas fa-camera"></i> Upload 1:1 Formal Photo
                    </button>
                    ${state.personal.photoUrl ? `
                        <button type="button" class="btn-danger-text" id="btn-remove-photo">Remove Photo</button>
                    ` : `
                        <button type="button" class="btn-danger-text" id="btn-reset-photo">Reset Default Avatar</button>
                    `}
                </div>
            </div>
            <div class="item-fields" id="personal-fields"></div>
        </div>
    `;

    const thumbImg = personalSec.querySelector('#editor-photo-thumb');
    thumbImg.src = state.personal.photoUrl || DEFAULT_PHOTO;

    personalSec.querySelector('.section-header').onclick = (e) => {
        if (!e.target.closest('button')) personalSec.classList.toggle('collapsed');
    };

    const pFields = personalSec.querySelector('#personal-fields');
    fieldConfigs.personal.forEach(f => {
        pFields.appendChild(
            createFormGroup(f.label, state.personal[f.key], (val) => handleInputChange('personal', null, f.key, val), f.type, null, false, f.placeholder || '')
        );
    });

    personalSec.querySelector('#btn-upload-photo').onclick = () => {
        openImagePicker((dataUrl) => {
            state.personal.photoUrl = dataUrl;
            renderPreview();
            renderEditor();
            triggerAutoSave();
        }, 400, 0.88);
    };

    const removeBtn = personalSec.querySelector('#btn-remove-photo');
    if (removeBtn) {
        removeBtn.onclick = () => {
            state.personal.photoUrl = "";
            renderPreview();
            renderEditor();
            triggerAutoSave();
        };
    }

    const resetBtn = personalSec.querySelector('#btn-reset-photo');
    if (resetBtn) {
        resetBtn.onclick = () => {
            state.personal.photoUrl = DEFAULT_PHOTO;
            renderPreview();
            renderEditor();
            triggerAutoSave();
        };
    }

    container.appendChild(personalSec);

    // 2. Professional Summary Section
    const summarySec = document.createElement('div');
    summarySec.className = 'form-section';
    summarySec.innerHTML = `
        <div class="section-header">
            <div class="section-header-left">
                <i class="fas fa-chevron-down section-toggle-icon"></i>
                <h3 class="section-title">Professional Summary</h3>
            </div>
        </div>
        <div class="section-body">
            <div class="item-fields" id="summary-fields"></div>
        </div>
    `;
    summarySec.querySelector('.section-header').onclick = () => summarySec.classList.toggle('collapsed');
    const sFields = summarySec.querySelector('#summary-fields');
    sFields.appendChild(
        createFormGroup(
            'Professional Summary', 
            state.summary, 
            (val) => handleInputChange('summary', null, null, val), 
            'textarea', 
            null, 
            true, 
            'Write a brief professional summary highlighting your key background, technical strengths, and career objectives...'
        )
    );
    container.appendChild(summarySec);

    // 3. ARRAY SECTIONS (Education, Work & Volunteering, Training, Skills, Interests, Projects)
    const arraySections = [
        { key: 'education', label: 'Education', hasLogo: true, addBtnLabel: 'Add School' },
        { 
            key: 'volunteering', 
            label: 'Work & Volunteering Experience', 
            hasLogo: true, 
            isWorkOrVolunteering: true,
            addBtnLabel: 'Add Role / Experience' 
        },
        { key: 'training', label: 'Training Courses & Certifications', hasLogo: false, addBtnLabel: 'Add Course' },
        { key: 'skills', label: 'Skills', hasLogo: false, addBtnLabel: 'Add Skill' },
        { key: 'interests', label: 'Interests', hasLogo: false, addBtnLabel: 'Add Interest' },
        { key: 'projects', label: 'Projects (Add More Projects)', hasLogo: false, addBtnLabel: 'Add Project' }
    ];

    arraySections.forEach(sec => {
        const secDiv = document.createElement('div');
        secDiv.className = 'form-section';
        secDiv.dataset.sectionId = sec.key;

        secDiv.innerHTML = `
            <div class="section-header">
                <div class="section-header-left">
                    <i class="fas fa-chevron-down section-toggle-icon"></i>
                    <h3 class="section-title">${sec.label}</h3>
                </div>
                <button type="button" class="add-item-btn">
                    <i class="fas fa-plus"></i> ${sec.addBtnLabel || 'Add'}
                </button>
            </div>
            <div class="section-body">
                ${sec.isWorkOrVolunteering ? `
                    <div class="section-heading-editor">
                        <div class="section-heading-header">
                            <label class="section-heading-label"><i class="fas fa-heading"></i> Section Heading on Resume:</label>
                            <div class="heading-presets">
                                <button type="button" class="preset-pill-btn ${(state.volunteeringTitle || 'Volunteering') === 'Volunteering' ? 'active' : ''}" data-title="Volunteering">Volunteering</button>
                                <button type="button" class="preset-pill-btn ${state.volunteeringTitle === 'Work Experience' ? 'active' : ''}" data-title="Work Experience">Work Experience</button>
                                <button type="button" class="preset-pill-btn ${state.volunteeringTitle === 'Experience' ? 'active' : ''}" data-title="Experience">Experience</button>
                                <button type="button" class="preset-pill-btn ${state.volunteeringTitle === 'Work & Volunteering' ? 'active' : ''}" data-title="Work & Volunteering">Work & Volunteering</button>
                            </div>
                        </div>
                        <input type="text" class="section-heading-input" id="volunteering-title-input" value="${state.volunteeringTitle || 'Volunteering'}" placeholder="Enter heading title for resume (e.g. Work Experience, Volunteering)">
                    </div>
                ` : ''}
                <div class="sortable-list" data-list-id="${sec.key}"></div>
            </div>
        `;

        secDiv.querySelector('.section-header').onclick = (e) => {
            if (!e.target.closest('button')) secDiv.classList.toggle('collapsed');
        };

        secDiv.querySelector('.add-item-btn').onclick = (e) => {
            e.stopPropagation();
            addItem(sec.key);
        };

        if (sec.isWorkOrVolunteering) {
            const headingInput = secDiv.querySelector('#volunteering-title-input');
            const presetPills = secDiv.querySelectorAll('.preset-pill-btn');
            if (headingInput) {
                headingInput.addEventListener('input', (e) => {
                    state.volunteeringTitle = e.target.value;
                    presetPills.forEach(btn => {
                        btn.classList.toggle('active', btn.dataset.title === state.volunteeringTitle);
                    });
                    renderPreview();
                    triggerAutoSave();
                });
            }
            presetPills.forEach(btn => {
                btn.onclick = () => {
                    state.volunteeringTitle = btn.dataset.title;
                    if (headingInput) headingInput.value = state.volunteeringTitle;
                    presetPills.forEach(b => b.classList.toggle('active', b === btn));
                    renderPreview();
                    triggerAutoSave();
                };
            });
        }

        const listDiv = secDiv.querySelector('.sortable-list');
        state[sec.key].forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'form-item draggable-item';
            // Drag initiation is restricted to handle to preserve text selection in fields
            itemDiv.dataset.itemId = item.id;

            itemDiv.innerHTML = `
                <div class="item-drag-handle" title="Drag to reorder"><i class="fas fa-grip-vertical"></i></div>
                <div class="item-fields">
                    ${sec.hasLogo ? `
                        <div class="item-logo-row">
                            <img class="item-logo-thumb" src="${item.logoUrl || ''}" style="${item.logoUrl ? '' : 'display:none;'}">
                            <button type="button" class="btn-secondary btn-upload-item-logo">
                                <i class="fas fa-image"></i> ${item.logoUrl ? 'Change Logo' : (sec.key === 'education' ? 'Upload School Logo' : 'Upload Company / Org Logo')}
                            </button>
                            ${item.logoUrl ? `
                                <button type="button" class="btn-danger-text btn-remove-item-logo">Reset Logo</button>
                            ` : ''}
                        </div>
                    ` : ''}
                </div>
                <div class="item-actions">
                    <button type="button" class="remove-item-btn" title="Delete"><i class="fas fa-trash"></i></button>
                </div>
            `;

            // Enable handle-only drag so normal text selection in inputs/textareas is never blocked
            const dragHandle = itemDiv.querySelector('.item-drag-handle');
            dragHandle.addEventListener('mousedown', () => {
                itemDiv.setAttribute('draggable', 'true');
            });
            dragHandle.addEventListener('mouseup', () => {
                itemDiv.removeAttribute('draggable');
            });

            if (sec.hasLogo) {
                const uploadLogoBtn = itemDiv.querySelector('.btn-upload-item-logo');
                if (uploadLogoBtn) {
                    uploadLogoBtn.onclick = () => {
                        openImagePicker((dataUrl) => {
                            item.logoUrl = dataUrl;
                            renderPreview();
                            renderEditor();
                            triggerAutoSave();
                        }, 240, 0.90);
                    };
                }
                const removeLogoBtn = itemDiv.querySelector('.btn-remove-item-logo');
                if (removeLogoBtn) {
                    removeLogoBtn.onclick = () => {
                        item.logoUrl = "";
                        renderPreview();
                        renderEditor();
                        triggerAutoSave();
                    };
                }
            }

            const fieldsDiv = itemDiv.querySelector('.item-fields');
            fieldConfigs[sec.key].forEach(f => {
                fieldsDiv.appendChild(
                    createFormGroup(
                        f.label, 
                        item[f.key], 
                        (val) => handleInputChange(sec.key, item.id, f.key, val), 
                        f.type,
                        (callback) => openIconPicker(item[f.key], callback),
                        f.isLargeBox || false,
                        f.placeholder || ''
                    )
                );
            });

            itemDiv.querySelector('.remove-item-btn').onclick = () => removeItem(sec.key, item.id);
            listDiv.appendChild(itemDiv);
        });

        container.appendChild(secDiv);
    });

    // 4. SIGNATURE & CERTIFICATION SECTION
    const certSec = document.createElement('div');
    certSec.className = 'form-section';
    certSec.innerHTML = `
        <div class="section-header">
            <div class="section-header-left">
                <i class="fas fa-chevron-down section-toggle-icon"></i>
                <h3 class="section-title">Signature & Certification</h3>
            </div>
        </div>
        <div class="section-body">
            <div class="photo-upload-card">
                <img id="editor-sig-thumb" class="photo-preview-thumb" alt="Signature" style="background:#ffffff; object-fit:contain; padding:4px;">
                <div class="photo-actions">
                    <button type="button" class="btn-secondary" id="btn-upload-sig">
                        <i class="fas fa-pen-nib"></i> Upload Signature Image
                    </button>
                    ${state.signature && state.signature.url ? `
                        <button type="button" class="btn-secondary" id="btn-clean-sig-bg" title="Automatically remove white paper background to make it transparent">
                            <i class="fas fa-magic"></i> Remove White Background
                        </button>
                        <button type="button" class="btn-danger-text" id="btn-remove-sig">Remove Signature</button>
                    ` : `
                        <button type="button" class="btn-danger-text" id="btn-reset-sig">Reset Default Signature</button>
                    `}
                </div>
            </div>

            <!-- Resizable & Overlap Sliders -->
            <div class="sig-controls-card">
                <div class="sig-control-row">
                    <div class="sig-control-label">
                        <span><i class="fas fa-expand-arrows-alt"></i> Signature Size:</span>
                        <strong id="sig-width-display">${(state.signature && state.signature.width) ? state.signature.width : 150}px</strong>
                    </div>
                    <div class="sig-slider-wrapper">
                        <button type="button" class="slider-btn" id="sig-width-minus" title="Decrease size"><i class="fas fa-minus"></i></button>
                        <input type="range" id="sig-width-slider" min="70" max="280" step="5" value="${(state.signature && state.signature.width) ? state.signature.width : 150}">
                        <button type="button" class="slider-btn" id="sig-width-plus" title="Increase size"><i class="fas fa-plus"></i></button>
                    </div>
                </div>
                <div class="sig-control-row" style="margin-top: 10px;">
                    <div class="sig-control-label">
                        <span><i class="fas fa-layer-group"></i> Natural Overlap into Statement:</span>
                        <strong id="sig-overlap-display">${(state.signature && state.signature.overlap !== undefined) ? Math.abs(state.signature.overlap) : 16}px</strong>
                    </div>
                    <div class="sig-slider-wrapper">
                        <input type="range" id="sig-overlap-slider" min="-32" max="0" step="1" value="${(state.signature && state.signature.overlap !== undefined) ? state.signature.overlap : -16}">
                    </div>
                </div>
                <div class="sig-overlap-presets">
                    <button type="button" class="preset-btn ${(state.signature && state.signature.overlap === -6) ? 'active' : ''}" data-overlap="-6">Subtle (-6px)</button>
                    <button type="button" class="preset-btn ${(!state.signature || state.signature.overlap === undefined || state.signature.overlap === -16) ? 'active' : ''}" data-overlap="-16">Natural (-16px)</button>
                    <button type="button" class="preset-btn ${(state.signature && state.signature.overlap === -24) ? 'active' : ''}" data-overlap="-24">Deep (-24px)</button>
                </div>
            </div>

            <div class="item-fields" id="signature-fields"></div>
        </div>
    `;

    certSec.querySelector('.section-header').onclick = (e) => {
        if (!e.target.closest('button')) certSec.classList.toggle('collapsed');
    };

    const sigThumb = certSec.querySelector('#editor-sig-thumb');
    sigThumb.src = (state.signature && state.signature.url) ? state.signature.url : DEFAULT_SIGNATURE;

    certSec.querySelector('#btn-upload-sig').onclick = () => {
        openImagePicker((dataUrl) => {
            if (!state.signature) state.signature = {};
            state.signature.url = dataUrl;
            renderPreview();
            renderEditor();
            triggerAutoSave();
        }, 450, 0.90, true); // true = auto remove white background
    };

    const cleanBgBtn = certSec.querySelector('#btn-clean-sig-bg');
    if (cleanBgBtn) {
        cleanBgBtn.onclick = () => {
            if (state.signature && state.signature.url) {
                removeWhiteBackgroundFromDataUrl(state.signature.url, (cleanedUrl) => {
                    state.signature.url = cleanedUrl;
                    renderPreview();
                    renderEditor();
                    triggerAutoSave();
                    showToast('White background removed from signature!');
                });
            }
        };
    }

    const removeSigBtn = certSec.querySelector('#btn-remove-sig');
    if (removeSigBtn) {
        removeSigBtn.onclick = () => {
            if (!state.signature) state.signature = {};
            state.signature.url = "";
            renderPreview();
            renderEditor();
            triggerAutoSave();
        };
    }

    const resetSigBtn = certSec.querySelector('#btn-reset-sig');
    if (resetSigBtn) {
        resetSigBtn.onclick = () => {
            if (!state.signature) state.signature = {};
            state.signature.url = DEFAULT_SIGNATURE;
            renderPreview();
            renderEditor();
            triggerAutoSave();
        };
    }

    // Signature Resize Controls Event Listeners
    const widthSlider = certSec.querySelector('#sig-width-slider');
    const widthDisplay = certSec.querySelector('#sig-width-display');
    const widthMinus = certSec.querySelector('#sig-width-minus');
    const widthPlus = certSec.querySelector('#sig-width-plus');

    function updateSigWidth(newWidth) {
        if (!state.signature) state.signature = {};
        state.signature.width = newWidth;
        if (widthSlider) widthSlider.value = newWidth;
        if (widthDisplay) widthDisplay.textContent = `${newWidth}px`;
        const renderedImg = document.getElementById('cv-rendered-sig');
        if (renderedImg) renderedImg.style.width = `${newWidth}px`;
        triggerAutoSave();
    }

    if (widthSlider) {
        widthSlider.addEventListener('input', (e) => {
            updateSigWidth(parseInt(e.target.value));
        });
    }
    if (widthMinus) {
        widthMinus.onclick = () => {
            const currentW = (state.signature && state.signature.width) ? state.signature.width : 150;
            updateSigWidth(Math.max(currentW - 10, 70));
        };
    }
    if (widthPlus) {
        widthPlus.onclick = () => {
            const currentW = (state.signature && state.signature.width) ? state.signature.width : 150;
            updateSigWidth(Math.min(currentW + 10, 280));
        };
    }

    const overlapSlider = certSec.querySelector('#sig-overlap-slider');
    const overlapDisplay = certSec.querySelector('#sig-overlap-display');
    const presetBtns = certSec.querySelectorAll('.sig-overlap-presets .preset-btn');

    function updateSigOverlap(newOverlap) {
        if (!state.signature) state.signature = {};
        state.signature.overlap = newOverlap;
        if (overlapSlider) overlapSlider.value = newOverlap;
        if (overlapDisplay) overlapDisplay.textContent = `${Math.abs(newOverlap)}px`;
        const renderedWrapper = document.getElementById('cv-sig-wrapper');
        if (renderedWrapper) renderedWrapper.style.marginBottom = `${newOverlap}px`;
        presetBtns.forEach(btn => {
            btn.classList.toggle('active', parseInt(btn.dataset.overlap) === newOverlap);
        });
        triggerAutoSave();
    }

    if (overlapSlider) {
        overlapSlider.addEventListener('input', (e) => {
            updateSigOverlap(parseInt(e.target.value));
        });
    }
    presetBtns.forEach(btn => {
        btn.onclick = () => {
            updateSigOverlap(parseInt(btn.dataset.overlap));
        };
    });

    const sigFields = certSec.querySelector('#signature-fields');
    sigFields.appendChild(
        createFormGroup(
            'Certification Statement', 
            state.signature ? state.signature.text : '', 
            (val) => handleInputChange('signature', null, null, val), 
            'textarea',
            null,
            false,
            'I hereby certify that all of the information\nwritten here are true and correct.'
        )
    );

    container.appendChild(certSec);

    initDragAndDrop();
}

// --- DRAG AND DROP REORDERING ---
function initDragAndDrop() {
    const draggables = document.querySelectorAll('.draggable-item');
    const lists = document.querySelectorAll('.sortable-list');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging');
        });

        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging');
            draggable.removeAttribute('draggable');
            const list = draggable.closest('.sortable-list');
            if (list) updateOrderFromDOM(list);
        });
    });

    lists.forEach(list => {
        list.addEventListener('dragover', (e) => {
            e.preventDefault();
            const afterElement = getDragAfterElement(list, e.clientY);
            const dragging = document.querySelector('.dragging');
            if (dragging && dragging.closest('.sortable-list') === list) {
                if (afterElement == null) {
                    list.appendChild(dragging);
                } else {
                    list.insertBefore(dragging, afterElement);
                }
            }
        });
    });
}

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable-item:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function updateOrderFromDOM(listElement) {
    const sectionKey = listElement.dataset.listId;
    const newOrderIds = [...listElement.querySelectorAll('.draggable-item')].map(item => item.dataset.itemId);

    const reorderedList = [];
    newOrderIds.forEach(id => {
        const found = state[sectionKey].find(i => i.id === id);
        if (found) reorderedList.push(found);
    });

    state[sectionKey] = reorderedList;
    renderPreview();
    triggerAutoSave();
}

// --- ZOOM CONTROLS ---
let currentZoom = 0.88;

function setZoom(val) {
    currentZoom = Math.min(Math.max(val, 0.4), 1.5);
    const wrapper = document.getElementById('resume-wrapper');
    const label = document.getElementById('zoom-label');
    if (wrapper) wrapper.style.transform = `scale(${currentZoom})`;
    if (label) label.textContent = `${Math.round(currentZoom * 100)}%`;
}

function autoFitZoom() {
    const panel = document.querySelector('.preview-panel');
    if (!panel) return;
    const availableWidth = panel.clientWidth - 36;
    const resumeWidthPx = 794; // ~210mm in px at 96dpi
    const targetZoom = Math.min(availableWidth / resumeWidthPx, 1.0);
    setZoom(targetZoom);
}

/**
 * Initiates the browser print dialog configured for ISO A4 export.
 */
async function startPrint() {
    if (document.fonts) {
        await document.fonts.ready;
    }
    const originalDocTitle = document.title;
    document.title = state.documentTitle || ((state.personal && state.personal.name) ? `${state.personal.name} - Resume` : 'Resume');
    window.print();
    setTimeout(() => {
        document.title = originalDocTitle;
    }, 1500);
}

/**
 * Opens a standalone distraction-free window for previewing and printing.
 */
function openPdfView() {
    const previewEl = document.getElementById('resume-preview');
    if (!previewEl) return;

    const resumeHtml = previewEl.outerHTML;
    const title = state.documentTitle || ((state.personal && state.personal.name) ? `${state.personal.name} - Resume` : 'Resume');

    const newWindow = window.open('', '_blank');
    if (!newWindow) {
        alert('Please allow popups to open the PDF preview.');
        return;
    }

    newWindow.document.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <base href="${window.location.origin + window.location.pathname}">
    <title>${title}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rubik:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="styles.css">
    <style>
        html {
            height: auto !important;
            min-height: 100% !important;
            overflow-y: scroll !important;
            overflow-x: auto !important;
        }
        body {
            margin: 0 !important;
            padding: 24px 0 100px 0 !important;
            background: #0f172a !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            box-sizing: border-box !important;
            font-family: 'Inter', sans-serif !important;
            height: auto !important;
            min-height: 100vh !important;
            overflow: visible !important;
            overflow-y: visible !important;
        }
        .pdf-viewer-bar {
            position: sticky;
            top: 16px;
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: 12px;
            background: rgba(30, 41, 59, 0.94);
            backdrop-filter: blur(8px);
            padding: 8px 18px;
            border-radius: 30px;
            border: 1px solid rgba(255, 255, 255, 0.15);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
            margin-bottom: 24px;
        }
        .pdf-viewer-title {
            color: #f8fafc;
            font-size: 13px;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 7px;
        }
        .pdf-btn-action {
            background: #2563eb;
            color: white;
            border: none;
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 500;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            transition: all 0.15s;
        }
        .pdf-btn-action:hover {
            background: #1d4ed8;
            transform: translateY(-1px);
        }
        .pdf-btn-close {
            background: rgba(255, 255, 255, 0.12);
            color: #cbd5e1;
        }
        .pdf-btn-close:hover {
            background: rgba(255, 255, 255, 0.22);
            color: white;
        }
        .pdf-page-container {
            box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6);
            display: flex;
            justify-content: center;
            margin-bottom: 60px;
            flex-shrink: 0;
        }
        @media print {
            body {
                background: white !important;
                padding: 0 !important;
                margin: 0 !important;
            }
            .pdf-viewer-bar {
                display: none !important;
            }
            .pdf-page-container {
                box-shadow: none !important;
            }
            #resume-preview {
                position: absolute !important;
                left: 0 !important;
                top: 0 !important;
                width: 210mm !important;
                height: 297mm !important;
                max-height: 297mm !important;
                margin: 0 !important;
                padding: 12mm 14mm 12mm 14mm !important;
                box-shadow: none !important;
                box-sizing: border-box !important;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                overflow: hidden !important;
                display: flex !important;
                flex-direction: column !important;
            }
            #resume-preview::before {
                display: block !important;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
            }
        }
    </style>
</head>
<body>
    <div class="pdf-viewer-bar">
        <div class="pdf-viewer-title"><i class="fas fa-file-pdf" style="color: #ef4444;"></i> ${title}</div>
        <button class="pdf-btn-action" onclick="window.print()"><i class="fas fa-print"></i> Print / Save as PDF</button>
        <button class="pdf-btn-action pdf-btn-close" onclick="window.close()"><i class="fas fa-times"></i> Close</button>
    </div>
    <div class="pdf-page-container">
        ${resumeHtml}
    </div>
</body>
</html>`);
    newWindow.document.close();
}

/**
 * Event listeners and controller bindings.
 */
function setupControls() {
    const zoomIn = document.getElementById('zoom-in-btn');
    const zoomOut = document.getElementById('zoom-out-btn');
    const zoomFit = document.getElementById('zoom-fit-btn');
    const exportBtn = document.getElementById('export-pdf-btn');
    const openPdfBtn = document.getElementById('open-pdf-btn');
    const saveStorageBtn = document.getElementById('save-storage-btn');
    const resetDefaultBtn = document.getElementById('reset-default-btn');
    const exportJsonBtn = document.getElementById('export-json-btn');
    const cardExportJson = document.getElementById('card-export-json');

    // Document Title Input
    const docTitleInput = document.getElementById('document-title-input');
    if (docTitleInput) {
        docTitleInput.addEventListener('input', (e) => {
            state.documentTitle = e.target.value;
            setSaveStatus(false);
            triggerAutoSave();
        });
        docTitleInput.addEventListener('change', (e) => {
            state.documentTitle = e.target.value;
            updateDocumentTitleUI();
            saveToLocalStorage(false);
        });
    }

    // Actions Modal Controls
    const actionsModal = document.getElementById('resume-actions-modal');
    const actionsModalOpenBtn = document.getElementById('actions-modal-open-btn');
    const actionsModalClose = document.getElementById('actions-modal-close');
    const actionsModalCancel = document.getElementById('actions-modal-cancel');

    function openActionsModal() {
        if (actionsModal) actionsModal.style.display = 'flex';
    }
    function closeActionsModal() {
        if (actionsModal) actionsModal.style.display = 'none';
    }

    if (actionsModalOpenBtn) actionsModalOpenBtn.onclick = openActionsModal;
    if (actionsModalClose) actionsModalClose.onclick = closeActionsModal;
    if (actionsModalCancel) actionsModalCancel.onclick = closeActionsModal;
    if (actionsModal) {
        actionsModal.onclick = (e) => {
            if (e.target === actionsModal) closeActionsModal();
        };
    }

    // Open Document & Library Modal Controls
    const openDocModal = document.getElementById('open-document-modal');
    const openDocModalClose = document.getElementById('open-doc-modal-close');
    const openDocModalCancel = document.getElementById('open-doc-modal-cancel');

    function openDocumentModal(tab = 'saved') {
        if (openDocModal) {
            openDocModal.style.display = 'flex';
            switchOpenDocTab(tab);
        }
    }
    function closeOpenDocumentModal() {
        if (openDocModal) openDocModal.style.display = 'none';
    }

    function switchOpenDocTab(tab) {
        const btnSaved = document.getElementById('tab-btn-saved');
        const btnImport = document.getElementById('tab-btn-import');
        const btnPdf = document.getElementById('tab-btn-preview-pdf');
        const panelSaved = document.getElementById('panel-saved-docs');
        const panelImport = document.getElementById('panel-import-file');
        const panelPdf = document.getElementById('panel-preview-pdf');

        if (btnSaved) btnSaved.classList.toggle('active', tab === 'saved');
        if (btnImport) btnImport.classList.toggle('active', tab === 'import');
        if (btnPdf) btnPdf.classList.toggle('active', tab === 'pdf');

        if (panelSaved) panelSaved.style.display = (tab === 'saved') ? 'block' : 'none';
        if (panelImport) panelImport.style.display = (tab === 'import') ? 'block' : 'none';
        if (panelPdf) panelPdf.style.display = (tab === 'pdf') ? 'block' : 'none';

        if (tab === 'saved') {
            const searchInput = document.getElementById('saved-docs-search');
            renderSavedDocsList(searchInput ? searchInput.value : '');
        }
    }

    const btnTabSaved = document.getElementById('tab-btn-saved');
    const btnTabImport = document.getElementById('tab-btn-import');
    const btnTabPdf = document.getElementById('tab-btn-preview-pdf');
    if (btnTabSaved) btnTabSaved.onclick = () => switchOpenDocTab('saved');
    if (btnTabImport) btnTabImport.onclick = () => switchOpenDocTab('import');
    if (btnTabPdf) btnTabPdf.onclick = () => switchOpenDocTab('pdf');

    const saveNewCopyBtn = document.getElementById('save-new-copy-btn');
    if (saveNewCopyBtn) saveNewCopyBtn.onclick = saveCurrentAsNewCopy;

    const savedDocsSearch = document.getElementById('saved-docs-search');
    if (savedDocsSearch) {
        savedDocsSearch.addEventListener('input', (e) => {
            renderSavedDocsList(e.target.value);
        });
    }

    const importBrowseBtn = document.getElementById('import-browse-btn');
    const importFileInput = document.getElementById('import-file-input');
    const importDropzone = document.getElementById('import-dropzone');

    if (importBrowseBtn && importFileInput) {
        importBrowseBtn.onclick = () => importFileInput.click();
    }
    if (importFileInput) {
        importFileInput.onchange = (e) => {
            const file = e.target.files && e.target.files[0];
            if (!file) return;
            if (file.name.toLowerCase().endsWith('.pdf')) {
                openLocalPdfFile(file);
            } else {
                importResumeFromJsonFile(file);
            }
            importFileInput.value = '';
        };
    }
    if (importDropzone) {
        ['dragenter', 'dragover'].forEach(eventName => {
            importDropzone.addEventListener(eventName, (e) => {
                e.preventDefault();
                e.stopPropagation();
                importDropzone.classList.add('drag-over');
            });
        });
        ['dragleave', 'drop'].forEach(eventName => {
            importDropzone.addEventListener(eventName, (e) => {
                e.preventDefault();
                e.stopPropagation();
                importDropzone.classList.remove('drag-over');
            });
        });
        importDropzone.addEventListener('drop', (e) => {
            const file = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
            if (!file) return;
            if (file.name.toLowerCase().endsWith('.pdf')) {
                openLocalPdfFile(file);
            } else {
                importResumeFromJsonFile(file);
            }
        });
    }

    const openStandalonePdfBtn = document.getElementById('open-standalone-pdf-window-btn');
    if (openStandalonePdfBtn) {
        openStandalonePdfBtn.onclick = () => {
            closeOpenDocumentModal();
            openPdfView();
        };
    }

    if (openDocModalClose) openDocModalClose.onclick = closeOpenDocumentModal;
    if (openDocModalCancel) openDocModalCancel.onclick = closeOpenDocumentModal;
    if (openDocModal) {
        openDocModal.onclick = (e) => {
            if (e.target === openDocModal) closeOpenDocumentModal();
        };
    }

    // Zoom Controls
    if (zoomIn) zoomIn.onclick = () => setZoom(currentZoom + 0.05);
    if (zoomOut) zoomOut.onclick = () => setZoom(currentZoom - 0.05);
    if (zoomFit) zoomFit.onclick = () => autoFitZoom();
    
    // Save to Storage
    if (saveStorageBtn) {
        saveStorageBtn.onclick = () => {
            closeActionsModal();
            saveToLocalStorage(true);
        };
    }

    // Open Resume / PDF
    if (openPdfBtn) {
        openPdfBtn.onclick = () => {
            closeActionsModal();
            openDocumentModal('saved');
        };
    }

    // Export Project Backup (.json)
    if (exportJsonBtn) {
        exportJsonBtn.onclick = () => {
            closeActionsModal();
            exportResumeFile();
        };
    }

    // Reset Default
    if (resetDefaultBtn) {
        resetDefaultBtn.onclick = () => {
            closeActionsModal();
            showResetModal();
        };
    }

    // Reset Confirmation Modal Events
    const resetModalClose = document.getElementById('reset-modal-close');
    const resetModalCancel = document.getElementById('reset-modal-cancel');
    const resetModalConfirmBlank = document.getElementById('reset-modal-confirm-blank');
    const resetModalRestoreTemplate = document.getElementById('reset-modal-restore-template');
    const resetModal = document.getElementById('reset-confirm-modal');

    if (resetModalClose) resetModalClose.onclick = closeResetModal;
    if (resetModalCancel) resetModalCancel.onclick = closeResetModal;
    if (resetModalConfirmBlank) resetModalConfirmBlank.onclick = executeResetToBlank;
    if (resetModalRestoreTemplate) resetModalRestoreTemplate.onclick = executeRestoreTemplate;
    if (resetModal) {
        resetModal.onclick = (e) => {
            if (e.target === resetModal) closeResetModal();
        };
    }

    // PDF Export with Print Guide Modal
    const guideModal = document.getElementById('pdf-guide-modal');
    const guideClose = document.getElementById('pdf-guide-close');
    const guideCancel = document.getElementById('pdf-guide-cancel');
    const guideProceed = document.getElementById('pdf-guide-proceed');

    if (exportBtn && guideModal) {
        exportBtn.onclick = () => {
            closeActionsModal();
            guideModal.style.display = 'flex';
        };
    }

    // Action Cards event delegation
    const cardSave = document.getElementById('card-save-storage');
    const cardOpenPdf = document.getElementById('card-open-pdf');
    const cardExportPdf = document.getElementById('card-export-pdf');
    const cardReset = document.getElementById('card-reset-default');

    if (cardSave) {
        cardSave.onclick = (e) => {
            if (e.target.closest('button')) return;
            closeActionsModal();
            saveToLocalStorage(true);
        };
    }
    if (cardOpenPdf) {
        cardOpenPdf.onclick = (e) => {
            if (e.target.closest('button')) return;
            closeActionsModal();
            openDocumentModal('saved');
        };
    }
    if (cardExportPdf) {
        cardExportPdf.onclick = (e) => {
            if (e.target.closest('button')) return;
            closeActionsModal();
            if (guideModal) guideModal.style.display = 'flex';
        };
    }
    if (cardExportJson) {
        cardExportJson.onclick = (e) => {
            if (e.target.closest('button')) return;
            closeActionsModal();
            exportResumeFile();
        };
    }
    if (cardReset) {
        cardReset.onclick = (e) => {
            if (e.target.closest('button')) return;
            closeActionsModal();
            showResetModal();
        };
    }
    if (guideClose) guideClose.onclick = () => { guideModal.style.display = 'none'; };
    if (guideCancel) guideCancel.onclick = () => { guideModal.style.display = 'none'; };
    if (guideProceed) {
        guideProceed.onclick = () => {
            guideModal.style.display = 'none';
            setTimeout(() => {
                startPrint();
            }, 100);
        };
    }

    // Icon Selection Modal
    const iconModal = document.getElementById('icon-picker-modal');
    const iconClose = document.getElementById('modal-close-btn');
    const iconSearch = document.getElementById('icon-search-input');

    if (iconClose) iconClose.onclick = closeIconPicker;
    if (iconModal) {
        iconModal.onclick = (e) => {
            if (e.target === iconModal) closeIconPicker();
        };
    }
    if (iconSearch) {
        iconSearch.addEventListener('input', (e) => {
            renderIconGrid(e.target.value);
        });
    }

    window.addEventListener('resize', () => {
        // Keeps canvas layout responsive
    });
}

// Application bootstrap
setupControls();
autoFitZoom();
loadSavedData();

