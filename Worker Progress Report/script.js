// Clean Data Object representing the form state
const formState = {
    claimNumber: "20042047",
    workerName: "abc",
    appId: "712041",
    
    // Page 1 Data
    rtwStatus: "not-returned", // options: "not-missed", "not-returned", "returned"
    rtwDate: "23 march 2026",
    workingStatus: "mod-red", // options: "full-reg", "full-red", "mod-reg", "mod-red", "other"
    workingOther: "",
    rtwGoing: "Terrible. Testing Testing",
    expectRtwDate: "",
    rtwConcerns: "",
    contactName: "",
    contactDate: "",
    recoveryStatus: "not-fully", // options: "not-fully", "fully"
    recoveryComments: "",

    // Page 2 Data
    painLevel: null, // 1 to 10
    medTreatment: null,
    medProviderType: "",
    lastMedDate: "",
    lastMedName: "",
    nextMedDate: "",
    nextMedName: "",
    chiroFreq: "",
    medication: null,
    medicationName: "",
    exercises: null,
    exercisesList: "",
    additionalInfo: "sagzgNo info Testing Testing"
};

// Returns current date in format matching document: Month DD, YYYY HH:MM
function getCurrentTimestamp() {
    const now = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const month = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    
    return `${month} ${date}, ${year} ${hours}:${minutes}`;
}

// Populates HTML elements with data from the state object
function populateForm() {
    // Top Level Info
    document.getElementById('claim-number').textContent = formState.claimNumber;
    document.getElementById('worker-name').textContent = formState.workerName;
    
    // Fill text inputs
    const textMap = {
        'rtw-date': formState.rtwDate,
        'working-other': formState.workingOther,
        'expect-rtw-date': formState.expectRtwDate,
        'contact-name': formState.contactName,
        'contact-date': formState.contactDate,
        'med-provider-type': formState.medProviderType,
        'last-med-date': formState.lastMedDate,
        'last-med-name': formState.lastMedName,
        'next-med-date': formState.nextMedDate,
        'next-med-name': formState.nextMedName,
        'chiro-freq': formState.chiroFreq,
        'medication-name': formState.medicationName
    };
    
    for (const [id, value] of Object.entries(textMap)) {
        if (value) {
            document.getElementById(id).value = value;
        }
    }

    // Fill Text Areas (divs formatted as text areas)
    const areaMap = {
        'rtw-going': formState.rtwGoing,
        'rtw-concerns': formState.rtwConcerns,
        'recovery-comments': formState.recoveryComments,
        'exercises-list': formState.exercisesList,
        'additional-info': formState.additionalInfo
    };

    for (const [id, value] of Object.entries(areaMap)) {
        if (value) {
            const el = document.getElementById(id);
            el.innerHTML = `<span class="blue-text">${value}</span>`;
        }
    }

    // Handle Radio Buttons dynamically based on state
    if (formState.rtwStatus) {
        document.querySelector(`input[name="rtw-status"][value="${formState.rtwStatus}"]`).checked = true;
    }
    if (formState.workingStatus) {
        document.querySelector(`input[name="working-status"][value="${formState.workingStatus}"]`).checked = true;
    }
    if (formState.recoveryStatus) {
        document.querySelector(`input[name="recovery-status"][value="${formState.recoveryStatus}"]`).checked = true;
    }
    if (formState.painLevel) {
        document.querySelector(`input[name="pain"][value="${formState.painLevel}"]`).checked = true;
    }
    if (formState.medTreatment) {
        document.querySelector(`input[name="med-treatment"][value="${formState.medTreatment}"]`).checked = true;
    }
    if (formState.medication) {
        document.querySelector(`input[name="medication"][value="${formState.medication}"]`).checked = true;
    }
    if (formState.exercises) {
        document.querySelector(`input[name="exercises"][value="${formState.exercises}"]`).checked = true;
    }
}

// Configures footers across all pages
function setupFooters() {
    const timestamp = getCurrentTimestamp();
    const pages = document.querySelectorAll('.page-container');
    const totalPages = pages.length;
    
    pages.forEach((page, index) => {
        // Set App ID
        const appIdEl = page.querySelector('.app-id');
        if (appIdEl) appIdEl.textContent = formState.appId;
        
        // Set Date
        const timeEl = page.querySelector('.submit-time');
        if (timeEl) timeEl.textContent = timestamp;
        
        // Set Page Number automatically
        const pageNumEl = page.querySelector('.page-number');
        if (pageNumEl) pageNumEl.textContent = `Page ${index + 1} of ${totalPages}`;
    });
}

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    populateForm();
    setupFooters();
});