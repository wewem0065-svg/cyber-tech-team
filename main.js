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

// BOOT SEQUENCE
const bootLog = document.getElementById('boot-log');
const bootLines = [
    '[0.000000] Linux version 6.6.6-cybertech (root@cybertech) (gcc version 13.2.0)',
    '[0.001234] Command line: BOOT_IMAGE=/boot/vmlinuz root=/dev/sda1 rw quiet splash',
    '[ OK ] Started Network Manager',
    '[ OK ] Reached target Network',
    '[ OK ] Started Firewall Daemon [iptables]',
    '[ OK ] Activated VPN [Tanzania - DAR_ES_SALAAM]',
    '[ OK ] Started TOR Service on port 9050',
    '[ OK ] Mounted /dev/hack_tools',
    '[ OK ] Mounted /dev/premium_apps',
    '[ OK ] Mounted /dev/classified',
    '[ OK ] Started SSH Server on port 22 [ENCRYPTED]',
    '[ OK ] Loaded CYBER TECH TEAM kernel modules',
    '[ OK ] Reached target Graphical Interface',
    '[ OK ] Started Cyber Division Service',
    '[ OK ] Encryption: AES-256-GCM [ACTIVE]',
    '[ WARNING ] Trace protection: ENABLED',
    '',
    'CYBER TECH TEAM DARKNET OS v4.0 [UNAUTHORIZED ACCESS DETECTED]',
    'System ready. Root access granted.',
    ''
];

let bootIndex = 0;
function boot() {
    if(bootIndex < bootLines.length) {
        bootLog.textContent += bootLines[bootIndex] + '\n';
        bootIndex++;
        playKey();
        setTimeout(boot, Math.random() * 120 + 40);
    } else {
        const bootDiv = document.getElementById('boot-complete');
        bootDiv.classList.remove('hidden');
        bootDiv.innerHTML = '<button class="btn" id="continue-btn">[ INITIATE MAINFRAME ACCESS ]</button>';
        setTimeout(() => continueToLogin(), 3000);
        document.getElementById('continue-btn').addEventListener('click', continueToLogin);
        document.addEventListener('keydown', (e) => { if(e.key === 'Enter') continueToLogin(); });
    }
}

function continueToLogin() {
    playBeep();
    document.getElementById('boot').classList.add('hidden');
    document.getElementById('login').classList.remove('hidden');
    login();
}

// LOGIN
function login() {
    const user = document.getElementById('user');
    const pass = document.getElementById('pass');
    const passRow = document.getElementById('pass-row');
    let i = 0;
    const username = 'root';
    const password = '********';

    function typeUser() {
        if(i < username.length) {
            user.textContent += username[i++];
            playKey();
            setTimeout(typeUser, 100);
        } else {
            setTimeout(() => {
                passRow.classList.remove('hidden');
                i = 0;
                typePass();
            }, 300);
        }
    }

    function typePass() {
        if(i < password.length) {
            pass.textContent += password[i++];
            playKey();
            setTimeout(typePass, 80);
        } else {
            setTimeout(() => {
                document.getElementById('granted').classList.remove('hidden');
                playBeep();
                setTimeout(() => {
                    document.getElementById('loading').classList.remove('hidden');
                    let dots = 0;
                    const dotInterval = setInterval(() => {
                        document.getElementById('dots').textContent = '.'.repeat(dots % 4);
                        dots++;
                    }, 300);
                    setTimeout(() => {
                        clearInterval(dotInterval);
                        document.getElementById('login').classList.add('hidden');
                        document.getElementById('main').classList.remove('hidden');
                        initMain();
                    }, 2000);
                }, 500);
            }, 300);
        }
    }
    typeUser();
}

// MAIN DASHBOARD
function initMain() {
    let seconds = 0;
    setInterval(() => {
        seconds++;
        const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const s = String(seconds % 60).padStart(2, '0');
        document.getElementById('uptime').textContent = `${h}:${m}:${s}`;
        document.getElementById('cpu').textContent = Math.floor(Math.random() * 30 + 10) + '%';
    }, 1000);

    const cmd = document.getElementById('cmd');
    const commands = [
        'nmap -sS -sV -O 192.168.1.0/24',
        'hydra -l admin -P /usr/share/wordlists/rockyou.txt ssh://target',
        'sqlmap -u "http://target.com/page?id=1" --dbs --batch',
        'msfconsole -q -x "use exploit/multi/handler"',
        'aircrack-ng -w wordlist.txt -b 00:11:22:33:44:55 capture.cap',
        'john --wordlist=rockyou.txt hashes.txt',
        'hashcat -m 0 -a 0 hash.txt rockyou.txt'
    ];
    let cmdIndex = 0, charIndex = 0;
    function typeCmd() {
        if(charIndex < commands[cmdIndex].length) {
            cmd.textContent += commands[cmdIndex][charIndex++];
            playKey();
            setTimeout(typeCmd, 40);
        } else {
            setTimeout(() => {
                cmd.textContent = '';
                charIndex = 0;
                cmdIndex = (cmdIndex + 1) % commands.length;
                typeCmd();
            }, 2000);
        }
    }
    typeCmd();
}

window.onload = () => setTimeout(boot, 500);
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    codeCanvas.width = window.innerWidth;
    codeCanvas.height = window.innerHeight;
});