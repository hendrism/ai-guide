/* global journeyData */
/* exported previousDay, nextDay */

// State management
let currentDay = 0;
let completedTasks = JSON.parse(localStorage.getItem('aiJourneyTasks')) || {};
let userGoal = localStorage.getItem('userGoal') || '';
let primaryTool = localStorage.getItem('primaryTool') || '';
let challenge = localStorage.getItem('challenge') || '';

// Initialize the page
function init() {
currentDay = parseInt(localStorage.getItem('currentDay')) || 0;
updateDisplay();
setupEventListeners();
registerServiceWorker();
}

// Update the entire display
function updateDisplay() {
updateProgress();
updateDayContent();
updateNavigation();
updateGoalDisplay();
}

// Update progress bar and dots
function updateProgress() {
const totalDays = journeyData.length;
const progress = ((currentDay + 1) / totalDays) * 100;

document.getElementById('progress-fill').style.width = progress + '%';
document.getElementById('progress-text').textContent = `${currentDay + 1} of ${totalDays}`;

// Update day dots
const dotsContainer = document.getElementById('day-dots');
dotsContainer.innerHTML = '';

journeyData.forEach((day, index) => {
    const dot = document.createElement('button');
    dot.className = 'day-dot';
    dot.textContent = index;
    dot.onclick = () => goToDay(index);
    
    if (index === currentDay) {
        dot.classList.add('current');
    } else if (index < currentDay) {
        dot.classList.add('completed');
    } else {
        dot.classList.add('upcoming');
    }
    
    dotsContainer.appendChild(dot);
});
}

// Update day content
function updateDayContent() {
const day = journeyData[currentDay];

document.getElementById('day-title').textContent = 
    (currentDay === 0 ? "Before You Start: " : `Day ${currentDay}: `) + day.title;
document.getElementById('day-duration').textContent = `⏱️ ${day.duration}`;
document.getElementById('day-description').textContent = day.description;

// Show/hide tasks section
const tasksSection = document.getElementById('tasks-section');
if (day.tasks) {
    tasksSection.style.display = 'block';
    updateTaskList();
} else {
    tasksSection.style.display = 'none';
}

// Update content
document.getElementById('content-section').innerHTML = day.content;

// Re-attach event listeners for radio buttons
setupContentEventListeners();
}

// Update task list
function updateTaskList() {
const day = journeyData[currentDay];
if (!day.tasks) return;

const taskList = document.getElementById('task-list');
taskList.innerHTML = '';

day.tasks.forEach((task, index) => {
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.onclick = () => toggleTask(currentDay, index);
    
    const checkbox = document.createElement('div');
    checkbox.className = 'task-checkbox';
    if (isTaskCompleted(currentDay, index)) {
        checkbox.classList.add('completed');
        checkbox.innerHTML = '✓';
    }
    
    const text = document.createElement('span');
    text.className = 'task-text';
    text.textContent = task;
    if (isTaskCompleted(currentDay, index)) {
        text.classList.add('completed');
    }
    
    taskItem.appendChild(checkbox);
    taskItem.appendChild(text);
    taskList.appendChild(taskItem);
});

updateTaskProgress();
}

// Update task progress
function updateTaskProgress() {
const day = journeyData[currentDay];
if (!day.tasks) return;

const totalTasks = day.tasks.length;
const completedCount = day.tasks.filter((_, index) => 
    isTaskCompleted(currentDay, index)
).length;
const progress = Math.round((completedCount / totalTasks) * 100);

document.getElementById('task-progress').textContent = `Progress: ${progress}% complete`;
}

// Update navigation
function updateNavigation() {
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const completion = document.getElementById('completion-status');

prevBtn.disabled = currentDay === 0;
nextBtn.disabled = currentDay === journeyData.length - 1;

if (currentDay === journeyData.length - 1) {
    completion.innerHTML = '<div style="background-color: #dcfce7; color: #166534; padding: 0.5rem 1rem; border-radius: 6px; font-weight: 500;">🎉 Journey Complete!</div>';
} else {
    completion.textContent = `${journeyData.length - currentDay - 1} days remaining`;
}
}

// Update goal display
function updateGoalDisplay() {
const goalElement = document.getElementById('selected-goal');
goalElement.textContent = userGoal || 'Not set yet';

const goalStatus = document.getElementById('goal-status');
if (userGoal && currentDay === 0) {
    goalStatus.style.display = 'inline';
} else {
    goalStatus.style.display = 'none';
}
}

// Setup event listeners
function setupEventListeners() {
const issueBtn = document.getElementById('issue-btn');
const ideasBtn = document.getElementById('ideas-btn');
const closeModal = document.getElementById('close-issue-modal');
const submitBtn = document.getElementById('submit-issue');

issueBtn.addEventListener('click', openIssueModal);
ideasBtn.addEventListener('click', () => {
    document.getElementById('issue-title').value = 'More ideas request';
    openIssueModal();
});
closeModal.addEventListener('click', closeIssueModal);
submitBtn.addEventListener('click', submitIssue);
}

// Setup event listeners for content (radio buttons, etc.)
function setupContentEventListeners() {
// Goal selection
const goalInputs = document.querySelectorAll('input[name="goal"]');
goalInputs.forEach(input => {
    if (input.value === userGoal) {
        input.checked = true;
    }
    input.addEventListener('change', function() {
        userGoal = this.value;
        localStorage.setItem('userGoal', userGoal);
        updateGoalDisplay();
    });
});

// Primary tool selection
const toolInputs = document.querySelectorAll('input[name="primaryTool"]');
toolInputs.forEach(input => {
    if (input.value === primaryTool) {
        input.checked = true;
    }
    input.addEventListener('change', function() {
        primaryTool = this.value;
        localStorage.setItem('primaryTool', primaryTool);
    });
});

// Challenge selection
const challengeInputs = document.querySelectorAll('input[name="challenge"]');
challengeInputs.forEach(input => {
    if (input.value === challenge) {
        input.checked = true;
    }
    input.addEventListener('change', function() {
        challenge = this.value;
        localStorage.setItem('challenge', challenge);
    });
});
}

// Task management
function toggleTask(dayIndex, taskIndex) {
const key = `${dayIndex}-${taskIndex}`;
completedTasks[key] = !completedTasks[key];
localStorage.setItem('aiJourneyTasks', JSON.stringify(completedTasks));
updateTaskList();
}

function isTaskCompleted(dayIndex, taskIndex) {
return completedTasks[`${dayIndex}-${taskIndex}`] || false;
}

// Navigation functions
function previousDay() {
if (currentDay > 0) {
    currentDay--;
    localStorage.setItem('currentDay', currentDay);
    updateDisplay();
}
}

function nextDay() {
if (currentDay < journeyData.length - 1) {
    currentDay++;
    localStorage.setItem('currentDay', currentDay);
    updateDisplay();
}
}

function goToDay(dayIndex) {
currentDay = dayIndex;
localStorage.setItem('currentDay', currentDay);
updateDisplay();
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', init);

// Issue modal
function openIssueModal() {
document.getElementById('issue-modal').classList.remove('hidden');
}

function closeIssueModal() {
document.getElementById('issue-modal').classList.add('hidden');
}

function submitIssue() {
const title = document.getElementById('issue-title').value;
const body = document.getElementById('issue-body').value;
const tokenField = document.getElementById('issue-token');
const token = tokenField.value || localStorage.getItem('githubToken');

if (!token) {
    alert('GitHub token required.');
    return;
}

localStorage.setItem('githubToken', token);

fetch('https://api.github.com/repos/hendrism/ai-guide/issues', {
    method: 'POST',
    headers: {
        'Accept': 'application/vnd.github+json',
        'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ title, body })
}).then(res => {
    if (res.ok) {
        alert('Issue submitted!');
        closeIssueModal();
        document.getElementById('issue-title').value = '';
        document.getElementById('issue-body').value = '';
        tokenField.value = '';
    } else {
        alert('Submission failed.');
    }
}).catch(() => alert('Submission failed.'));
}

// Service worker
function registerServiceWorker() {
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').then(reg => {
        if (reg.waiting) {
            showUpdateBanner(reg);
        }

        reg.addEventListener('updatefound', () => {
            const newWorker = reg.installing;
            newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                    showUpdateBanner(reg);
                }
            });
        });
    });

    let refreshing;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (refreshing) return;
        window.location.reload();
        refreshing = true;
    });
}
}

function showUpdateBanner(reg) {
const banner = document.getElementById('update-banner');
banner.style.display = 'flex';
document.getElementById('reload-btn').onclick = () => {
    reg.waiting.postMessage({ type: 'SKIP_WAITING' });
};
}
