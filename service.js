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
    'while(true) { exploit(); }',
    'sudo rm -rf / --no-preserve-root',
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

// WHATSAPP AUTO MESSAGE
function sendWhatsApp() {
    playBeep();
    const number = '255611378027';
    const message = encodeURIComponent('Niaje mkuu CYBER TECH TEAM, Nifundishe kutengeneza website kwa $2.5. Nimekubali kujiunga na kozi.');
    window.open(`https://wa.me/${number}?text=${message}`, '_blank');
}

// LOAD SERVICE CONTENT
document.getElementById('service-body').innerHTML = `
    <h3 class="cyan">> AVAILABLE SERVICES | HUDUMA ZILIZOPO</h3>
    <p class="yellow">> Contact via secure channels only | Wasiliana kwa njia salama tu</p>

    <div class="app-card" style="display:flex;gap:15px;align-items:center;">
        <div style="flex:1;">
            <svg width="80" height="80" viewBox="0 0 100 100">
                <defs>
                    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#00ff41;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#00ffff;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <rect x="10" y="10" width="80" height="80" fill="none" stroke="url(#logoGrad)" stroke-width="3"/>
                <text x="50" y="40" font-family="monospace" font-size="20" fill="url(#logoGrad)" text-anchor="middle">CT</text>
                <text x="50" y="60" font-family="monospace" font-size="12" fill="url(#logoGrad)" text-anchor="middle">TEAM</text>
                <polyline points="20,75 50,65 80,75" fill="none" stroke="url(#logoGrad)" stroke-width="2"/>
            </svg>
        </div>
        <div style="flex:3;">
            <h3>[00] LEARN TO BUILD YOUR WEBSITE | JIFUNZE KUTENGENEZA WEBSITE</h3>
            <p>Build your website with simple code | Tengeneza website yako kwa code rahisi</p>
            <p>HTML, CSS, JS - Fast Course | Kozi ya haraka</p>
            <p>Project-based | Support 24/7 | Mradi kwa mradi | Msaada masaa 24</p>
            <p>Price | Bei: <span class="green" style="font-size:22px;text-shadow:0 0 10px #00ff41;">$2.5</span></p>
            <button class="btn" onclick="sendWhatsApp()">[ JOIN NOW | JIUNGE SASA ]</button>
        </div>
    </div>
`;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    codeCanvas.width = window.innerWidth;
    codeCanvas.height = window.innerHeight;
});