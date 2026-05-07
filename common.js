// MATRIX BACKGROUND
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const chars = 'CYBER TECH TEAM010101010HACK█▓▒░';
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function matrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00ff41';
    ctx.font = fontSize + 'px Share Tech Mono';
    for(let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    }
}
setInterval(matrix, 33);

// CODE RAIN
const codeCanvas = document.getElementById('code-rain');
const codeCtx = codeCanvas.getContext('2d');
codeCanvas.width = window.innerWidth;
codeCanvas.height = window.innerHeight;
const codeLines = [
    'function hack() { return access_granted; }',
    'if (firewall.bypassed) { exploit(); }',
    'const target = "192.168.1.1";',
    'ssh root@target -p 22',
    'SELECT * FROM users WHERE admin=1;',
    'nmap -sS -sV -A target.com',
    'hydra -l admin -P rockyou.txt ssh://target',
    'msfconsole -q -x "use exploit/multi/handler"',
    'ACCESS_GRANTED',
    'ROOTKIT_INSTALLED'
];
const codeDrops = [];

for(let i = 0; i < 15; i++) {
    codeDrops.push({
        x: Math.random() * codeCanvas.width,
        y: Math.random() * codeCanvas.height,
        text: codeLines[Math.floor(Math.random() * codeLines.length)],
        speed: Math.random() * 2 + 0.5
    });
}

function codeRain() {
    codeCtx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    codeCtx.fillRect(0, 0, codeCanvas.width, codeCanvas.height);
    codeCtx.fillStyle = '#00ff41';
    codeCtx.font = '12px Share Tech Mono';
    codeCtx.shadowBlur = 5;
    codeCtx.shadowColor = '#00ff41';
    
    codeDrops.forEach(drop => {
        codeCtx.fillText(drop.text, drop.x, drop.y);
        drop.y += drop.speed;
        if(drop.y > codeCanvas.height) {
            drop.y = -20;
            drop.x = Math.random() * codeCanvas.width;
            drop.text = codeLines[Math.floor(Math.random() * codeLines.length)];
        }
    });
}
setInterval(codeRain, 50);

// SOUND
const keySound = document.getElementById('key');
const beepSound = document.getElementById('beep');
function playKey() { if(keySound) { keySound.currentTime = 0; keySound.play().catch(e=>{}); } }
function playBeep() { if(beepSound) { beepSound.currentTime = 0; beepSound.play().catch(e=>{}); } }

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    codeCanvas.width = window.innerWidth;
    codeCanvas.height = window.innerHeight;
});